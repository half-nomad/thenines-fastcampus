import type { NavItem } from '@/types';

// 네비게이션 메뉴
export const NAV_ITEMS: NavItem[] = [
  { name: '홈', href: '/' },
  { name: '솔루션', href: '/services' },
  { name: '크리에이터', href: '/creators' },
  { name: '블로그', href: '/blog' },
  { name: '문의하기', href: '/contact' },
];

// 회사 정보
export const COMPANY_INFO = {
  name: 'The Nines',
  description: '동남아시아 방한 시장 전문 크리에이터 마케팅 에이전시',
  email: 'contact@thenines.com',
  phone: '+82-10-XXXX-XXXX',
  address: '서울특별시 강남구',
};

// 소셜 링크
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/thenines',
  linkedin: 'https://linkedin.com/company/thenines',
  youtube: 'https://youtube.com/@thenines',
};

// 통계 데이터
export const STATS = {
  visitors2024Q1: '387만 명',
  visitorsGrowth: '+37.5%',
  spendingDecline: '-24.3%',
  targetMarkets: ['인도네시아', '베트남', '필리핀', '인도'],
};

// 메인 페이지 데이터
export const HERO_DATA = {
  visitors: {
    count: '387만 명',
    label: '2024년 1분기 방한객',
    growth: '+37.5%',
  },
  spending: {
    amount: '$976',
    label: '1인당 지출액',
    decline: '-24.3%',
  },
  headline: '방문객은 사상 최고인데,\n왜 우리 가게 수익은 줄었을까요?',
  subheadline: '외국인 관광객이 몰려도 매출이 늘지 않는다면,\n낡은 지도로 새로운 대륙을 탐험하고 있는 것입니다.',
};

// P-Code (문제 코드)
export const P_CODE = {
  title: '3가지 근본적인 변화',
  subtitle: '낡은 지도로 새로운 대륙을 탐험하고 있습니다',
  changes: [
    {
      id: 'who',
      icon: 'UserGroupIcon',
      title: 'WHO',
      subtitle: '고객이 바뀌었다',
      description: '신흥 6개국 (인도네시아, 베트남, 인도, 필리핀, 태국, 말레이시아)이 전체 방한객의 35%를 차지',
      stat: '+37.5%',
      statLabel: '신흥국 방한객 증가율',
    },
    {
      id: 'where',
      icon: 'MapPinIcon',
      title: 'WHERE',
      subtitle: '플랫폼이 바뀌었다',
      description: '네이버/구글이 아닌 TikTok, Instagram이 주요 정보 탐색 채널로 부상',
      stat: '82%',
      statLabel: 'SNS 통한 여행 정보 탐색',
    },
    {
      id: 'what',
      icon: 'ShoppingBagIcon',
      title: 'WHAT',
      subtitle: '구매 방식이 바뀌었다',
      description: '광고가 아닌 현지 출신 크리에이터의 진정성 있는 추천을 신뢰',
      stat: '3.2배',
      statLabel: '크리에이터 추천의 구매 전환율',
    },
  ],
};

// S-Code (솔루션 코드)
export const S_CODE = {
  title: 'The Nines의 답: 컬처 브릿지',
  subtitle: '잠재고객의 믿을 수 있는 현지 친구',
  description:
    '단순 번역이 아닌 문화적 맥락을 이해하는 현지 출신 크리에이터가 직접 체험하고, 그들의 언어로 전달합니다.',
  features: [
    {
      title: '데이터 기반 타겟팅',
      description: 'WHO, WHERE, WHAT 분석으로 정확한 타겟 고객 발굴',
    },
    {
      title: '현지 크리에이터 네트워크',
      description: '4개국 출신 검증된 크리에이터 직접 협업',
    },
    {
      title: '진정성 있는 콘텐츠',
      description: '광고가 아닌 진짜 경험과 추천으로 신뢰 구축',
    },
  ],
};

// 블로그 카테고리
export const BLOG_CATEGORIES = [
  { id: 'all', name: '전체', slug: 'all' },
  { id: 'market', name: '시장 분석', slug: 'market' },
  { id: 'platform', name: '플랫폼 전략', slug: 'platform' },
  { id: 'case-study', name: '성공 사례', slug: 'case-study' },
  { id: 'insights', name: 'The Nines 인사이트', slug: 'insights' },
];

// SEO 기본값
export const DEFAULT_SEO = {
  title: 'The Nines - 동남아 방한 시장 크리에이터 마케팅',
  description:
    '방문객은 늘어나는데 수익은 줄었다면? The Nines는 WHO, WHERE, WHAT 데이터로 진짜 고객을 찾아드립니다.',
  keywords: [
    '크리에이터 마케팅',
    '동남아시아',
    '방한 시장',
    '인플루언서',
    'TikTok',
    'Instagram',
    '인도네시아',
    '베트남',
  ],
  ogImage: '/images/og-image.jpg',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};
