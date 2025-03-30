export async function getProductsByCategoryUid(uid: string) {
    const { products } = await GqlGetProductsByCategoryUid({ uid });
    return products;
}