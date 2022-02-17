import axios from "axios";
import "./home.css";
import { useEffect, useState } from "react";
import "../../App.css";
import Card from "../../Components/card/Card";
import Hero from "../../Components/hero/Hero";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8080/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  const renderProducts = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    return products.map(
      ({ id, artist, image, title, genre, year, format, price }) => (
        <>
          <Card
            key={id}
            artist={artist}
            image={image}
            title={title}
            genre={genre}
            year={year}
            format={format}
            price={price}
          />
          <Card
            key={id}
            artist={artist}
            image={image}
            title={title}
            genre={genre}
            year={year}
            format={format}
            price={price}
          />
          <Card
            key={id}
            artist={artist}
            image={image}
            title={title}
            genre={genre}
            year={year}
            format={format}
            price={price}
          />
        </>
      )
    );
  };

  return (
    <div>
      <Hero />
      <div className="cards-wrapper">
        <div className="cards-container">{renderProducts()}</div>
      </div>
    </div>
  );
};

export default Home;
