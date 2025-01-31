import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { AppSidebar } from "@/components/layout/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/header/header";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Inventory Pro",
    description: "Gerencia de estoque",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} antialiased`}
                cz-shortcut-listen="true"
            >
                <SidebarProvider>
                    <AppSidebar />
                    <div className="w-full">
                        <Header />
                        <main className="p-6">{children}</main>
                    </div>
                </SidebarProvider>
            </body>
        </html>
    );
}
