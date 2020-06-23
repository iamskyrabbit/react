import React from "react";
import Author from "./Footer/Author";
import Contact from "./Footer/Contact";

/**
 * props: author contact
 */
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Author value={this.props.author}/>
        <Contact value={this.props.contact}/>
      </footer>
    );
  }
}