import axios from "axios";

export const getTopics = async () => {
  const { data } = await axios.get(
    "https://hollands-nc-news.herokuapp.com/api/topics"
  );
  return data.topics;
};
// none-async/await example of api request below:
// return axios
//   .get("https://hollands-nc-news.herokuapp.com/api/topics")
//   .then(({ data: { topics } }) => {
//     return topics;
//   });

export const getArticles = async (slug, sort_by) => {
  const {
    data: { articles },
  } = await axios.get("https://hollands-nc-news.herokuapp.com/api/articles", {
    params: { topic: slug, sort_by: sort_by },
  });
  return articles;
};

export const updateArticleVotes = async (article_id, voteChange) => {
  return await axios.patch(
    `https://hollands-nc-news.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: voteChange }
  );
};
export const updateCommentVotes = async (comment_id, voteChange) => {
  return await axios.patch(
    `https://hollands-nc-news.herokuapp.com/api/comments/${comment_id}`,
    { inc_votes: voteChange }
  );
};

export const getSingleArticle = async (article_id) => {
  const {
    data: { article },
  } = await axios.get(
    `https://hollands-nc-news.herokuapp.com/api/articles/${article_id}`
  );
  return article;
};

export const getComments = async (article_id) => {
  const {
    data: { comments },
  } = await axios.get(
    `https://hollands-nc-news.herokuapp.com/api/articles/${article_id}/comments`
  );
  return comments;
};

export const postComment = async (article_id, username, body) => {
  return await axios.post(
    `https://hollands-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    { username: username, body: body }
  );
};

export const deleteComment = async (comment_id) => {
  return await axios.delete(
    `https://hollands-nc-news.herokuapp.com/api/comments/${comment_id}`
  );
};
