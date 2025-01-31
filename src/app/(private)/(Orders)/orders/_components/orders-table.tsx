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
import { getOrders } from "@/lib/utils";

export async function OrdersTable() {
    const orders = await getOrders();

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
                        {orders.data.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.custumer.name}</TableCell>
                                <TableCell>
                                    {order.orderDate.toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    R$ {order.totalValue.toString()}
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
