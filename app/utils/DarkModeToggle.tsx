'use-client';
import * as React from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';

const DarkModeToggle = () => {
    const { setTheme } = useTheme()
    return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className='rounded-full'>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            {/* <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DarkModeToggle;

interface ImageProps {
  img1 : string
  img2 : string
  alt? : string
  width : number
  height : number
  classname? : string
}

export const ImageToggle = ({img1, img2, alt = "logo", width, height, classname=''}: ImageProps) => {
  const { theme } = useTheme()
  const [img, setImg] = React.useState<string>('/logo-light.png');
  
  React.useEffect(()=> {
    switch(theme){
      case 'light':
        setImg(img1);
        break;
      case 'dark':
        setImg(img2);
        break;
      default:
        return;
    }
  },[theme])
  
  return (
    <>
     <Image src={img} alt={alt} width={width} height={height} className={classname}/>
    </>
  )
}