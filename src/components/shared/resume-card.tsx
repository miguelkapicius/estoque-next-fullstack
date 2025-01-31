import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface ResumeCardProps {
    title: string;
    Icon?: React.ComponentType;
    value: string;
}

export function ResumeCard({ title, Icon, value }: ResumeCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardDescription>{title}</CardDescription>
                <CardTitle className="flex items-center text-2xl">
                    {Icon && <Icon />}
                    {value}
                </CardTitle>
            </CardHeader>
        </Card>
    );
}
