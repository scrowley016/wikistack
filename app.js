const morgan = require("morgan")
const express = require("express");
const layout = require("./views/layout");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send(layout("Hello World"));
  })

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
