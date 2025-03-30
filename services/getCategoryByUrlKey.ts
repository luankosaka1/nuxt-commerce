export async function getCategoryByUrlKey(
    urlKey: string,
): Promise<any> {
    const { categories } = await GqlGetCategoriesByUrlKey({ url: urlKey });

    if (!categories || categories.total_count === 0) {
        throw new Error('Category not found');
    }

    return categories.items[0];
}