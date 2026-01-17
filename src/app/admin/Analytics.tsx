import { motion } from "framer-motion";
import {
    Eye,
    TrendingUp,
    Clock,
    Globe,
    Smartphone,
    Monitor,
} from "lucide-react";
import StatCard from "@/components/admin/StatCard";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const viewsData = [
    { name: "Пн", views: 240 },
    { name: "Вт", views: 320 },
    { name: "Ср", views: 280 },
    { name: "Чт", views: 450 },
    { name: "Пт", views: 380 },
    { name: "Сб", views: 290 },
    { name: "Вс", views: 210 },
];

const deviceData = [
    { name: "Мобильные", value: 65, color: "hsl(222, 47%, 11%)" },
    { name: "Десктоп", value: 30, color: "hsl(215, 16%, 47%)" },
    { name: "Планшеты", value: 5, color: "hsl(214, 32%, 91%)" },
];

const topPages = [
    { page: "Главная", views: 1240, change: "+12%" },
    { page: "Стиральные машины", views: 890, change: "+8%" },
    { page: "Холодильники", views: 654, change: "+15%" },
    { page: "Кондиционеры", views: 432, change: "+3%" },
    { page: "Контакты", views: 287, change: "+21%" },
];

const Analytics = () => {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Всего просмотров"
                    value="2,847"
                    change="+8% за неделю"
                    changeType="positive"
                    icon={Eye}
                />
                <StatCard
                    title="Уникальных посетителей"
                    value="1,432"
                    change="+5% за неделю"
                    changeType="positive"
                    icon={Globe}
                />
                <StatCard
                    title="Среднее время на сайте"
                    value="2:45"
                    change="+12 сек"
                    changeType="positive"
                    icon={Clock}
                />
                <StatCard
                    title="Показатель отказов"
                    value="32%"
                    change="-3%"
                    changeType="positive"
                    icon={TrendingUp}
                />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Views Chart */}
                <div className="lg:col-span-2 stat-card">
                    <h3 className="text-lg font-semibold mb-4">Просмотры по дням</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={viewsData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
                                <XAxis dataKey="name" stroke="hsl(215, 16%, 47%)" />
                                <YAxis stroke="hsl(215, 16%, 47%)" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "hsl(0, 0%, 100%)",
                                        border: "1px solid hsl(214, 32%, 91%)",
                                        borderRadius: "8px",
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="views"
                                    stroke="hsl(222, 47%, 11%)"
                                    fill="hsl(222, 47%, 11%)"
                                    fillOpacity={0.1}
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Device Distribution */}
                <div className="stat-card">
                    <h3 className="text-lg font-semibold mb-4">Устройства</h3>
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={deviceData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    dataKey="value"
                                    paddingAngle={2}
                                >
                                    {deviceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="space-y-2 mt-4">
                        {deviceData.map((device) => (
                            <div
                                key={device.name}
                                className="flex items-center justify-between text-sm"
                            >
                                <div className="flex items-center gap-2">
                                    {device.name === "Мобильные" ? (
                                        <Smartphone className="h-4 w-4" />
                                    ) : (
                                        <Monitor className="h-4 w-4" />
                                    )}
                                    <span>{device.name}</span>
                                </div>
                                <span className="font-medium">{device.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top Pages */}
            <div className="stat-card">
                <h3 className="text-lg font-semibold mb-4">Популярные страницы</h3>
                <div className="space-y-4">
                    {topPages.map((page, index) => (
                        <div
                            key={page.page}
                            className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                        >
                            <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-muted-foreground">
                  {index + 1}
                </span>
                                <span className="font-medium">{page.page}</span>
                            </div>
                            <div className="flex items-center gap-4">
                <span className="text-muted-foreground">
                  {page.views.toLocaleString()} просмотров
                </span>
                                <span className="text-success text-sm font-medium">
                  {page.change}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Analytics;
