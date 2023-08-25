import axios from 'axios';

export default axios.create({
    baseURL: 'https://1b5f-136-33-134-169.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});