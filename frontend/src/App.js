import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import CreateProduct from "./components/CreateProduct";

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
      </Switch>
    </>
  );
}

export default App;
