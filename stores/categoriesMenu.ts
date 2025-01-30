export const categoriesMenuStore = defineStore('@nuxt-commerce/categoriesMenu', {
    state: () => ({
        categories: [],
    }),
    getters: {
        getCategories: (state) => state.categories,
    },
    actions: {

    },
    persist: true,
})