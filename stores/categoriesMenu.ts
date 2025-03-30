import GetCategoriesMenu from "~/services/getCategoriesMenuService"

export const categoriesMenuStore = defineStore('@nuxt-commerce/categoriesMenu', {
    state: () => ({
        categories: {success: false, data: [], message: ''},
    }),
    getters: {
    },
    actions: {
        async getCategories() {
            if (this.categories.success === false) {
                await this.loadCategories();
            }

            return this.categories.data;

        },
        async loadCategories() {
            const response: GqlResponse = await GetCategoriesMenu();
            if (response.success) {
                this.categories = response
            } else {
                console.error(response.message)
            }
        }
    },
    persist: true,
})