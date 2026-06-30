const express = require("express");
const path = require("path");
const app = express();
// Static files serve
app.use(express.static(__dirname));
// Main route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
// Port
const PORT = 3000;
// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});