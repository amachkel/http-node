const http = require("http");
const services = require("./services");
const server = http.createServer(); //handler for this server's request event
const url = require("url");

server.on("request", (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  if (request.method === "GET" && parsedUrl.pathname === "/metadata") {
    const { id } = parsedUrl.query;
    const metadata = services.fetchImageMetadata(id);
    console.log(request.headers);
    console.log(id);
  }
  request.on("data", (chunk) => {
    console.log("this is a chunk \n");
    console.log(chunk.toString());
  });
});

server.listen(8080);
