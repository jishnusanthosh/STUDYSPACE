import http from "node:http";

 // if (req.method === "GET") {
// //   res.end("GET request received");
// // }
// console.log(req.method);


// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.statusCode = 200;
//     res.end("Home Page");
//     return;
//   }

//   if (req.method === "GET" && req.url === "/users") {
//     res.statusCode = 200;
//     res.end("All Users");
//     return;
//   }

//   if (req.method === "POST" && req.url === "/users") {
//     res.statusCode = 201;
//     res.end("User Created");
//     return;
//   }

//   if (req.method === "DELETE" && req.url === "/users") {
//     res.statusCode = 200;
//     res.end("User Deleted");
//     return;
//   }

//   res.statusCode = 404;
//   res.end("Route Not Found");
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });


// // |  Code | Meaning               |
// // | ----: | --------------------- |
// // | `200` | OK                    |
// // | `201` | Created               |
// // | `204` | No Content            |
// // | `400` | Bad Request           |
// // | `401` | Unauthorized          |
// // | `403` | Forbidden             |
// // | `404` | Not Found             |
// // | `409` | Conflict              |
// // | `500` | Internal Server Error |


const user = {
  name: "Jishnu",
  role: "Developer",
};

res.setHeader("Content-Type", "application/json");
res.end(JSON.stringify(user));