import { useState } from "react";
import { motion } from "framer-motion";
import {
    Settings as SettingsIcon,
    Bell,
    Shield,
    Palette,
    Globe,
    Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Settings = () => {
    const [settings, setSettings] = useState({
        siteName: "texnousta.uz",
        siteDescription: "Профессиональный ремонт бытовой техники в Ташкенте",
        contactPhone: "+998 90 123 45 67",
        contactEmail: "info@texnousta.uz",
        workingHours: "09:00 - 20:00",
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        language: "ru",
    });

    const handleSave = () => {
        toast.success("Настройки сохранены");
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
                <h1 className="text-2xl lg:text-3xl font-bold">Настройки</h1>
                <p className="text-muted-foreground mt-1">
                    Управление настройками системы
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* General Settings */}
                <div className="stat-card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">Общие настройки</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="siteName">Название сайта</Label>
                            <Input
                                id="siteName"
                                value={settings.siteName}
                                onChange={(e) =>
                                    setSettings((prev) => ({ ...prev, siteName: e.target.value }))
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="siteDescription">Описание</Label>
                            <Textarea
                                id="siteDescription"
                                value={settings.siteDescription}
                                onChange={(e) =>
                                    setSettings((prev) => ({
                                        ...prev,
                                        siteDescription: e.target.value,
                                    }))
                                }
                                rows={3}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="language">Язык</Label>
                            <Select
                                value={settings.language}
                                onValueChange={(value) =>
                                    setSettings((prev) => ({ ...prev, language: value }))
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ru">Русский</SelectItem>
                                    <SelectItem value="uz">O'zbekcha</SelectItem>
                                    <SelectItem value="en">English</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Contact Settings */}
                <div className="stat-card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <SettingsIcon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">Контактная информация</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="contactPhone">Телефон</Label>
                            <Input
                                id="contactPhone"
                                value={settings.contactPhone}
                                onChange={(e) =>
                                    setSettings((prev) => ({
                                        ...prev,
                                        contactPhone: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="contactEmail">Email</Label>
                            <Input
                                id="contactEmail"
                                type="email"
                                value={settings.contactEmail}
                                onChange={(e) =>
                                    setSettings((prev) => ({
                                        ...prev,
                                        contactEmail: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="workingHours">Время работы</Label>
                            <Input
                                id="workingHours"
                                value={settings.workingHours}
                                onChange={(e) =>
                                    setSettings((prev) => ({
                                        ...prev,
                                        workingHours: e.target.value,
                                    }))
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="stat-card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Bell className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">Уведомления</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Email уведомления</p>
                                <p className="text-sm text-muted-foreground">
                                    Получать уведомления на почту
                                </p>
                            </div>
                            <Switch
                                checked={settings.notifications.email}
                                onCheckedChange={(checked) =>
                                    setSettings((prev) => ({
                                        ...prev,
                                        notifications: { ...prev.notifications, email: checked },
                                    }))
                                }
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">SMS уведомления</p>
                                <p className="text-sm text-muted-foreground">
                                    Получать SMS о новых заявках
                                </p>
                            </div>
                            <Switch
                                checked={settings.notifications.sms}
                                onCheckedChange={(checked) =>
                                    setSettings((prev) => ({
                                        ...prev,
                                        notifications: { ...prev.notifications, sms: checked },
                                    }))
                                }
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Push уведомления</p>
                                <p className="text-sm text-muted-foreground">
                                    Браузерные уведомления
                                </p>
                            </div>
                            <Switch
                                checked={settings.notifications.push}
                                onCheckedChange={(checked) =>
                                    setSettings((prev) => ({
                                        ...prev,
                                        notifications: { ...prev.notifications, push: checked },
                                    }))
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="stat-card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">Безопасность</h3>
                    </div>

                    <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                            Изменить пароль
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            Двухфакторная аутентификация
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            История входов
                        </Button>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <Button onClick={handleSave} size="lg">
                    <Save className="h-4 w-4 mr-2" />
                    Сохранить настройки
                </Button>
            </div>
        </motion.div>
    );
};

export default Settings;
