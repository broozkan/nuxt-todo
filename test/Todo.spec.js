import { mount } from '@vue/test-utils'
import Todo from '../components/Todo.vue'


describe('Todo component tests', () => {
    it('Is component takes the props properly', () => {
        const tododata = {
            id: 1,
            title: 'test title',
            is_done: true
        }
        const wrapper = mount(Todo, {
            propsData: { todo: tododata }
        })

        expect(wrapper.html()).toContain(tododata.title)
        expect(wrapper.html()).toContain('alert-success')


    })
})