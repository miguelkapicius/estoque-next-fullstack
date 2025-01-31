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

export function SuppliersTable() {
    return (
        <Card>
            <CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fornecedor</TableHead>
                            <TableHead>CPF/CNPJ</TableHead>
                            <TableHead>E-mail</TableHead>
                            <TableHead>Telefone</TableHead>
                            <TableHead className="text-center">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Supplier 1</TableCell>
                            <TableCell>000.000.000-00</TableCell>
                            <TableCell>2B4dS@example.com</TableCell>
                            <TableCell>(00) 00000-0000</TableCell>
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
