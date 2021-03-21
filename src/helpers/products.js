const makeHeaders = (token) => {
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Vary", "Accept, Origin");
  myHeaders.append("Allow", "GET, HEAD, OPTIONS");

  return myHeaders;
};

const getProducts = async (number = null, random = null) => {
  const route = `${process.env.API_ROUTE}/api/products/?${
    number ? `n=${number}` : "n"
  }${random ? `&random=1` : "&random"}`;

  const productsResponse = await fetch(route, {
    method: "GET",
  }).catch((err) => {});

  const products = await productsResponse.json();
  return products;
};

const getProductsByCategories = async (categories, number = 16) => {
  const route = `${process.env.API_ROUTE}/api/products/?${
    number ? `n=${number}` : "n"
  }${categories ? `&tags=${categories.join("-")}` : "&tags"}`;

  const productsResponse = await fetch(route, {
    method: "GET",
  }).catch((err) => {});

  const products = await productsResponse.json();
  return products;
};

const getPagination = async (url) => {
  const pagination = await fetch(`${process.env.API_ROUTE}${url}`)
    .then((data) => data.json())
    .catch((err) => {
      return false;
    });

  return pagination;
};

const getProduct = async (id) => {
  const product = await fetch(`${process.env.API_ROUTE}/api/products/${id}`)
    .then((data) => data.json())
    .catch((err) => {
      return false;
    });

  return product;
};

const getHomeProducts = async () => {
  const productsHome = await fetch(
    `${process.env.API_ROUTE}/api/productshome/`
  ).then((data) => data.json());

  return productsHome.results;
};

const getCategoryProducts = async (category) => {
  const productsCategory = await fetch(
    `${process.env.API_ROUTE}/api/productscategory/${category}/`
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
