import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card className="w-full md:w-80 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-md w-full h-48 object-cover mb-4"
          width={320}
          height={192}
        />
        <CardDescription className="text-gray-500">
          {product.description || 'No description available.'}
        </CardDescription>
        <div className="mt-2">
          <span className="font-bold">Price:</span> ${product.price.toFixed(2)}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button onClick={() => onAddToCart(product)} variant="outline">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
