"use client";
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { FC } from "react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { useSelector, useDispatch } from "react-redux";
import { updateRecentRequest } from '@/app/redux/slice/pushSlice';

interface RequestsItemProps {
  request: any;
}

const RequestsItem: FC<RequestsItemProps> = ({ request }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const pubKey = request.did.split(":")[1];
  const pushSign = useSelector((state: any) => state.push.pushSign);

  // Function to handle accepting a request
  const handleAcceptRequest = async () => {
    await pushSign.chat.accept(pubKey);
    dispatch(updateRecentRequest(request.did));
    toast({ title: "Request accepted" })
  };

  // Function to handle rejecting a request
  const handleRejectRequest = async () => {
    await pushSign.chat.reject(pubKey);
    dispatch(updateRecentRequest(request.did));
    toast({ title: "Request rejected" })
  };

  return (
    <div className="flex justify-between border-b borde-gray-200 px-2 py-3 hover:bg-gray-50">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
          <Image
            src={request.profilePicture}
            width={40}
            height={40}
            alt="Profile"
          />
        </div>

        <div>
          <h3 className="text-base font-bold text-black">
            {pubKey.slice(0, 8)}...{pubKey.slice(-4)}
          </h3>

          <p className="text-xs">{request.msg}</p>
        </div>
      </div>

      <div className="flex items-center">
        <Button
          className="bg-transparent border-2 border-green-500/20 p-1.5 rounded-full text-primary-blue mr-2 shadow-none hover:shadow-sm"
          onClick={handleAcceptRequest}
        >
          <Check className="h-4 w-4 text-green-500" />
        </Button>

        <Button
          className="border-2 border-red-500/20 bg-red-500/20 rounded-full text-primary-blue p-1.5 shadow-none hover:shadow-sm"
          onClick={handleRejectRequest}
        >
          <X className="h-4 w-4 text-red-500" />
        </Button>
      </div>
    </div>
  );
};

export default RequestsItem;
