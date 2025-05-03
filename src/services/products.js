import { fetchData } from './api';

export function getAllProducts() {
  return fetchData('/products');
}

export function getProductBySlug(slug) {
  return fetchData(`/products/${slug}`);
}
