Instructions 

Nodejs installation on ubuntu.

1. sudo apt-get install nodejs
2. sudo ln -s /usr/bin/nodejs /usr/bin/node
3. sudo apt-get install npm

P.S : For other operating systems please search on google and install nodejs and npm(node package manager)

Create a folder called "cmrit"

4. mkdir cmrit
5. cd cmrit
6. init npm (keep on pressing enter till it asks you to say "yes")
7. npm install express --save
8. npm install mongoose --save


Install git (version control)

1. sudo apt-get install git

Install mongoDB

1. sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
2. For ubuntu 12.02 
          echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
For ubuntu 14.04
          echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
3. sudo apt-get update
4. sudo apt-get install -y mongodb-org
5. Now start mongodb : sudo service mongod start

P.s : If you get any error like this : <i>Failed global initialization: BadValue Invalid or no user locale set. Please ensure LANG and/or LC_* environment variables are set correctly.</i> Please use this command "export LC_ALL=C"

