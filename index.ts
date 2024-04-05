import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    console.log(`ID: ${id}\nTitle: ${title}\nCompleted: ${completed}`);
  } catch (error: any) {
    console.error(error.message);
  }
})();
