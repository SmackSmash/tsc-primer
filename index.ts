import axios from 'axios';

(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const { id, title, completed } = response.data;
    console.log(`ID: ${id}\nTitle: ${title}\nCompleted: ${completed}`);
  } catch (error: any) {
    console.error(error.message);
  }
})();
