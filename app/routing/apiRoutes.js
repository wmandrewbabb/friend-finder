var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

    var user = req.body;

    for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    var matchedUserIndex = 0;
    var scoreDifference = 40;

    for(var i = 0; i < friends.length; i++) {
        var totalDifference = 0;

        for(var x = 0; x < friends[i].scores.length; x++) {
            var difference = Math.abs(user.scores[x] - friends[i].scores[x]);
            totalDifference += difference;
        }

        if(totalDifference < scoreDifference) {
        matchedUserIndex = i;
        scoreDifference = totalDifference;
        }
    }

    friends.push(user);

    res.json(friends[matchedUserIndex]);
    
    });
};