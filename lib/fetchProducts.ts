import { getDocs, limit, query, orderBy } from 'firebase/firestore';
import { productsCollection } from './firebase';

export const fetchProducts = async (
  category = 'todas',
  order = 'totalScore'
) => {
  const productsQuery = query(
    productsCollection,
    orderBy(order, 'desc'),
    limit(30)
  );

  const products = (await getDocs(productsQuery)).docs.map((product) =>
    product.data()
  );

  if (category !== 'todas') {
    return products.filter((product) => product.category === category);
  }

  return products.filter((product) => product.published === true);
};
