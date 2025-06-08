// ButtonPrimary.jsx
import React, { forwardRef } from 'react'
import { Button } from '@/components/ui/button'

// forwardRef ile Button'a ref geçişi sağlanır
const ButtonPrimary = forwardRef(({ text = "", className, ...props }, ref) => {
    return (
        <Button
            ref={ref}
            className={`cursor-pointer text-base ${className}`}
            {...props}
        >
            {text}
        </Button>
    )
})

ButtonPrimary.displayName = "ButtonPrimary"
export default ButtonPrimary
