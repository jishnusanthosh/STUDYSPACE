// const { error, log } = require('console');
// const fs=require('fs');


// fs.readFile("data.text","utf8",(error,data)=>{


//     if (error) {
//         console.log("error reading file");
//         return
        
        
//     }

//     console.log("file content");
//     console.log(data);
    
    
// })


//import  fs  from "fs";
// console.log(fs);

// fs.readFile("data.text","utf8",(error,data)=>{


//     if (error) {
//         console.log("error reading file");
//         return
        
        
//     }

//     console.log("file content");
//     console.log(data);
    
    
// })


// fs.writeFile("log.txt","server started", (error)=>{
//     if (error) {
//         console.log("write failed");
//         return
//     }


// })

// import express from "express";
// import os from "node:os";

// const app = express();

// app.get("/api/server-health", (req, res) => {
//   const serverHealth = {
//     platform: os.platform(),
//     architecture: os.arch(),
//     hostname: os.hostname(),
//     totalMemory: os.totalmem(),
//     freeMemory: os.freemem(),
//     cpuCount: os.cpus().length,
//     uptime: os.uptime()
//   };

//   console.log("Server Health Data:");
//   console.log(serverHealth);

//   res.json(serverHealth);
// });

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });
// import os from "node:os";

// const totalMemoryGB = (os.totalmem() / 1024 ** 3).toFixed(2);
// const freeMemoryGB = (os.freemem() / 1024 ** 3).toFixed(2);
// const uptimeHours = (os.uptime() / 3600).toFixed(2);

// const serverHealth = {
//   platform: os.platform(),
//   architecture: os.arch(),
//   hostname: os.hostname(),
//   totalMemory: `${totalMemoryGB} GB`,
//   freeMemory: `${freeMemoryGB} GB`,
//   cpuCount: os.cpus().length,
//   uptime: `${uptimeHours} hours`
// };

// console.log("===== SYSTEM INFORMATION =====");
// console.log(serverHealth);

import os from "node:os";

const bytesToGB = (bytes) => {
  return (bytes / 1024 ** 3).toFixed(2);
};

const secondsToHours = (seconds) => {
  return (seconds / 3600).toFixed(2);
};

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const usedMemory = totalMemory - freeMemory;

const memoryUsagePercentage = (
  (usedMemory / totalMemory) *
  100
).toFixed(2);

const cpuInfo = os.cpus();

console.log("\n==========================================");
console.log("          SYSTEM INFORMATION");
console.log("==========================================");

console.log("\n--- OPERATING SYSTEM ---");

console.log("Platform       :", os.platform());
console.log("OS Type        :", os.type());
console.log("OS Release     :", os.release());
console.log("OS Version     :", os.version());
console.log("Architecture   :", os.arch());
console.log("Machine        :", os.machine());
console.log("Hostname       :", os.hostname());

console.log("\n--- USER INFORMATION ---");

const user = os.userInfo();

console.log("Username       :", user.username);
console.log("Home Directory :", user.homedir);
console.log("UID            :", user.uid);
console.log("GID            :", user.gid);
console.log("Shell          :", user.shell);

console.log("\n--- MEMORY INFORMATION ---");

console.log(
  "Total RAM      :",
  bytesToGB(totalMemory),
  "GB"
);

console.log(
  "Free RAM       :",
  bytesToGB(freeMemory),
  "GB"
);

console.log(
  "Used RAM       :",
  bytesToGB(usedMemory),
  "GB"
);

console.log(
  "RAM Usage      :",
  `${memoryUsagePercentage}%`
);

console.log("\n--- CPU INFORMATION ---");

console.log(
  "Logical CPUs   :",
  cpuInfo.length
);

console.log(
  "Parallelism    :",
  os.availableParallelism()
);

if (cpuInfo.length > 0) {
  console.log(
    "CPU Model      :",
    cpuInfo[0].model
  );

  console.log(
    "CPU Speed      :",
    `${cpuInfo[0].speed} MHz`
  );
}

console.log(
  "Endianness     :",
  os.endianness()
);

console.log("\n--- SYSTEM UPTIME ---");

console.log(
  "Uptime Seconds :",
  os.uptime()
);

console.log(
  "Uptime Hours   :",
  secondsToHours(os.uptime())
);

console.log("\n--- DIRECTORY INFORMATION ---");

console.log(
  "Home Directory :",
  os.homedir()
);

console.log(
  "Temp Directory :",
  os.tmpdir()
);

console.log("\n--- NETWORK INFORMATION ---");

const networkInterfaces = os.networkInterfaces();

for (const [name, addresses] of Object.entries(networkInterfaces)) {
  console.log(`\nAdapter: ${name}`);

  for (const network of addresses ?? []) {
    console.log("  Address  :", network.address);
    console.log("  Family   :", network.family);
    console.log("  Netmask  :", network.netmask);
    console.log("  MAC      :", network.mac);
    console.log("  Internal :", network.internal);
    console.log("  CIDR     :", network.cidr);
  }
}

console.log("\n--- LOAD AVERAGE ---");

console.log(
  "1 / 5 / 15 min :",
  os.loadavg()
);

console.log("\n==========================================");