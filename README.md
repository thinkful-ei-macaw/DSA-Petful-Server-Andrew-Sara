# Petful Client

Written by Andrew Burchett and Sara Mills

## Link to remote server

https://git.heroku.com/petful-challenge-as

## Link to client repo

https://github.com/thinkful-ei-macaw/DSA-Petful-Client-Andrew-Sara.git

## Link to API repo

https://github.com/thinkful-ei-macaw/DSA-Petful-Server-Andrew-Sara.git

### Summary

This is an animal shelter for adoption of cats and dogs. The adoption process here works strictly on a "First-In, First-Out" basis. The user can adopt a cat, or a dog, or both, but the user may only adopt the animal that came to the shelter first. If the user wants to adopt a new pet, the user may add their name to the list. When it is the users turn, the user will be able to adopt the currently available pet.

# Technologies

This project was built using Node.js and Express

# to start the server

npm run dev

## /cat Endpoint

GET
DELETE - deletes first cat in the queue and returns the next cat

## /dog Endpoint

GET
DELETE - deletes first dog in the queue and returns the next dog

## /people Endpoint

GET
DELETE
body: person: xxx
returns all people in queue

POST
body: person: xxx
returns all people in queue
