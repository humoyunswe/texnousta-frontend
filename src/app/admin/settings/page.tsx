'use client'

import { motion } from "framer-motion";
import { Settings as SettingsIcon, Globe, Bell, Shield, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const settingsSections = [
    {
        icon: Globe,
        title: "Общие настройки",
        description: "Название сайта, описание, основная информация",
    },
    {
        icon: Bell,
        title: "Уведомления",
        description: "Настройка email и push уведомлений",
    },
    {
        icon: Shield,
        title: "Безопасность",
        description: "Пароли, двухфакторная аутентификация",
    },
    {
        icon: Palette,
        title: "Оформление",
        description: "Цвета, шрифты, логотип",
    },
];

export default function SettingsPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            {/* Header */}
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold">Настройки</h1>
                <p className="text-muted-foreground mt-1">
                    Управление настройками системы
                </p>
            </div>

            {/* Settings Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {settingsSections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <div
                            key={section.title}
                            className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{section.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* General Settings Form */}
            <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Основные настройки</h3>
                <div className="space-y-4 max-w-2xl">
                    <div className="space-y-2">
                        <Label htmlFor="siteName">Название сайта</Label>
                        <Input id="siteName" defaultValue="TexnoUsta" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="siteDescription">Описание</Label>
                        <Input 
                            id="siteDescription" 
                            defaultValue="Профессиональный ремонт бытовой техники в Ташкенте" 
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email для связи</Label>
                        <Input 
                            id="email" 
                            type="email"
                            defaultValue="info@texnousta.uz" 
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Адрес</Label>
                        <Input 
                            id="address" 
                            defaultValue="Ташкент, Узбекистан" 
                        />
                    </div>
                    <Button className="mt-4">
                        Сохранить изменения
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
