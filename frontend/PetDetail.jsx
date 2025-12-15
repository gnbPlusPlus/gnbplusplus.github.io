import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './PetDetail.css';

// Component that routes to and structures the Pet Details page (after a user clicks on a pet card on the Home page)
export default function PetDetail() {
    const { id } = useParams();

    const [pet, setPet] = useState(null);

    const navigate = useNavigate();

    // Fetch a single pet and its details for display on the Pet Detail page
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/pets/${id}`)
            .then(response => {
                setPet(response.data);
                document.title = `${response.data.name} | AdoptMePls!`;
            })
            .catch(error => {
                console.error(`Oh no, there was an error fetching the pet's details!`, error);
            });
    }, [id]);

    if (!pet) {
        return <div style={{"color": "rgba(0, 0, 0, 0)"}}>Loading details...</div>;
    }

    // Return the pet items and their general order (the structure is largely handled by PetDetail.CSS)
    return (
        <div className="pet_detail_container">
            <div className="top_bar">
                <button className="back_button" onClick={() => navigate(-1, { replace: true }) || navigate("/")}>
                    <strong>← Back</strong>
                </button>
            </div>
            
            <div className="pet_details_content">
                <div className="pet_details_top_section">
                    <img className="pet_details_photo" src={pet.photo} alt={pet.name} />
                    <div className="basic_pet_info">
                        <p><strong><span className="pet_details_name">{pet.name}</span></strong> <em><span className="pet_details_location">{pet.cityState}</span></em></p>
                        <p><span className="pet_details_subtag">{pet.species} • {pet.breed} • {pet.age} years old • {pet.sex}</span></p>
                        <span className="pet_details_description">{pet.description}</span>
                    </div>
                </div>
                <div className="additional_pet_info_container">
                    <div className="additional_info_box">
                        <h3>Physical Traits</h3>
                        <p><strong>Size:</strong> {pet.size}</p>
                        <p><strong>Weight:</strong> {pet.weight}</p>
                        {pet.hairLength != undefined && (
                            <p><strong>Hair Length:</strong> {pet.hairLength}</p>
                        )}
                        {pet.featherLength != undefined && (
                            <p><strong>Feather Length:</strong> {pet.featherLength}</p>
                        )}
                        <p><strong>Color:</strong> {pet.color}</p>
                        {pet.hasHorns != undefined && (
                            <p><strong>Has Horns:</strong> {pet.hasHorns ? "Yes" : "No"}</p>
                        )}
                    </div>
                    <div className="additional_info_box">
                        <h3>Personality</h3>
                        <p><strong>Temperament:</strong> {pet.temperament}</p>
                        <p><strong>Energy Level:</strong> {pet.energyLevel}</p>
                        <p><strong>Good with Kids:</strong> {pet.goodWithKids ? "Yes" : "No"}</p>
                        <p><strong>Good with Other Pets:</strong> {pet.goodWithOtherPets ? "Yes" : "No"}</p>
                    </div>
                    <div className="additional_info_box">
                        <h3>Important Info</h3>
                        <p><strong>Desexed:</strong> {pet.desexed ? "Yes" : "No"}</p>
                        <p><strong>Indoor Only:</strong> {pet.indoorOnly ? "Yes" : "No"}</p>
                        <p><strong>House Trained:</strong> {pet.houseTrained ? "Yes" : "No"}</p>
                        <p><strong>Vaccinated:</strong> {pet.vaccinated ? "Yes" : "No"}</p>
                        <p><strong>Special Needs:</strong> {pet.specialNeeds ? "Yes" : "No"}</p>
                    </div>
                </div>
            </div>
            {/*<h1 className="app_logo" style={{backgroundColor:"white", color:"#a4dcff", width:"fit-content"}}>AdoptMePls!</h1>*/}
        </div>
    );
}