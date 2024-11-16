"use client"
import { usePathname } from "next/navigation";
import NavBar from "../UI/NavBar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Attribute = "class" | "data-theme" | "data-mode"

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: Attribute | Attribute[]
  defaultTheme?: string
  enableSystem?: boolean
  storageKey?: string
  themes?: string[]
  forcedTheme?: string
  disableTransitionOnChange?: boolean
}

interface RootLayoutProps {
  children: React.ReactNode
}

export function ThemeProvider({ children, attribute = "class", defaultTheme = "light",
  enableSystem = true,
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider
    attribute={attribute}
    defaultTheme={defaultTheme}
    enableSystem={enableSystem}
    storageKey={storageKey}
    disableTransitionOnChange={true}
    {...props}>{children}</NextThemesProvider>
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathName = usePathname();
  const isLoginPage = pathName === '/Login';
  return (
    <>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
          >
            {!isLoginPage && <NavBar />}
            {children}
          </ThemeProvider>
    </>
  )
}