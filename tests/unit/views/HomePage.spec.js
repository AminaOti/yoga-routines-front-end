import { shallowMount } from "@vue/test-utils";
import homePageView from "@/views/HomePage.vue";
import childHeaderComponent from "@/components/HeaderComponent.vue";
import childBannerComponent from "@/components/BannerComponent.vue";

const shallowMountHomePageView = () =>
    shallowMount(homePageView, {});


describe('Home Page - src/views/HomePage.vue', () => {
    test('should contain Header', () => {
        const wrapper = shallowMountHomePageView();
        expect(wrapper.findComponent(childHeaderComponent).exists()).toBe(true);
    })

    test('should contain Banner', () => {
        const wrapper = shallowMountHomePageView();
        expect(wrapper.findComponent(childBannerComponent).exists()).toBe(true);
    })

});