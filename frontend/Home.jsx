import { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "../components/PetCard.jsx";
import { useNavigate } from "react-router-dom";
import FilterSection from "../components/FilterSection.jsx";
import './Home.css';
import Header from "../components/Header.jsx";

// Welcome to the Home page! This is the main page for the web app
export default function Home() {
    // Thankfully, I've learned about using states in React from my Mimo app.
    // Additional resource used: https://www.freecodecamp.org/news/fetch-data-react/
    const [pets, setPets] = useState([]);

    //const [searchInput, setSearchInput] = useState("");
    //const [searchTerm, setSearchTerm] = useState("");

    // Start all filters out on the generic "All" setting
    const [filters, setFilters] = useState({
        species: "All",
        breedType: "All",
        ageRange: "All",
        sex: "All",
        locationRange: "All",
        size: "All",
        hairLength: "All",
        desexed: "All",
        vaccinated: "All",
        houseTrained: "All",
        specialNeeds: "All",
        goodWithKids: "All",
        goodWithOtherPets: "All",
        energyLevel: "All"
    });
    
    // Resource used here & elsewhere for useNavigate() logic: https://www.geeksforgeeks.org/reactjs/reactjs-usenavigate-hook/
    const navigate = useNavigate();
    
    // Fetch all pets for display on the Home page
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/pets`)
            .then(response => {
                setPets(response.data);
            })
            .catch(error => {
                console.error("Oh no, there was an error fetching the pets!", error);
            });
    }, []);

    // Set or reset filters as user chooses options
    const handleFilterChange = (filterName, value) => {
        if (filterName === "reset") {
            setFilters({
                species: "All",
                breedType: "All",
                ageRange: "All",
                sex: "All",
                locationRange: "All",
                size: "All",
                hairLength: "All",
                desexed: "All",
                vaccinated: "All",
                houseTrained: "All",
                specialNeeds: "All",
                goodWithKids: "All",
                goodWithOtherPets: "All",
                energyLevel: "All"
            });
            // Fetch the default list (unsorted) when reset is clicked
            axios.get(`${import.meta.env.VITE_API_URL}/api/pets`)
            .then(response => setPets(response.data))
            .catch(error => console.error("Oh no, there was an error fetching the pets:", error));
        } else {
            // Translation between yes/no in dropdown options and true/false in database
            const booleanFilters = ["desexed", "vaccinated", "houseTrained", "specialNeeds", "goodWithKids", "goodWithOtherPets"];
            if (booleanFilters.includes(filterName)) {
                if (value === "Yes") { value = true; }
                else if (value === "No") { value = false; }
            }

            // Otherwise, just change the single filter in question, keeping the rest as-is
            setFilters(prev => ({ ...prev, [filterName]: value }));
        }
    };

    // Display loading message in console while program waits for pets to load
    if (pets.length === 0) return <p style={{"color": "rgba(0, 0, 0, 0)"}}>Loading pets...</p>;

    // Filter pets based on currently applied filters
    // Resource used: https://react.dev/learn/rendering-lists
    const filteredPets = pets.filter(pet => {
        return Object.entries(filters).every(([key, value]) => {
            if (value === "All") return true;

            // Logic to make pets within 10 miles also show up when "Within 50 miles" is selected, e.g.
            if (key === "locationRange") {
                if (value === "Within 100 miles") {
                    return pet["distance"] <= 100;
                }
                else if (value === "Within 50 miles") {
                    return pet["distance"] <= 50;
                }
            }
            return pet[key] === value;
        });
    });

    // Use merge sort algorithm via sorting.py
    const sortPets = (order) => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/pets/sort?order=${order}`)
            .then(response => {
                setPets(response.data);
            })
            .catch(error => {
                console.error("Oh, no, there was an error sorting the pets:", error);
            });
    };

    // Return Header, sidebar, and pet cards
    return (
        <div className="homepage">
            <Header />

            <div className="body_content">
                {/* Sidebar on left */}
                <div className="filter_sidebar">
                    <FilterSection filters={filters} onFilterChange={handleFilterChange} onSort={sortPets} />
                </div>

                {/* Search bar above pet cards 
                
                    <div className="search_bar_container">
                        <input 
                        className="search_bar"
                        type="text" 
                        placeholder="Search pets by name..." 
                        value={searchTerm} 
                        onChange={(event) => setSearchTerm(event.target.value)} 
                        />
                        <button className="search_button">Search</button>
                    </div> */}

                {/* Pet cards on right */}
                <div className="cards_container">
                    <div className="pet_list">
                        {filteredPets.map(pet => (
                            <PetCard 
                                key={pet._id}
                                name={pet.name}
                                breed={pet.breed}
                                species={pet.species}
                                age={pet.age}
                                photo={pet.photo}
                                onClick={() => navigate(`/pet/${pet._id}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}