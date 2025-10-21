import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'dark' | 'light' | 'secondary';
  padding?: 'large' | 'medium' | 'small';
}

export default function Section({
  children,
  className,
  background = 'dark',
  padding = 'large',
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative',
        // 배경 색상
        background === 'dark' && 'bg-background',
        background === 'light' && 'bg-background-light',
        background === 'secondary' && 'bg-background-secondary',
        // 패딩
        padding === 'large' && 'py-32',
        padding === 'medium' && 'py-20',
        padding === 'small' && 'py-12',
        className
      )}
    >
      {children}
    </section>
  );
}
