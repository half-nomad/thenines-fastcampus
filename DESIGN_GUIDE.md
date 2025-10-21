# The Nines 디자인 가이드

**버전**: 1.0
**작성일**: 2025-01-21
**기반 문서**: The Nines 웹사이트 상세 기획 청사진 (Blueprint).md

---

## 1. 디자인 철학

The Nines 웹사이트는 **신뢰감**, **전문성**, **데이터 기반 설득력**을 전달하는 디자인을 추구합니다.

### 핵심 원칙
- **문제 중심**: 사용자의 페인 포인트를 명확히 시각화
- **데이터 우선**: 숫자와 통계를 강력하게 표현
- **P-S 코드 내러티브**: 문제(P)와 해결책(S)의 명확한 대비
- **신뢰 구축**: 전문적이고 깔끔한 비주얼

---

## 2. 색상 시스템

### 2.1. 기본 색상 팔레트

```css
:root {
  /* 배경 */
  --background: #0F0F0F;           /* 다크 배경 */
  --background-secondary: #1A1A1A; /* 카드 배경 */
  --background-light: #FFFFFF;     /* 밝은 섹션 배경 */

  /* 텍스트 */
  --foreground: #FFFFFF;
  --foreground-secondary: #A0A0A0;
  --foreground-dark: #111827;      /* 밝은 배경용 */

  /* 브랜드 색상 */
  --primary-blue: #3B82F6;         /* 주 강조색 */
  --primary-purple: #8B5CF6;       /* 보조 강조색 */

  /* 상태 색상 */
  --success: #10B981;              /* 긍정, 증가 */
  --warning: #F59E0B;              /* 주의 */
  --error: #DC2626;                /* 문제, 감소 */
}
```

### 2.2. 섹션별 색상 전략

| 섹션 | 배경색 | 텍스트색 | 강조색 | 의도 |
|------|--------|---------|--------|------|
| **메인 Hero** | 다크 (#0F0F0F) | White | Blue | 임팩트, 집중 |
| **Problem** | 밝음 (White) | Dark | Red | 문제 강조, 대비 |
| **Solution** | 다크 (#0F0F0F) | White | Blue/Purple | 희망, 혁신 |
| **Data (WHO/WHERE/WHAT)** | 다크 | White | Blue | 신뢰, 전문성 |
| **Before & After** | 다크 | White | Green/Red | 변화 시각화 |
| **CTA** | Blue 그래디언트 | White | - | 행동 유도 |

### 2.3. 그래디언트 패턴

```typescript
// 파란색 → 보라색 (메인 CTA)
className="bg-gradient-to-r from-blue-600 to-purple-500"

// 밝은 → 어두운 (섹션 전환)
className="bg-gradient-to-b from-black to-gray-900"

// 텍스트 그래디언트 (히어로 제목)
className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"

// 카드 배경 (미묘한 강조)
className="bg-gradient-to-br from-blue-500/10 to-purple-600/10"
```

### 2.4. 데이터 시각화 색상

| 데이터 유형 | 색상 | 사용 예시 |
|------------|------|----------|
| **증가/성장** | Green (#10B981) | 방한객 수 ↑ |
| **감소/경고** | Red (#DC2626) | 지출액 ↓ 24.3% |
| **긍정적 변화** | Blue (#3B82F6) | The Nines 도입 후 |
| **중립 정보** | Gray (#A0A0A0) | 기준 데이터 |

---

## 3. 타이포그래피

### 3.1. 폰트 패밀리

**주 폰트**: Pretendard (한글 최적화)
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'system-ui', sans-serif;
```

**로드 방법**:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
```

### 3.2. 타이포그래피 스케일

| 용도 | Desktop | Mobile | 가중치 | 줄높이 | Tailwind |
|------|---------|--------|--------|---------|----------|
| **Hero Title** | 96px (8xl) | 48px (5xl) | Bold (700) | 1.1 | text-5xl md:text-8xl font-bold |
| **Section H2** | 60px (6xl) | 36px (4xl) | Bold (700) | 1.2 | text-4xl md:text-6xl font-bold |
| **Sub H3** | 36px (4xl) | 24px (2xl) | Bold (700) | 1.3 | text-2xl md:text-4xl font-bold |
| **Card Title** | 30px (3xl) | 24px (2xl) | Semi-bold (600) | 1.4 | text-2xl md:text-3xl font-semibold |
| **Body Large** | 20px (xl) | 18px (lg) | Normal (400) | 1.6 | text-lg md:text-xl |
| **Body** | 16px (base) | 16px (base) | Normal (400) | 1.6 | text-base |
| **Small** | 14px (sm) | 14px (sm) | Normal (400) | 1.5 | text-sm |
| **Caption** | 12px (xs) | 12px (xs) | Medium (500) | 1.4 | text-xs font-medium |

### 3.3. 페이지별 타이포그래피 예시

#### 메인 페이지 Hero
```typescript
// 임팩트 제목
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
  방문객은 사상 최고인데, 왜 우리 가게 수익은 줄었을까요?
</h1>

// 부제목
<p className="text-lg md:text-xl text-gray-400">
  2025년 1분기 387만 명. 숫자의 함정에 빠지면 진짜 기회를 놓칩니다.
</p>
```

#### 데이터 강조
```typescript
// 큰 숫자
<div className="text-5xl md:text-6xl font-bold text-white">387만 명</div>

// 변화율 (긍정)
<div className="text-2xl font-semibold text-green-500">↑ 37.5%</div>

// 변화율 (부정)
<div className="text-2xl font-semibold text-red-500">↓ 24.3%</div>
```

---

## 4. 간격 시스템

### 4.1. 섹션 간격

```typescript
// 대형 섹션 (Hero, 주요 콘텐츠)
className="py-32"  // 상하 128px

// 중형 섹션
className="py-20"  // 상하 80px

// 소형 섹션 (Footer)
className="py-12"  // 상하 48px
```

### 4.2. 컨테이너

```typescript
// 표준 컨테이너 (max-width: 1280px)
<div className="max-w-7xl mx-auto px-6 lg:px-8">
  {/* 콘텐츠 */}
</div>

// 텍스트 중심 컨테이너 (max-width: 896px)
<div className="max-w-4xl mx-auto px-6">
  {/* 텍스트 콘텐츠 */}
</div>
```

### 4.3. 내부 간격

| 용도 | 간격 | Tailwind |
|------|------|----------|
| 섹션 제목 하단 여백 | 80px | mb-20 |
| 단락 간격 | 24px | space-y-6 |
| 카드 내부 패딩 | 32px | p-8 |
| 버튼 패딩 | 32px 16px | px-8 py-4 |
| 그리드 간격 | 32px | gap-8 |

---

## 5. 레이아웃 시스템

### 5.1. 반응형 그리드

```typescript
// 1열 → 2열 → 3열
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 카드들 */}
</div>

// 1열 → 3열 (통계 카드)
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* 통계 */}
</div>

// 좌우 분할 (50-50)
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>{/* 왼쪽: 텍스트 */}</div>
  <div>{/* 오른쪽: 이미지/데이터 */}</div>
</div>
```

### 5.2. 섹션 구조 템플릿

```typescript
<section className="relative py-32 bg-[#0F0F0F] overflow-hidden">
  {/* 배경 효과 (선택) */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
  </div>

  {/* 콘텐츠 */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
    {/* 섹션 헤더 */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        섹션 제목
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        섹션 설명
      </p>
    </div>

    {/* 섹션 콘텐츠 */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* 카드/콘텐츠 */}
    </div>
  </div>
</section>
```

---

## 6. 컴포넌트 스타일

### 6.1. 버튼

#### Primary CTA
```typescript
<button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-600/50 transition-all duration-300 hover:scale-105">
  무료 진단 받기
</button>
```

#### Secondary Button
```typescript
<button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all duration-300">
  솔루션 확인하기
</button>
```

#### Text Link
```typescript
<a className="text-blue-500 hover:text-blue-400 font-medium transition-colors duration-200">
  더 알아보기 →
</a>
```

### 6.2. 카드

#### 기본 카드 (다크 배경용)
```typescript
<div className="p-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl transition-all duration-300">
  <h3 className="text-2xl font-bold text-white mb-4">카드 제목</h3>
  <p className="text-gray-400">카드 설명</p>
</div>
```

#### 강조 카드 (그래디언트)
```typescript
<div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-3xl">
  <h3 className="text-2xl font-bold text-white mb-4">The Nines</h3>
  <p className="text-gray-300">컬처 브릿지 솔루션</p>
</div>
```

#### 경고 카드 (문제 표시)
```typescript
<div className="p-8 bg-gradient-to-br from-red-50 to-white border-2 border-red-100 rounded-3xl">
  <h3 className="text-2xl font-bold text-red-900 mb-4">문제점</h3>
  <p className="text-gray-700">낡은 지도로 새로운 대륙을 탐험하고 있습니다</p>
</div>
```

### 6.3. 통계 카드

```typescript
<div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
  {/* 큰 숫자 */}
  <div className="text-5xl font-bold text-white mb-4">387만 명</div>

  {/* 라벨 */}
  <div className="text-lg text-gray-400 mb-4">방한객 수</div>

  {/* 변화율 */}
  <div className="flex items-center gap-2 text-green-500">
    <span className="text-sm font-medium">↑ 역대 최고</span>
  </div>
</div>
```

### 6.4. 대비 카드 (Before & After)

```typescript
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* BEFORE (어두운 톤) */}
  <div className="p-8 bg-gray-900/50 border border-gray-700 rounded-3xl">
    <div className="text-sm font-semibold text-gray-500 mb-4">BEFORE</div>
    <h3 className="text-2xl font-bold text-gray-400 mb-4">우연히 지나가는 손님</h3>
    <ul className="space-y-3 text-gray-500">
      <li>• 불특정 다수를 향한 무작위 광고</li>
      <li>• 낮은 신뢰도</li>
      <li>• 일회성 방문</li>
    </ul>
  </div>

  {/* AFTER (밝은 톤, 그래디언트) */}
  <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-3xl">
    <div className="text-sm font-semibold text-blue-400 mb-4">AFTER</div>
    <h3 className="text-2xl font-bold text-white mb-4">목적을 가지고 찾아오는 팬</h3>
    <ul className="space-y-3 text-gray-300">
      <li>• 타겟 국가 맞춤형 정밀 마케팅</li>
      <li>• 현지인 크리에이터의 진정성 있는 추천</li>
      <li>• 목적 방문 증가, 높은 재방문율</li>
    </ul>
  </div>
</div>
```

---

## 7. 페이지별 디자인 패턴

### 7.1. 메인 페이지

#### Hero Section
- **배경**: 다크 (#0F0F0F) + 블러 효과
- **제목**: 초대형 (text-8xl), 그래디언트 텍스트
- **통계**: 3열 그리드 카드

```typescript
// 배경 블러 효과
<div className="absolute inset-0">
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
</div>
```

#### Problem Section
- **배경**: 밝음 (White) + 점 패턴
- **텍스트**: 다크 모드
- **아이콘**: 찢어진 지도 vs 새 대륙

#### Solution Section
- **배경**: 다크
- **이미지**: 다양한 국적 사람들
- **강조**: "현지 친구" 키워드

### 7.2. 솔루션 페이지

#### WHO/WHERE/WHAT 섹션
```typescript
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* WHO */}
  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
      <UsersIcon className="w-8 h-8 text-blue-500" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">WHO: 고객이 바뀌었다</h3>
    <p className="text-gray-400 mb-6">신흥 6개국이 새로운 주류 시장으로 부상</p>
    {/* 데이터 */}
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm text-gray-500">인도네시아</span>
        <span className="text-sm font-semibold text-green-500">+37.5%</span>
      </div>
      {/* ... */}
    </div>
  </div>
  {/* WHERE, WHAT 동일 패턴 */}
</div>
```

#### Why Others Fail (경쟁 대안)
```typescript
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* 각 대안 카드 */}
  <div className="p-6 bg-gray-900/50 border border-gray-700 rounded-2xl">
    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
      <XIcon className="w-6 h-6 text-red-500" />
    </div>
    <h4 className="text-lg font-bold text-gray-400 mb-2">대형 광고 대행사</h4>
    <p className="text-sm text-gray-500">높은 비용, 신흥국 시장 이해 부족</p>
  </div>
</div>
```

### 7.3. 크리에이터 페이지

#### 크리에이터 카드
```typescript
<div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
  {/* 프로필 이미지 */}
  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6" />

  {/* 이름 & 국가 */}
  <h3 className="text-xl font-bold text-white mb-2">아니사</h3>
  <div className="text-sm text-gray-400 mb-4">🇮🇩 인도네시아</div>

  {/* 전문 분야 */}
  <div className="inline-block px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs text-pink-400 mb-4">
    뷰티 전문
  </div>

  {/* 플랫폼 */}
  <div className="flex gap-2 mb-4">
    <span className="text-xs text-gray-500">TikTok</span>
    <span className="text-xs text-gray-500">Instagram</span>
  </div>

  {/* 설명 */}
  <p className="text-sm text-gray-400">
    자카르타 Z세대의 K-뷰티 트렌드를 주도하는 틱톡커
  </p>
</div>
```

### 7.4. 블로그 페이지

#### 블로그 카드
```typescript
<div className="group cursor-pointer">
  {/* 썸네일 */}
  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
    <img
      src="/images/blog/thumbnail.jpg"
      alt="블로그 썸네일"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    {/* 카테고리 태그 */}
    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 rounded-full text-xs font-medium text-white">
      시장 분석
    </div>
  </div>

  {/* 제목 */}
  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
    인도네시아 관광객은 왜 명동 대신 성수동으로 갈까?
  </h3>

  {/* 설명 */}
  <p className="text-sm text-gray-400 mb-4 line-clamp-3">
    틱톡 알고리즘과 Z세대 취향 분석으로 밝혀낸 새로운 트렌드
  </p>

  {/* 메타 정보 */}
  <div className="flex items-center gap-4 text-xs text-gray-500">
    <span>2025.01.15</span>
    <span>5분 읽기</span>
  </div>
</div>
```

---

## 8. 데이터 시각화

### 8.1. 양적-질적 역설 그래프

```typescript
// 좌우 대비 레이아웃
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* 방한객 수 (증가) */}
  <div>
    <h3 className="text-3xl font-bold text-white mb-4">방한객 수</h3>
    <div className="text-6xl font-bold text-green-500 mb-4">387만 명</div>
    <div className="text-lg text-gray-400">역대 최고</div>
    {/* 상승 그래프 (CSS/SVG) */}
    <div className="mt-6 h-32 bg-green-500/10 rounded-lg flex items-end">
      <div className="w-full h-3/4 bg-gradient-to-t from-green-500 to-green-300 rounded-t-lg" />
    </div>
  </div>

  {/* 1인당 지출액 (감소) */}
  <div>
    <h3 className="text-3xl font-bold text-white mb-4">1인당 지출액</h3>
    <div className="text-6xl font-bold text-red-500 mb-4">$976</div>
    <div className="text-lg text-red-400">↓ 24.3% 급감</div>
    {/* 하락 그래프 */}
    <div className="mt-6 h-32 bg-red-500/10 rounded-lg flex items-end">
      <div className="w-full h-1/2 bg-gradient-to-t from-red-500 to-red-300 rounded-t-lg" />
    </div>
  </div>
</div>
```

### 8.2. 증가율 표시

```typescript
// 긍정적 증가
<div className="flex items-center gap-2">
  <span className="text-2xl">↑</span>
  <span className="text-xl font-bold text-green-500">+37.5%</span>
  <span className="text-sm text-gray-400">인도네시아</span>
</div>

// 부정적 감소
<div className="flex items-center gap-2">
  <span className="text-2xl">↓</span>
  <span className="text-xl font-bold text-red-500">-24.3%</span>
  <span className="text-sm text-gray-400">지출액</span>
</div>
```

### 8.3. 진행바

```typescript
// 국가별 성장률 시각화
<div className="space-y-4">
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm text-gray-400">인도</span>
      <span className="text-sm font-semibold text-green-500">+42.8%</span>
    </div>
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-green-500 to-green-400" style={{ width: '42.8%' }} />
    </div>
  </div>
  {/* 다른 국가들... */}
</div>
```

---

## 9. 아이콘 & 이미지

### 9.1. 아이콘 사용 (Heroicons)

```typescript
import {
  UsersIcon,        // WHO - 고객
  GlobeAltIcon,     // WHERE - 플랫폼
  ShoppingBagIcon,  // WHAT - 구매방식
  ChartBarIcon,     // 데이터/통계
  CheckCircleIcon,  // 성공/확인
  XCircleIcon,      // 실패/경고
} from '@heroicons/react/24/outline';
```

### 9.2. 아이콘 크기

| 용도 | 크기 | Tailwind |
|------|------|----------|
| 섹션 아이콘 | 64px | w-16 h-16 |
| 카드 아이콘 | 48px | w-12 h-12 |
| 인라인 아이콘 | 24px | w-6 h-6 |
| 작은 아이콘 | 16px | w-4 h-4 |

### 9.3. 이미지 최적화

```typescript
import Image from 'next/image';

<Image
  src="/images/hero-bg.jpg"
  alt="히어로 배경"
  width={1920}
  height={1080}
  priority
  className="object-cover"
/>
```

---

## 10. 애니메이션 (선택 사항)

### 10.1. 기본 전환 효과

```typescript
// 호버 효과
className="transition-all duration-300 hover:scale-105"

// 배경 전환
className="transition-colors duration-200"

// 부드러운 진입
className="transition-opacity duration-500"
```

### 10.2. CSS 애니메이션

```typescript
// tailwind.config.ts
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
  'slide-up': 'slideUp 0.6s ease-out',
}
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
}
```

---

## 11. 반응형 디자인

### 11.1. 브레이크포인트

| 이름 | 최소 너비 | Tailwind | 용도 |
|------|----------|----------|------|
| Mobile | 0px | (기본) | 모바일 |
| MD | 768px | md: | 태블릿 |
| LG | 1024px | lg: | 데스크톱 |
| XL | 1280px | xl: | 큰 화면 |

### 11.2. 반응형 패턴

```typescript
// 텍스트 크기
className="text-5xl md:text-7xl lg:text-8xl"

// 그리드 열
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// 패딩
className="px-6 lg:px-8"

// 숨김/표시
className="hidden lg:block"  // 데스크톱만 표시
className="lg:hidden"        // 모바일만 표시
```

---

## 12. 접근성

- [ ] 모든 이미지에 `alt` 텍스트 작성
- [ ] 버튼에 명확한 레이블
- [ ] 색상 대비 4.5:1 이상 (WCAG AA)
- [ ] 키보드 네비게이션 지원
- [ ] `aria-label` 적절히 사용

---

## 13. 체크리스트

개발 시 디자인 일관성 확인:

### 레이아웃
- [ ] 모든 섹션 `py-32` 또는 `py-20` 사용
- [ ] 컨테이너 `max-w-7xl mx-auto px-6 lg:px-8` 패턴
- [ ] 그리드 간격 `gap-8` 통일

### 타이포그래피
- [ ] Pretendard 폰트 로드 확인
- [ ] 제목 계층 구조 명확 (H1 > H2 > H3)
- [ ] 텍스트 색상 일관성 (white, gray-400, gray-500)

### 색상
- [ ] 다크/밝은 섹션 교차 배치
- [ ] CTA 버튼 `bg-blue-600` 통일
- [ ] 증가는 Green, 감소는 Red

### 컴포넌트
- [ ] 버튼에 호버 효과 적용
- [ ] 카드 `rounded-3xl` 통일
- [ ] transition 시간 0.3s 기본

### 반응형
- [ ] 모바일 (375px) 테스트
- [ ] 태블릿 (768px) 테스트
- [ ] 데스크톱 (1280px) 테스트

---

**문서 끝**
