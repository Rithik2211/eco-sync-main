"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactsBody from "./contactTab/ContactsBody";
import RequestsBody from "./requestsTab/RequestsBody";

const ContactsTab = () => {

  const data = [
    {
      label: "Contacts",
      value: "contacts",
      body: <ContactsBody />,
    },
    {
      label: "Requests",
      value: "requests",
      body: <RequestsBody />,
    },
  ];

  return (
    <Tabs defaultValue="contacts" className="w-[250px]">
      <TabsList className="grid w-full grid-cols-2">
        {
          data.map((item, index)=>(
            <TabsTrigger key={index} value={item?.value}>{item?.label}</TabsTrigger>
          ))
        }
      </TabsList>
      {
          data.map((item, index)=>(
            <TabsContent key={index} value={item?.value} className="flex-grow">
              <div className="px-0 h-full">
                {item?.body}
              </div>
            </TabsContent>
          ))
        }
    </Tabs>
  );
};

export default ContactsTab;