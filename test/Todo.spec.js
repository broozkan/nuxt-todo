import { mount } from '@vue/test-utils'
import Todo from '../components/Todo.vue'


describe('Todo component tests', () => {
    it('Is component takes the props', () => {
        const propsData = {
            title: 'test title',
            is_done: true
        }
        const wrapper = mount(Todo, { propsData })

        expect(wrapper.html()).toContain(propsData.title)
        expect(wrapper.html()).toContain('alert-success')


    })
})