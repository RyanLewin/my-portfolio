import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
    const navLinks = [
        {name: "Home", href: "/"},
        {name: "Games", href: "/games"},
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-linear-to-br from-blue-600 to-purple-600" />
                    <span className="font-semibold">StaticSite</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        {link.name}
                    </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                {/* <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost">Sign In</Button>
                    <Button>Get Started</Button>
                </div> */}

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                    </Button>
                    </SheetTrigger>
                    <SheetContent>
                    <nav className="flex flex-col gap-6 mt-8 mx-8">
                        {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {link.name}
                        </a>
                        ))}
                        <div className="flex flex-col gap-2 mt-4">
                        {/* <Button variant="outline" className="w-full">Sign In</Button>
                        <Button className="w-full">Get Started</Button> */}
                        </div>
                    </nav>
                    </SheetContent>
                </Sheet>
                </div>
            </div>
        </header>
    )
}