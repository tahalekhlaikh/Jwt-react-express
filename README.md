# jwt-express-react-example

A two part example application with a frontend and backend.

Try it out at: http://jwt-express-react-example.trina.si/


## Functionality

- Sign up
- Log in
- [Logged in] Log out
- [Logged in] Change password
- List of all users in the application (sorted by most-liked first)
- Show all users that are currently in the system
- Show number of likes
- [logged in] Like/unlike a user
- jwt token authentication with passport
- At least one test for all endpoints

## Tools used

- [Node.js](https://nodejs.org/en/) v8 (async/await functionality)
- [mongodb](https://www.mongodb.com/), [mongoose](https://mongoosejs.com/)
- [Express.js](https://expressjs.com/)
- [Passport.js](http://www.passportjs.org/) for authentication
- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/) for state management
- [Mocha](https://mochajs.org/) for testing

## REST endpoints
Features the following REST endpoints:

- /signup

    Sign up to the system (username, password)
    
- /login

    Logs in an existing user with a password
    
- **/me**

    Get the currently logged in user information
    
- **/me/update-password**

    Update the current user's password
    
- /user/:username/

    List username & number of likes of a user

- **/user/:username/like**

    Like a user

- **/user/:username/unlike**

    Unlike a user

- /most-liked

    List users in a most liked to least liked

Each user can like another only once, and they can unlike each other.
The bolded endpoints are authenticated calls.

## Usage

### Development
- Run `npm start` in `frontend/`, server will run at `http://localhost:3000`
- Run `npm start` in `backend/`, server will run at `http://localhost:8000`
