import React, { Component } from "react";

class Signin extends Component {
  render() {
    return (
      <div className="container card ">
        <div>
          <br />
        </div>
        <form class="form-inline ">
          <label for="email" class="mr-sm-2">
            Email address:
          </label>
          <input type="email" class="form-control mb-2 mr-sm-2" />
          <label for="pwd" class="mr-sm-2">
            Password:
          </label>
          <input type="password" class="form-control mb-2 mr-sm-2" />
          <div class="form-check mb-2 mr-sm-2">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
