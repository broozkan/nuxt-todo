import axios from 'axios';

const apiClient = axios.create({
    baseURL: `http://localhost:8080/`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


export default {
    getTodos() {
        return apiClient.get('/todos')
    },
    getTodo() {
        return apiClient.get(`/todos/${id}`)
    },
    postTodo(todo) {
        return apiClient.post('/todos', todo)
    },
    putTodo(todo) {
        return apiClient.put(`/todos/${todo.id}`, todo)
    },
    deleteTodo(id) {
        return apiClient.delete(`/todos/${id}`)
    }
}