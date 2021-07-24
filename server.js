const express = require("express");
const app = express();
const data = require("./data");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  const tours = data.map((tour) => {
    const { id, name, info, image, price } = tour;
    return { id, name, info, image, price };
  });
  res.json(tours);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server is listening to the port 5000 ...");
});
