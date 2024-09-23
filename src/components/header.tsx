'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import Image from 'next/image'

export const Header = () => {
  const { data: session } = useSession()
  const { setTheme } = useTheme()
  return (
    <header className="sticky top-0 z-10 mx-auto flex h-12 max-w-7xl items-center justify-between bg-[hsl(var(--background))] px-4 text-[hsl(var(--foreground))] dark:bg-[hsl(var(--background))] dark:text-[hsl(var(--foreground))] lg:px-8">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icons/ai-gourmet-navigator-logo.png"
          alt="AI Gourmet Navigator"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p>AI Gourmet Navigator</p>
      </Link>

      <div className="flex items-center">
        <ul className="mr-6 hidden gap-6 sm:flex">
          <li>
            <Link
              href={session ? '/favorites' : '/api/auth/signin'}
              className="no-underline hover:text-primary"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              href={session ? '/api/auth/signout' : '/api/auth/signin'}
              className="no-underline hover:text-primary"
            >
              {session ? 'Sign out' : 'Sign in'}
            </Link>
          </li>
        </ul>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="ml-6 sm:hidden">
          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">AI Gourmet Navigator</Link>
                </SheetTitle>
                <ul className="flex flex-col gap-4">
                  <li className="pt-2">
                    <Link
                      href={session ? '/favorites' : '/api/auth/signin'}
                      className="no-underline hover:text-primary"
                    >
                      Favorites
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={session ? '/api/auth/signout' : '/api/auth/signin'}
                      className="no-underline hover:text-primary"
                    >
                      {session ? 'Sign out' : 'Sign in'}
                    </Link>
                  </li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
