'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

export default function ServicesPage() {
    const [services, setServices] = useState(initialServices);

    const toggleActive = (id: number) => {
        setServices((prev) =>
            prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
        );
    };

    const togglePopular = (id: number) => {
        setServices((prev) =>
            prev.map((s) => (s.id === id ? { ...s, popular: !s.popular } : s))
        );
    };

    const deleteService = (id: number) => {
        setServices((prev) => prev.filter((s) => s.id !== id));
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
                    <div
                        key={service.id}
                        className="bg-card border border-border rounded-xl p-6"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Wrench className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{service.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {service.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            {service.active && (
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    Активна
                                </Badge>
                            )}
                            {!service.active && (
                                <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                                    Неактивна
                                </Badge>
                            )}
                            {service.popular && (
                                <Badge variant="default">Популярная</Badge>
                            )}
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                                <Edit className="h-4 w-4 mr-1" />
                                Редактировать
                            </Button>
                            <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => deleteService(service.id)}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
