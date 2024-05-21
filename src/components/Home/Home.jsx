import { useEffect, useState } from "react"
import { PacmanLoader } from "react-spinners";
import Product from "../Product/Product";
import "./Home.css"

export default function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])
    return (
        <>
            {loading ? (
                <div className="spinner">
                    <PacmanLoader color="#41cdece3"  size={100} loading = {loading}/>
                </div>
            ) : (
                <div className="home">
                    <Product />
                </div>
            )}

        </>
    )
}