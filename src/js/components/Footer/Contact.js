import React from "react";

/**
 * props: value
 */
export default class Contact extends React.Component {
  render() {
    return (
      <h4>{this.props.value}</h4>
    );
  }
}