import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.css";
import Card from "../../components/card/Card";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    setLoading(false);
    axios.get("http://localhost:8080/products").then((res) => {
      setProducts(res.data);
    });

   }, [setLoading]);

      const renderProducts = ( ) => {
        if (loading) {
          return <p>Loading...</p>
        }
        return products.map(({id, artist, image, title, genre, year, format, price}) => (
          <Card
            key={id}
            artist = {artist}
            image = {image}
            title = {title}
            genre = {genre}
            year = {year}
            format = {format}
            price = {price}
          />

        ));

      };

  return <div>
    <Hero/>
    <div className="cards-container">
      {renderProducts()}
  

    </div>
  </div>;
};

export default Home;
