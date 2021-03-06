import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import _ from "lodash";
import ArticleItem from "./ArticleItem";
import { fetchArticles, fetchSubject } from "../actions/actionCreator";
import "../../public/css/Articles.css";

class Articles extends Component {
  componentDidMount() {
    const { match, fetchSubject, fetchArticles } = this.props;
    if (match.path === "/:subject") {
      return fetchSubject(match.params.subject);
    }
    return fetchArticles();
  }
  renderArticle() {
    if (this.props.articles.length === 0) {
      return <h1>Looks Like We Don't Have Nothing to say About it</h1>;
    }
    return _.map(this.props.articles, article => {
      return <ArticleItem key={article.id} {...article} />;
    });
  }

  render() {
    return (
      <div className="posts ">
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.renderArticle()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = ({ articles, subjects }, ownProps) => {
  if (ownProps.match.path === "/:subject") {
    fetchSubject(ownProps.match.path);
    return {
      articles: _.filter(subjects, { subject: ownProps.match.params.subject })
    };
  }
  fetchArticles();
  return {
    articles
  };
};

export default connect(mapStateToProps, { fetchArticles, fetchSubject })(
  Articles
);
