import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Home from "./screens/Home";
import Discover from "./screens/Discover";
import Purchase from "./screens/Purchase";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";
import ProductContainer from "./screens/Product";
import { CarProvider } from "./helpers/carContext";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CarProvider>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/descobrir">
            <Discover />
          </Route>
          <Route path="/contato">
            <Contact />
          </Route>
          <Route path="/produto/:name/:id">
            <ProductContainer />
          </Route>
          <Route path="/purchase">
            <Purchase />
          </Route>
        </Switch>
        <Footer />
      </CarProvider>
    </Router>
  );
}

export default App;
