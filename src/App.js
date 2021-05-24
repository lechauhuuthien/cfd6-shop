import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
