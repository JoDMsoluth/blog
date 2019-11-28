const Router = require("koa-router");

const api = new Router();

api.get("/text", ctx => {
  ctx.body = "테스트 성공";
});

module.exports = api;
