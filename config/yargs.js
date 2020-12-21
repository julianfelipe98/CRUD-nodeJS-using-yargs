const yargs = require("yargs");
const description={ demand: true, alias: "d", desc: "Task description" };
const completed={ alias: "c", desc: "Mark as complete or pending a task"};
const { deleteResgiter } = require("../models/tasks");
/**
 * setting up the yargs commands and ther respectives flags
 */
const create = {
  description,
};
const deleteRegister = {
  description,
};
const update = {
  description,
  completed,
};
const argv = require("yargs")
  .command("create", "Create an element for doing", create)
  .command("update", "Update the completed task status", update)
  .command("delete", "Delete a task ", deleteRegister).argv;

module.exports = {
  argv,
};
