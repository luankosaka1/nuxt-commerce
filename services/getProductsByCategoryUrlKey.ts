export async function getProductsByCategoryUrlKey(
  urlKey: string,
): Promise<any> {
  const { categories } = await GqlGetCategoriesByUrlKey({url: urlKey});
  
  if (!categories || categories.total_count === 0) {
    throw new Error('Category not found');
  }

    const category = categories.items[0];
    // const { products } = await GqlGetProductsByCategory({uid: category.uid});

    // console.log('products', products);
    return {}
}