import { ResumeCard } from "@/components/shared/resume-card";
import { ItemsTable } from "./_components/items-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function InventoryPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">Estoque</h2>
                    <p className="text-sm text-muted-foreground">
                        Gerencie seus produtos no estoque
                    </p>
                </div>
                <Button size={"lg"}>
                    Adicionar Item <Plus />
                </Button>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ResumeCard title="Produtos" value="2,040" />
                <ResumeCard title="Baixo Estoque" value="45" />
                <ResumeCard title="Fora de Estoque" value="12" />
                <ResumeCard title="Categorias" value="8" />
            </section>
            <section className="">
                <ItemsTable />
            </section>
        </div>
    );
}
