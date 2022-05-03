require("dotenv").config();
require("express-async-errors"); // tryOrCatch&throw on all calls

const express = require("express");
const app = express();

const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", mainRouter); // use the router after /api/v1

app.use(notFoundMiddleware); //middleware -> if route not found
app.use(errorHandlerMiddleware); //middleware -> error handler

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
