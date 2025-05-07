import React from "react";
import ReactDOM from "react-dom";

const App = () => {

  return (
    <>
  <div class="card bg-info text-center p-4 rounded-3">
    <h5 class="card-title mb-3">Remote Project 2 (React)</h5>
    <div class="d-flex justify-content-around">
    </div>
  </div>
    </>
  );
};

class ReactMfe extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(
          <App />
      ,this
    );
  }
}
customElements.define("react-element", ReactMfe);