import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import db from "../../../../../../prisma/db";

export async function ItemsTable() {
    async function getProducts() {
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

    const products = await getProducts();

    return (
        <Card>
            <CardHeader>
                <Table>
                    <TableHeader className="">
                        <TableRow className="">
                            <TableHead className="">Produto</TableHead>
                            <TableHead className="">ID</TableHead>
                            <TableHead className="">Categoria</TableHead>
                            <TableHead className="">Em Estoque</TableHead>
                            <TableHead className="">Preço</TableHead>
                            <TableHead className=" text-center">
                                Ações
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.data.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.category.name}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>
                                    ${product.salePrice.toFixed(2)}
                                </TableCell>
                                <TableCell className="flex items-center justify-center gap-2">
                                    <Button size={"icon"}>
                                        <Pencil />
                                    </Button>
                                    <Button
                                        variant={"destructive"}
                                        size={"icon"}
                                    >
                                        <Trash />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardHeader>
        </Card>
    );
}
