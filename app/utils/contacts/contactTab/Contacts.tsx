"use client";
import { FC } from "react";
import { useAccount } from "wagmi";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactsItem from "./ContactsItem";
import { setRecentContact } from "@/app/redux/slice/pushSlice";
import { useEthersSigner } from "@/app/wagmi/EthersSigner";

interface IContacts {
  contacts: any;
}

const Contacts: FC<IContacts> = ({ contacts }) => {
  const dispatch = useDispatch();
  const signer = useEthersSigner();
  const { isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const pushSign = useSelector((state: any) => state.push.pushSign);
  const recentContact = useSelector((state: any) => state.push.recentContact);
  const { toast } = useToast();

  useEffect(() => {
    const initializeChats = async () => {
      try {
        // Fetching the list of chats from the pushSign object
        const chatsLists = await pushSign.chat.list("CHATS");

        // Mapping over the chats list to filter out the necessary contact details
        const filterRecentContact = chatsLists.map((chat: any) => ({
          profilePicture: chat.profilePicture,
          did: chat.did,
          name: chat.name,
          about: chat.about,
          chatId: chat.chatId,
          msg: {
            content: chat.msg.messageContent,
            timestamp: chat.msg.timestamp,
            fromDID: chat.msg.fromDID,
          },
        }));

        // Dispatching an action to set the recent contacts in the Redux store
        dispatch(setRecentContact(filterRecentContact));
        // Setting the loading state to false as the chats have been fetched
        setIsLoading(false);
      } catch (error) {
        toast({ title: "Error fetching contacts!!" })
      }
    };

    // Checking if the user is connected and if the signer and pushSign exist
    if (isConnected && signer && pushSign) {
      // Setting the loading state to true before fetching the chats
      setIsLoading(true);
      initializeChats();
    }
  }, [pushSign, isConnected, signer, dispatch]);

  return (
    <div className="relative h-full w-full">
      {isLoading ? (
        <p className="text-primary-white/60 z-10 absolute top-0 left-1/2 animate-spin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.175 7.377l-3.042-5.27 1.732-1 3.045 5.273c-.635.238-1.222.573-1.735.997zm-.799.8l-5.27-3.042-1 1.732 5.274 3.045c.237-.635.572-1.223.996-1.735zm-1.376 3.823c0-.341.035-.673.09-.999h-6.09v1.999h6.09c-.055-.326-.09-.659-.09-1zm11.351-2.705l5.208-3.007-.333-.577-5.206 3.007c.121.185.23.379.331.577zm-5.351-3.295c.341 0 .673.035.999.09v-6.09h-1.999v6.09c.326-.055.659-.09 1-.09zm3.14.894l3.004-5.204-.288-.166-3 5.197.284.173zm1.685 8.662l5.234 3.022.666-1.154-5.229-3.019c-.181.41-.408.794-.671 1.151zm-10.444-1.467l-5.274 3.046 1 1.732 5.27-3.042c-.424-.513-.759-1.1-.996-1.736zm11.594-2.589l.025.5-.025.5h6.025v-1h-6.025zm-3.727 6.061l3.03 5.249 1.442-.833-3.031-5.25c-.437.34-.92.623-1.441.834zm-2.248.439c-.341 0-.674-.035-1-.09v6.09h1.999v-6.09c-.326.055-.658.09-.999.09zm-3.824-1.376l-3.042 5.27 1.732 1 3.045-5.274c-.635-.237-1.222-.572-1.735-.996z" />
          </svg>
        </p>
      ) : recentContact.length === 0 ? (
        <p className="text-primary-white/60 py-2 text-center bg-gray-100 rounded-lg mt-2">
          No contacts to show
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {contacts.map((chat: any, index: number) => (
            <ContactsItem key={index} chat={chat} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Contacts;
