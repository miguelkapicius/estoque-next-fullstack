import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import db from "../../prisma/db";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function getProducts() {
    try {
        const products = await db.product.findMany({
            include: {
                category: true,
            },
        });
        return { data: products, prev: null, next: null };
    } catch (error) {
        console.log(error);
        return { data: [], prev: null, next: null };
    }
}

export async function getOrders() {
    try {
        const orders = await db.order.findMany({
            include: {
                custumer: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return { data: orders, prev: null, next: null };
    } catch (error) {
        console.log(error);
        return { data: [], prev: null, next: null };
    }
}

export async function getSuppliers() {
    try {
        const suppliers = await db.supplier.findMany();
        return { data: suppliers, prev: null, next: null };
    } catch (error) {
        console.log(error);
        return { data: [], prev: null, next: null };
    }
}

export async function getCategories() {
    try {
        const categories = await db.category.findMany();
        return { data: categories, prev: null, next: null };
    } catch (error) {
        console.log(error);
        return { data: [], prev: null, next: null };
    }
}
