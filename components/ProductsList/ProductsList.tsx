'use client';

import { Product } from '../Product/Product';
import { ProductModel } from '@/interfaces/product.interface';
import { useEffect, useState, useRef, useCallback } from 'react';
import { getAllProducts } from '@/api/product';

export function ProductsList() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useCallback((node: HTMLDivElement) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setOffset(prevOffset => prevOffset + 5);
      }
    });

    if (node) observer.current.observe(node);
  }, [isLoading, hasMore]);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const newProducts = await getAllProducts(5, offset);
      if (newProducts.length < 5) {
        setHasMore(false);
      }
      setProducts(prev => [...prev, ...newProducts]);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [offset]);

  return (
    <div>
      {products.map((product, index) => (
        <div 
          key={`${product._id}-${index}`}
          ref={index === products.length - 1 ? lastProductRef : undefined}
        >
          <Product product={product} />
        </div>
      ))}
      {isLoading && <div className="loading">Загрузка...</div>}
      <style jsx>{`
        .loading {
          text-align: center;
          padding: 20px;
          font-size: 16px;
          color: #666;
        }
      `}</style>
    </div>
  );
} 