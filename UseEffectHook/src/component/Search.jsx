
import { useState, useEffect } from 'react';

function Search() {

    let [items] = useState(["Mobile", "Laptop", "Watch", "Charger"]);
    let [search, setSearch] = useState("");
    let [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        let result = items.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredItems(result);
    }, [search, items]);

    return (
        <>
            <h2>Product Search</h2>

            <input
                type="text"
                placeholder="Search product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredItems.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </>
    );
}

export default Search;