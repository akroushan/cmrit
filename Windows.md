Nodejs intallation

1. Go to this link : https://nodejs.org/en/
2. Download 5.6.0 Stable version
3. Complete the installation process.

Install git

1. Download package from here https://git-scm.com/download/win
2. Install the git package
3. Choose to use from windows cmd prompt. Everything else select to default



Create a folder called "cmrit"

1. mkdir cmrit
2. cd cmrit
3. init npm (keep on pressing enter till it asks you to say "yes")
5. npm install express --save
6. npm install mongoose --save


Installing mongodb

1. Download package from here : https://www.mongodb.org/downloads#production
2. It will install at this location : C:\Program Files\MongoDB\Server\3.2\bin
3. Open the cmd prompt. and change the path to above location 
cd C:\Program Files\MongoDB\Server\3.2\bin
4. Run this command 
msiexec.exe /q /i mongodb-win32-x86_64-2008plus-ssl-3.2.3-signed.msi ^
            INSTALLLOCATION="C:\mongodb" ^
            ADDLOCAL="all" 

5. Now create the path where the mongo stores the data

md \data\db

6. Start mongod service and keep it open
mongod.exe

7. Open another terminal and go to the same path and run a command to start mongo
mongo.exe

8. Now you will be connected to mongod server.
