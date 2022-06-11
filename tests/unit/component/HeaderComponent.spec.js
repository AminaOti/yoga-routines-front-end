import { shallowMount } from "@vue/test-utils";
import headerComponent from "@/components/HeaderComponent.vue";

const APP_TITLE = `Yoga Routines` //get from env

const shallowMountHeaderComponent = () =>
    shallowMount(headerComponent, {});

describe('The Header Component - src/components/HeaderComponent.vue', () => {

    test(`should contain the App title ${APP_TITLE}`, () => {
        const wrapper = shallowMountHeaderComponent();
        expect(wrapper.html()).toContain(APP_TITLE);
    })

});