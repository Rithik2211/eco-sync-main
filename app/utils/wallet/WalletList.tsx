
'use client';
import React, { FC, useEffect } from "react";
import Image from "next/image";
import { useAccount, useConnect } from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveWallet } from "../../redux/slice/modalsSlice";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { ShieldCheck } from 'lucide-react';

interface Wallet {
  name: string;
  bg: string;
  src: string;
}

const WalletList: FC = () => {

  const dispatch = useDispatch();
  const { isConnected } = useAccount();
  const router = useRouter();
  const [client, setClient] = React.useState<boolean>(false);
  const activeWallet = useSelector((state: any) => state.modals.activeWallet);
  const { connect, connectors } = useConnect();
  const { toast } = useToast();

  const handleClick = () => {
    if (isConnected){
      router.push("/UI/Chatpage");
      toast({
        title: "Login Success!!",
        description: "Ready to connect with people",
        action: (
          <ToastAction altText="ShieldCheck"> <ShieldCheck className="text-green-500" /> </ToastAction>
        ),
      })
    } else {
      connect({  connector: connectors[activeWallet === "MetaMask" ? 0 : 1],  });
      dispatch(setActiveWallet(activeWallet));
      router.push("/UI/Chatpage");
      toast({
        title: "Login Success!!",
        description: "Ready to connect with people",
        action: (
          <ToastAction altText="ShieldCheck"> <ShieldCheck className="text-green-500" /> </ToastAction>
        ),
      })
    }
  };

  useEffect(() => {
    setClient(true);
  }, []);

  const wallets: Wallet[] = [
    {
      name: "MetaMask",
      bg: "bg-[#ffe6ce]",
      src: "metamask.svg",
    },
    {
      name: "Coinbase Wallet",
      bg: "bg-[#0052FF]",
      src: "coinbase.svg",
    },
  ];

  return (
    client && (
      <div className="flex felx-col justify-center items-center gap-5">
        {wallets.map((wallet, i) => (
          <Image
            key={i}
            src={`/walletIcon/${wallet.src}`}
            alt={wallet.name + " Logo"}
            width={32}
            height={32}
            onClick={handleClick}
          />
        ))}
      </div>
    )
  );
};

export default WalletList;
