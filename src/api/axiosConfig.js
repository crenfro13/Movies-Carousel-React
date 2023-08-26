import axios from 'axios';

export default axios.create({
    baseURL: 'https://e1ed-136-33-134-169.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});