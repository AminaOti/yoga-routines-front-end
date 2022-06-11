import { shallowMount } from "@vue/test-utils";
import headerComponent from "@/components/HeaderComponent.vue";

const WEBSITE_TITLE = process.env.VUE_APP_WEBSITE_TITLE
const LINK_TO_HOME_PAGE_TEST_ID = "[data-test=home-page-link]"
const MOCK_HOME_PAGE_ROUTE = "/"

const mockRouter = {
    push: jest.fn(),
};

const shallowMountHeaderComponent = () =>
    shallowMount(headerComponent, {
        global: {
            mocks: {
                $router: mockRouter,
            },
        }
    });

describe('The Header Component - src/components/HeaderComponent.vue', () => {

    test(`should contain the website title ${WEBSITE_TITLE}`, () => {
        const wrapper = shallowMountHeaderComponent();
        expect(wrapper.html()).toContain(WEBSITE_TITLE);
    })

    test(`should contain a link to the Home Page`, async () => {
        const wrapper = shallowMountHeaderComponent();
        await wrapper.find(LINK_TO_HOME_PAGE_TEST_ID).trigger("click");
        expect(mockRouter.push).toHaveBeenCalledWith(MOCK_HOME_PAGE_ROUTE);
    })

});