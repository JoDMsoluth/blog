const Router = require("koa-router");

const posts = new Router();

const printinfo = ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params
  };
};

posts.get("/", printInfo);
posts.post("/", printInfo);
posts.get("/:id", printInfo);
posts.delete("/:id", printInfo);
posts.pust("/:id", printInfo);
posts.patch("/:id", printInfo);

module.exports = posts;
