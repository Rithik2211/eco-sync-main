"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageWithDate from "./message/MessageWithDate";
import { setMessages } from "@/app/redux/slice/pushSlice";
import { useToast } from "@/hooks/use-toast";

interface Message {
  fromDID: string;
  timestamp: any;
  messageContent: string;
  messageType: string;
  chatId: string;
}

// Defining the Chat component
const Chat = () => {
  // Using the useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const pushSign = useSelector((state: any) => state.push.pushSign);
  const messageHistory = useSelector((state: any) => state.push.messages);
  const currentContact = useSelector((state: any) => state.push.currentContact);
  const { toast } = useToast();

  // Defining an asynchronous function to initialize the chat
  const initializeChat = async () => {
    try {
      const pastMessages: any = await pushSign.chat.history(
        currentContact.did.split(":")[1]
      );

      const filteredMessages: Message[] = pastMessages.map(
        ({
          fromDID,
          timestamp,
          messageContent,
          messageType,
          chatId,
        }: Message) => ({
          chatId,
          fromDID,
          timestamp,
          messageContent,
          messageType,
        })
      );

      dispatch(setMessages([...filteredMessages].reverse()));
      setLoading(false);
    } catch (err) {
      toast({
        title: "Error!!",
        description: "Error fetching chat history",
      })
    }
  };

  // Using the useEffect hook to call the initializeChat function when the currentContact or pushSign changes
  useEffect(() => {
    if (currentContact && pushSign) {
      setLoading(true);
      initializeChat();
    }
  }, [currentContact, pushSign]);

  return (
    // Wrapping the component in a div with some styling
    <div className="flex absolute top-0 left-0 overflow-y-auto w-full h-full flex-grow flex-1 flex-col-reverse hide-scroll px-3 pb-2">
      {loading ? (
        // Displaying a loading spinner if the loading state is true
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-fit mx-auto">
          <Image
            src="/assets/loading.svg"
            alt="Loading spinner"
            width={24}
            height={24}
            className="animate-spin opacity-60"
          />
        </div>
      ) : messageHistory.length === 0 ? (
        // Displaying a message if there are no messages in the messageHistory
        <div className="flex text-primary-white/60 py-2 px-6 bg-gray-100 rounded-lg mt-2 items-start">
          <p className="text-sm text-center flex mx-auto">
            Messages are end-to-end encrypted. Only users in this chat can view
            or listen to them.
          </p>
        </div>
      ) : (
        // Displaying the messages in the messageHistory
        <div className="flex flex-col gap-1 z-10">
          {messageHistory.map(
            (message: Message, index: number, arr: Message[]) => (
              <MessageWithDate
                key={index}
                index={index}
                message={message}
                nextMessage={arr[index + 1]}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Chat;
