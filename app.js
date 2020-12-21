const argv = require('./config/yargs').argv;
const tasks =  require('./models/tasks');
const colors =  require('colors');

let command = argv._[0];
switch (command) {
    case 'create':
        console.log('create')
        tasks.create(argv.description)
        break;
    case 'update':
        console.log('in')
        tasks.update(argv.description,argv.completed)
        break;
    case 'delete':
        let deleted=tasks.deleteResgiter(argv.description);
        console.log(deleted);
        break;
    case 'list':
        let list=tasks.getList();
        list.forEach(task => { 
            console.log("=============TO DO ============".green)
            console.log(task.description);
            console.log("Estado: ",task.completed);
            console.log("==========================".green)
            
        });
        break;

    default:
        console.log('unknown command')
        break;
}