import React from "react";

/**
 * props: value changeValue
 */
export default class Text extends React.Component {
  handleChange(e) {
    const value = e.target.value;
    this.props.changeValue(value);
  }
  render() {
    return (
      <div>
        {this.props.value}<input value={this.props.value} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}