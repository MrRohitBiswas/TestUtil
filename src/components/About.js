import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h2 className="my-3">About Us</h2>
      <hr />
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={
            props.mode === "dark"
              ? {
                  backgroundColor: "#495057",
                  color: "white",
                  border: "1px solid white",
                  borderBottom: "none",
                }
              : { backgroundColor: "#f8f9fa" }
          }
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={
                props.mode === "dark"
                  ? {
                      backgroundColor: "#495057",
                      color: "white",
                      border: "0.5px solid white",
                      borderBottom: "none",
                    }
                  : { backgroundColor: "#f8f9fa" }
              }
            >
              About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                This was mainly made for the evolution of mankind.
              </strong>{" "}
              It was honored by the touch of Rohit Biswas. This kind-hearted man
              made this application with his own hands. Human kind was blessed
              with TextUtils to manipulate their texts into NOTHING much but you
              are bound to consider this as holy gift from Lord Biswas. Go to
              the homepage and receive the heavenly touch and pure yourself. Do
              not be greedy and keep using on your own, let the other mankinds
              have the opportunity to have this on their own hands.
              <em> Adiós.</em>
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={
            props.mode === "dark"
              ? {
                  backgroundColor: "#495057",
                  color: "white",
                  border: "1px solid white",
                  borderBottom: "none",
                }
              : { backgroundColor: "#f8f9fa" }
          }
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={
                props.mode === "dark"
                  ? {
                      backgroundColor: "#495057",
                      color: "white",
                      border: "1px solid white",
                      borderBottom: "none",
                    }
                  : { backgroundColor: "#f8f9fa" }
              }
            >
              Picture of the Founder
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                No human is allowed to see Almighty Lord with naked eye
              </strong>
              <hr />
              <img src="image.jpg" alt="banner" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={
            props.mode === "dark"
              ? {
                  backgroundColor: "#495057",
                  color: "white",
                  border: "1px solid white",
                  borderBottom: "none",
                }
              : { backgroundColor: "#f8f9fa" }
          }
        >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={
                props.mode === "dark"
                  ? {
                      backgroundColor: "#495057",
                      color: "white",
                      border: "1px solid white",
                    }
                  : { backgroundColor: "#f8f9fa" }
              }
            >
              Contact Details
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Purify yourself before contacting</strong>
              <hr />
              <ul class="list-group">
                <li
                  class="list-group-item"
                  style={
                    props.mode === "dark"
                      ? {
                          backgroundColor: "#495057",
                          color: "white",
                          border: "0.5px solid white",
                          borderBottom: "none",
                        }
                      : { backgroundColor: "#f8f9fa" }
                  }
                >
                  E-mail :- <a href="https://mail.google.com/mail/u/1/#inbox?compose=SxfkdsGjqPnGJgKvSWqMwLQDNvBQFQTrgncskVtlsxPkFfmDdClflgWkQmTxFlffRRVngxJGLfBWhLHxpLfJRbLSngplRlRNdRDxcVwscRcKRGFqjJV" target="_blank" rel="noreferrer">rohitbiswas31012001@gmail.com</a>
                </li>
                <li
                  class="list-group-item"
                  style={
                    props.mode === "dark"
                      ? {
                          backgroundColor: "#495057",
                          color: "white",
                          border: "0.5px solid white",
                          borderBottom: "none",
                        }
                      : { backgroundColor: "#f8f9fa" }
                  }
                >
                  Mobile No :- 8420743341
                </li>
                <li
                  class="list-group-item"
                  style={
                    props.mode === "dark"
                      ? {
                          backgroundColor: "#495057",
                          color: "white",
                          border: "0.5px solid white",
                          borderBottom: "none",
                        }
                      : { backgroundColor: "#f8f9fa" }
                  }
                >
                  GitHub :- <a href="https://github.com/MrRohitBiswas" target="_blank" rel="noreferrer">github.com/MrRohitBiswas</a>
                </li>
                <li
                  class="list-group-item"
                  style={
                    props.mode === "dark"
                      ? {
                          backgroundColor: "#495057",
                          color: "white",
                          border: "0.5px solid white",
                        }
                      : { backgroundColor: "#f8f9fa" }
                  }
                >
                  LinkedIn :- <a href="https://linkedin.com/in/mr-rohit-biswas" target="_blank" rel="noreferrer">linkedin.com/in/mr-rohit-biswas</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}