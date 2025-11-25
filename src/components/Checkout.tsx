import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock payment processing
    setTimeout(() => {
      setConfirmationMessage('Your order has been placed! Thank you for your purchase.');
    }, 1000);
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-md border-white/10">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-semibold">Checkout</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" value={shippingInfo.name} onChange={handleShippingChange} required className="bg-white/10 border-white/20"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input type="text" id="address" name="address" value={shippingInfo.address} onChange={handleShippingChange} required className="bg-white/10 border-white/20"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input type="text" id="city" name="city" value={shippingInfo.city} onChange={handleShippingChange} required className="bg-white/10 border-white/20"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input type="text" id="zipCode" name="zipCode" value={shippingInfo.zipCode} onChange={handleShippingChange} required className="bg-white/10 border-white/20"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input type="text" id="cardNumber" name="cardNumber" value={paymentInfo.cardNumber} onChange={handlePaymentChange} required className="bg-white/10 border-white/20"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input type="text" id="expiryDate" name="expiryDate" value={paymentInfo.expiryDate} onChange={handlePaymentChange} required className="bg-white/10 border-white/20"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input type="text" id="cvv" name="cvv" value={paymentInfo.cvv} onChange={handlePaymentChange} required className="bg-white/10 border-white/20"/>
            </div>
            <Button type="submit" className="bg-primary hover:bg-primary/80 transition-colors duration-300">Place Order</Button>
          </form>
        </CardContent>
        {confirmationMessage && (
          <CardFooter className="text-center">
            <p className="text-green-500 font-semibold">{confirmationMessage}</p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default Checkout;
