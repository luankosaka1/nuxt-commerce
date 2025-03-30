export const useProductsByCategoryUid = async (urlKey: string) => {
  const { data, error } = await useAsyncGql({
    operation: 'GetCategoriesByUrlKey',
    variables: {
      url: urlKey,
    },
  })

  if (error.value) {
    console.error('Error fetching categories:', error.value);
    return null;
  }

  const categories = data.value?.categories;

  if (!categories || categories.total_count === 0) {
    throw new Error('Category not found');
  }

  const category = categories.items[0];

  const { products } = await GqlGetProductsByCategoryUid({ uid: category.uid });

  return ref({
    category,
    products,
  })
}
