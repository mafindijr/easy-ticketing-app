import React from 'react'
import { useForm } from "react-hook-form";
import { Input } from './input';
import { Button } from './button'

export default function PaymentPage({ name }) {

        const { register, handleSubmit, formState: {errors}, reset } = useForm();

  return (
   <div>
    <div>
        <h4>Complete Your Booking</h4>
    </div>
    <div>
        <p>{name}</p>
    </div>
    <div>
        <p>
            <span>Ticket:</span>
            <span>General Adission #5,000</span>
        </p>
    </div>

    <form>
        <div>
            <Input
            label="Name on Card*"
            name="cardName"
            type="text"
            placeholder=""
            register={register}
            error={errors.cardName}
            className={`form-input ${errors.cardName ? "border-red-500 focus:ring-red-500" : ""}`}
            required
            // prefixIcon={}
            />
        </div>

        <div>
            
                <Input 
                label="Card Number*"
                name="cardNumber"
                type="text"
                register={register}
                error={errors.cardNumber}
                className={`form-input ${errors.cardNumber ? "border-red-500 focus:ring-red-500" : ""}`}
                // prefixIcon={}
                />
            
        </div>

        <div className='grid grid-cols-2 gap-10'>
            <div>
                <Input 
                label="Expiry Date*"
                name="expiryDate"
                type="text"
                register={register}
                error={errors.expiryDate}
                className={`form-input ${errors.expiryDate ? "border-red-500 focus:ring-red-500" : ""}`}
                // prefixIcon={}
                />
                <span>MM/YY</span>
            </div>
            <div>
                <Input
                label="CVV*"
                name="cvv"
                type="text"
                register={register}
                error={errors.cvv}
                className={`form-input ${errors.cvv ? "border-red-500 focus:ring-red-500" : ""}`}
                // prefixIcon={}
                />
            </div>
    
        </div>

        <div>
            <p>
                <span>lock icon</span>
                Your payment is encrypted and secure
            </p>

            <Button type='submit'>
                Place Order
            </Button>
        </div>
    </form>
   </div>
  )
}
