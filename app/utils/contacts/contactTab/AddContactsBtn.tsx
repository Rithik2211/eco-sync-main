"use client";
import { FC } from "react";
import { Button } from '@/components/ui/button';
import { UserRoundPlus } from 'lucide-react';
import { useDispatch } from "react-redux";
import { toggleNewContactsModal } from "@/app/redux/slice/modalsSlice";

const AddContactsBtn: FC = () => {
  const dispatch = useDispatch();

  return (
    <Button
      className="p-2.5 rounded-full bg-bubble-gum/20 hover:bg-bubble-gum/40 hover:scale-105"
      onClick={() => dispatch(toggleNewContactsModal())}
    >
      <UserRoundPlus className="h-4 w-4 text-black" />
    </Button>
  );
};

export default AddContactsBtn;
