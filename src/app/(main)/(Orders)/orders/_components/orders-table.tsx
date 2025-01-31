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

export function OrdersTable() {
    return (
        <Card>
            <CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Número do Pedido</TableHead>
                            <TableHead>Cliente</TableHead>
                            <TableHead>Data do Pedido</TableHead>
                            <TableHead>Valor</TableHead>
                            <TableHead className="text-center">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Client 1</TableCell>
                            <TableCell>01/01/2023</TableCell>
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
