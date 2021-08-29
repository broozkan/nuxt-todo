export const state = () => ({
    todos: [
        { "id": 1, "title": "HTML I", "is_done": true },
        { "id": 2, "title": "CSS", "is_done": true },
        { "id": 3, "title": "Responsive design", "is_done": true },
        { "id": 4, "title": "Git", "is_done": true },
        { "id": 5, "title": "JavaScript I", "is_done": true },
        { "id": 6, "title": "JavaScript II", "is_done": false }
    ]
})



export const mutations = {
    ADD_TODO: (state, todo) => {
        console.log(todo);
        state.todos.push(todo)
    },
    SET_TODOS: (state, todos) => {
        //state.todos = todos
    },
    SET_TODO: (state, todo) => {
        state.todo = Object.assign({}, state.todo, todo)
    },
    UPDATE_TODO: (state, todo) => {
        console.log(
            todo
        );
    }

}


export const actions = {
    addTodo({ commit }, todo) {
        return commit('ADD_TODO', todo)
    },
    putTodo({ commit }, todo) {
        return commit('UPDATE_TODO', todo)
    }

}


export const getters = {

    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id == id)
    }
}