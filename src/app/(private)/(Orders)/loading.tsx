import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">Estoque</h2>
                    <p className="text-sm text-muted-foreground">
                        Gerencie seus produtos no estoque
                    </p>
                </div>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Skeleton className="rounded-xl h-32" />
                <Skeleton className="rounded-xl h-32" />
                <Skeleton className="rounded-xl h-32" />
                <Skeleton className="rounded-xl h-32" />
            </section>
            <section className="">
                <Skeleton className="rounded-xl h-[60vh]" />
            </section>
        </div>
    );
}
