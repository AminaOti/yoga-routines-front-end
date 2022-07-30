import { shallowMount } from "@vue/test-utils";
import routinesComponent from "@/components/RoutinesComponent.vue";
const axios = require('axios');

jest.mock('axios');

const ROUTINES = [{ title: 'Sun Salutation' }, { title: 'Toppling Tree' }, { title: 'Warrior Pose' }]
const ROUTINE_TITLES = ROUTINES.map((routine) => {
    return routine.title
})

const shallowMountRoutinesComponent = () =>
    shallowMount(routinesComponent, {});


describe('Routines Component - src/components/RoutinesComponent.vue', () => {
    test('should have the title: Routines above the yoga routines', () => {
        const wrapper = shallowMountRoutinesComponent();
        expect(wrapper.html()).toContain('Routines');
    });
    describe('should display all the routines', () => {

        test('should GET a list of routine titles from the backend', () => {
            // mock or stub http request

        })

        test('should display the titles of the routines', async () => {
            const wrapper = shallowMountRoutinesComponent();
            await wrapper.setData({ routines: ROUTINES });
            expect(wrapper.html()).toContain(ROUTINE_TITLES[0] && ROUTINE_TITLES[1] && ROUTINE_TITLES[2]);
        });

    });
});