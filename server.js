const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

// Basic route
app.get("^/$/index(.html)?", (_, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/course(.html)?", (req, res) => {
    res.sendFile(__dirname + "/course.html");
});

app.get("/community(.html)?", (req, res) => {
    res.sendFile(__dirname + "/community.html");
}
);
app.get("/profile(.html)?", (req, res) => {
    res.sendFile(__dirname + "/au.html");
}
);
app.get("/dsa(.html)?", (req, res) => {
    res.sendFile(__dirname + "/dsa.html");
}
);

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON requests
app.use(express.json());
// Middleware to enable CORS
app.use(cors());
// Middleware to serve static files from the "public" directory
app.use(express.static("public"));
// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Example API endpoint
app.get("/api/data", (req, res) => {
    const data = {
        message: "Hello from the server!",
        timestamp: new Date(),
    };
    res.json(data);
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
