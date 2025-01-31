"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Error() {
    return (
        <section className="h-[80vh] flex flex-col gap-6 items-center justify-center">
            <Image src={"/404.svg"} alt="404" width={500} height={500} />
            <h2 className="text-5xl font-semibold">Página não encontrada!</h2>
            <Link href={"/"}>
                <Button size={"lg"}>
                    <ArrowLeft />
                    Voltar para Dashboard
                </Button>
            </Link>
        </section>
    );
}
