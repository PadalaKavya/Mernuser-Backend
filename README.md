# Mernuser
# `Defining Files:`
Server.js: Main folder of backend and to connect to database and all other routes.

userSchema.js : Defines a mongoose schema. The structure and fields of the database.

Auth.js: consists of all routes to post or save the data into database or to retrieve the data from database and send it to the frontend. It consists of register to store the data into database. Login to  create a token and cookie to identify and create a session for user. Profile or about is to display the user details. 

Authenticate: It uses JWT to create a token for the user every time he login. This is to ensure that the user can access the profile page only after he login’s. It is basically to authenticate the user.
