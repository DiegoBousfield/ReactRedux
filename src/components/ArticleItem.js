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
      <article className={id < 2 ? "heading" : "featured"}>
        <small>
          <LinkItem to={subject}>{subject}</LinkItem>
        </small>
        <img id={`page${id}`} src={this.getImages()} alt="" />
        <h1>{title}</h1>
        <p>{content}</p>
        <small>{author}</small>
        <img
          style={{ borderRadius: "100%" }}
          src={authorPhoto}
          srcSet={`${author2x} 2x`}
          alt="logo"
        />
      </article>
    );
  }
}

export default ArticleItem;
