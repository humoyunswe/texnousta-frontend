'use client'

import { motion } from "framer-motion";
import {
    Eye,
    TrendingUp,
    Clock,
    Globe,
} from "lucide-react";

const viewsData = [
    { name: "Пн", views: 240 },
    { name: "Вт", views: 320 },
    { name: "Ср", views: 280 },
    { name: "Чт", views: 450 },
    { name: "Пт", views: 380 },
    { name: "Сб", views: 290 },
    { name: "Вс", views: 210 },
];

const topPages = [
    { page: "Главная", views: 1240, change: "+12%" },
    { page: "Стиральные машины", views: 890, change: "+8%" },
    { page: "Холодильники", views: 654, change: "+15%" },
    { page: "Кондиционеры", views: 432, change: "+3%" },
    { page: "Контакты", views: 287, change: "+21%" },
];

const stats = [
    {
        icon: Eye,
        label: "Всего просмотров",
        value: "2,847",
        change: "+8% за неделю",
    },
    {
        icon: Globe,
        label: "Уникальных посетителей",
        value: "1,432",
        change: "+5% за неделю",
    },
    {
        icon: Clock,
        label: "Среднее время на сайте",
        value: "2:45",
        change: "+12 сек",
    },
    {
        icon: TrendingUp,
        label: "Показатель отказов",
        value: "32%",
        change: "-3%",
    },
];

export default function AnalyticsPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            {/* Header */}
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold">Аналитика просмотров</h1>
                <p className="text-muted-foreground mt-1">
                    Статистика посещений за последние 7 дней
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className="p-6 bg-card border border-border rounded-xl"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-sm text-green-600">
                                    {stat.change}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                        </div>
                    );
                })}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Views by Day */}
                <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Просмотры по дням</h3>
                    <div className="space-y-3">
                        {viewsData.map((day) => (
                            <div key={day.name} className="flex items-center gap-3">
                                <span className="text-sm text-muted-foreground w-8">{day.name}</span>
                                <div className="flex-1 bg-secondary rounded-full h-8 relative">
                                    <div 
                                        className="bg-primary rounded-full h-full transition-all"
                                        style={{ width: `${(day.views / 450) * 100}%` }}
                                    />
                                </div>
                                <span className="text-sm font-medium w-12 text-right">{day.views}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Pages */}
                <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Популярные страницы</h3>
                    <div className="space-y-4">
                        {topPages.map((page, index) => (
                            <div key={page.page} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary">
                                        {index + 1}
                                    </span>
                                    <span className="font-medium">{page.page}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-muted-foreground">{page.views}</span>
                                    <span className="text-sm text-green-600">{page.change}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
