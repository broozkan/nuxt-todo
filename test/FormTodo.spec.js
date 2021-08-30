import { mount } from '@vue/test-utils'
import FormTodo from '../components/FormTodo.vue'


describe('Form Todo Tests', () => {
    it('should exist and gets the props', () => {
        const formInıtialData = {
            todo: {
                title: '',
                is_done: false
            }
        }
        const wrapper = mount(FormTodo, {
            propsData: formInıtialData
        })
        expect(wrapper.exists()).toBe(true)
    })
})