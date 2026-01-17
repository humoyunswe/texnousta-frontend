'use client'

import { motion } from "framer-motion";
import { Phone, Eye, Users, FileText, TrendingUp, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    icon: Phone,
    label: "Всего заявок",
    value: "247",
    change: "+12%",
    trend: "up" as const,
  },
  {
    icon: Eye,
    label: "Просмотров сайта",
    value: "1,234",
    change: "+8%",
    trend: "up" as const,
  },
  {
    icon: Users,
    label: "Новых клиентов",
    value: "89",
    change: "+23%",
    trend: "up" as const,
  },
  {
    icon: FileText,
    label: "Завершённых заказов",
    value: "156",
    change: "+15%",
    trend: "up" as const,
  },
];

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

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Панель управления</h1>
        <p className="text-muted-foreground mt-1">
          Добро пожаловать в административную панель TexnoUsta
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card border border-border rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Requests */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Последние заявки</h2>
          <button className="text-sm text-primary hover:underline">
            Посмотреть все
          </button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Телефон</TableHead>
                <TableHead>Услуга</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Время</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.phone}</TableCell>
                  <TableCell>{request.service}</TableCell>
                  <TableCell>
                    <Badge variant={statusMap[request.status as keyof typeof statusMap].variant}>
                      {statusMap[request.status as keyof typeof statusMap].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {request.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
