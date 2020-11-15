import React from "react";
import data from "./testdata.json"

export default function OrderCard(temp) {
  var props = data[1]
  console.log("in card", props, props.order, props.date);

  return (
    <div style={{ margin: "25" }}>
      <div id="temp">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">
              <img src="http://via.placeholder.com/50" alt="hotel image" />{" "}
              {"NAME"}
            </h5>
            <p class="card-text">
              {props.order &&
                props.order.map((ele) => (
                  <div style={{ fontStyle: "oblique" }}>
                    <span>{`${ele.item_name}x${ele.quantity}, `}</span>
                  </div>
                ))}
            </p>
            <div style={{ textAlign: "right" }}>
              Total :{" "}
              {props.order &&
                props.order.reduce((a, item) => a + item.price, 0)}
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
    
                      Orde Details{props.date}{" "}
                      <div>
                        <span style={{ fontSize: 10 }}>{props.date}</span>
                        <span style={{ fontSize: 10, marginLeft: 15 }}>
                          {" "}
                          {props.time}
                        </span>
                      </div>{" "}
  
                  </h5>

                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">
                  <div>
                    in modal body
                    {props.order &&
                      props.order.map((ele) => (
                        <div
                          style={{
                            fontStyle: "oblique",
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <span style={{ minWidth: 250, alignSelf: "left" }}>
                            {ele.restaurant_name}
                          </span>
                          <span style={{ minWidth: 250, alignSelf: "left" }}>
                            {ele.item_name}
                          </span>{" "}
                          <span
                            style={{
                              width: "50px",
                              marginRight: 25,
                              alignSelf: "left",
                            }}
                          >
                            {ele.quantity}
                          </span>
                          <span style={{ width: "100px", alignSelf: "left" }}>
                            {ele.price}
                          </span>
                        </div>
                      ))}
                  </div>
                  <hr />
                  <div style={{ textAlign: "center" }}>
                    <span style={{ marginRight: "50px", marginLeft: "500px" }}>
                      Total
                    </span>
                    {props.order &&
                      props.order.reduce((a, item) => a + item.price, 0)}
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
