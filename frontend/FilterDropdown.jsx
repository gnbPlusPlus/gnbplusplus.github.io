import './FilterDropdown.css';

// Component that handles logic for each filter type and its dropdown options
function FilterDropdown({ label, options, onSelect, open, onToggle }) {
    return (
        // Arrow type changes dynamically depending on whether the dropdown menu is open or not open
        // Options are pulled from FilterSection.jsx and displayed using .map()
        // I'm familiar with .map(), but I used this additional resource: https://react.dev/learn/rendering-lists
        <div className="filter_button">
            <button onClick={onToggle}>
                <span className="filter_button_label_text">{label}</span>
                <span className="arrow">{open ? '▲' : '▼'}</span>
            </button>
            {open && (
                <ul className="dropdown_menu">
                    {options.map(option => (
                        <li key={option} onClick={() => onSelect(option) }>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FilterDropdown;