import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "components/UI/Layout";
import About from "components/About";
import Home from "components/Home";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={About} path="/about" />
          <Route component={Home} path="/" />
        </Switch>
      </Layout>
    </Router>
  );
}
