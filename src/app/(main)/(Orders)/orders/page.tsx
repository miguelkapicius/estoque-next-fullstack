import { ResumeCard } from "@/components/shared/resume-card";
import { OrdersTable } from "./_components/orders-table";

export default function OrdersPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold">Pedidos</h2>
                <p className="text-sm text-muted-foreground">
                    Gerencie os pedidos
                </p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ResumeCard title="Pedidos" value="2,040" />
                <ResumeCard title="Pedidos Pendentes" value="45" />
                <ResumeCard title="Pedidos Concluídos" value="8" />
                <ResumeCard title="Pedidos Cancelados" value="12" />
            </section>
            <section>
                <OrdersTable />
            </section>
        </div>
    );
}
