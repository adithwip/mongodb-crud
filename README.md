# mongodb-crud

## Simple RESTFUL App
Demo app with basic REST API and using MongoDB as Database.

#### List of user routes:

| Route                          | HTTP          | Description  |
| ------------------------------ |:-------------:| ------------:|
| ```/api/signup```   | POST    | Sign up with new user info |
| ```/api/signin```   | POST    | Sign in while get an access token based on credentials |
| ```/api/books```   | GET         | Get all the books info(admin only) |
| ```/api/books/:id``` | GET       | Get a single user info(admin and/or authenticated user)|
| ```/api/books```   | POST        | Create a user (admin only) |
| ```/api/books/:id``` | DELETE    | Delete a user (admin only) |
| ```/api/books/:id```  | PUT      | Update a user with new info (admin and/or authenticated user) |

#### Usage:

With only npm:
```
npm init
npm install express-generator --save
npm install
npm install mongodb --save
```

Access the website via ```http://localhost:3000``` or API via ```http://localhost:3000/api```
