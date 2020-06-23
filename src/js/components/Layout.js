import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Text from "./Text";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Text",
      name: "skyrabbit"
    };
  }
  changeText(text) {
    this.setState({text});
  }
  render() {
    setTimeout(
      () => { this.setState({name: "moonrabbit"}); },
      1000
    );
    return (
      <div>
         <Header title={"Title"}/>
         <Text value={this.state.name}/>
         <Text changeValue={this.changeText.bind(this)} value={this.state.text}/>
         <Footer author={"Author"} contact={"Contact"}/>
      </div>
    );
  }
}