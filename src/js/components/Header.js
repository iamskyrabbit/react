import React from "react";
import Title from "./Header/Title";

/**
 * props: title
 */
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Title value={this.props.title}/>
      </header>
    );
  }
}