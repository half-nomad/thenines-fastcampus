// 크리에이터 타입 정의

export interface Creator {
  id: string;
  name: string;
  country: string;
  platform: string;
  followers: string;
  category: string;
  description: string;
  image: string;
  stats: CreatorStats;
  achievements?: string[];
}

export interface CreatorStats {
  engagement: string;
  avgViews: string;
  contentPerWeek: string;
}

export interface CreatorPersona {
  id: string;
  name: string;
  country: string;
  targetAudience: string;
  contentStyle: string;
  painPoint: string;
  solution: string;
  image: string;
}
