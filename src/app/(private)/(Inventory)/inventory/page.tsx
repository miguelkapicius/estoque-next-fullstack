import { ResumeCard } from "@/components/shared/resume-card";
import { ItemsTable } from "./_components/items-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { getCategories, getProducts } from "@/lib/utils";

export default async function InventoryPage() {
    const products = await getProducts();
    const categories = await getCategories();

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
                <ResumeCard
                    title="Produtos"
                    value={products.data.length.toString()}
                />
                <ResumeCard
                    title="Baixo Estoque"
                    value={products.data
                        .filter((product) => product.stock <= product.minStock)
                        .length.toString()}
                />
                <ResumeCard
                    title="Fora de Estoque"
                    value={products.data
                        .filter((product) => product.stock === 0)
                        .length.toString()}
                />
                <ResumeCard
                    title="Categorias"
                    value={categories.data.length.toString()}
                />
            </section>
            <section className="">
                <ItemsTable />
            </section>
        </div>
    );
}
