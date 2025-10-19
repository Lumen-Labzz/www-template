import SendEmailFormDialog from "@/components/core/SendEmailFormDialog";
import SiteLogo from "@/components/core/SiteLogo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/data";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4 mx-96">
      <SiteLogo />

      <NavigationMenu className="bg-primary-foreground text-primary rounded-md p-2">
        <NavigationMenuList>
          {navLinks.map((navlink) => (
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="hover:scale-110 duration-300"
              >
                <a href={`#${navlink.href}`} className="flex flex-row">
                  <navlink.Icon />
                  {navlink.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <SendEmailFormDialog />
    </header>
  );
};

export default Navbar;
