var path = require('path');

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/assets/login.html"));
    });

    app.get("/userSignup", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/assets/userSignup.html"));
    });

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the users page
        if (req.user) {
            res.redirect("/users");
        }
        res.sendFile(path.join(__dirname, "../public/assets/login.html"));
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the users page
        if (req.user) {
            res.redirect("/users");
        }
        res.sendFile(path.join(__dirname, "../public/assets/signup.html"));
    });


    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/users", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/users.html"));
    });
}