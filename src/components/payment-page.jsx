import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from './input';
import { Button } from './button';
import toast from 'react-hot-toast';
import { LockKeyhole, CreditCard } from 'lucide-react';

export default function PaymentPage({ name, onClose, onPaymentSuccess }) {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();

    const onSubmit = (data) => {
        toast.success("Payment Successful!");
        if (onPaymentSuccess) {
            onPaymentSuccess();
        } else if (onClose) {
            onClose();
        }
        console.log('form submitted with', data);
    }

  return (
   <div className='flex flex-col items-center justify-center gap-4'>
    <div>
        <h3 className='font-montserrat text-[24px] leading-[34px] font-[700] font=bold'>Complete Your Booking</h3>
    </div>
    <div>
        <p className='font-montserrat text-[18px] leading-[28px] font-[400] '>{name}</p>
    </div>
    <div>
        <p className='font-montserrat text-[14px] leading-[22px] font-semibold'>
            Ticket: 
            General Adission #5,000
        </p>
    </div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col border-1 border-[#cccccc] p-[24px] rounded-[8px]'>
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
                required
                prefixIcon={CreditCard}
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
                required
                />
                <span className='block text-[14px] leading-[16px] text-[#1F2A44]'>MM/YY</span>
            </div>
            <div>
                <Input
                label="CVV*"
                name="cvv"
                type="text"
                register={register}
                error={errors.cvv}
                className={`form-input ${errors.cvv ? "border-red-500 focus:ring-red-500" : ""}`}
                required
                />
            </div>
    
        </div>
      </div>

        <div className='flex flex-col gap-[8px] items-center justify-center text-center'>
            <p className='inline-flex gap-1 font-montserrat font-[400] text-[14px] leading-[22px] mt-1'>
                <span className='inline-flex items-center justify-center'><LockKeyhole size={20}/> </span>
                Your payment is encrypted and secure
            </p>

            <Button 
            type='submit' 
            className='font-montserrat mt-2 text-[16px] font-bold bg-homeexplore rounded-[8px] w-[376px] py-[16px] px-[32px] text-white'
            >
                Place Order
            </Button>
        </div>
    </form>
   </div>
  )
}
//    </div>
//   )
// }
