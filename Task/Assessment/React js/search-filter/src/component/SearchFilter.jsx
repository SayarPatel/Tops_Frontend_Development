import React, { useState } from "react";

const SearchFilter = () => {
    const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div >
            <h2 >Search Filter</h2>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
            <ul>
                {
                    filteredItems.map((i) => {
                        return (
                            <li>{i}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SearchFilter;
