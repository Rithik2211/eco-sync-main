"use client";

import { Button } from "@/components/ui/button"
import React, { FC } from "react";

interface WalletButtonProps {
  label: string;
  icon?: any;
  style?: string;
  onClick: () => void;
}

const WalletButton: FC<WalletButtonProps> = ({label, icon, style, onClick}) => {
  return (
    <Button 
      className={`items-center gap-3 py-3 font-grotesque capitalize flex justify-center ${style ? style : ""}`}
      onClick={onClick}
      >
      {label}
      {icon && icon}
    </Button>
  );
};

export default WalletButton;
