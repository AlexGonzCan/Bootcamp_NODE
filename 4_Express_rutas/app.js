const express = require("express");

const userRouter = require("./routes/user.js");
const productRouter = require("./routes/product.js");
const adminRouter = require("./routes/admin.js");
const indexRouter = require("./routes/index.js");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//localhost:3000/user
app.use("/user", userRouter);

//localhost:3000/product
app.use("/product", productRouter);

// localhost:3000/admin
app.use("/admin", adminRouter);

//localhost:3000
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
