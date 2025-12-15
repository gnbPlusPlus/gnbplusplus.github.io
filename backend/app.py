import os
import traceback
from bson import ObjectId
from flask import Flask, jsonify, request
from flask_cors import CORS
from backend.utils.sorting import mergeSort
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime, timezone
from math import atan2, radians, cos, sin, sqrt

# Resource used for setup: https://codingcampus.net/how-to-run-flask-in-visual-studio-code/
# Resource used for jsonify: https://www.geeksforgeeks.org/python/use-jsonify-instead-of-json-dumps-in-flask/ 

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Create MongoDB client and connect to database...certain parts obscured for security purposes
    app.mongo_client = create_mongo_client()

    @app.errorhandler(Exception)
    def handle_exception(e):
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

    # Test message for Render
    @app.route("/")
    def home():
        return {"message": "Backend running as expected and planned!"}

    # Retrieve all pets from the database for Home page
    @app.route('/api/pets')
    def get_pets():
        pets = list(app.pets.find({}))

        pets = [process_pet(pet) for pet in pets]

        return jsonify(pets)

    # Retrieve an individual pet when its card is clicked, PetDetails page
    @app.route('/api/pets/<pet_id>')
    def get_pet(pet_id):
        pets = app.pets.find_one({"_id": ObjectId(pet_id)})
        
        pet = process_pet(pets) if pets else None

        return jsonify(pet) if pet else ("Pet not found!", 404)

    # Sort pets based on days waiting for adoption
    @app.route("/api/pets/sort", methods=["GET"])
    def sort_pets():
        order = request.args.get("order", "asc")  # Default to ascending if not provided
        reverse = (order == "desc")

        # Use cursor to fetch all pets from the database
        pets_cursor = app.pets.find({})
        pets = [process_pet(pet) for pet in pets_cursor]

        sorted_pets = mergeSort(pets, reverse=reverse)
        return jsonify(sorted_pets)

    return app

def create_mongo_client():
    # Create MongoDB client and connect to database...obscured for security purposes

    # Send a ping to confirm successful connection to database
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    return client

# Latitude and longitude of Atlanta, GA for demo purposes, along with Earth's radius
USER_LAT = 33.753746
USER_LON = -84.386330
EARTH_RADIUS_MILES = 3958.8

# Function to process pet data in a frontend-friendly way
def process_pet(pet):
    try:
        pet["_id"] = str(pet["_id"])

        # Determine age range of pet for filter options
        if "age" in pet:
            age = pet.get("age")
            if age <= 1:
                pet["ageRange"] = "0-1 years"
            elif 2 <= age <= 5:
                pet["ageRange"] = "2-5 years"
            elif 6 <= age <= 9:
                pet["ageRange"] = "6-9 years"
            elif age >= 10:
                pet["ageRange"] = "10+ years"

        # Calculate distance between mock user and pet coordinates using Haversine formula
        # Resource used: https://www.pythontutorials.net/blog/haversine-formula-in-python-bearing-and-distance-between-two-gps-points/
        location = pet.get("location", {})
        if location:
            pet_lat = location.get("lat")
            pet_lon = location.get("lon")

            # Convert latitude and longitude values from degrees to radians
            user_lat_rad = radians(USER_LAT)
            user_lon_rad = radians(USER_LON)
            pet_lat_rad = radians(pet_lat)
            pet_lon_rad = radians(pet_lon)

            # Find differences between user and pet coordinates
            delta_lat = pet_lat_rad - user_lat_rad
            delta_lon = pet_lon_rad - user_lon_rad

            # Haversine formula to calculate distance between two lat/lon points
            a = sin(delta_lat / 2)**2 + cos(user_lat_rad) * cos(pet_lat_rad) * sin(delta_lon / 2)**2
            c = 2 * atan2(sqrt(a), sqrt(1 - a))
            distance = EARTH_RADIUS_MILES * c

            if distance <= 10:
                pet["locationRange"] = "Within 10 miles"
            elif distance <= 50:
                pet["locationRange"] = "Within 50 miles"
            elif distance <= 100:
                pet["locationRange"] = "Within 100 miles"
            else:
                pet["locationRange"] = "More than 100 miles"

            pet["distance"] = distance

        # Calculate how long a pet has been waiting for adoption (in days) using datetime module
        intake = pet.get("intakeDate")
        if intake:
            try:
                if isinstance(intake, str):
                    intake = intake.replace("Z", "+00:00")
                    intake = datetime.fromisoformat(intake)
                pet["daysWaiting"] = (datetime.now(timezone.utc) - intake).days
            except Exception as e:
                print(f"Error processing intakeDate for pet {pet.get('_id', '')}: {e}")
    except Exception as e:
        print(f"Error processing pet {pet.get('_id', '')}: {e}")
        traceback.print_exc()

    return pet

if __name__ == '__main__':
    app = create_app()
    port = int(os.environ.get("PORT", 5000))

    app.run(host="0.0.0.0", port=port)
