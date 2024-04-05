import axios from 'axios';

const fetchTodo = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
  } catch (error: any) {
    console.error(error.message);
  }
};

fetchTodo();
