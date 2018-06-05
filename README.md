# Friend Finder: Node and Express Servers Homework #11

This application matches friends with similar interests. Using a full-stack site hosted by Heroku, the user fills out a survey with ten questions. The application compares the data collected from the new user's survey vs. current friends array. Then it displays the name and picture of the person their most compatible with.

## Getting Started

### NPM Installations

Navigate to server.js file and run the following command lines in the terminal:

- `npm install express`
- `npm install body-parse`
- `npm install path`

### Deployment 

To check if the server is listening, navigate to the root of the project. In the terminal command line, run `node server.js`. This will display a message "FriendFinderApp Listening on PORT: 8080.

#### Screenshot

![screen shot 2018-06-04 at 10 17 06 pm](https://user-images.githubusercontent.com/35505038/40955290-593d4d24-6846-11e8-89b0-828057424cb8.png)

Then open your browser and type "localhost: 8080". This will display the home page and allow you to navigate through the site. 

An easier option, to see the site in action is by using the following link (hosted by Heroku): https://arcane-lake-35500.herokuapp.com.

#### Screenshot

![screen shot 2018-06-04 at 11 35 56 pm](https://user-images.githubusercontent.com/35505038/40956980-1d4500dc-6850-11e8-9fc6-1106b5fbf5f3.png)

Clicking the button, takes the user to the survey page.

#### Screenshot

![screen shot 2018-06-04 at 11 38 31 pm](https://user-images.githubusercontent.com/35505038/40957022-6c20cefc-6850-11e8-9cbd-247d9d5e1250.png)

The user must fill out ALL the fields in the survey and click the button. The application will output the user's best match and add the new user's information in the friends array.

#### Screenshot

![screen shot 2018-06-05 at 12 31 33 am](https://user-images.githubusercontent.com/35505038/40962159-f6e27a98-6861-11e8-91e2-024ed0aadc6b.png)

In the footer section, clicking on "API Friends List" will provide the current friends array data.

#### Screenshot

![screen shot 2018-06-05 at 12 36 24 am](https://user-images.githubusercontent.com/35505038/40962309-67bec23a-6862-11e8-85e3-ff2ff44364eb.png)

## Built With

* Visual Studio Code (https://code.visualstudio.com) - Text editor
* Javascript 
* HTML
* CSS
* jQuery (http://jquery.com) - Library
* Bootstrap (http://getbootstrap.com) - UI framework
* Node.js (https://nodejs.org/en) - Server-side javascript framework
* JSON (http://www.json.org) - Data format 
* Heroku (https://www.heroku.com) - Hosting service used to run application
* Express (https://expressjs.com) - Used to handle routing

## Author

* **Cristina Defoe** - (https://github.com/cristinadefoe)

## Acknowledgments

* Thanks to anyone's code that was used as inspiration.
