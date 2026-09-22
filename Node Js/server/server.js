import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home page")
    
  } else if(req.url=== "/about") {
      res.end("about page")
  }
  else if(req.url==="/faq"){
    res.end("faq")
  }
  else{
    res.statusCode=404
    res.end(" page not found ")
  
  }
  



 
});
  

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});