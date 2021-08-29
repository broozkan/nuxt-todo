import { mount } from '@vue/test-utils';
import FormAddTodo from '../components/FormAddTodo.vue';


describe('Form Add Todo tests', () => {

    const wrapper = mount(FormAddTodo)
    it('should todo title input exist and defined properly', () => {
        const input = wrapper.get("[data-testid='title']")
        expect(input.attributes('name')).toBe('title')
        expect(input).toBeTruthy()
    })

    it('should exist is done checkbox', () => {
        const checkbox = wrapper.get("[data-testid='is_done']")
        expect(checkbox.attributes('name')).toBe('is_done')
        expect(checkbox).toBeTruthy()
    })

    it('should exist submit button', () => {
        const submitButton = wrapper.get("button[type='submit']")
        expect(submitButton).toBeTruthy()
    })
})