import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://hollands-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const getArticles = (slug) => {
  return axios
    .get("https://hollands-nc-news.herokuapp.com/api/articles", {
      params: { topic: slug },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const updateVotes = (article_id, voteChange) => {
  return axios.patch(
    `https://hollands-nc-news.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: voteChange }
  );
};

export const getSingleArticle = (article_id) => {
  return axios
    .get(`https://hollands-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};
