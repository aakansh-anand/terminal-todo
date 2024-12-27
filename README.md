## TERMINAL TODO

It's a basic Todo list file which stores you todos in a `todo.json` file. You can do the following things with the commands.


- Add Task : ```node todo.js add "whatever-your-task"```
- Remove Task : ```node todo.js remove 1``` where `1` is the index number assigned to task.
- Update : ```node todo.js change <index> <change-you-want>```
- List all tasks : ```node todo.js list```
- List pending tasks : ```node todo.js list-pending```
- List in-progess tasks : ```node todo.js list-in-progress```
- List done tasks : ```node todo.js list-done```
- Change status to done : ```node todo.js done <index>```
- Change status to pending : ```node todo.js pending <index>```
---

### Note for linux & Mac users (WSL included).

I understand bash scripts as well, So I turned my `.bashrc` file and made a custom command where this runs automatically at every launch of terminal. It's is recommended to do the same to make it useful every day.

If you're a mac user, then you don't have `.bashrc` but `.zshrc` so configure accordingly.

---
Personally I changed ```node todo.js``` with an `alias task="node todo.js"` so understand the syntax of bash and then only apply this kind of thing. I also applied some colors based on your terminal theme, it will look as per you theme so it could be good, bad or normal.

### Don't mess with your .bashrc or .zshrc

Make a clone before you make changes in the original file.

## Checkout the Project at the following URL:

https://github.com/aakansh-anand/terminal-todo

## Inspired by Roadmap.sh
https://roadmap.sh/projects/task-tracker

### Enjoy :)
