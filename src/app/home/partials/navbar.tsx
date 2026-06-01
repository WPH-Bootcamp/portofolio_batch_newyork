import { Button } from "@/components/ui/button";
import { navigationData } from "@/constant/navigation-data";
import Image from "next/image";
import Link from "next/link";

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
        <Button asChild className="hidden lg:flex ">
          <Link href="#contact">Get Started</Link>
        </Button>

        {/* sheet button */}
      </div>
    </header>
  );
};

export default Navbar;
