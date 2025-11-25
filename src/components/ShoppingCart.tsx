import React from 'react';
import { create } from 'zustand';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { ScrollArea } from "@/components/ui/scroll-area"
import { MdShoppingCart } from 'react-icons/md';

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
        return { items: updatedItems };
      } else {
        return { items: [...state.items, item] };
      }
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ items: [] }),
}));

const ShoppingCart: React.FC = () => {
  const cart = useCartStore();

  const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveItem = (id: string) => {
    cart.removeItem(id);
    toast({ description: "Item removed from cart." });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      handleRemoveItem(id);
      return;
    }
    cart.updateQuantity(id, quantity);
  };

  if (cart.items.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Cart is Empty</CardTitle>
          <CardDescription>Add some awesome shoes to your cart!</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <MdShoppingCart size={64} className="text-gray-400" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shopping Cart</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
        {cart.items.map((item) => (
          <div key={item.id} className="mb-4">
            <div className="flex items-center justify-between">
              <div>
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500">Price: ${item.price}</p>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</Button>
                  <span>{item.quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
                </div>
              </div>
              <div>
                <Button variant="destructive" size="sm" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
              </div>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="font-semibold">Total: ${totalPrice.toFixed(2)}</div>
        <Button>Proceed to Checkout</Button>
      </CardFooter>
    </Card>
  );
};

export default ShoppingCart;
