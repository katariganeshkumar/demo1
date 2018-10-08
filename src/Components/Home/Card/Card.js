import React, { Component } from "react";

class Card extends Component {
  render() {
    let clName = "shadow card";
    return (
      <div>
        <div className={clName}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <span className="card-link">Card link</span>
            <span className="card-link">Another link</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
