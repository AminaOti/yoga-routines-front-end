import { shallowMount } from "@vue/test-utils";
import bannerComponent from "@/components/BannerComponent.vue";

const WEBSITE_TITLE = process.env.VUE_APP_WEBSITE_TITLE
const WEBSITE_DESCRIPTION = process.env.VUE_APP_WEBSITE_DESCRIPTION

const shallowMountBanneromponent = () =>
    shallowMount(bannerComponent, {});


describe('The Banner Component - src/components/BannerComponent.vue', () => {
    test('should contain website title', () => {
        const wrapper = shallowMountBanneromponent();
        expect(wrapper.html()).toContain(WEBSITE_TITLE);
    });

    test('should contain website description', () => {
        const wrapper = shallowMountBanneromponent();
        expect(wrapper.html()).toContain(WEBSITE_DESCRIPTION);
    });
});
