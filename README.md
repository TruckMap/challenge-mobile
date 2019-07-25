# TruckMap Engineering Coding Challenge

This project is intended to touch a few key technologies that TruckMap uses regularly to help us understand how you think about trade-offs between time, usefulness, and simplicity in a realistic setting.

We are respectful of your time.  If we’ve requested you do this challenge we’ll pay **$200 for any submission** in good faith effort, regardless if you’re ultimately hired.

## Project Description

You will build a react-native app that allows users to search through a random list of people, puts a selected person result randomly on a map, and displays a simple profile card about them.

## Requirements

- Use react-native to build a native mobile app.
- Allow the user to search through a random list of people.  These people also have a random association of interests and hobbies.  The relevant APIs and data are in `src/api/` of this repository.
- Assume that accessing the people and interests via "API" is asynchronous, like if it was really coming from a server.
- Use Redux to store the application’s state and process any network requests.
- Render a fullscreen map as the main screen. Think Google Maps UI but instead of searching addresses it’s searching people.
- Allow the user to "typeahead search" the people and show the autocompleted results as they type. The info indexed for the search is up to you, but there are potential ways to be creative here.
- Do the search logic in the client.  There are many algorithm interview questions about data structures you’ll never realistically use as a front-end engineer, but this is a practical way to create an elegant solution that handles a few edge cases.
- When the user selects a person in the results, put that person on the map at a random location (location boundaries are up to you).
- Show a profile card for the person on the map.  The info shown and UI of the card are up to you.
- Geocode where the user was randomly placed and include some of that info in the profile.  This is to demonstrate use of network requests with Redux and handling the “No Results” edge case (like if they were placed in water).  Take a look [here](https://services.gisgraphy.com/reversegeocoding/search?format=json&lat=41.88832&lng=-87.623177) for a free geocoding endpoint.
- Feel free to use any additional third-party styling or component libraries.

## What We're Looking For

- Modular use of Redux and a presentational component/container [structure](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).
- You separate business logic from the app's UI components.
- Asthetic look-and-feel of the app UI.  We will have design resources available, but there will be times when you'll need to fill in the gaps without outside help.

## Getting Started

We recommend getting started by downloading this package (don't fork, please!) and running `npm install` to set up the initial dependencies and app file structure.

## Submitting

- Replace this `README.md` with any instructions, a few screenshots, assumptions you made, and a few ideas for features you might add if the app was taken any further.
- Zip and email your repository to us. You can remove `node_modules` to reduce size.
- We will provide constructive and timely feedback on your submission with a clear direction around next steps.  Thank you for your time.
