"use client";
import { Search } from 'lucide-react';
import { FC } from "react";

interface IContactsSearch {
  value: string;
  onSearch: (value: string) => void;
}

const ContactsSearch: FC<IContactsSearch> = ({ value, onSearch }) => {
  return (
    <div className="flex items-center">
      <div className="flex justify-center items-center rounded-full bg-gray-100 dark:bg-black px-2 border border-bubble-gum">
        <Search className="h-5 w-5 text-black dark:text-white" />
        <input
          type="text"
          value={value}
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          className=" w-sm px-6 py-3 rounded-full text-black dark:text-white outline-none bg-gray-100 dark:bg-black "
        />
      </div>
    </div>
  );
};

export default ContactsSearch;
