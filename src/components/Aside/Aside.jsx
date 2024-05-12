import { useEffect, useState } from "react";
import { useValue } from "../../Context";
import "./Aside.css"

export default function Aside({ applyFilters }) {

    const { amt, setAmt } = useValue();
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (event) => {
        const { name, checked } = event.target;

        if (checked) {
            setSelectedFilters(prevFilters => [...prevFilters, name]);
        } else {
            setSelectedFilters(prevFilters => prevFilters.filter(filter => filter !== name));
        }
    }

    useEffect(() => {
        applyFilters(selectedFilters);
      }, [selectedFilters, applyFilters]);


    return (
        <>
            <div className="aside">
                <h2>Filter</h2>
                <form action="">
                    <label htmlFor="price">
                        Price: {amt}
                    </label>
                    <input
                        type="range"
                        className="filter"
                        name="price"
                        min={1}
                        max={100000}
                        step={100}
                        value={amt}
                        onChange={(evt) => setAmt(evt.target.value)}
                    />
                    <h2>Category</h2>
                    <div className="category">
                        <div>
                            <input
                                type="checkbox"
                                name="mensFashion"
                                checked={selectedFilters.includes("mensFashion")}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor="mensFashion">Mens Clothing</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                name="womensFashion"
                                checked={selectedFilters.includes("womensFashion")}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor="womensFashion">Women's Clothing</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                name="jewelry"
                                checked={selectedFilters.includes("jewelry")}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor="jewelry">jewelry</label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                name="electronics"
                                checked={selectedFilters.includes("electronics")}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor="electronics">Electronics</label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}