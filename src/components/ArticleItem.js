import React from "react";
import LinkItem from "./LinkItem";
import { Link } from "react-router-dom";
import author2x from "../../public/images/author@2x.jpg";
import authorPhoto from "../../public/images/author.jpg";

const ArticleItem = ({ subject, title, id, content, author }) => {
  return (
    <article className={id < 2 ? "heading" : "featured"}>
      <small>
        <LinkItem to={subject}>{subject}</LinkItem>
      </small>
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
};

export default ArticleItem;
