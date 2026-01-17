import { useState } from "react";
import { motion } from "framer-motion";
import {
    Users as UsersIcon,
    Search,
    Plus,
    MoreHorizontal,
    Mail,
    Phone,
    Shield,
    Trash2,
    Edit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const initialUsers = [
    {
        id: 1,
        name: "Шахзод Рахимов",
        email: "shakhzod@texnousta.uz",
        phone: "+998 90 111 22 33",
        role: "admin",
        status: "active",
    },
    {
        id: 2,
        name: "Азиза Каримова",
        email: "aziza@texnousta.uz",
        phone: "+998 91 222 33 44",
        role: "manager",
        status: "active",
    },
    {
        id: 3,
        name: "Бекзод Тошев",
        email: "bekzod@texnousta.uz",
        phone: "+998 93 333 44 55",
        role: "technician",
        status: "active",
    },
    {
        id: 4,
        name: "Дилноза Усмонова",
        email: "dilnoza@texnousta.uz",
        phone: "+998 94 444 55 66",
        role: "technician",
        status: "inactive",
    },
    {
        id: 5,
        name: "Рустам Норматов",
        email: "rustam@texnousta.uz",
        phone: "+998 95 555 66 77",
        role: "manager",
        status: "active",
    },
];

const roleLabels = {
    admin: { label: "Админ", variant: "default" as const },
    manager: { label: "Менеджер", variant: "secondary" as const },
    technician: { label: "Мастер", variant: "outline" as const },
};

const Users = () => {
    const [users, setUsers] = useState(initialUsers);
    const [search, setSearch] = useState("");

    const filteredUsers = users.filter(
        (u) =>
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase())
    );

    const deleteUser = (id: number) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
        toast.success("Пользователь удалён");
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
                    <h1 className="text-2xl lg:text-3xl font-bold">Пользователи</h1>
                    <p className="text-muted-foreground mt-1">
                        {users.length} пользователей в системе
                    </p>
                </div>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Добавить
                </Button>
            </div>

            {/* Search */}
            <div className="stat-card">
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Поиск по имени или email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Users Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredUsers.map((user) => (
                    <motion.div
                        key={user.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="stat-card"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="" alt={user.name} />
                                    <AvatarFallback className="bg-primary text-primary-foreground">
                                        {user.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-semibold">{user.name}</h3>
                                    <Badge variant={roleLabels[user.role].variant}>
                                        {roleLabels[user.role].label}
                                    </Badge>
                                </div>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Edit className="h-4 w-4 mr-2" />
                                        Редактировать
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="text-destructive"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Удалить
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>{user.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>{user.phone}</span>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`h-2 w-2 rounded-full ${
                                        user.status === "active" ? "bg-success" : "bg-muted-foreground"
                                    }`}
                                />
                                <span className="text-sm text-muted-foreground">
                  {user.status === "active" ? "Активен" : "Неактивен"}
                </span>
                            </div>
                            <Shield className="h-4 w-4 text-muted-foreground" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Users;
