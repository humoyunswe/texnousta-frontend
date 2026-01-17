import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Save, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "Администратор",
        email: "admin@texnousta.uz",
        phone: "+998 90 123 45 67",
        address: "Ташкент, Узбекистан",
        bio: "Управление сервисом ремонта бытовой техники",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        toast.success("Профиль успешно сохранён");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            {/* Header */}
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold">Профиль</h1>
                <p className="text-muted-foreground mt-1">
                    Управление личными данными
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Avatar Card */}
                <div className="stat-card flex flex-col items-center text-center">
                    <div className="relative">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="" alt={profile.name} />
                            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                                {profile.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors">
                            <Camera className="h-4 w-4" />
                        </button>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold">{profile.name}</h2>
                    <p className="text-muted-foreground">{profile.email}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {profile.address}
                    </div>
                </div>

                {/* Edit Form */}
                <div className="lg:col-span-2 stat-card">
                    <h3 className="text-lg font-semibold mb-6">Редактировать профиль</h3>
                    <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Имя</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="name"
                                        name="name"
                                        value={profile.name}
                                        onChange={handleChange}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={profile.email}
                                        onChange={handleChange}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Телефон</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        name="phone"
                                        value={profile.phone}
                                        onChange={handleChange}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Адрес</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="address"
                                        name="address"
                                        value={profile.address}
                                        onChange={handleChange}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bio">О себе</Label>
                            <Textarea
                                id="bio"
                                name="bio"
                                value={profile.bio}
                                onChange={handleChange}
                                rows={3}
                            />
                        </div>
                        <Button onClick={handleSave} className="w-full sm:w-auto">
                            <Save className="h-4 w-4 mr-2" />
                            Сохранить изменения
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Profile;
