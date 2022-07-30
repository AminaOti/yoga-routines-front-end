import { shallowMount } from "@vue/test-utils";
import routinesComponent from "@/components/RoutinesComponent.vue";


const shallowMountRoutinesComponent = () =>
    shallowMount(routinesComponent, {});


describe('Routines Component - src/components/RoutinesComponent.vue', () => {
    test('should have the title: Routines above the yoga routines', () => {
        const wrapper = shallowMountRoutinesComponent();
        expect(wrapper.html()).toContain('Routines');
    });
});