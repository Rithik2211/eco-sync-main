"use client";
import React from "react";
import { useSelector } from "react-redux";

interface MessageWithDateProps {
  message: any;
  nextMessage: any;
  index: number;
}

const MessageWithDate: React.FC<MessageWithDateProps> = ({
  message,
  nextMessage,
  index,
}) => {
  const pushSign = useSelector((state: any) => state.push.pushSign);

  // Converting the message timestamp to a date string
  const messageDate = new Date(Number(message.timestamp)).toLocaleDateString();
  // Converting the message timestamp to a time string
  const messageTime = new Date(Number(message.timestamp)).toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  // Converting the next message timestamp to a date string if the next message exists
  const nextMessageDate = nextMessage
    ? new Date(Number(nextMessage.timestamp)).toLocaleDateString()
    : null;

  // Getting the public key from the fromDID of the message
  const pubKey = message.fromDID.split(":")[1];

  return (
    <div>
      {index === 0 && (
        <div className="text-center text-xs text-gray-400 my-2">
          {messageDate}
        </div>
      )}

      <div
        className={`flex ${
          pubKey === pushSign.account ? "justify-end" : "justify-start"
        }`}
      >
        {/* Wrapping the message content and time in a div with some styling */}
        <div
          className={`text-sm px-4 py-2 rounded-3xl font-medium w-fit flex gap-1 ${
            pubKey === pushSign.account
              ? "bg-coral-pink/40 text-black rounded-tr-none"
              : "bg-purple/40 rounded-tl-none"
          }`}
        >
          <div>
            {/* Displaying the message content */}
            <p className="max-w-[260px] break-all">
              {message.messageContent.split("::")[1] || message.messageContent}
            </p>

            {/* Displaying the message time */}
            <div
              className={`text-xs text-gray-500 prevent-select ${
                pubKey === pushSign.account ? "text-right" : "text-left"
              }`}
            >
              {messageTime}
            </div>
          </div>
        </div>
      </div>

      {/* Displaying the next message date if it exists and is different from the current message date */}
      {nextMessageDate && messageDate !== nextMessageDate && (
        <div className="text-center text-xs text-gray-400 my-2">
          {nextMessageDate}
        </div>
      )}
    </div>
  );
};

export default MessageWithDate;
