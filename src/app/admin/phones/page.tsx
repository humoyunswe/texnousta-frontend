'use client'

import { motion } from "framer-motion";
import { Phone, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const phones = [
    {
        id: 1,
        number: "+998 93 596 00 55",
        label: "Основной",
        description: "Круглосуточная поддержка",
        active: true,
    },
    {
        id: 2,
        number: "+998 90 123 45 67",
        label: "Запасной",
        description: "Рабочие часы 9:00 - 18:00",
        active: true,
    },
    {
        id: 3,
        number: "+998 91 234 56 78",
        label: "Техническая поддержка",
        description: "Для мастеров и партнёров",
        active: false,
    },
];

export default function PhonesPage() {
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
                    <h1 className="text-2xl lg:text-3xl font-bold">Номера телефонов</h1>
                    <p className="text-muted-foreground mt-1">
                        Управление контактными номерами
                    </p>
                </div>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Добавить номер
                </Button>
            </div>

            {/* Phones List */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {phones.map((phone) => (
                    <div
                        key={phone.id}
                        className="bg-card border border-border rounded-xl p-6"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{phone.label}</h3>
                                    <p className="text-lg font-mono mt-1">{phone.number}</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            {phone.description}
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                            {phone.active ? (
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    Активен
                                </Badge>
                            ) : (
                                <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                                    Неактивен
                                </Badge>
                            )}
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                                <Edit className="h-4 w-4 mr-1" />
                                Редактировать
                            </Button>
                            <Button variant="outline" size="sm">
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
