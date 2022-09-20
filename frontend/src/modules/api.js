import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

export const api$getListArticles = async () => {
  return api.get("/articles");
};

export const api$getArticle = async (id) => {
  return api.get(`/articles/${id}`);
};

export const api$updateArticle = async (id, data) => {
  return api.patch(`/articles/${id}`, data);
};

export const api$deleteArticle = async (id) => {
  return api.delete(`/articles/${id}`);
};

export const api$createArticle = async (data) => {
  return api.post(`/articles`, data);
};
