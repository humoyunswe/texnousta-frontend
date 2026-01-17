import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Plus, Edit, Trash2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const initialServices = [
    {
        id: 1,
        name: "Ремонт стиральных машин",
        price: "от 150 000 сум",
        active: true,
        popular: true,
    },
    {
        id: 2,
        name: "Ремонт холодильников",
        price: "от 200 000 сум",
        active: true,
        popular: true,
    },
    {
        id: 3,
        name: "Установка кондиционеров",
        price: "от 250 000 сум",
        active: true,
        popular: false,
    },
    {
        id: 4,
        name: "Ремонт посудомоечных машин",
        price: "от 180 000 сум",
        active: true,
        popular: false,
    },
    {
        id: 5,
        name: "Ремонт микроволновых печей",
        price: "от 100 000 сум",
        active: false,
        popular: false,
    },
    {
        id: 6,
        name: "Ремонт электроплит",
        price: "от 120 000 сум",
        active: true,
        popular: false,
    },
];

const Services = () => {
    const [services, setServices] = useState(initialServices);

    const toggleActive = (id: number) => {
        setServices((prev) =>
            prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
        );
        toast.success("Статус обновлён");
    };

    const togglePopular = (id: number) => {
        setServices((prev) =>
            prev.map((s) => (s.id === id ? { ...s, popular: !s.popular } : s))
        );
        toast.success("Популярность обновлена");
    };

    const deleteService = (id: number) => {
        setServices((prev) => prev.filter((s) => s.id !== id));
        toast.success("Услуга удалена");
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
                    <h1 className="text-2xl lg:text-3xl font-bold">Услуги</h1>
                    <p className="text-muted-foreground mt-1">
                        Управление списком услуг
                    </p>
                </div>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Добавить услугу
                </Button>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="stat-card"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Wrench className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{service.name}</h3>
                                    <p className="text-sm text-muted-foreground">{service.price}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            {service.popular && <Badge>Популярная</Badge>}
                            {!service.active && (
                                <Badge variant="secondary">Неактивна</Badge>
                            )}
                        </div>

                        <div className="pt-4 border-t border-border space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Активна</span>
                                <Switch
                                    checked={service.active}
                                    onCheckedChange={() => toggleActive(service.id)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Популярная</span>
                                <Switch
                                    checked={service.popular}
                                    onCheckedChange={() => togglePopular(service.id)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                            <Button variant="outline" size="sm" className="flex-1">
                                <Edit className="h-4 w-4 mr-2" />
                                Изменить
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="text-destructive hover:text-destructive"
                                onClick={() => deleteService(service.id)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Services;
