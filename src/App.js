import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/Test";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddContact from "./components/AddContact";
import configStore from "./store/configStore";

const store = configStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={ProcessingInstruction.env.PUBLIC_URL}>
        <Provider store={store}>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route path="/" component={Contacts} exact={true} />
                <Route
                  path="/contact/add"
                  component={AddContact}
                  exact={true}
                />
                <Route path="/about" component={About} exact={true} />
                <Route path="/test" component={Test} exact={true} />
                <Route component={NotFound} exact={true} />
              </Switch>
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
