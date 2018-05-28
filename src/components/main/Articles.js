import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleItem from "./ArticleItem";

class Articles extends Component {
  render() {
    return (
      <ul>{this.props.subjects.map(a => <ArticleItem key={a.id} {...a} />)}</ul>
    );
  }
}

const mapStateToProps = ({ subjects }) => {
  return { subjects };
};

export default connect(mapStateToProps)(Articles);
