# Local CRUD on nodeJS CLI with yargs  

## About 
Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface,
this is task controller where we are simulating a db with a data.json file that storage the tasks 
that we want to save , you will be able to CRUD any kind of task and its respective state (true or false) , all this with the command line commands and flags with yargs
we  are implementing 4 commands  
*create,delete,list,update
more about yargs: https://www.npmjs.com/package/yargs

## create 
the create command allows us to create new task , this command has one and required flag that is description \
# flags: 
*`--description or -d` with this flag we set the task description

## list
the list command allow us to list the tasks sotoraged in the data.json file \
this command has no flags

## update
the list command allows us to update a task in the data.json , we will be able to update the task status completed(true or false)  we will be able to use this commands using the description and completed flags \
#flags:
`--description or -d` with this flag we define the task description that we want to update \
`--completed or -c` with this flag we define the task status the values must to be true or false \

the only required flag in this command is the description flag , the completed flag is not need but has a default value of true 

## delete
the list command allows us to delete a task in the data.json , we delete this task using the same description sotoraged before passing this on the description flag \
#flags:
`--description or -d` with this flag we define the task description that we want to delete \

the description flag is required .


## Getting started 

* Clone the repo https://github.com/julianfelipe98/Example-yargs
* In the proyect directory : `npm install`

## Example 


## create 
* `node app.js create -d workout `
* `node app.js create -d run `
this sentence have to crete two new tasks in the data.json file with completed status false  
## list 
* `node app.js list`
this sentece have to show us the task for doing , at the moment we just have the workout and run tasks.
## delete 
* `node delete -d run`
this setence have to delete the run task in the data.json file 
## update 
* `node update -d workout -c true`
this sentence have to update the task workout status completed to true 
