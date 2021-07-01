# User-Manager-PostgreSQL

TO START THE DATABASE LOCALLY:
Open up dBeaver and click the plug in the top left corner that says "Create Connection".
Select PostgreSQL and click Next.
Populate the following fields with the credentials provided:

Host:
ec2-23-23-164-251.compute-1.amazonaws.com

Port:
5432

Database:
drua7sln83ujm

Username:
xvbsljtbiykwqo

Password:
c888f9a557783df810d20ed572add95d0748c527c9721846236a5cc02a923ef6

Click Finish and the database should be connected. You can open an SQL editor and do "SELECT * FROM users" to see the default users already populating the database.

TO START THE APP LOCALLY:
After connecting the database, cd into the User-Manager-Postgres folder and in the terminal, type the command:
npm run local

Then in your browser, go to the web address:
localhost:5000

The app should be up and running.
