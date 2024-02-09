const { userLogin, userLogout } = require("../../controller/auth.controller");
const { getPosts, createPost } = require("../../controller/post.controller");
const { auth } = require("../../middleware/auth.middleware");
const { postMiddleware } = require("../../middleware/post.middleware");

module.exports = (app) => {
  app.get("/posts", postMiddleware, getPosts);
  app.post("/posts", postMiddleware, createPost);
};
