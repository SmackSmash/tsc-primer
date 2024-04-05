import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`ID: ${id}\nTitle: ${title}\nCompleted: ${completed}`);
};

(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  } catch (error: any) {
    console.error(error.message);
  }
})();
