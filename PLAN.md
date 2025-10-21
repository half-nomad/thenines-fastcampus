# The Nines 웹사이트 개발 계획서 (PLAN)

**버전**: 1.0
**작성일**: 2025-01-21
**참조 문서**: PRD.md, The Nines 웹사이트 상세 기획 청사진 (Blueprint).md

---

## 1. 기술 스택

### 1.1. 핵심 프레임워크
| 기술 | 버전 | 용도 |
|------|------|------|
| Next.js | 15.x | React 프레임워크 (App Router) |
| React | 19.x | UI 라이브러리 |
| TypeScript | 5.x | 타입 안전성 |
| Tailwind CSS | 4.x | 스타일링 |

### 1.2. 주요 라이브러리
| 라이브러리 | 버전 | 용도 |
|-----------|------|------|
| gray-matter | ^4.0.3 | 마크다운 프론트매터 파싱 |
| remark | ^15.0.0 | 마크다운 → HTML 변환 |
| remark-html | ^16.0.0 | Remark HTML 플러그인 |
| remark-gfm | ^4.0.0 | GitHub Flavored Markdown |
| @heroicons/react | ^2.1.0 | 아이콘 라이브러리 |
| clsx | ^2.1.0 | 조건부 클래스명 |
| tailwind-merge | ^2.2.0 | Tailwind 클래스 병합 |
| date-fns | ^3.0.0 | 날짜 포맷팅 |
| next-sitemap | ^4.2.0 | SEO - sitemap 자동 생성 |

### 1.3. 개발 도구
| 도구 | 버전 | 용도 |
|------|------|------|
| ESLint | ^8.0.0 | 코드 린팅 |
| Prettier | ^3.1.0 | 코드 포맷팅 |
| prettier-plugin-tailwindcss | ^0.6.0 | Tailwind 클래스 정렬 |

### 1.4. 외부 서비스
| 서비스 | 용도 |
|--------|------|
| Vercel | 배포 및 호스팅 |
| Notion | 문의 폼 (임베드) |
| Google Analytics | (선택) 방문자 분석 |

---

## 2. 프로젝트 폴더 구조

```
thenines-fastcampus/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 메인 페이지
│   ├── services/
│   │   └── page.tsx             # 사업 제안 페이지
│   ├── creators/
│   │   └── page.tsx             # 크리에이터 현황 페이지
│   ├── blog/
│   │   ├── page.tsx             # 블로그 목록
│   │   └── [slug]/
│   │       └── page.tsx         # 블로그 상세
│   ├── contact/
│   │   └── page.tsx             # 문의 페이지
│   ├── legal/
│   │   └── page.tsx             # 법적 고지
│   ├── layout.tsx               # 루트 레이아웃
│   ├── globals.css              # 전역 스타일
│   └── not-found.tsx            # 404 페이지
│
├── components/                   # 컴포넌트
│   ├── layout/                  # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── common/                  # 공통 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── sections/                # 섹션 컴포넌트
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── CTA.tsx
│   │   └── DataVisualization.tsx
│   └── blog/                    # 블로그 전용
│       ├── BlogCard.tsx
│       ├── BlogPost.tsx
│       └── CategoryFilter.tsx
│
├── lib/                         # 유틸리티 함수
│   ├── markdown.ts              # 마크다운 처리
│   ├── utils.ts                 # 유틸리티 함수 (cn 등)
│   └── constants.ts             # 상수 정의
│
├── types/                       # TypeScript 타입 정의
│   ├── blog.ts
│   ├── creator.ts
│   └── index.ts
│
├── content/                     # 콘텐츠 파일
│   └── blog/                    # 블로그 마크다운 파일
│       ├── post-1.md
│       ├── post-2.md
│       └── ...
│
├── public/                      # 정적 파일
│   ├── images/
│   │   ├── hero/
│   │   ├── creators/
│   │   └── blog/
│   ├── favicon.ico
│   └── robots.txt
│
├── PRD.md                       # 제품 요구사항 문서
├── PLAN.md                      # 개발 계획서 (현재 파일)
├── tailwind.config.ts           # Tailwind 설정
├── tsconfig.json                # TypeScript 설정
├── next.config.js               # Next.js 설정
├── next-sitemap.config.js       # Sitemap 설정
├── package.json
└── README.md
```

---

## 3. 개발 단계 (Phase별 의존성 순서)

### Phase 0: 프로젝트 초기화
**목표**: 개발 환경 구축

- [ ] Next.js 15 프로젝트 생성 (`npx create-next-app@latest`)
- [ ] TypeScript 설정
- [ ] Tailwind CSS 4 설정
- [ ] ESLint, Prettier 설정
- [ ] Git 초기화 및 .gitignore 설정
- [ ] 폴더 구조 생성
- [ ] package.json 의존성 설치

**소요 시간**: 1-2시간

---

### Phase 1: 기초 작업 (모든 페이지의 의존성)
**목표**: 재사용 가능한 기반 구축

#### 1.1. 타입 정의
- [ ] `types/index.ts` - 공통 타입
- [ ] `types/blog.ts` - 블로그 포스트 타입
- [ ] `types/creator.ts` - 크리에이터 타입

#### 1.2. 디자인 시스템 (Tailwind Config)
- [ ] 색상 팔레트 정의
  - Primary: 보라색 계열
  - Secondary: 파란색 계열
  - Neutral: 회색 계열
  - Accent: 강조 색상
- [ ] 타이포그래피 설정 (폰트 크기, 줄 간격)
- [ ] 브레이크포인트 설정 (모바일/태블릿/데스크톱)
- [ ] 간격(spacing) 시스템

#### 1.3. 유틸리티 함수
- [ ] `lib/utils.ts` - cn() 함수 (clsx + tailwind-merge)
- [ ] `lib/constants.ts` - 상수 정의 (네비게이션, 데이터 등)
- [ ] `lib/markdown.ts` - 마크다운 처리 함수

#### 1.4. 공통 컴포넌트
- [ ] `Container` - 컨텐츠 너비 제한
- [ ] `Section` - 섹션 래퍼
- [ ] `Button` - 버튼 (variants: primary, secondary, outline)
- [ ] `Card` - 카드 레이아웃

#### 1.5. 레이아웃 컴포넌트
- [ ] `Header` - 로고, 네비게이션, CTA 버튼
- [ ] `Footer` - 회사 정보, 링크, 법적 정보
- [ ] `Navigation` - 모바일 메뉴 (햄버거)
- [ ] `app/layout.tsx` - 루트 레이아웃 설정

**소요 시간**: 4-6시간

---

### Phase 2: 페이지 개발 (순서대로 진행)

#### 2.1. 메인 페이지 (`app/page.tsx`)
**우선순위**: 최우선 (다른 페이지로의 진입점)

**섹션 컴포넌트**:
- [ ] `HeroSection` - 문제 제기 + 핵심 데이터
- [ ] `ProblemSection` - P-Code 제시
- [ ] `SolutionSection` - S-Code 암시
- [ ] `CTASection` - 솔루션 페이지 유도

**데이터**:
- [ ] 방한객 수, 지출액 데이터 하드코딩

**SEO**:
- [ ] 메타데이터 설정 (title, description, OG tags)

**소요 시간**: 4-6시간

---

#### 2.2. 사업 제안 페이지 (`app/services/page.tsx`)
**우선순위**: 높음 (메인에서 연결)

**섹션 컴포넌트**:
- [ ] `ServicesHero` - 문제 심화
- [ ] `ParadoxSection` - 데이터 시각화
- [ ] `WHOWHEREWHATSection` - 3가지 변화 증명
- [ ] `WhyOthersFailSection` - 경쟁 대안 반박
- [ ] `SolutionProcessSection` - 3단계 프로세스
- [ ] `BeforeAfterSection` - 기대 효과
- [ ] `SocialProofSection` - 고객 증언

**데이터**:
- [ ] WHO/WHERE/WHAT 통계 데이터 하드코딩
- [ ] 고객 증언 더미 데이터

**데이터 시각화**:
- [ ] CSS/SVG로 그래프 구현 (방한객 vs 지출액)

**SEO**:
- [ ] 메타데이터 설정

**소요 시간**: 6-8시간

---

#### 2.3. 크리에이터 현황 페이지 (`app/creators/page.tsx`)
**우선순위**: 중간

**섹션 컴포넌트**:
- [ ] `PhilosophySection` - 크리에이터 철학
- [ ] `CreatorPersonaSection` - 4명의 페르소나
- [ ] `CreatorCTA` - 문의 유도

**데이터**:
- [ ] 크리에이터 페르소나 4명 데이터 (types/creator.ts)
- [ ] 프로필 이미지 (스톡 이미지 또는 플레이스홀더)

**SEO**:
- [ ] 메타데이터 설정

**소요 시간**: 3-4시간

---

#### 2.4. 블로그 시스템 (`app/blog/`)
**우선순위**: 중간

**마크다운 설정**:
- [ ] `lib/markdown.ts` 구현
  - getAllPosts() - 모든 포스트 가져오기
  - getPostBySlug() - 특정 포스트 가져오기
  - markdownToHtml() - 마크다운 → HTML 변환

**타입 정의**:
- [ ] `types/blog.ts` - Post, FrontMatter 타입

**블로그 목록 페이지** (`app/blog/page.tsx`):
- [ ] `BlogHero` - 페이지 소개
- [ ] `CategoryFilter` - 카테고리 필터 (선택)
- [ ] `BlogCard` 그리드 - 포스트 목록

**블로그 상세 페이지** (`app/blog/[slug]/page.tsx`):
- [ ] 동적 라우팅 설정
- [ ] `BlogPost` 컴포넌트 - 마크다운 렌더링
- [ ] 이전/다음 포스트 네비게이션
- [ ] 관련 포스트 추천 (같은 카테고리)
- [ ] 동적 메타데이터 생성

**콘텐츠**:
- [ ] 샘플 블로그 포스트 3-5개 작성 (마크다운)
  - 프론트매터 작성 (title, description, category, date, author, image)

**SEO**:
- [ ] 정적 생성 (SSG) - generateStaticParams
- [ ] Article Schema (JSON-LD)

**소요 시간**: 6-8시간

---

#### 2.5. 문의 페이지 (`app/contact/page.tsx`)
**우선순위**: 높음 (전환 페이지)

**섹션 컴포넌트**:
- [ ] `ValueProposition` - 무료 진단 리포트 제안
- [ ] `NotionFormEmbed` - 노션 폼 임베드
- [ ] `TrustSection` - 신뢰 요소

**구현**:
- [ ] 노션 폼 URL 임베드 (iframe 또는 스크립트)
- [ ] 반응형 레이아웃

**SEO**:
- [ ] 메타데이터 설정

**소요 시간**: 2-3시간

---

#### 2.6. 법적 고지 페이지 (`app/legal/page.tsx`)
**우선순위**: 낮음 (필수지만 나중에)

**섹션**:
- [ ] 페이지 헤더
- [ ] 네비게이션 (목차)
- [ ] 이용약관
- [ ] 개인정보 처리방침
- [ ] 쿠키 정책
- [ ] 저작권 정책

**구현**:
- [ ] 좌측 고정 사이드바 네비게이션
- [ ] 스크롤 시 현재 섹션 하이라이트

**SEO**:
- [ ] 메타데이터 (noindex, follow)

**소요 시간**: 3-4시간

---

### Phase 3: 통합 및 최적화

#### 3.1. SEO 최적화
- [ ] 모든 페이지 메타데이터 점검
- [ ] `sitemap.xml` 자동 생성 (next-sitemap)
- [ ] `robots.txt` 설정
- [ ] 이미지 alt 텍스트 전체 작성
- [ ] 내부 링크 구조 확인
- [ ] Open Graph 이미지 생성

#### 3.2. 성능 최적화
- [ ] 이미지 최적화 (Next.js Image 컴포넌트)
- [ ] 폰트 최적화 (next/font)
- [ ] 번들 크기 분석
- [ ] Lighthouse 점수 확인 (목표: 90+)

#### 3.3. 반응형 테스트
- [ ] 모바일 (375px, 414px)
- [ ] 태블릿 (768px, 1024px)
- [ ] 데스크톱 (1280px, 1920px)

#### 3.4. 브라우저 호환성
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

**소요 시간**: 4-6시간

---

### Phase 4: 배포

#### 4.1. 배포 준비
- [ ] 환경 변수 설정 (.env.local)
  - NEXT_PUBLIC_SITE_URL
  - NEXT_PUBLIC_GA_ID (선택)
- [ ] 빌드 테스트 (`npm run build`)
- [ ] 프로덕션 모드 로컬 테스트 (`npm start`)

#### 4.2. Vercel 배포
- [ ] GitHub 리포지토리 연결
- [ ] Vercel 프로젝트 생성
- [ ] 환경 변수 설정
- [ ] 자동 배포 설정
- [ ] 프리뷰 배포 확인

#### 4.3. 도메인 연결 (선택)
- [ ] 도메인 구매
- [ ] DNS 설정
- [ ] SSL 인증서 자동 발급 확인

#### 4.4. 배포 후 확인
- [ ] 모든 페이지 정상 작동 확인
- [ ] 문의 폼 정상 작동 확인
- [ ] SEO 메타데이터 확인 (소셜 미디어 공유 테스트)
- [ ] Google Search Console 등록
- [ ] 네이버 웹마스터 도구 등록

**소요 시간**: 2-3시간

---

## 4. 예상 타임라인

| Phase | 예상 소요 시간 | 누적 시간 |
|-------|--------------|---------|
| Phase 0: 초기화 | 1-2시간 | 1-2시간 |
| Phase 1: 기초 작업 | 4-6시간 | 5-8시간 |
| Phase 2.1: 메인 페이지 | 4-6시간 | 9-14시간 |
| Phase 2.2: 솔루션 페이지 | 6-8시간 | 15-22시간 |
| Phase 2.3: 크리에이터 페이지 | 3-4시간 | 18-26시간 |
| Phase 2.4: 블로그 시스템 | 6-8시간 | 24-34시간 |
| Phase 2.5: 문의 페이지 | 2-3시간 | 26-37시간 |
| Phase 2.6: 법적 고지 | 3-4시간 | 29-41시간 |
| Phase 3: 최적화 | 4-6시간 | 33-47시간 |
| Phase 4: 배포 | 2-3시간 | 35-50시간 |

**총 예상 시간**: 35-50시간 (약 1-2주, 하루 4-6시간 작업 기준)

---

## 5. 필수 설치 패키지

### 5.1. package.json 스크립트
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "postbuild": "next-sitemap"
  }
}
```

### 5.2. 의존성 목록
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "gray-matter": "^4.0.3",
    "remark": "^15.0.0",
    "remark-html": "^16.0.0",
    "remark-gfm": "^4.0.0",
    "@heroicons/react": "^2.1.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "date-fns": "^3.0.0",
    "next-sitemap": "^4.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^15.0.0",
    "prettier": "^3.1.0",
    "prettier-plugin-tailwindcss": "^0.6.0"
  }
}
```

---

## 6. 배포 설정

### 6.1. 환경 변수
```bash
# .env.local (로컬 개발)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Vercel 프로덕션
NEXT_PUBLIC_SITE_URL=https://the-nines.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (선택)
```

### 6.2. next-sitemap.config.js
```javascript
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://the-nines.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' }
    ]
  }
}
```

### 6.3. Vercel 설정
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

---

## 7. 잠재적 이슈 & 해결방안

### 7.1. Tailwind CSS 4 호환성
**이슈**: Tailwind CSS 4는 아직 베타 버전일 수 있음
**해결**:
- 안정 버전(3.4) 사용 고려
- 또는 4.0 사용하되 호환성 문제 발생 시 3.4로 다운그레이드

### 7.2. Next.js 15 + React 19 호환성
**이슈**: 일부 라이브러리가 React 19를 지원하지 않을 수 있음
**해결**:
- 주요 라이브러리 호환성 확인
- 문제 발생 시 Next.js 14 + React 18 사용

### 7.3. 마크다운 렌더링 스타일
**이슈**: 마크다운 HTML 출력에 기본 스타일 없음
**해결**:
- `@tailwindcss/typography` 플러그인 사용
- 또는 커스텀 CSS 작성

### 7.4. 노션 폼 임베드
**이슈**: iframe 반응형 처리
**해결**:
- aspect-ratio CSS 활용
- 또는 노션 폼 스크립트 임베드 사용

### 7.5. 이미지 최적화
**이슈**: 고해상도 이미지로 인한 느린 로딩
**해결**:
- Next.js Image 컴포넌트 사용 (자동 최적화)
- WebP 포맷 사용
- 적절한 이미지 크기 설정

### 7.6. SEO 크롤링 지연
**이슈**: 배포 후 검색엔진 인덱싱까지 시간 소요
**해결**:
- Google Search Console 수동 색인 요청
- 네이버 웹마스터 도구 수동 색인 요청
- sitemap.xml 제출

---

## 8. 다음 단계

1. ✅ PRD 작성 완료
2. ✅ PLAN 작성 완료
3. ⬜ Phase 0: 프로젝트 초기화 시작
4. ⬜ Phase 1: 기초 작업
5. ⬜ Phase 2: 페이지 개발
6. ⬜ Phase 3: 최적화
7. ⬜ Phase 4: 배포

---

**문서 끝**
