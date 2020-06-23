import React from "react";

/**
 * props: value
 */
export default class Author extends React.Component {
  render() {
    return (
      <h3>{this.props.value}</h3>
    );
  }
}