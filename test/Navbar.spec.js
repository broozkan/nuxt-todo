import { mount } from '@vue/test-utils';
import Navbar from '../components/Navbar.vue';

describe('Navbar', () => {
    const wrapper = mount(Navbar)

    it('Should Add Todo exist', () => {
        expect(wrapper.find(".nav-item:nth-child(1)").html()).toContain("Add Todo")
    })


    it('Should List Todo exist', () => {
        expect(wrapper.find(".nav-item:nth-child(2)").html()).toContain("List")
    })
})