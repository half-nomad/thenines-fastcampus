import Link from 'next/link';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <Section background="dark" padding="large">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-bold text-primary-blue mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-lg text-foreground-secondary mb-12">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="large">
              홈으로 돌아가기
            </Button>
            <Button href="/contact" variant="outline" size="large">
              문의하기
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
