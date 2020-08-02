import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/index";

const HomePage = React.lazy(() => import("./containers/HomePage"));
const HistoryPage = React.lazy(() => import("./containers/HistoryPage"));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ToastContainer />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/detail/:cityId"
              render={() => <h1>Details Page</h1>}
            />
            <Route path="/history" component={HistoryPage} />
            <Route path="/about" render={() => <h1>about Page</h1>} />
            <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
