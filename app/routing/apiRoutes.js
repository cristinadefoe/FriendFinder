var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function (app) {

    // Your`apiRoutes.js` file should contain two routes:

    // GET route with the url`/api/friends`. This will be used to display a JSON of all possible friends.
    app.get('/api/friends', function (req, res) {
        // Display friends data in json format
        res.json(friendsData);
    });

    // A POST routes`/api/friends`.This will be used to handle incoming survey results.
    // This route will also be used to handle the compatibility logic. 
    app.post('/api/friends', function (req, res) {
        if (friendsData.length < 5) {
            res.json(true);

            app.use(function (req, res) {
                res.sendFile(path.join(__dirname + '/../public/home.html'));
            });
        }
