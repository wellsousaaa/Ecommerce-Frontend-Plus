import Routes from "./Routes";

const makeHeaders = (token) => {
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Vary", "Accept, Origin");
  myHeaders.append("Allow", "GET, HEAD, OPTIONS");

  return myHeaders;
};

const getProducts = async (number = null, random = null) => {
  const route = `${Routes.main}/api/products/?${number ? `n=${number}` : "n"}${
    random ? `&random=1` : "&random"
  }`;

  console.log(route);
  const productsResponse = await fetch(route, {
    method: "GET",
  }).catch((err) => {
    console.log(err);
  });

  const products = await productsResponse.json();
  return products;
};

const getProductsByCategories = async (categories, number = 16) => {
  const route = `${Routes.main}/api/products/?${number ? `n=${number}` : "n"}${
    categories ? `&tags=${categories.join("-")}` : "&tags"
  }`;

  console.log(route);
  const productsResponse = await fetch(route, {
    method: "GET",
  }).catch((err) => {
    console.log(err);
  });

  const products = await productsResponse.json();
  return products;
};

const getPagination = async (url) => {
  const pagination = await fetch(`${Routes.main}${url}`)
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
      return false;
    });

  return pagination;
};

const getProduct = async (id) => {
  const product = await fetch(`${Routes.main}/api/products/${id}`)
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
      return false;
    });

  return product;
};

const getHomeProducts = async () => {
  const productsHome = await fetch(
    `${Routes.main}/api/productshome/`
  ).then((data) => data.json());
  console.log(productsHome);

  return productsHome.results;
};

const getCategoryProducts = async (category) => {
  const productsCategory = await fetch(
    `${Routes.main}/api/productscategory/${category}/`
  ).then((data) => data.json());

  return productsCategory;
};

export {
  getProducts,
  getHomeProducts,
  getProduct,
  getCategoryProducts,
  getPagination,
  getProductsByCategories,
};
