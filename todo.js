/* 
We are trying to read files and write data on it back using Node.js
First, we imported the "fs" node module, we used the classic way of
adding the module, ES6+ ways are also applicable with proper syntax
 
Second, we gave the file in which we want to read and write the data
then we made command and arguments. Command and arguments are used
with  node.js as runner to run the program we made. 
(that's how you use bash files as well, commands and arguments are just 
like flags in bash)
*/

/* 
Third, we set the args and commands with process.argv, it is used to add
the commands and args as flags to be used with node.js. They doesn't work
explicitly, we have to define them. *commands & args are placeholders only*

Fourth we check the commands with any prefered way of conditionals checks
and run the required code for the condition. Here we have 3 conditions to
check, list / add / remove. If user doesn't give any of them, show error.

Fifth, Add the functionalities to the functions you're passing starting 
with loading everything from the file. To achieve that we're going to use
try-catch block because there could be a scene where file either doesn't
exists or it could be secured via some method so we can't read that file.

We read that file using "fs" package "readFileSync" to read the file in a
synchrounous nature and store it in some variable, This is called "buffer"
data. Then we have to convert that file data into string using "toString()"
method in javascript. When you convert the buffer into string, it turns out
to be JSON format, now we can parse with JSON.parse(dataJSON) to get array
format.
*/
const fs = require("fs");
const filePath = `${__dirname}/todo.json`;

const command = process.argv[2];
const argument = process.argv[3];
const updater = process.argv[4];

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};
const addTask = (task) => {
  if (task === "") {
    console.log("Task is empty");
    return;
  }
  const tasks = loadTasks();
  const objectBase = {
    task: task,
    done: "Pending",
  };
  tasks.push(objectBase);
  saveTasks(tasks);
  listTasks();
};

const listTasks = () => {
  const allTasks = loadTasks();
  console.log(
    "---------------------------------------------------------------"
  );
  if (allTasks.length === 0) {
    console.log("   No tasks to show\n");
    return;
  }
  allTasks.forEach((item, index) => {
    console.log(`   ${index + 1} - ${item.task} : ${item.done}`);
    console.log(
      "---------------------------------------------------------------"
    );
  });
};

function listDone() {
  const allTasks = loadTasks();
  console.log(
    "---------------------------------------------------------------"
  );
  if (allTasks.length === 0) {
    console.log("   No tasks to show\n");
    return;
  }
  allTasks.forEach((item, index) => {
    if (item.done === "Done") {
      console.log(`   ${index + 1} - ${item.task} : ${item.done}`);
      console.log(
        "---------------------------------------------------------------"
      );
    }
  });
}

function listPending() {
  const allTasks = loadTasks();
  console.log(
    "---------------------------------------------------------------"
  );
  if (allTasks.length === 0) {
    console.log("   No tasks to show\n");
    return;
  }
  allTasks.forEach((item, index) => {
    if (item.done === "Pending") {
      console.log(`   ${index + 1} - ${item.task} : ${item.done}`);
      console.log(
        "---------------------------------------------------------------"
      );
    }
  });
}

function listInProgress() {
  const allTasks = loadTasks();
  console.log(
    "---------------------------------------------------------------"
  );
  if (allTasks.length === 0) {
    console.log("   No tasks to show\n");
    return;
  }
  allTasks.forEach((item, index) => {
    if (item.done === "In Progess") {
      console.log(`   ${index + 1} - ${item.task} : ${item.done}`);
      console.log(
        "---------------------------------------------------------------"
      );
    }
  });
}

function removeTask(index) {
  const allTasks = loadTasks();
  allTasks.splice(index - 1, 1);
  saveTasks(allTasks);
  listTasks();
}

function updateTask(index, updated) {
  const allTasks = loadTasks();
  allTasks.splice(index - 1, 1, {
    task: updated,
    done: allTasks[index - 1].done,
  });
  saveTasks(allTasks);
  listTasks();
}

function doneTask(index) {
  const allTasks = loadTasks();
  allTasks.splice(index - 1, 1, {
    task: allTasks[index - 1].task,
    done: "Done",
  });
  saveTasks(allTasks);
  listTasks();
}

function pendingTask(index) {
  const allTasks = loadTasks();
  allTasks.splice(index - 1, 1, {
    task: allTasks[index - 1].task,
    done: "Pending",
  });
  saveTasks(allTasks);
  listTasks();
}

function markInProgress(index) {
  const allTasks = loadTasks();
  allTasks.splice(index - 1, 1, {
    task: allTasks[index - 1].task,
    done: "In Progess",
  });
  saveTasks(allTasks);
  listTasks();
}

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else if (command === "change") {
  updateTask(parseInt(argument), updater);
} else if (command === "done") {
  doneTask(parseInt(argument));
} else if (command === "pending") {
  pendingTask(parseInt(argument));
} else if (command === "in-progress") {
  markInProgress(parseInt(argument));
} else if (command === "list-done") {
  listDone();
} else if (command === "list-pending") {
  listPending();
} else if (command === "list-in-progress") {
  listInProgress();
} else {
  console.log("Command not found.");
}
