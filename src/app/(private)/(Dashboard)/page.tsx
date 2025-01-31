import { DashboardBarChart } from "@/components/charts/dashboard/bar-chart";
import { DashboardLineChart } from "@/components/charts/dashboard/line-chart";
import { ResumeCard } from "@/components/shared/resume-card";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DollarSign, TriangleAlert } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold">Dashboard</h2>
                <p className="text-sm text-muted-foreground">
                    Bem-vindo, Miguel Kapicius
                </p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ResumeCard title="Faturamento Total" value="R$ 2,345" />
                <ResumeCard title="Produtos" value="2,040" />
                <ResumeCard title="Baixo Estoque" value="45" />
                <ResumeCard title="Fora de Estoque" value="12" />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DashboardLineChart />
                <DashboardBarChart />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">
                            Atividades Recentes
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between text-sm">
                            <div className="">
                                <CardTitle>Novo Produto Adicionado</CardTitle>
                                <CardDescription>
                                    Wireless Headphones
                                </CardDescription>
                            </div>
                            <span className="text-muted-foreground">
                                Há 2 horas
                            </span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">
                            Alertas de Estoque Baixo
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <TriangleAlert className="text-orange-400" />
                                <div className="">
                                    <CardTitle>Wireless Headphones</CardTitle>
                                    <CardDescription>
                                        5 unidades (min: 3)
                                    </CardDescription>
                                </div>
                            </div>
                            <Button variant={"link"}>Recomprar</Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
