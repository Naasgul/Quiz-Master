require("dotenv").config();
const express = require("express");
export {};

const path = require("path");

const { connectToDb } = require("./lib/database.ts");
const { checkAndInsertUser } = require("./lib/mongoMethods");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/api/users", async (req, res) => {
  try {
    const user = req.body;
    await checkAndInsertUser(user);
    res.json({ user });
  } catch (e) {
    console.error(e);
    res.status(500).json({ errors: ["Unexpected error."] });
  }
});

async function run() {
  console.log("Connecting to Database");
  await connectToDb(process.env.DB_URL, process.env.DB_NAME);
  console.log("Connected to Database!");

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

run();
