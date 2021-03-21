import { useState, useEffect } from "react";
import Carousel from "../../components/Carousel";
import Title from "../../components/Title";
import Product from "../../components/Product";
import Email from "../../components/Email";

import { getHomeProducts, getProducts } from "../../helpers/products";

function Home() {
  const [products, setProducts] = useState({
    main: [],
    recommendations: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const main = await getProducts(8);
      const recommendations = await getProducts(8, true);
      setProducts({ recommendations: recommendations.data, main: main.data });
    };

    fetchData();
  }, []);

  return (
    <main style={{ textAlign: "center" }}>
      <Carousel />

      <h2>Confira nossos produtos</h2>

      <div className="product-box-container flex even align-center wrap">
        {products.main.length === 0 ? (
          <>
            <Product placeholder={true} /> <Product placeholder={true} />
            <Product placeholder={true} /> <Product placeholder={true} />
            <Product placeholder={true} /> <Product placeholder={true} />
            <Product placeholder={true} /> <Product placeholder={true} />
          </>
        ) : (
          products.main.map((props) => <Product {...props} />)
        )}
      </div>

      <h2>Descubra! </h2>
      <div className="flex even align-center wrap" style={{ marginBottom: 75 }}>
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-20px -20px",
          }}
        />
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-144px -20px",
          }}
        />
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-271px -20px",
          }}
        />

        <div
          className="discover-home"
          style={{
            backgroundPosition: "-20px -144px",
          }}
        />
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-20px -271px",
          }}
        />
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-271px -144px",
          }}
        />
      </div>

      <h2>Recomendados</h2>

      <div className="product-box-container flex even align-center wrap">
        {products.recommendations.length === 0 ? (
          <>
            <Product placeholder={true} /> <Product placeholder={true} />
            <Product placeholder={true} /> <Product placeholder={true} />
            <Product placeholder={true} /> <Product placeholder={true} />
            <Product placeholder={true} /> <Product placeholder={true} />
          </>
        ) : (
          products.recommendations.map((props) => <Product {...props} />)
        )}
      </div>

      <h2>Descubra! </h2>
      <div className="flex even align-center wrap" style={{ marginBottom: 75 }}>
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-20px -20px",
          }}
        />
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-144px -20px",
          }}
        />
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-271px -20px",
          }}
        />

        <div
          className="discover-home"
          style={{
            backgroundPosition: "-20px -144px",
          }}
        />
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-20px -271px",
          }}
        />
        <div
          className="discover-home"
          style={{
            backgroundPosition: "-271px -144px",
          }}
        />
      </div>
    </main>
  );
}

export default Home;
