const express = require("express");

const app = express();

const snack = "AlmondJoy.webp"

app.use(express.static("images"));


app.get("/", (req: any, res: any) => {
  res.json(snack)
} )

app.listen(8080, () => {
  console.log("Listening on http://localhost:8080");
});
