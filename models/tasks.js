const fs = require("fs");

let listToDo = [];
/**
 * create a task and save it and handling a response time
 * @date 2020-12-21
 * @param {task description} description
 * @returns {NA}
 */
const create = async (description) => {
  loadFile();
  let toDo = {
    description,
    completed: false,
  };
  console.log(toDo);
  listToDo.push(toDo);
  await saveOnFile();
  console.log("finish");
};
/**
 * saving listToDo in data.js and simulating a response time
 * @date 2020-12-21
 * @returns {confirmation of created file}
 */
const saveOnFile = () => {
  return new Promise((resolve, reject) => {
    let data = JSON.stringify(listToDo);
    if (!fs.existsSync("./persistence")) fs.mkdirSync("./persistence");
    setTimeout(() => {
      fs.writeFile("persistence/data.json", data, (err) => {
        if (err) reject(err);
        else resolve(`created file`);
      });
    }, 3000);
  });
};

/**
 * load the data.json in the listToDo array
 * @date 2020-12-21
 * @returns {NA}
 */
const loadFile = () => {
  try {
    listToDo = require("../persistence/data.json");
  } catch(error) {
    listToDo=[];
  }
};

/**
 * return the listToDo array
 * @date 2020-12-21
 * @returns {Task[]}
 */
const getList=()=>{
  loadFile();
  return listToDo;
}

/**
 * update the register with the same description 
 * @date 2020-12-21
 * @param {string} description
 * @param {boolean} completed=true
 * @returns {boolean}
 */
const update=(description,completed=true)=>{
  loadFile();
  let index=listToDo.findIndex((task)=> task.description===description);
  if(index>=0){
    listToDo[index].completed=completed;
    saveOnFile();
    return true;
  }else {
    return false;
  }
}

/**
 * delete a task from the data.json file
 * @date 2020-12-21
 * @param {string} description
 * @returns {string}
 */
const deleteResgiter=(description)=>{
  loadFile();
  let i=listToDo.findIndex((task)=> task.description===description);
  if (i>=0) {
    listToDo.splice(i,1)
    saveOnFile();
    return 'deleted'
    
  } else {
    return `the task ${description} doesnt exist in the data file`
    
  }
}

module.exports = {
  create,
  getList,
  update,
  deleteResgiter
};
