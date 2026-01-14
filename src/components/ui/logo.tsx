import Link from "next/link";

interface LogoProps {
  showImage?: boolean;
  imageUrl?: string;
  text?: string;
  className?: string;
  href?: string;
}

export function Logo({ 
  showImage = false, 
  imageUrl, 
  text = "texnousta.uz", 
  className,
  href = "/"
}: LogoProps) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-2 text-foreground font-extrabold tracking-tight transition-opacity hover:opacity-80 ${className || ''}`}
    >
      {showImage && imageUrl && (
        <img src={imageUrl} alt="Logo" className="h-10 w-auto" />
      )}
      <span className="text-xl">{text}</span>
    </Link>
  );
}
