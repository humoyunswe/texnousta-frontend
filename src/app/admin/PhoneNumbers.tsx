import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Search, Download, Trash2, Check, X } from "lucide-react";
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
import { toast } from "sonner";

const initialPhones = [
    {
        id: 1,
        phone: "+998 90 123 45 67",
        name: "Алишер",
        service: "Стиральная машина",
        date: "17.01.2026",
        status: "new",
    },
    {
        id: 2,
        phone: "+998 91 234 56 78",
        name: "Дилноза",
        service: "Холодильник",
        date: "17.01.2026",
        status: "contacted",
    },
    {
        id: 3,
        phone: "+998 93 345 67 89",
        name: "Бекзод",
        service: "Кондиционер",
        date: "16.01.2026",
        status: "contacted",
    },
    {
        id: 4,
        phone: "+998 94 456 78 90",
        name: "Мадина",
        service: "Посудомоечная машина",
        date: "16.01.2026",
        status: "new",
    },
    {
        id: 5,
        phone: "+998 95 567 89 01",
        name: "Рустам",
        service: "Стиральная машина",
        date: "15.01.2026",
        status: "contacted",
    },
];

const PhoneNumbers = () => {
    const [phones, setPhones] = useState(initialPhones);
    const [search, setSearch] = useState("");

    const filteredPhones = phones.filter(
        (p) =>
            p.phone.includes(search) ||
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.service.toLowerCase().includes(search.toLowerCase())
    );

    const markAsContacted = (id: number) => {
        setPhones((prev) =>
            prev.map((p) => (p.id === id ? { ...p, status: "contacted" } : p))
        );
        toast.success("Отмечено как связались");
    };

    const deletePhone = (id: number) => {
        setPhones((prev) => prev.filter((p) => p.id !== id));
        toast.success("Запись удалена");
    };

    const exportData = () => {
        toast.success("Данные экспортированы");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold">Оставленные номера</h1>
                    <p className="text-muted-foreground mt-1">
                        {phones.length} номеров в базе
                    </p>
                </div>
                <Button onClick={exportData} variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Экспорт
                </Button>
            </div>

            {/* Search */}
            <div className="stat-card">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Поиск по номеру, имени или услуге..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="stat-card">
                <div className="overflow-x-auto -mx-6">
                    <div className="inline-block min-w-full align-middle px-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Телефон</TableHead>
                                    <TableHead className="hidden sm:table-cell">Имя</TableHead>
                                    <TableHead className="hidden md:table-cell">Услуга</TableHead>
                                    <TableHead className="hidden lg:table-cell">Дата</TableHead>
                                    <TableHead>Статус</TableHead>
                                    <TableHead className="text-right">Действия</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredPhones.map((phone) => (
                                    <TableRow key={phone.id} className="table-row-hover">
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-4 w-4 text-muted-foreground hidden sm:block" />
                                                <span className="font-medium">{phone.phone}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {phone.name}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {phone.service}
                                        </TableCell>
                                        <TableCell className="hidden lg:table-cell text-muted-foreground">
                                            {phone.date}
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    phone.status === "new" ? "default" : "secondary"
                                                }
                                            >
                                                {phone.status === "new" ? "Новый" : "Связались"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {phone.status === "new" && (
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        onClick={() => markAsContacted(phone.id)}
                                                        className="h-8 w-8"
                                                    >
                                                        <Check className="h-4 w-4 text-success" />
                                                    </Button>
                                                )}
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    onClick={() => deletePhone(phone.id)}
                                                    className="h-8 w-8"
                                                >
                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                </Button>
                                            </div>
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

export default PhoneNumbers;
