'use client';
import React from 'react';
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';

interface NavButtonProps {
    name : string
    className? : string
    route : string
}

const NavButton = ({name, className, route }: NavButtonProps) => {
    const router = useRouter()
    const handleClick = (route: string) => {
        router.push(route)
    }
  return (
    <>
        <Button onClick={() => handleClick(route)} className={className}>{name}</Button>
    </>
  )
}

export default NavButton