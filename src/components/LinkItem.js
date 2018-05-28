import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { filterSubject } from "../actions/actionCreator";

class LinkItem extends Component {
  constructor(props) {
    super(props);
    this.fetchSubject = this.fetchSubject.bind(this);
  }
  fetchSubject(e) {
    const { children, articles } = this.props;
    if (this.props.to) {
      this.props.filterSubject(articles);
    } else {
      const next = articles.filter(article => article.subject === children);
      this.props.filterSubject(next);
    }
  }

  render() {
    return (
      <Link
        to={this.props.to ? this.props.to : `/${this.props.children}`}
        className="uppercase"
        href="#"
        onClick={this.fetchSubject}
      >
        {this.props.children}
      </Link>
    );
  }
}

const mapStateToProps = ({ articles }) => {
  return { articles };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ filterSubject }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkItem);
