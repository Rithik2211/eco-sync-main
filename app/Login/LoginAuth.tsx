"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { Mail, Wallet } from "lucide-react";
import { ImageToggle } from '../utils/DarkModeToggle';

const LoginAuth = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSignInWithEmail = () => {
        // Implement sign-in with email functionality here
        console.log('Signing in with email:', email);
    };

    const handleConnectWallet = (route: string) => {
        // Implement sign-in with GitHub functionality here
        router.push(route)
        console.log('Connect using the wallet');
    };

    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <ImageToggle img1='/logo-light-hero.png' img2='/logo-dark-hero.png' width={160} height={160} classname='my-3'/>
                <h1 className="text-4xl font-bold mb-4">Create an account</h1>
                <p className="mb-6">Enter your email below to create your account</p>
                <Input type="email" placeholder="Email" value={email}
                    onChange={handleEmailChange} className='w-full max-w-sm mb-3' />
                <Button className='my-3 font-semibold px-4 py-2 max-w-sm w-full' onClick={handleSignInWithEmail}> <Mail /> Login with Email </Button>
                <div className="flex items-center mb-3 w-full max-w-sm">
                    <hr className="flex-grow border-zinc-700" />
                    <span className="mx-4 text-zinc-500">OR CONTINUE WITH</span>
                    <hr className="flex-grow border-zinc-700" />
                </div>
                <Button className='font-semibold px-4 py-2 max-w-sm w-full' onClick={() => handleConnectWallet('/')}> <Wallet /> Connect Wallet </Button>
                <div className="flex items-center space-x-2 mt-3 ">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="text-zinc-500 mt-2 text-sm">
                    By clicking, you agree to our{' '}
                    <a href="#" className="text-blue-500">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-500">
                        Privacy Policy
                    </a>
                    .
                </div>
            </div>
        </>
    )
}

export default LoginAuth