import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section background="dark" padding="large">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight mb-6">
              방문객은 사상 최고인데,
              <br />
              왜 우리 가게 수익은 줄었을까요?
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary mb-12">
              2025년 1분기 387만 명. 숫자의 함정에 빠지면 진짜 기회를 놓칩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" size="large">
                솔루션 알아보기
              </Button>
              <Button href="/contact" variant="outline" size="large">
                무료 진단 받기
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="secondary" padding="medium">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">387만 명</div>
              <div className="text-xl text-success font-semibold mb-1">↑ 37.5%</div>
              <div className="text-foreground-secondary">2025년 1분기 방한객 수</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">24.3%</div>
              <div className="text-xl text-error font-semibold mb-1">↓ 감소</div>
              <div className="text-foreground-secondary">1인당 지출액 감소율</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">4개국</div>
              <div className="text-xl text-primary-blue font-semibold mb-1">핵심 타겟</div>
              <div className="text-foreground-secondary">인도네시아, 베트남, 필리핀, 인도</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="medium">
        <Container>
          <div className="bg-gradient-to-r from-primary-blue to-primary-purple p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              진짜 고객을 찾아드립니다
            </h2>
            <p className="text-lg text-white/90 mb-8">
              The Nines와 함께 WHO, WHERE, WHAT 데이터로 수익을 만들어보세요
            </p>
            <Button href="/contact" variant="outline" size="large" className="bg-white text-primary-blue border-white hover:bg-white/90">
              지금 시작하기
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
