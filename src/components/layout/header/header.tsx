import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BellRing, Search } from "lucide-react";
import Link from "next/link";

export function Header() {
    return (
        <header className="w-full border-b h-16 px-6 flex items-center justify-between">
            <div className="relative flex items-center">
                <Input
                    className="max-w-96 pl-10"
                    placeholder="Pesquisar no estoque..."
                />
                <Search className="absolute left-3 size-4" />
            </div>
            <div className="flex items-center gap-4">
                <Button size={"icon"} variant={"secondary"}>
                    <BellRing />
                </Button>
                <Link href={"/profile"} className="flex items-center gap-2">
                    <Avatar className="size-8">
                        <AvatarImage src="https://github.com/miguelkapicius.png" />
                        <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Miguel Kapicius</span>
                </Link>
            </div>
        </header>
    );
}
