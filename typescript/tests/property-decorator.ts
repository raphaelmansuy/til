const fetch = require("node-fetch")

interface ITodo {
  id: string
  description: string
}

function GetTodo(target: any, name: string) {
  const init = () => {
    return fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((response) => response.json())
  }

  Object.defineProperty(target, name, {
    get: function () {
      return init()
    }
  })
}

class ToDoService {
  @GetTodo
  todos: Promise<ITodo[]>
}

const myTodo = new ToDoService().todos.then((list) => console.table(list))
