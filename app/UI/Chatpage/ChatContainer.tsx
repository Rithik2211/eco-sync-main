"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";
import { useEthersSigner } from "../../wagmi/EthersSigner";
import usePush from "../../hooks/usePush";
import ChatBackground from "./ChatBackground";
import ChatBox from "@/app/utils/chatBox/ChatBox";

const ChatContainer = () => {
  const signer = useEthersSigner();
  const { isConnected } = useAccount();
  const { initializePush } = usePush();

  // Using useSelector to get data from the Redux store
  const pushSign = useSelector((state: any) => state.push.pushSign);
  const currentContact = useSelector((state: any) => state.push.currentContact);

  // Using useEffect to call initializePush when the dependencies change
  useEffect(() => {
    if (isConnected && signer && !pushSign) {
      initializePush();
    }
  }, [isConnected, signer, pushSign, initializePush]);

  return (
    <div className="flex w-9/12 flex-grow my-2 rounded-l-xl">
      {/* If there are no keys in currentContact, render ChatBackground, otherwise render ChatBox */}
      {Object.keys(currentContact).length === 0 ? (
        <ChatBackground />
      ) : (
        <ChatBox />
      )}
    </div>
  );
};

export default ChatContainer;
