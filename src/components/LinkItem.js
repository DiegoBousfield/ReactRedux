import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSubject, fetchArticles } from "../actions/actionCreator";

class LinkItem extends Component {
  constructor(props) {
    super(props);
    this.findSubject = this.findSubject.bind(this);
  }
  findSubject(e) {
    const { fetchSubject, fetchArticles, to } = this.props;
    return to === "/" ? fetchArticles() : fetchSubject(this.props.to);
  }

  render() {
    return (
      <Link to={this.props.to} onClick={this.findSubject} className="uppercase">
        {this.props.children}
      </Link>
    );
  }
}

export default connect(null, { fetchSubject, fetchArticles })(LinkItem);
