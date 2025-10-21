// 블로그 타입 정의

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: string;
  readingTime?: string;
  tags?: string[];
}

export interface FrontMatter {
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  image: string;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}
