const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const api = require("./api");

const mongoose = require("mongoose");
require("dotenv").config();

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const { PORT: port = 4000, MONGO_URI: mongoURI } = process.env;
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(e => {
    console.error(e);
  });

router.use("/api", api.routes());

app.listen(port, () => {
  console.log("listening to port ", port);
});
