import type { RouteType } from "@/types/RouteType";

export async function RouteTypeService(route: string): Promise<RouteType | undefined> {
   const response =  await GqlRouteType({url: route});
   
   if (response.route) {
      return {
         ...response.route,
      }
   }

   if (response.categories.total_count > 0) {
      return {
         type: 'CATEGORY',
      }
   }

   if (response.products.total_count > 0) {
      return {
         type: 'PRODUCT',
      }
   }
}