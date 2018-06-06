export const FETCH_SUBJECT = "FETCH_SUBJECT";
export const FETCH_ARTICLE = "FETCH_ARTICLE";
export const FETCH_ARTICLES = "FETCH_ARTICLES";

import { subjectService } from "../services/subjectService";

export function fetchArticles() {
  return {
    type: FETCH_ARTICLES,
    payload: subjectService.fetchArticles()
  };
}

export function fetchSubject(subject) {
  return {
    type: FETCH_SUBJECT,
    payload: subjectService.fetchSubject(subject)
  };
}

export function fetchArticle(id) {
  return {
    type: FETCH_ARTICLE,
    payload: subjectService.fetchArticle(id)
  };
}
