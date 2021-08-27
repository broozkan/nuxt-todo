import { mount } from '@vue/test-utils';
import FormAddTodo from '../components/FormAddTodo.vue';


describe('Form Add Todo tests', () => {

    const wrapper = mount(FormAddTodo)
    it('should todo title input exist', () => {
        const input = wrapper.get("[data-test='title']")
        expect(input.vm).toBeTruthy()
    })
})