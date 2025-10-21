# The Nines 웹사이트 개발 TODO

**최종 목표**: The Nines 웹사이트 완성 및 배포
**기반 문서**: PLAN.md, PRD.md, DESIGN_GUIDE.md
**작성일**: 2025-01-21

---

## 진행 상황 요약

| Phase | 작업 | 상태 | 진행률 |
|-------|------|------|--------|
| Phase 0 | 프로젝트 초기화 | 🔄 진행중 | 8/15 |
| Phase 1 | 기초 작업 | ⬜ 대기 | 0/24 |
| Phase 2.1 | 메인 페이지 | ⬜ 대기 | 0/8 |
| Phase 2.2 | 솔루션 페이지 | ⬜ 대기 | 0/12 |
| Phase 2.3 | 크리에이터 페이지 | ⬜ 대기 | 0/6 |
| Phase 2.4 | 블로그 시스템 | ⬜ 대기 | 0/14 |
| Phase 2.5 | 문의 페이지 | ⬜ 대기 | 0/5 |
| Phase 2.6 | 법적 고지 페이지 | ⬜ 대기 | 0/4 |
| Phase 3 | 통합 및 최적화 | ⬜ 대기 | 0/15 |
| Phase 4 | 배포 | ⬜ 대기 | 0/8 |

**전체 진행률**: 8/103 (7.8%)

---

## Phase 0: 프로젝트 초기화 (0/7)

**목표**: 개발 환경 구축
**예상 시간**: 1-2시간

### 0.1. Next.js 프로젝트 생성
- [ ] `npx create-next-app@latest fc-thenines` 실행
  - TypeScript: Yes
  - ESLint: Yes
  - Tailwind CSS: Yes
  - `src/` directory: No
  - App Router: Yes
  - Import alias: Yes (@/*)

### 0.2. 기본 설정
- [ ] `.gitignore` 확인 및 수정
- [ ] `package.json` 확인 및 스크립트 추가
- [ ] README.md 생성 (프로젝트 설명, 실행 방법)

### 0.3. 추가 라이브러리 설치
- [ ] 마크다운 처리: `npm install gray-matter remark remark-html remark-gfm`
- [ ] 아이콘: `npm install @heroicons/react`
- [ ] 유틸리티: `npm install clsx tailwind-merge date-fns`
- [ ] SEO: `npm install next-sitemap`

### 0.4. 폴더 구조 생성
- [x] `components/layout/` 폴더 생성
- [x] `components/common/` 폴더 생성
- [x] `components/sections/` 폴더 생성
- [x] `components/blog/` 폴더 생성
- [x] `lib/` 폴더 생성
- [x] `types/` 폴더 생성
- [x] `content/blog/` 폴더 생성
- [x] `public/images/` 폴더 및 서브 폴더 생성

### 0.5. Git 초기화
- [ ] Git 저장소 초기화 (이미 되어 있다면 스킵)
- [ ] 초기 커밋: "Initial Next.js 15 setup with TypeScript and Tailwind CSS 4"

---

## Phase 1: 기초 작업 (0/24)

**목표**: 재사용 가능한 기반 구축
**예상 시간**: 4-6시간

### 1.1. Tailwind CSS 설정 (0/3)
- [ ] `tailwind.config.ts` 색상 팔레트 정의
  ```typescript
  colors: {
    background: '#0F0F0F',
    'background-secondary': '#1A1A1A',
    // DESIGN_GUIDE.md 참조
  }
  ```
- [ ] `tailwind.config.ts` 폰트 설정 (Pretendard)
- [ ] `tailwind.config.ts` 애니메이션 정의 (gradient, float, pulse-slow)

### 1.2. 전역 스타일 (0/2)
- [ ] `app/globals.css` CSS 변수 정의
- [ ] `app/globals.css` 기본 스타일 (body, html, scroll-behavior)

### 1.3. 타입 정의 (0/3)
- [ ] `types/index.ts` 공통 타입 정의
- [ ] `types/blog.ts` 블로그 타입 정의
  ```typescript
  export interface Post {
    slug: string;
    title: string;
    description: string;
    category: string;
    date: string;
    author: string;
    image: string;
    content: string;
  }
  ```
- [ ] `types/creator.ts` 크리에이터 타입 정의

### 1.4. 유틸리티 함수 (0/3)
- [ ] `lib/utils.ts` - cn() 함수 작성 (clsx + tailwind-merge)
  ```typescript
  import { clsx, type ClassValue } from 'clsx';
  import { twMerge } from 'tailwind-merge';

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  ```
- [ ] `lib/constants.ts` - 상수 정의 (네비게이션 메뉴, 데이터 등)
- [ ] `lib/markdown.ts` - 마크다운 처리 함수 (getAllPosts, getPostBySlug, markdownToHtml)

### 1.5. 공통 컴포넌트 (0/4)
- [ ] `components/common/Container.tsx` - 컨텐츠 너비 제한 컨테이너
- [ ] `components/common/Section.tsx` - 섹션 래퍼
- [ ] `components/common/Button.tsx` - 버튼 (variants: primary, secondary, outline)
- [ ] `components/common/Card.tsx` - 카드 레이아웃

### 1.6. 레이아웃 컴포넌트 (0/4)
- [ ] `components/layout/Header.tsx` - 로고, 네비게이션, CTA 버튼
- [ ] `components/layout/Footer.tsx` - 회사 정보, 링크, 법적 정보
- [ ] `components/layout/Navigation.tsx` - 모바일 햄버거 메뉴
- [ ] `app/layout.tsx` - 루트 레이아웃 설정 (메타데이터, Pretendard 폰트)

### 1.7. 폰트 설정 (0/1)
- [ ] Pretendard CDN 링크 추가 또는 로컬 폰트 설정

### 1.8. 기본 페이지 (0/4)
- [ ] `app/page.tsx` 기본 구조 생성 (비어있어도 됨)
- [ ] `app/not-found.tsx` 404 페이지 생성
- [ ] 로컬 서버 실행 테스트 (`npm run dev`)
- [ ] Header, Footer 표시 확인

---

## Phase 2.1: 메인 페이지 (0/8)

**목표**: 사용자 진입점, 문제의식 형성
**예상 시간**: 4-6시간

### 2.1.1. 섹션 컴포넌트 생성 (0/4)
- [ ] `components/sections/Hero.tsx` - 문제 제기 + 핵심 데이터
- [ ] `components/sections/Problem.tsx` - P-Code 제시
- [ ] `components/sections/Solution.tsx` - S-Code 암시
- [ ] `components/sections/CTA.tsx` - 솔루션 페이지 유도

### 2.1.2. 데이터 준비 (0/1)
- [ ] `lib/constants.ts`에 방한객 수, 지출액 데이터 추가

### 2.1.3. 메인 페이지 통합 (0/2)
- [ ] `app/page.tsx` - 4개 섹션 배치
- [ ] SEO 메타데이터 설정 (title, description, OG tags)

### 2.1.4. 테스트 (0/1)
- [ ] 반응형 테스트 (모바일, 태블릿, 데스크톱)

---

## Phase 2.2: 솔루션 페이지 (0/12)

**목표**: 데이터 증명, 신뢰 구축
**예상 시간**: 6-8시간

### 2.2.1. 페이지 폴더 생성 (0/1)
- [ ] `app/services/page.tsx` 생성

### 2.2.2. 섹션 컴포넌트 생성 (0/7)
- [ ] `components/sections/ServicesHero.tsx` - 문제 심화
- [ ] `components/sections/Paradox.tsx` - 데이터 시각화 (그래프)
- [ ] `components/sections/WHOWHEREWhat.tsx` - 3가지 변화 증명
- [ ] `components/sections/WhyOthersFail.tsx` - 경쟁 대안 반박 (3개 카드)
- [ ] `components/sections/SolutionProcess.tsx` - 3단계 프로세스
- [ ] `components/sections/BeforeAfter.tsx` - 기대 효과 대비
- [ ] `components/sections/SocialProof.tsx` - 고객 증언

### 2.2.3. 데이터 준비 (0/2)
- [ ] WHO/WHERE/WHAT 통계 데이터 추가
- [ ] 고객 증언 더미 데이터 추가

### 2.2.4. 페이지 통합 및 SEO (0/2)
- [ ] `app/services/page.tsx` - 모든 섹션 배치
- [ ] SEO 메타데이터 설정

---

## Phase 2.3: 크리에이터 현황 페이지 (0/6)

**목표**: 핵심 자산 증명, 신뢰 구축
**예상 시간**: 3-4시간

### 2.3.1. 페이지 생성 (0/1)
- [ ] `app/creators/page.tsx` 생성

### 2.3.2. 섹션 컴포넌트 (0/2)
- [ ] `components/sections/Philosophy.tsx` - 크리에이터 철학
- [ ] `components/sections/CreatorPersona.tsx` - 4명 페르소나 카드

### 2.3.3. 데이터 준비 (0/2)
- [ ] `types/creator.ts` - 크리에이터 타입 정의
- [ ] 크리에이터 4명 데이터 작성 (인도네시아, 인도, 베트남, 필리핀)
- [ ] 프로필 이미지 준비 (스톡 이미지 또는 플레이스홀더)

### 2.3.4. 통합 및 SEO (0/1)
- [ ] 페이지 완성 및 메타데이터 설정

---

## Phase 2.4: 블로그 시스템 (0/14)

**목표**: 전문성 입증, SEO 트래픽 확보
**예상 시간**: 6-8시간

### 2.4.1. 마크다운 처리 시스템 (0/3)
- [ ] `lib/markdown.ts` - getAllPosts() 구현
- [ ] `lib/markdown.ts` - getPostBySlug() 구현
- [ ] `lib/markdown.ts` - markdownToHtml() 구현

### 2.4.2. 블로그 컴포넌트 (0/3)
- [ ] `components/blog/BlogCard.tsx` - 블로그 카드
- [ ] `components/blog/BlogPost.tsx` - 포스트 렌더링
- [ ] `components/blog/CategoryFilter.tsx` - 카테고리 필터 (선택)

### 2.4.3. 블로그 목록 페이지 (0/2)
- [ ] `app/blog/page.tsx` - Hero + BlogCard 그리드
- [ ] SEO 메타데이터 설정

### 2.4.4. 블로그 상세 페이지 (0/4)
- [ ] `app/blog/[slug]/page.tsx` - 동적 라우팅
- [ ] generateStaticParams() 구현 (SSG)
- [ ] generateMetadata() 구현 (동적 메타데이터)
- [ ] 이전/다음 포스트 네비게이션

### 2.4.5. 블로그 콘텐츠 작성 (0/2)
- [ ] 샘플 포스트 3-5개 작성 (마크다운)
  - 인도네시아 시장 분석
  - TikTok 플랫폼 전략
  - 성공 사례
  - The Nines 관점 (P-S 코드)
- [ ] 각 포스트 프론트매터 작성 (title, description, category, date, author, image)

---

## Phase 2.5: 문의 페이지 (0/5)

**목표**: 최종 전환
**예상 시간**: 2-3시간

### 2.5.1. 페이지 생성 (0/1)
- [ ] `app/contact/page.tsx` 생성

### 2.5.2. 섹션 컴포넌트 (0/2)
- [ ] `components/sections/ValueProposition.tsx` - 무료 진단 제안
- [ ] `components/sections/TrustSection.tsx` - 신뢰 요소

### 2.5.3. 노션 폼 임베드 (0/1)
- [ ] 노션 폼 URL 임베드 (iframe 또는 스크립트)

### 2.5.4. 통합 및 SEO (0/1)
- [ ] 페이지 완성 및 메타데이터 설정

---

## Phase 2.6: 법적 고지 페이지 (0/4)

**목표**: 법적 투명성
**예상 시간**: 3-4시간

### 2.6.1. 페이지 생성 (0/1)
- [ ] `app/legal/page.tsx` 생성

### 2.6.2. 콘텐츠 작성 (0/2)
- [ ] 이용약관, 개인정보 처리방침 텍스트 작성
- [ ] 쿠키 정책, 저작권 정책 텍스트 작성

### 2.6.3. 완성 (0/1)
- [ ] 좌측 네비게이션 구현 (선택)
- [ ] 메타데이터 설정 (noindex, follow)

---

## Phase 3: 통합 및 최적화 (0/15)

**목표**: 성능 및 SEO 최적화
**예상 시간**: 4-6시간

### 3.1. SEO 최적화 (0/7)
- [ ] 모든 페이지 메타데이터 점검
- [ ] `next-sitemap.config.js` 설정
- [ ] `npm run build` 후 sitemap.xml 생성 확인
- [ ] `public/robots.txt` 생성
- [ ] 모든 이미지 alt 텍스트 작성
- [ ] 내부 링크 구조 확인 (Header, Footer, CTA)
- [ ] Open Graph 이미지 생성 (1200x630)

### 3.2. 이미지 최적화 (0/2)
- [ ] 모든 이미지를 Next.js Image 컴포넌트로 변경
- [ ] 이미지 크기 최적화 (WebP 포맷 고려)

### 3.3. 성능 최적화 (0/3)
- [ ] 폰트 최적화 (next/font 또는 preload)
- [ ] 번들 크기 분석 (`npm run build` 결과 확인)
- [ ] Lighthouse 점수 측정 (목표: Performance 90+, SEO 100)

### 3.4. 반응형 테스트 (0/3)
- [ ] 모바일 테스트 (375px, 414px)
- [ ] 태블릿 테스트 (768px, 1024px)
- [ ] 데스크톱 테스트 (1280px, 1920px)

---

## Phase 4: 배포 (0/8)

**목표**: 프로덕션 배포
**예상 시간**: 2-3시간

### 4.1. 배포 준비 (0/3)
- [ ] `.env.local` 환경 변수 설정
  ```
  NEXT_PUBLIC_SITE_URL=http://localhost:3000
  ```
- [ ] `npm run build` 로컬 빌드 테스트
- [ ] `npm start` 프로덕션 모드 테스트

### 4.2. Vercel 배포 (0/4)
- [ ] GitHub 리포지토리에 푸시
- [ ] Vercel 계정 생성 및 프로젝트 연결
- [ ] 환경 변수 설정 (NEXT_PUBLIC_SITE_URL)
- [ ] 자동 배포 확인

### 4.3. 배포 후 확인 (0/1)
- [ ] 모든 페이지 정상 작동 확인
- [ ] 노션 폼 정상 작동 확인
- [ ] SEO 메타데이터 확인 (Twitter, Facebook 공유 테스트)
- [ ] Google Search Console 등록
- [ ] 네이버 웹마스터 도구 등록 (선택)

---

## 선택 사항 (추후 개선)

### 성능 개선
- [ ] 이미지 lazy loading 확인
- [ ] 코드 스플리팅 최적화
- [ ] 캐싱 전략 개선

### 기능 추가
- [ ] Google Analytics 연동
- [ ] 블로그 검색 기능
- [ ] 다크모드 토글 (선택)
- [ ] 블로그 RSS 피드

### 콘텐츠
- [ ] 추가 블로그 포스트 작성
- [ ] 실제 고객 증언 수집
- [ ] 실제 크리에이터 프로필 교체

---

## 마일스톤

### Milestone 1: 기반 완성 ✅
- [ ] Phase 0 완료
- [ ] Phase 1 완료
- **목표**: 재사용 가능한 컴포넌트 시스템 구축

### Milestone 2: 핵심 페이지 완성 ✅
- [ ] Phase 2.1 완료 (메인)
- [ ] Phase 2.2 완료 (솔루션)
- **목표**: 핵심 전환 경로 구축

### Milestone 3: 지원 페이지 완성 ✅
- [ ] Phase 2.3 완료 (크리에이터)
- [ ] Phase 2.4 완료 (블로그)
- [ ] Phase 2.5 완료 (문의)
- [ ] Phase 2.6 완료 (법적 고지)
- **목표**: 완전한 웹사이트 구조 완성

### Milestone 4: 출시 준비 완료 ✅
- [ ] Phase 3 완료 (최적화)
- [ ] Phase 4 완료 (배포)
- **목표**: 프로덕션 배포 및 공개

---

## 작업 규칙

### 체크리스트 사용법
- `[ ]` 미완료
- `[x]` 완료
- `[~]` 진행 중 (선택)
- `[-]` 스킵 (선택)

### 커밋 규칙
- 각 주요 작업 완료 시 커밋
- 커밋 메시지 형식: `feat: 기능 추가`, `fix: 버그 수정`, `style: 디자인 변경`, `docs: 문서 수정`

### 이슈 발생 시
1. TODO.md에 이슈 기록
2. 해결 방법 탐색
3. 필요시 PLAN.md 수정

---

**문서 끝**

**다음 단계**: Phase 0 시작 ⬇️
