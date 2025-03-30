import type { GqlResponse } from "~/types/GqlResponse";

export default async function GetCategoriesMenu(): Promise<GqlResponse> {
    const { data, error } = await useAsyncGql({
        operation: 'GetCategoriesMenu',
      })
      
      if (error?.value) {
        return {
            success: false,
            message: 'Error fetching categories',
        }
      }
      
      return {
        success: true,
        data: {
            ...data.value.categories,
        },
        message: 'Categories fetched successfully',
      }
}