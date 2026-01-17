import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import appliancesHero from "@/assets/appliances-hero.jpg";

type AuthMode = "login" | "register";

const Auth = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState<AuthMode>("login");
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login/register
        navigate("/admin");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="auth-container">
            {/* Left side - Image */}
            <div className="auth-left">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-lg text-center"
                >
                    <img
                        src={appliancesHero}
                        alt="Бытовая техника"
                        className="w-full h-auto max-h-[500px] object-contain mb-8 rounded-2xl shadow-xl"
                    />
                    <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                        <p className="text-lg italic mb-4">
                            "Профессиональный ремонт бытовой техники с гарантией качества"
                        </p>
                        <p className="font-semibold">texnousta.uz</p>
                        <p className="text-sm opacity-80">Сервис ремонта в Ташкенте</p>
                    </div>
                </motion.div>
            </div>

            {/* Right side - Form */}
            <div className="auth-right">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-foreground">
                            <span className="text-primary">texno</span>usta.uz
                        </h1>
                        <p className="text-muted-foreground mt-2">Панель администратора</p>
                    </div>

                    {/* Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-foreground">
                            {mode === "login" ? "Добро пожаловать" : "Создать аккаунт"}
                        </h2>
                        <p className="text-muted-foreground mt-1">
                            {mode === "login"
                                ? "Войдите в панель управления"
                                : "Заполните данные для регистрации"}
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {mode === "register" && (
                            <div className="space-y-2">
                                <Label htmlFor="name">Имя</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Введите имя"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="input-auth pl-10"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="example@mail.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="input-auth pl-10"
                                />
                            </div>
                        </div>

                        {mode === "register" && (
                            <div className="space-y-2">
                                <Label htmlFor="phone">Телефон</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+998 90 123 45 67"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="input-auth pl-10"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label htmlFor="password">Пароль</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="input-auth pl-10 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {mode === "login" && (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        checked={formData.rememberMe}
                                        onCheckedChange={(checked) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                rememberMe: checked as boolean,
                                            }))
                                        }
                                    />
                                    <Label htmlFor="remember" className="text-sm font-normal">
                                        Запомнить меня
                                    </Label>
                                </div>
                                <button
                                    type="button"
                                    className="text-sm text-primary hover:underline"
                                >
                                    Забыли пароль?
                                </button>
                            </div>
                        )}

                        <Button type="submit" className="w-full btn-primary-lg">
                            {mode === "login" ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground">
                или
              </span>
                        </div>
                    </div>

                    {/* OAuth buttons */}
                    <div className="space-y-3">
                        <Button variant="outline" className="w-full btn-oauth">
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Продолжить с Google
                        </Button>
                    </div>

                    {/* Switch mode */}
                    <p className="text-center mt-6 text-sm text-muted-foreground">
                        {mode === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
                        <button
                            type="button"
                            onClick={() => setMode(mode === "login" ? "register" : "login")}
                            className="text-primary font-medium hover:underline"
                        >
                            {mode === "login" ? "Зарегистрироваться" : "Войти"}
                        </button>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Auth;
