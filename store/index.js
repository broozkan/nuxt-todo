import apiService from "../services/api.service";

export const state = () => ({
    todos: []
})

export const mutations = {
    ADD_TODO: (state, todo) => {
        state.todos.push(todo)
    },
    SET_TODOS: (state, todos) => {
        state.todos = todos
    },
    SET_TODO: (state, todo) => {
        state.todo = Object.assign({}, state.todo, todo)
    },
    DELETE_TODO: (state, id) => {
        const index = state.todos.findIndex((todo) => {
            todo.id === id
        })
        state.todos.splice(index, 1)
    },
    UPDATE_TODO: (state, todo) => {
        const index = state.todos.findIndex((todoMap) => {
            todoMap.id === todo.id
        })
        state.todos[index] = todo
    }
}


export const actions = {
    addTodo({ commit }, todo) {
        return apiService.addTodo(todo).then(() => {
            commit('ADD_TODO', todo)
        })
    },
    putTodo({ commit }, todo) {
        return apiService.putTodo(todo).then(() => {
            commit('UPDATE_TODO', todo)
        })
    },
    deleteTodoById({ commit }, id) {
        return apiService.deleteTodo(id).then((response) => {
            return commit('DELETE_TODO', id)
        })
    },
    fetchTodos({ commit }) {
        return apiService.getTodos().then((response) => {
            commit('SET_TODOS', response.data)
        })
    },
    fetchTodo({ commit }, id) {
        return apiService.getTodo(id).then((response) => {
            commit('SET_TODO', response.data)
        })
    }

}


export const getters = {

    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id == id)
    }
}