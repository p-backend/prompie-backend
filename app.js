const express = require("exress");
const postRouter = require("./routes/post");

const app = express();

app.use("/post", postRouter);

app.listen(3065, () => {
    console.log("서버 실행중");
});
