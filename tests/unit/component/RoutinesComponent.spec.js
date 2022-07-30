import { shallowMount, mount } from "@vue/test-utils";
import routinesComponent from "@/components/RoutinesComponent.vue";
const axios = require('axios');

jest.mock('axios');

const MOCK_AXIOS_RESPONSE = { "data": [{ "_id": "62d2cd1dc0fd5271407d6cee", "title": "Sun Salutation", "ID": 1 }, { "_id": "62e52a301a5297c99893dc5d", "title": "Toppling Tree", "ID": 2 }, { "_id": "62e52a6b1a5297c99893dc5e", "title": "Warrior Pose", "ID": 3 }] }
const ROUTINE_TITLES = ['Sun Salutation', 'Toppling Tree', 'Warrior Pose']

const shallowMountRoutinesComponent = () =>
    shallowMount(routinesComponent, {});


describe('Routines Component - src/components/RoutinesComponent.vue', () => {
    test('should have the title: Routines above the yoga routines', () => {
        const wrapper = shallowMountRoutinesComponent();
        expect(wrapper.html()).toContain('Routines');
    });
    describe('should display all the routines', () => {

        test('should GET a list of routine titles from the backend', async () => {
            axios.get.mockResolvedValue({
                data: MOCK_AXIOS_RESPONSE
            })
            const wrapper = await mount(routinesComponent, {});

            //await wrapper.vm.getRoutineTitles()
            const data = wrapper.vm.$data.routineTitles
            expect(ROUTINE_TITLES).toContain(data[0] && data[1] && data[2]);
        });

        // test('should display the titles of the routines', async () => {
        //     const wrapper = shallowMountRoutinesComponent();
        //     await wrapper.setData({ routines: ROUTINE_TITLES });
        //     expect(wrapper.html()).toContain(ROUTINE_TITLES[0] && ROUTINE_TITLES[1] && ROUTINE_TITLES[2]);
        // });

    });
});