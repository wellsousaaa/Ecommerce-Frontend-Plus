import { useState, useEffect } from "react";
import Title from "../../components/Title";
import Product from "../../components/Product";
import { getProductsByCategories, getPagination } from "../../helpers/products";
import "./categories.scss";

const categorias = ["camisa", "feminina", "masculina", "camiseta", "verão"];

function Categories() {
  const [List, setList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setProductList([]);
      const products = await getProductsByCategories(List, 16);
      console.log(products.data);
      setProductList(products.data.length ? products.data : null);
      setPagination(products.next);
      console.log(products.next);
    };

    fetchData();
  }, [List]);

  const loadNextPage = async ({ target }) => {
    setPagination(null);
    const newPage = await getPagination(pagination);

    setPagination(newPage.next);
    setProductList((p) => [...p, ...newPage.data]);
  };

  return (
    <main>
      <h1>Descubra as Categorias</h1>

      <div className="category-container flex even wrap">
        {categorias.map((category, i) => {
          return (
            <span
              key={i}
              className={`category ${
                List.includes(category) ? "selected" : ""
              }`}
              onClick={() => {
                if (List.includes(category))
                  setList((l) => l.filter((item) => item !== category));
                else setList((l) => [...l, category]);
              }}
            >
              {category}
            </span>
          );
        })}
      </div>
      <div className="product-box-container flex even align-center wrap">
        {productList === null ? (
          <h3>Não encontramos nenhum resultado ;-;</h3>
        ) : productList.length === 0 ? (
          <>
            {categorias.map(() => {
              return <Product placeholder={true} />;
            })}
          </>
        ) : (
          <>
            {productList.map((props) => (
              <Product {...props} />
            ))}
          </>
        )}
      </div>

      {pagination ? (
        <div className="flex j-center" style={{ marginBottom: 25 }}>
          <button
            className="pay-button"
            onClick={loadNextPage}
            disabled={!pagination}
          >
            Ver Mais
          </button>
        </div>
      ) : null}
    </main>
  );
}

export default Categories;
