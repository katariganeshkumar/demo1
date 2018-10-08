import React, { Component } from "react";
import Card from "./Card/Card";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <br />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
          </div>
          <div>
            <br />
          </div>
          <div className="row">
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
          </div>
          <div>
            <br />
          </div>
          <div className="row">
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
          </div>{" "}
          <div>
            <br />
          </div>
          <div className="row">
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
