import { ResumeCard } from "@/components/shared/resume-card";
import { SuppliersTable } from "./_components/suppliers-table";

export default function SuppliersPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold">Fornecedores</h2>
                <p className="text-sm text-muted-foreground">
                    Gerencie os fornecedores
                </p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ResumeCard title="Fornecedores" value="150" />
                <ResumeCard title="Fornecedores Ativos" value="120" />
                <ResumeCard title="Fornecedores Inativos" value="30" />
                <ResumeCard title="Pedidos Pendentes" value="70" />
            </section>
            <section>
                <SuppliersTable />
            </section>
        </div>
    );
}
