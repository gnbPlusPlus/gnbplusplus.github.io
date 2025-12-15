import './PetCard.css';

// Component that provides the structure for each pet listing on the Home page
export default function PetCard({ name, species, breed, age, photo, onClick}) {
    return (
        <div className = "pet_card" onClick={onClick}>
            <img className = "pet_photo" src={photo} alt={name}/>
            <div className = "pet_info">
                <span className="pet_card_name"><h3>{name}</h3></span>
                <div className="pet_card_description">
                    <p>{species} • {breed}</p>
                    <p>{age} {age == 1 ? "year" : "years"} old</p>
                </div>
            </div>
        </div>
    );
}