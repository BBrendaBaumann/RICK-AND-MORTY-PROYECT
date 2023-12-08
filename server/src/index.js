/* const http = require("http");
const PORT = 3001;
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // configuracion de course, a quien le damos acceso, controlador de ingreso, se configura luego con la url del front

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      getCharById(res, id);
      } else {
        return res
              .writeHead(404, { "Content-Type": "application/json" })
              .end(JSON.stringify({ message: "Wrong url" }));
        }
    })

  .listen(PORT, "127.0.0.1", () =>
    console.log(`Server listening on port ${PORT}`)
  ); */

/* const server = require("./app");
  const PORT = 3001;
  
  server.listen(PORT, () => {
     console.log('Server raised in port: ' + PORT);
  }); */

const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const server = express();
const PORT = 3001;

//* configuracion de middlewares
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use(morgan("dev"));
server.use("/rickandmorty", router);

// const getCharById = require("./controllers/getCharById")
// const login = require("./controllers/login")

//? (para probar en thunder client si funciona la ruta)
//? server.get("/rickandmorty/character/:id", getCharById);
//? server.get("/rickandmorty/login", login);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
