'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Search,
    Filter,
    Eye,
    CheckCircle,
    Clock,
    XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const initialRequests = [
    {
        id: 1,
        client: "Алишер Хамидов",
        phone: "+998 90 123 45 67",
        service: "Ремонт стиральной машины Samsung",
        status: "new",
        priority: "high",
        date: "17.01.2026",
        address: "Юнусабад, 4-квартал",
    },
    {
        id: 2,
        client: "Гулнора Рашидова",
        phone: "+998 91 234 56 78",
        service: "Ремонт холодильника LG",
        status: "progress",
        priority: "medium",
        date: "17.01.2026",
        address: "Чиланзар, 19-квартал",
    },
    {
        id: 3,
        client: "Шухрат Каримов",
        phone: "+998 93 345 67 89",
        service: "Чистка кондиционера Artel",
        status: "done",
        priority: "low",
        date: "16.01.2026",
        address: "Мирзо Улугбек, 5-квартал",
    },
    {
        id: 4,
        client: "Малика Усманова",
        phone: "+998 94 456 78 90",
        service: "Ремонт посудомоечной машины Bosch",
        status: "cancelled",
        priority: "medium",
        date: "16.01.2026",
        address: "Сергели, 7-квартал",
    },
    {
        id: 5,
        client: "Бахтиёр Норов",
        phone: "+998 95 567 89 01",
        service: "Замена компрессора холодильника",
        status: "progress",
        priority: "high",
        date: "15.01.2026",
        address: "Яккасарай, 3-квартал",
    },
];

const statusConfig = {
    new: { label: "Новая", icon: Clock, color: "default" as const },
    progress: { label: "В работе", icon: Eye, color: "secondary" as const },
    done: { label: "Завершена", icon: CheckCircle, color: "outline" as const },
    cancelled: { label: "Отменена", icon: XCircle, color: "destructive" as const },
};

const priorityConfig = {
    high: { label: "Высокий", color: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400" },
    medium: { label: "Средний", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400" },
    low: { label: "Низкий", color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400" },
};

export default function RequestsPage() {
    const [requests, setRequests] = useState(initialRequests);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const filteredRequests = requests.filter((r) => {
        const matchesSearch =
            r.client.toLowerCase().includes(search.toLowerCase()) ||
            r.service.toLowerCase().includes(search.toLowerCase()) ||
            r.phone.includes(search);
        const matchesStatus = statusFilter === "all" || r.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const updateStatus = (id: number, status: string) => {
        setRequests((prev) =>
            prev.map((r) => (r.id === id ? { ...r, status } : r))
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            {/* Header */}
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold">Заявки на ремонт</h1>
                <p className="text-muted-foreground mt-1">
                    {requests.filter((r) => r.status === "new").length} новых заявок
                </p>
            </div>

            {/* Filters */}
            <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Поиск по клиенту, услуге или телефону..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-full sm:w-48">
                            <div className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                <SelectValue placeholder="Статус" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Все статусы</SelectItem>
                            <SelectItem value="new">Новые</SelectItem>
                            <SelectItem value="progress">В работе</SelectItem>
                            <SelectItem value="done">Завершённые</SelectItem>
                            <SelectItem value="cancelled">Отменённые</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-card border border-border rounded-xl p-6">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Клиент</TableHead>
                                <TableHead className="hidden md:table-cell">Услуга</TableHead>
                                <TableHead className="hidden lg:table-cell">Адрес</TableHead>
                                <TableHead>Приоритет</TableHead>
                                <TableHead>Статус</TableHead>
                                <TableHead className="hidden sm:table-cell">Дата</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredRequests.map((request) => {
                                const StatusIcon = statusConfig[request.status as keyof typeof statusConfig].icon;
                                return (
                                    <TableRow key={request.id}>
                                        <TableCell>
                                            <div>
                                                <p className="font-medium">{request.client}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {request.phone}
                                                </p>
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell max-w-[200px] truncate">
                                            {request.service}
                                        </TableCell>
                                        <TableCell className="hidden lg:table-cell text-muted-foreground">
                                            {request.address}
                                        </TableCell>
                                        <TableCell>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    priorityConfig[request.priority as keyof typeof priorityConfig].color
                                                }`}
                                            >
                                                {priorityConfig[request.priority as keyof typeof priorityConfig].label}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <Select
                                                value={request.status}
                                                onValueChange={(value) =>
                                                    updateStatus(request.id, value)
                                                }
                                            >
                                                <SelectTrigger className="w-32 h-8">
                                                    <div className="flex items-center gap-2">
                                                        <StatusIcon className="h-3 w-3" />
                                                        <span className="text-xs">
                                                            {statusConfig[request.status as keyof typeof statusConfig].label}
                                                        </span>
                                                    </div>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.entries(statusConfig).map(([key, config]) => (
                                                        <SelectItem key={key} value={key}>
                                                            <div className="flex items-center gap-2">
                                                                <config.icon className="h-3 w-3" />
                                                                {config.label}
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell text-muted-foreground">
                                            {request.date}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </motion.div>
    );
}
