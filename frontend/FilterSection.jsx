import FilterDropdown from "./FilterDropdown";
import { useState } from "react";
import './FilterSection.css';

function getDisplayLabel(key, value) {
    switch (key) {
        case "desexed": return value === true ? "Is Desexed" : "Not Desexed";
        case "vaccinated": return value === true ? "Is Vaccinated" : "Not Vaccinated";
        case "houseTrained": return value === true ? "Is House-trained" : "Not House-trained";
        case "specialNeeds": return value === true ? "Has Special Needs" : "No Special Needs";
        case "goodWithKids": return value === true ? "Is Good with Kids" : "Not Good with Kids";
        case "goodWithOtherPets": return value === true ? "Is Good with Other Pets" : "Not Good with Other Pets";
        case "energyLevel": return value === "Low" ? "Low Energy" : value === "Medium" ? "Medium Energy" : "High Energy";
        case "hairLength": return value === "Short" ? "Short-haired" : value === "Medium" ? " Medium-haired" : "Long-haired";
        default: return value;
    }
}

// Component that provides the logic for the filter section items
export default function FilterSection({ filters, onFilterChange, onSort }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeSort, setActiveSort] = useState("");

    // Labels and options for each filter type
    const dropdowns = [
        { label: 'Location', key: 'locationRange', options: ['All', 'Within 10 miles', 'Within 50 miles', 'Within 100 miles', 'More than 100 miles'] },
        { label: 'Species', key: 'species', options: ['All', 'Dog', 'Cat', 'Guinea Pig', 'Rabbit', 'Pig', 'Goat', 'Chicken'] },
        { label: 'Breed', key: 'breedType', options: ['All', 'Mixed', 'Purebred'] },
        { label: 'Age (years)', key: 'ageRange', options: ['All', '0-1 years', '2-5 years', '6-9 years', '10+ years'] },
        { label: 'Sex', key: 'sex', options: ['All', 'Male', 'Female'] },
        { label: 'Size', key: 'size', options: ['All', 'Small', 'Medium', 'Large'] },
        { label: 'Hair Length', key: 'hairLength', options: ['All', 'Short', 'Medium', 'Long'] },
        { label: 'Desexed', key: 'desexed', options: ['All', 'Yes', 'No'] },
        { label: 'Vaccinated', key: 'vaccinated', options: ['All', 'Yes', 'No'] },
        { label: 'House-trained', key: 'houseTrained', options: ['All', 'Yes', 'No'] },
        { label: 'Special Needs', key: 'specialNeeds', options: ['All', 'Yes', 'No'] },
        { label: 'Good with Kids', key: 'goodWithKids', options: ['All', 'Yes', 'No'] },
        { label: 'Good with Other Pets', key: 'goodWithOtherPets', options: ['All', 'Yes', 'No'] },
        { label: 'Energy Level', key: 'energyLevel', options: ['All', 'Low', 'Medium', 'High'] }
    ];

    // Return the structure for the filter section buttons/items and logic for applying filters
    return (
        <div className="filter_section_container">

            <button className="reset_filters_button" onClick={() => {onFilterChange("reset"); setActiveSort("");}}>
                Reset Filters
            </button>

            {/* Buttons for sorting.py to sort pets with intakeDate */}
            <button className={`shortest_wait_button ${activeSort === "asc" ? "active" : ""}`} onClick={() => { onSort("asc"); setActiveSort("asc"); }}>
                Days Waiting: <strong>Low → High</strong>
            </button>
            <button className={`longest_wait_button ${activeSort === "desc" ? "active" : ""}`} onClick={() => { onSort("desc"); setActiveSort("desc"); }}>
                Days Waiting: <strong>High → Low</strong>
            </button>

            <div className="filter_section">
                {dropdowns.map(dropdown => (
                    <FilterDropdown
                    key={dropdown.key}
                    label={filters[dropdown.key] === "All" ? dropdown.label : getDisplayLabel(dropdown.key, filters[dropdown.key])} // Show selected filter or default label
                    options={dropdown.options}
                    open={openDropdown === dropdown.key} // Setup for having only one open at a time
                    onToggle={() => 
                        setOpenDropdown(openDropdown === dropdown.key ? null : dropdown.key)  // Toggle logic for one dropdown at a time
                    }
                    onSelect={(value) => { onFilterChange(dropdown.key, value); setOpenDropdown(null); }}
                    />
                ))}
            </div>
        </div>
    );
}