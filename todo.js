const fs = require("fs");
const colors = require("colors");
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
    "\t-----------------------------------------------------".green
  );
  if (allTasks.length === 0) {
    console.log("\tNo tasks to show\n");
    return;
  }
  allTasks.forEach((item, index) => {
    console.log(`\t${index + 1} - ${item.task} : ${item.done}`.italic.magenta);
    console.log(
      "\t-----------------------------------------------------".cyan
    );
  });
};

function listDone() {
  const allTasks = loadTasks();
  console.log(
    "\t-----------------------------------------------------"
  );
  if (allTasks.length === 0) {
    console.log("\tNo tasks to show\n");
    return;
  }
  allTasks.forEach((item, index) => {
    if (item.done === "Done") {
      console.log(`\t${index + 1} - ${item.task} : ${item.done}`);
      console.log(
        "\t-----------------------------------------------------"
      );
    }
  });
}

function listPending() {
  const allTasks = loadTasks();
  console.log(
    "\t-----------------------------------------------------"
  );
  if (allTasks.length === 0) {
    console.log("\tNo tasks to show\n");
    return;
  }
  allTasks.forEach((item, index) => {
    if (item.done === "Pending") {
      console.log(`\t${index + 1} - ${item.task} : ${item.done}`);
      console.log(
        "\t-----------------------------------------------------"
      );
    }
  });
}

function listInProgress() {
  const allTasks = loadTasks();
  console.log(
    "\t-----------------------------------------------------"
  );
  if (allTasks.length === 0) {
    console.log("\tNo tasks to show\n");
    return;
  }
  allTasks.forEach((item, index) => {
    if (item.done === "In Progess") {
      console.log(`\t${index + 1} - ${item.task} : ${item.done}`);
      console.log(
        "\t-----------------------------------------------------"
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

function listAllCommands() {
  console.log(
    ` \tlist\n \tlist-in-progress\n \tlist-pending\n \tlist-done\n \tadd\n \tremove\n \tupdate\n \tdone\n \tpending\n \tin-progress\n`
  );
}

if (command === "add") {
  addTask(argument);
} else if (command === "commands") {
  listAllCommands();
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else if (command === "update") {
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
