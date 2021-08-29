import { mount } from '@vue/test-utils'
import DeleteButton from '../components/DeleteButton.vue'


describe('Delete Button Tests', () => {
    it('check existance', () => {
        const wrapper = mount(DeleteButton)

        expect(wrapper.exists()).toBe(true)
    })

    it('check receive props', () => {
        const id = Math.floor(Math.random() * 100000)
        const wrapper = mount(DeleteButton, {
            propsData: {
                id
            }
        })

        expect(parseInt(wrapper.attributes('todo-id'))).toBe(id)
    })

    it('check delete function called when clicked', async () => {
        const deleteTodo = jest.fn()
        const wrapper = mount(DeleteButton, {
            methods: {
                deleteTodo
            }
        })
        await wrapper.trigger('click')
        expect(deleteTodo).toBeCalled()

    })
})