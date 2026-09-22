// import http from "node:http";

// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/users") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       try {
//         const user = JSON.parse(body);

//         res.writeHead(201, {
//           "Content-Type": "application/json",
//         });

//         res.end(
//           JSON.stringify({
//             message: "User created successfully",
//             user,
//           })
//         );
//       } catch (error) {
//         res.writeHead(400, {
//           "Content-Type": "application/json",
//         });

//         res.end(
//           JSON.stringify({
//             message: "Invalid JSON",
//           })
//         );
//       }
//     });

//     return;
//   }

//   res.writeHead(404, {
//     "Content-Type": "application/json",
//   });

//   res.end(
//     JSON.stringify({
//       message: "Route not found",
//     })
//   );
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

server.listen()
server.close()
server.address()
server.setTimeout()
server.on()
server.once()


//server events 

// listening
// connection
// request
// close
// error
// timeout
// upgrade
// clientError

// | Method          | Callback execution |
// | --------------- | ------------------ |
// | `server.on()`   | Every time         |
// | `server.once()` | First time only    |


// EventEmitter
//      │
//      ├── on()
//      ├── once()
//      ├── emit()
//      ├── off()
//      ├── removeListener()
//      └── removeAllListeners()