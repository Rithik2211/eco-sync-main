"use client";
import { MessageCircle, RefreshCw, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState, MouseEvent, KeyboardEvent } from "react";

const MessageInput = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const pushSign = useSelector((state: any) => state.push.pushSign);
  const currentContact = useSelector((state: any) => state.push.currentContact);

  const sendMessage = async (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLTextAreaElement>
  ) => {
    // Preventing the default event behavior
    e.preventDefault();

    // Returning early if disabled is true or if pushSign or message is falsy
    if (disabled || !pushSign || !message.trim()) return;

    try {
      setDisabled(true);
      await pushSign.chat.send(currentContact.did.split(":")[1], {
        content: message,
        type: "Text",
      });
      setMessage("");
      setDisabled(false);
    } catch (err) {
      toast({ title: "Error sending message" })
    }
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current && textareaRef.current.scrollHeight < 224) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <>
      {/* Wrapping the form in a fragment */}
      <form className="w-full flex justify-between items-center pr-2 gap-2 bg-gray-50">
        <MessageCircle className="w-5 h-5" />
        <textarea
          ref={textareaRef}
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={disabled}
          rows={1}
          className="bg-transparent flex-1 pl-1 text-black focus:outline-none text-primary-white placeholder:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ resize: "none", overflow: "hidden" }}
          onKeyDown={(e) => {
            // Sending the message when the Enter key is pressed without the Shift key
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage(e);
            }
          }}
        />

        <Button
          type="submit"
          className={`bg-gradient-push h-fit rounded-lg p-2`}
          onClick={sendMessage}
          disabled={disabled}
        >
          {disabled ? (
            <RefreshCw className="h-4 w-4 text-white animate-spin" />
          ) : (
            <Send className="h-5 w-5 text-white pl-px" />
          )}
        </Button>
      </form>
    </>
  );
};

export default MessageInput;
