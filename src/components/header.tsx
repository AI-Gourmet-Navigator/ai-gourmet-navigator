import { getServerAuthSession } from '@/server/auth'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export const Header = async () => {
  const session = await getServerAuthSession()
  return (
    <header className="sticky top-0 z-10 flex h-12 items-center justify-between bg-white/60 px-4 lg:px-8">
      <Link href="/">AI Gourmet Navigator</Link>
      <ul className="hidden items-center gap-6 sm:flex">
        <li>
          <Link
            href={session ? '/favorite' : '/api/auth/signin'}
            className="no-underline hover:text-primary"
          >
            Favorite
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
      <div className="sm:hidden">
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
                    href={session ? '/favorite' : '/api/auth/signin'}
                    className="no-underline hover:text-primary"
                  >
                    Favorite
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
    </header>
  )
}
