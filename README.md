## TERMINAL TODO

It's a basic Todo list file which stores you todos in a `todo.json` file. You can do the following things with the commands.

- Add Task : `node todo.js add "whatever-your-task"`
- Remove Task : `node todo.js remove 1` where `1` is the index number assigned to task.
- Update : `node todo.js change <index> <change-you-want>`
- List all tasks : `node todo.js list`
- Change status to done : `node todo.js done <index>`
- Change status to pending : `node todo.js pending <index>`

---

### Note for linux & Mac users (WSL included).

I understand bash scripts as well, So I turned my `.bashrc` file and made a custom command where this runs automatically at every launch of terminal. It's is recommended to do the same to make it useful every day.

If you're a mac user, then you don't have `.bashrc` but `.zshrc` so configure accordingly.

### DON'T MESS YOUR BASHRC or ZSHRC.

Make a clone before you make changes in the original file.

## Checkout the Project at the following URL:

https://github.com/aakansh-anand/terminal-todo
