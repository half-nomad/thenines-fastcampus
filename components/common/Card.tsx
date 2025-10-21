import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'border';
  padding?: 'default' | 'large' | 'small';
  hover?: boolean;
}

export default function Card({
  children,
  className,
  variant = 'default',
  padding = 'default',
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg',
        // 배경 스타일
        variant === 'default' && 'bg-background-secondary',
        variant === 'gradient' && 'bg-gradient-to-br from-blue-500/10 to-purple-600/10',
        variant === 'border' && 'bg-background-secondary border border-foreground-secondary/20',
        // 패딩
        padding === 'small' && 'p-4',
        padding === 'default' && 'p-8',
        padding === 'large' && 'p-12',
        // 호버 효과
        hover && 'transition-transform duration-200 hover:scale-105',
        className
      )}
    >
      {children}
    </div>
  );
}
