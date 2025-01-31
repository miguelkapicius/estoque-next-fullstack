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

export function ItemsTable() {
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
                        <TableRow>
                            <TableCell>Item 1</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>Category 1</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>$10.00</TableCell>
                            <TableCell className="flex items-center justify-center gap-2">
                                <Button size={"icon"}>
                                    <Pencil />
                                </Button>
                                <Button variant={"destructive"} size={"icon"}>
                                    <Trash />
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardHeader>
        </Card>
    );
}
