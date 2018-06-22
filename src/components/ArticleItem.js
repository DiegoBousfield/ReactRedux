import React, { Component } from "react";
import LinkItem from "./LinkItem";
import { Link } from "react-router-dom";
import author2x from "../../public/images/author@2x.jpg";
import authorPhoto from "../../public/images/author.jpg";

class ArticleItem extends Component {
  getImages() {
    const { id } = this.props;
    switch (id) {
      case 1:
        return import(`../../public/images/news_0${id}.jpg`).then(
          img => (document.getElementById(`page${id}`).src = img)
        );
      case 2:
        return import(`../../public/images/news_0${id}.jpg`).then(
          img => (document.getElementById(`page${id}`).src = img)
        );
      case 3:
        return import(`../../public/images/news_0${id}.jpg`).then(
          img => (document.getElementById(`page${id}`).src = img)
        );
      default:
        return " ";
    }
  }
  render() {
    const { subject, title, id, content, author } = this.props;
    return (
      <article className="postItem">
        <LinkItem className={subject} to={subject}>
          {subject}
        </LinkItem>
        <img
          className="photoArticle"
          id={`page${id}`}
          src={this.getImages()}
          alt=""
        />
        <h1>{title}</h1>
        <div className="author">
          <img src={authorPhoto} srcSet={`${author2x} 2x`} alt="logo" />
          <p>by {author}</p>
        </div>
        <p className="content">{content}</p>
      </article>
    );
  }
}

export default ArticleItem;
