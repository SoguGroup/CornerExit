var db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the events
    // app.get("/api/userSignup", function (req, res) {
    //     var query = {};
    //     if (req.query.googleId) {
    //         query.googleId = req.query.googleId;
    //     }

    //     db.UserSignup.findAll({
    //         where: query,
    //         include: [db.User]
    //     }).then(function (dbUserSignup) {
    //         res.json(dbUserSignup);
    //     });
    // });

    // // Get route for retrieving a single event
    // app.get("/api/userSignup/:id", function (req, res) {
    //     db.UserSignup.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //         include: [db.User]
    //     }).then(function (dbUserSignup) {
    //         res.json(dbUserSignup);
    //     });
    // });

    // POST route for saving a new event
    app.post("/api/userSignup", function (req, res) {
        console.log("hit")
        db.UserSignup.create({
            EventId: req.body.eventId,
            UserId: req.body.userId
            
        }).then(function (dbUserSignup) {
            res.json(dbUserSignup);
        });
    });

//     // DELETE route for deleting userSignup
//     app.delete("/api/userSignup/:id", function (req, res) {
//         db.UserSignup.destroy({
//             where: {
//                 id: req.params.googleId
//             }
//         }).then(function (dbUserSignup) {
//             res.json(dbUserSignup);
//         });
//     });

//     // PUT route for updating userSignup
//     router.put("/api/userSignup", function (req, res) {
//         db.UserSignup.update(
//             req.body,
//             {
//                 where: {
//                     id: req.body.googleId
//                 }
//             }).then(function (dbUserSignup) {
//                 res.json(dbUserSignup);
//             });
//     });
};


