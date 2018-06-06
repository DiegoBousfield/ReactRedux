import axios from "axios";
import _ from "lodash";

const ROOT_URL = "http://diegobousfield.getsandbox.com/posts";

export const subjectService = {
  fetchSubject,
  fetchArticles,
  fetchArticle
};

function fetchSubject(text) {
  return axios.get(`${ROOT_URL}?subject=${text}`);
}

function fetchArticles() {
  return axios.get(ROOT_URL);
}

function fetchArticle(id) {
  return axios.get(`${ROOT_URL}?id=${id}`);
}
