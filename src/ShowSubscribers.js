import React, { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";

class ShowSubscribers extends Component {
  // let subscribers = [
  //   {
  //     id: 1,
  //     name: "asim",
  //     phone: 123456789,
  //   },
  //   {
  //     id: 2,
  //     name: "sami",
  //     phone: 987654321,
  //   },
  // ];

  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
        </div>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        {this.props.subscribersList.map((sub) => {
          return (
            <div className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn">Delete</button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShowSubscribers;
