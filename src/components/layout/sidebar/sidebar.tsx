"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    Box,
    ChartColumn,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
    {
        href: "/",
        label: "Dashboard",
        Icon: LayoutDashboard,
    },
    {
        href: "/inventory",
        label: "Estoque",
        Icon: Box,
    },
    {
        href: "/orders",
        label: "Pedidos",
        Icon: ShoppingCart,
    },
    {
        href: "/suppliers",
        label: "Fornecedores",
        Icon: Users2,
    },
    {
        href: "/reports",
        label: "Relatórios",
        Icon: ChartColumn,
    },
    {
        href: "/settings",
        label: "Configurações",
        Icon: Settings,
    },
];

export function AppSidebar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href;
    };

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <Link
                                href={"/"}
                                className="flex items-center gap-2 font-bold"
                            >
                                <Box className="size-6" />
                                Inventory Pro
                            </Link>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton asChild>
                                    <Link
                                        href={item.href}
                                        className={`${
                                            isActive(item.href) &&
                                            "text-indigo-600"
                                        }`}
                                    >
                                        <item.Icon lang="size-5" />
                                        {item.label}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
        </Sidebar>
    );
}
