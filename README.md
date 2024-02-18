# Boredom Buster

![screenshot](public\img\image.png)

## Overview
Boredom Buster is a web application designed to help users find activities to do when they're feeling bored. It offers a simple interface where users can select the type of activity they're interested in and the number of participants, and the application provides a suitable suggestion based on these preferences.

## Main Features
- **Activity Selection**: Users can choose from a variety of activity types such as educational, recreational, social, charity, cooking, relaxation, or busywork.
- **Participant Selection**: Users can specify the number of participants for the activity.
- **Dynamic Suggestions**: The application dynamically fetches suggestions from an external API based on user preferences.
- **Random Activity Generation**: If no specific preferences are provided, the application generates a random activity suggestion.
- **Error Handling**: Proper error handling is implemented to manage incorrect combinations of preferences and to handle failed API requests.

## Technology Used
- **Express**: Express.js is used as the web application framework for Node.js.
- **Body-parser**: Body-parser middleware is utilized for parsing incoming request bodies.
- **Axios**: Axios is used for making HTTP requests to fetch activity suggestions from an external API.
- **EJS**: EJS (Embedded JavaScript) templates are used for server-side rendering of HTML pages.
- **Bootstrap**: Bootstrap framework is employed for styling the web interface, ensuring responsiveness and aesthetic appeal.

## How It Works
1. The user accesses the web application through a browser.
2. Upon loading the application, the user is presented with a form where they can select the type of activity and the number of participants.
3. Upon submitting the form, the application sends a POST request to the server.
4. The server receives the request and processes it by fetching activity suggestions from an external API based on the user's preferences.
5. The server then renders the response using EJS templates and sends it back to the client.
6. The client receives the rendered HTML page and displays the activity suggestion to the user.

## How to Use It
1. Clone the repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Install dependencies by running `npm install` in the project directory.
4. Start the server by running `npm start`.
5. Open your web browser and navigate to `http://localhost:8080`.
6. Select the type of activity and the number of participants from the dropdown menus.
7. Click the "Go" button to submit your preferences.
8. View the suggested activity displayed on the page.
9. Enjoy your newfound activity and beat boredom!
