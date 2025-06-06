const express = require("express");
const cors = require("cors");

const app = express();

// Allow CORS from the frontend
// app.use(cors({
//     origin: "https://netflix-frontend-hoad.onrender.com",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
// }));

// app.use(cors({
//   origin: "", // your actual frontend domain
//   credentials: true,
//  }));

app.use(cors())


// default login details
const mobile = "1234567890";
const pass = "123";

// Middleware for parsing JSON and form data
app.use(express.json());       
app.use(express.urlencoded({ extended: true }));  // if url used use this


app.get("/login", async (req, res) => {
    try {
        const { mobile: inputMobile, password } = req.query;
        console.log("Login attempt from mobile:", inputMobile);

        if (inputMobile === mobile && password === pass) {
            return res.send(true); // if login successfull means
        } else {
            return res.send(false); // if invalid details
        }
    } catch (err) {
        console.error(`Error in Login - ${err.message}`);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: err.message,
            success: false
        });
    }
});

// to start the backend server
app.listen(3000, () => {
    console.log("Server Started");
});