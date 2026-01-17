import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-2xl text-muted-foreground">Страница не найдена</p>
        <p className="mb-8 text-muted-foreground">
          Извините, запрашиваемая страница не существует
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
