## Setup (Development)
Verify brew is installed  
`brew --version`  
If this failed: https://brew.sh/

`brew install redis`  

### Starting and stopping Redis in the foreground
To test your Redis installation, you can run the redis-server executable from the command line:  

`redis-server`  

If successful, you'll see the startup logs for Redis, and Redis will be running in the foreground.  
To stop Redis, enter Ctrl-C.  


## Starting and stopping Redis using launchd
As an alternative to running Redis in the foreground, you can also use launchd to start the process in the background:  

### brew services start redis
This launches Redis and restarts it at login.  

`brew services start redis`  
`brew services restart redis`  

You can check the status of a launchd managed Redis by running the following:  

`brew services info redis`  

If the service is running, you'll see output like the following:  

`redis (homebrew.mxcl.redis)`  
`Running: ✔`  
`Loaded: ✔`  
`User: miranda`  
`PID: 67975`  
To stop the service, run:  

`brew services stop redis`  

### Connect to Redis
Once Redis is running, you can test it by running redis-cli:  

`redis-cli`  
Test the connection with the ping command:  

`127.0.0.1:6379> ping`  
`PONG`  

## Setup (Production)

https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/#install-redis-properly


## Also see:  
https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/


## Windows

### Install WSL Ubunto
`sudo apt update`  
`sudo apt upgrade`  

### Install redis-server in Ubuntu
`sudo apt install redis-server`  

### Start/Stop/Test
`sudo service redis-server start`  
`sudo service redis-server status`  
`sudo service redis-server stop`  

## Start worker
The worker will monitor the redis queue and pull out jobs to process.
`node worker.js`  

### Test Worker
In browser use the following URL:
`https://localhost:4000/api/addqueue`  
or
`https://localhost/api/addqueue`  

You should see this in the worker terminal
`Processing job: 1 Hello, Queue!`  
`Job 1 is active`  
`Job ID 1 completed with result: { status: 1 }`  
