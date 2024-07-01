import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries= await checkVisisted();
  console.log(countries);
  res.render("index.ejs", { countries: countries, total: countries.length});
});

app.post("/add", async (req, res) => {
  const country = req.body.country;
  let code="";
  try {
    code= await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE $1", [country.toLowerCase()]);
    console.log(code.rows);
    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [code.rows[0].country_code]);
      res.redirect("/");
    } 
    catch (error) {
      console.log(error);
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again!",
      });
    }
  } 
  catch (err) {
    console.log(err);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
