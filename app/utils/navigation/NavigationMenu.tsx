"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";
import DarkModeToggle from "../DarkModeToggle";
import NavButton from "./NavButton";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileDropDown from "../ProfileDropDown";
import TooltipWrap from "../Tooltip";
import { Users, Calendar, Activity, Package, Store, Recycle, ChartCandlestick } from 'lucide-react';

const components: { title: string; href: string; description: string, icon: React.JSX.Element; }[] = [
  {
    title: "Groups & Communities",
    href: "/",
    description:
      "Connect with like-minded people and collaborate on eco-friendly projects.",
    icon: <Users size={30} className="text-green-500" />
  },
  {
    title: "Eco Meetups",
    href: "/",
    description:
      "Join local or virtual events to network, share ideas, and collaborate on sustainability projects.",
    icon: <Calendar size={30} className="text-blue-500" />
  },
  {
    title: "Open Activities",
    href: "/",
    description:
      "Participate in open events like clean-ups, workshops, and eco-challenges to make a positive environmental impact.",
    icon: <Activity size={30} className="text-red-500" />
  },
]

const NavigationMenuUI = () => {
  const { address } = useAccount()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <DarkModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Eco Marketplace</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-2 md:w-[400px] lg:w-[400px]">
              <ListItem href="/" title="Sustainable Products">
                <div className="flex items-center gap-3">
                  <Package size={48} className="text-orange-400" />
                  Discover eco-friendly products that promote a zero-waste lifestyle, from reusable items to sustainable fashion.
                </div>
              </ListItem>
              <ListItem href="/" title="Local Green Goods">
                <div className="flex items-center gap-3">
                  <Store size={48} className="text-green-500" />
                  Support local farmers and artisans by purchasing organic, fair-trade, and eco-conscious goods from nearby communities.
                </div>
              </ListItem>
              <ListItem href="/" title="Exchange & Swap">
                <div className="flex items-center gap-3">
                  <ChartCandlestick size={48} className="text-red-500" />
                  Trade or swap eco-friendly items with others in the community to reduce waste and promote sustainable living.
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-2 md:w-[400px] lg:w-[400px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  <div className="flex items-center gap-3">
                    {component.icon}
                    <span>{component.description}</span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <TooltipWrap label="Connected Address">
            <NavigationMenuTrigger className="max-w-[200px] truncate bg-gray-200 dark:bg-[#262626]">
              <span className="block truncate">{address}</span>
            </NavigationMenuTrigger>
          </TooltipWrap>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationMenuUI

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export const NavGroup = () => {
  const { isConnected, address } = useAccount();
  const pathName = usePathname();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <>
      {
        (isConnected && pathName !== '/') ?
          <div className="flex justify-around items-center w-[600px] h-[40px] flex-wrap mr-5">
            <NavigationMenuUI />
            <ProfileDropDown>
              {
                ensAvatar ?
                  <Avatar>
                    <AvatarImage src={ensAvatar} alt="ENS Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  :
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
              }
            </ProfileDropDown>
          </div> :
          <div className='flex justify-around items-center w-[200px] h-[40px] flex-wrap'>
            <div className='flex items-center space-x-4'>
              <DarkModeToggle />
              <NavButton name='Join Us!' className='rounded-full border px-6 py-2 text-sm font-semibold dark:text-white text-black bg-[#04c052] hover:bg-[#04c052]-500' route='/Login' />
            </div>
          </div>
      }
    </>
  )
}