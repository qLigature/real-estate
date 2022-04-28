# SKYBRAND

A Single Page Application for providing accessible and affordable real estate services to customers in the Philippines. Built using a MERN stack (MongoDB, Express, ReactJS, Node.js), following basic MVC architecture.

## Build

- use `npm install` in the root folder
- create an .env file in the root directory with the following values:

```
NODE_ENV = production
PORT = 5000
ACCESS_TOKEN_SECRET = <insert_secret_here>
DB_CONNECTION = <insert_url_here>
```

- create your own cluster in MongoDB Atlas, then paste the connection string to `DB_CONNECTION` in your .env file

## Current Features

1. Simple but stylish landing page, with a user-friendly navigation bar
2. Secure registration and login system for both admins and users
3. User/admin authorization using JWT and cookies
