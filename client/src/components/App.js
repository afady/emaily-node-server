import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <ConnectedRouter history={this.props.history}>
          <BrowserRouter>
            <div>
              <Header logout={this.props.logout} />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/surveys" component={Dashboard} />
                  <Route exact path="/surveys/new" component={SurveyNew} />
                  <Route
                    render={() => (
                      <div>The page you're looking for doesn't exist.</div>
                    )}
                  />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </ConnectedRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
