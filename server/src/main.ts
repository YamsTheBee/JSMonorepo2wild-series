// Load environment variables from .env file
import express from "express";
import "dotenv/config";
import type { RequestHandler } from "express";

// Fonction pour afficher le message de bienvenue
const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};
// Initialiser l'application Express
const app = express();

// Ajouter la route GET /
app.get("/", sayWelcome);

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./aps

// Get the port from the environment variables
const port = process.env.APP_PORT || 3310;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
