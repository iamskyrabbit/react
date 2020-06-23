import React from "react";

/**
 * props: value
 */
export default class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.value}</h1>
    );
  }
}