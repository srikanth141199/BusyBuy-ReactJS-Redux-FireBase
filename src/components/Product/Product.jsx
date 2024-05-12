import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseInit";
import ProductItem from "../ProductItem/ProductItem";
import Aside from "../Aside/Aside";
import { PacmanLoader } from "react-spinners";
import { useValue } from "../../Context";

export default function Product(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const {amt} = useValue();
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            // Fetch the product collection from Firestore
            const querySnapshot = await getDocs(collection(db, 'products'));
    
            // Extract the data from the query snapshot
            const productsData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
    
            // Set the retrieved products to the state
            setProducts(productsData);
            setLoading(false); // Set loading to false after data is fetched
            console.log(productsData);
          } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false); // Set loading to false in case of error
          }
        };
    
        fetchProducts();
      }, []);

      const applyFilters = (filters) => {
        setSelectedFilters(filters);
      };


    return(
        <>
      <div className="home">
        <input
          type="text"
          className="searchinput"
          placeholder="Search By Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="product">
        <Aside applyFilters={applyFilters} />
        {loading ? ( 
          <div className="spinner">
          <PacmanLoader color="#41cdece3"  size={100} loading = {loading}/>
          </div>
        ) : (
          products
            .filter(
              (item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                item.price <= amt &&
                (selectedFilters.length === 0 ||
                  selectedFilters.includes(item.category))
            )
            .map((item) => <ProductItem item={item} key={item.id} />)
        )}
      </div>
    </>
    )
}