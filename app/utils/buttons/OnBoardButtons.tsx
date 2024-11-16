"use client";

import React, { FC } from "react";
import { useConnect } from "wagmi";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import usePush from "@/app/hooks/usePush";
import WalletButton from "./WalletButton";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const ConnectWalletBtn: FC = () => {
  const activeWallet = useSelector((state: any) => state.modals.activeWallet);
  const { connect, connectors } = useConnect();

  const handleClick = () => {
    connect({  connector: connectors[activeWallet === "MetaMask" ? 0 : 1],  });
  };

  return (
    <WalletButton
      onClick={handleClick}
      label="Connect Wallet"
      style="bg-gradient-push w-full text-sm sm:text-sm md:text-base font-medium text-white"
    />
  );
};

const SignWalletBtn: FC = () => {
  const router = useRouter();
  const { initializePush } = usePush();
  const { toast } = useToast()

  const handleClick = async () => {
    try {
      await initializePush();
      router.push("/chats");
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error initializing Push Protocol !!",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  };

  return (
    <WalletButton
      label="Initialize Push"
      style="bg-gradient-push w-3/4 text-sm sm:text-sm md:text-base font-medium text-white"
      onClick={handleClick}
    />
  );
};

export { ConnectWalletBtn, SignWalletBtn, WalletButton };
