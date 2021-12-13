import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Products />
        </Route>
        <Route path='/create'>
          <CreateProduct />
        </Route>
        <Route path='/products/:id/edit'>
          <UpdateProduct />
        </Route>
      </Switch>
    </>
  );
}

export default App;
