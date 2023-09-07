
#
# Welcome to **Jot**!

**Jot** is a minimalist note-taking app developed with the **MERN** stack.

Write, edit, and delete notes that sync with an online database, assign clickable tags that filter results, and search your notes for text or tags.

#
# Getting Started

1. Download the source files directly from the [Git Repository](https://github.com/Comafly/Jot). 
 
    Or, if you're using a CLI, you can simply execute the following command: 
    > git clone https://github.com/Comafly/Jot.git

2. Open the ***'.ENV'*** file in the root folder, and replace the *sample URI* with your [MongoDB URI](https://www.mongodb.com/docs/manual/reference/connection-string/):

    > MONGO_URI=mongodb+srv://YourUser:YourUserPassword@cluster0.owdvrg5.mongodb.net/YourDatabaseName?retryWrites=true&w=majority

3. Navigate to the ***'src'*** folder, open the file named ***'notes-context.js'***, and change the value of dbCollection to the name of the Collection in your database:

    > const dbCollection = 'YourCollectionName';

#
# How to Use

Ensure all dependencies are installed by executing the following command:
    
    > npm install

Start the server located in ***'src'***:

    > node src/server.js

And in a new terminal, execute the final command to start the app:

    > npm src/start


Congratulations! You are now running **Jot** locally, and it is ready to be customized and deployed.

#
# MERN

MERN is an acronym that stands for: **M**ongoDB, **E**xpress, **R**eact, **N**ode.

[**MongoDB**](https://www.mongodb.com/) - A NoSQL database that uses a **document-oriented** data model to store and manage data.

[**Express**](https://expressjs.com/) - Manages **server-side** HTTP transactions, route management, middleware, and error handling.

[**React**](https://reactjs.org/) - Creates dynamic components for UIs that intelligently update as the application state changes.

[**Node**](https://nodejs.org/en/) - A secure runtime environment used to execute JavaScript code on **back-end servers**.

#
## Additional Modules

In addition to the MERN stack, extra modules have been implemented to provide more functionality and greater security.

[**Mongoose**](https://mongoosejs.com/docs/) - Models and interacts with [MongoDB](https://www.mongodb.com/) databases; simplifying schemas and CRUD operations.

[**CORS**](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - **Cross-Origin Resource Sharing** adds special HTTP headers to server-side response, allowing the application to access resources from a different *origin* than the one that served the original page.

[**Axios**](https://axios-http.com/) - Manages client-side HTTP transactions with a simple API that makes it easy to handle promise-based responses.

[**Dotenv**](https://www.dotenv.org/) - A zero-dependency module that loads private environment variables from a **.env** file, allowing secure access to sensitive information like API keys and credentials.

#
### About
#
Developed by Brendan Bennett  
February 24th, 2023

![GitHub](https://img.shields.io/github/license/Comafly/Jot?label=license&style=for-the-badge)
