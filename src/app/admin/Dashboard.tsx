import { motion } from "framer-motion";
import { Phone, Eye, Users, FileText, TrendingUp, Clock } from "lucide-react";
import StatCard from "@/components/admin/StatCard";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const recentRequests = [
    {
        id: 1,
        phone: "+998 90 123 45 67",
        service: "Ремонт стиральной машины",
        status: "new",
        date: "Сегодня, 14:30",
    },
    {
        id: 2,
        phone: "+998 91 234 56 78",
        service: "Ремонт холодильника",
        status: "progress",
        date: "Сегодня, 12:15",
    },
    {
        id: 3,
        phone: "+998 93 345 67 89",
        service: "Установка кондиционера",
        status: "done",
        date: "Вчера, 18:00",
    },
    {
        id: 4,
        phone: "+998 94 456 78 90",
        service: "Ремонт посудомоечной машины",
        status: "new",
        date: "Вчера, 15:45",
    },
];

const statusMap = {
    new: { label: "Новая", variant: "default" as const },
    progress: { label: "В работе", variant: "secondary" as const },
    done: { label: "Завершена", variant: "outline" as const },
};

const Dashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            {/* Header */}
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold">Панель управления</h1>
                <p className="text-muted-foreground mt-1">
                    Обзор активности за сегодня
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <StatCard
                    title="Оставленные номера"
                    value="156"
                    change="+12% за неделю"
                    changeType="positive"
                    icon={Phone}
                />
                <StatCard
                    title="Просмотры сайта"
                    value="2,847"
                    change="+8% за неделю"
                    changeType="positive"
                    icon={Eye}
                />
                <StatCard
                    title="Пользователи"
                    value="45"
                    change="+3 новых"
                    changeType="positive"
                    icon={Users}
                />
                <StatCard
                    title="Заявки на ремонт"
                    value="89"
                    change="24 в обработке"
                    changeType="neutral"
                    icon={FileText}
                />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div className="stat-card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-success/10 rounded-lg">
                            <TrendingUp className="h-5 w-5 text-success" />
                        </div>
                        <h3 className="font-semibold">Конверсия</h3>
                    </div>
                    <p className="text-4xl font-bold">5.4%</p>
                    <p className="text-sm text-muted-foreground mt-1">
                        Посетителей оставили номер
                    </p>
                </div>
                <div className="stat-card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-warning/10 rounded-lg">
                            <Clock className="h-5 w-5 text-warning" />
                        </div>
                        <h3 className="font-semibold">Среднее время ответа</h3>
                    </div>
                    <p className="text-4xl font-bold">15 мин</p>
                    <p className="text-sm text-muted-foreground mt-1">
                        До первого контакта
                    </p>
                </div>
            </div>

            {/* Recent Requests */}
            <div className="stat-card">
                <h3 className="text-lg font-semibold mb-4">Последние заявки</h3>
                <div className="overflow-x-auto -mx-6">
                    <div className="inline-block min-w-full align-middle px-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Телефон</TableHead>
                                    <TableHead className="hidden sm:table-cell">Услуга</TableHead>
                                    <TableHead>Статус</TableHead>
                                    <TableHead className="hidden md:table-cell">Дата</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentRequests.map((request) => (
                                    <TableRow key={request.id} className="table-row-hover">
                                        <TableCell className="font-medium">
                                            {request.phone}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {request.service}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={statusMap[request.status].variant}>
                                                {statusMap[request.status].label}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell text-muted-foreground">
                                            {request.date}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
