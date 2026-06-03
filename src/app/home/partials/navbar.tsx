import { Button } from "@/components/ui/button";
import { navigationData } from "@/constant/navigation-data";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="flex-between custom-container h-16 md:h-21">
        {/* Image logo */}
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={158}
          height={56}
          className="max-w-35.25 max-h-8"
        />

        {/* nav */}
        <nav className="hidden lg:block">
          <ul className="flex-start gap-3">
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link className="hover:text-primary-200 p-4" href={data.href}>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* button */}
        <Button asChild className="hidden lg:flex">
          <Link href="#contact">Get Started</Link>
        </Button>

        {/* sheet button */}
        <Sheet>
          <SheetTrigger asChild>
            <Menu
              className="cursor-pointer lg:hidden"
              aria-label="Open main navigation"
            />
          </SheetTrigger>
          <SheetContent>
            <nav className="mt-16" aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-4">
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        className="hover:text-primary-200 p-4"
                        href={data.href}
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <Button asChild className="mt-3 w-full">
              <SheetClose asChild>
                <Link href="#contact">Get Started</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
