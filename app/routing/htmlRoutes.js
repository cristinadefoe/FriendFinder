var path = require('path');

module.exports = function (app) {

    // Your`htmlRoutes.js` file should include two routes:

    // GET Route to`/survey` which should display the survey page.
    // When user hits survey button take user to survey.html page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // Default, catch-all route that leads to`home.html` which displays the home page. 
    // Take user to home.html page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}

