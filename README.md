# Mernuser
# `Defining Files:`
Server.js: Main folder of backend and to connect to database and all other routes.

userSchema.js : Defines a mongoose schema. The structure and fields of the database.

Auth.js: consists of all routes to post or save the data into database or to retrieve the data from database and send it to the frontend. It consists of register to store the data into database. Login to  create a token and cookie to identify and create a session for user. Profile or about is to display the user details. 

Authenticate: It uses JWT to create a token for the user every time he login. This is to ensure that the user can access the profile page only after he login’s. It is basically to authenticate the user.

[frontend code](https://github.com/PadalaKavya/MernUser-frontend)
Usecase-1: Data transfer from application to NUC.

A simple registration form does the transfer. First, the user fills out the form and hits submit button. 
We check the conditions name, mobile no, email-Id. 
We use `findone` to do this. 

If the user does not exist in the database we add him.
Else we ask them to log in. 

Usecase-2: Data transfer from NUC to the Main server.

First, we find the user that needs to be transferred.
We use `find	` here. 
Once the user is found the NUC, we use `insertmany` to move the mentioned user to the main server(MongoDB).

Usecase-3: Data transfer from NUC to the main server(update).
We use find to check if the user already exists. (name, email, mobile-no)
If the user exists we need to update the report. 
Here we use `find and update`.


Usecase-4: Delete data in NUC after a certain period of time.
We use TTL to delete the data. 

TTL (Time-To-Live) indexes are special single-field indexes that MongoDB can use to automatically remove documents from a collection after a certain amount of time.

![image](https://user-images.githubusercontent.com/78220075/190911059-f749d626-2e33-470c-8058-96183292478f.png)
