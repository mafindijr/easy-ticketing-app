import { useState } from 'react'
import UseModal from '../../../UseModal';
import { div } from 'framer-motion/client';

export default function ResetPassword() {

        const [openResetPassword, setOpenResetPassword] = useState(false);

    return (
        <>
          {!openResetPassword && (
            <>
                <h2 className='font-montserrat font-[700] font-bold text-[32px] leading-[36px]'>Reset Your Password</h2>
                
            </>
          )}
        </>
    );
};