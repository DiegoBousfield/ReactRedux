import React from "react";
import LinkItem from "../LinkItem";

const ArticleItem = a => {
  return (
    <article>
      <small>
        <LinkItem>{a.subject}</LinkItem>
      </small>
      <h1>{a.title}</h1>
      <p>{a.content}</p>
      <small>{a.author}</small>
    </article>
  );
};

export default ArticleItem;
