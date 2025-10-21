import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import type { Post, FrontMatter } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

/**
 * 모든 블로그 포스트 가져오기
 */
export async function getAllPosts(): Promise<Post[]> {
  // content/blog 디렉토리가 없으면 빈 배열 반환
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        date: data.date,
        author: data.author,
        image: data.image,
        content,
        tags: data.tags || [],
      } as Post;
    });

  // 날짜순 정렬 (최신순)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * 특정 포스트 가져오기
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // 마크다운을 HTML로 변환
    const htmlContent = await markdownToHtml(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category,
      date: data.date,
      author: data.author,
      image: data.image,
      content: htmlContent,
      tags: data.tags || [],
    } as Post;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * 마크다운을 HTML로 변환
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(gfm) // GitHub Flavored Markdown
    .use(html, { sanitize: false }) // HTML 출력
    .process(markdown);

  return result.toString();
}

/**
 * 카테고리별 포스트 가져오기
 */
export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getAllPosts();

  if (category === 'all') {
    return allPosts;
  }

  return allPosts.filter((post) => post.category === category);
}

/**
 * 이전/다음 포스트 가져오기
 */
export async function getAdjacentPosts(slug: string): Promise<{
  prev: Post | null;
  next: Post | null;
}> {
  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === slug);

  return {
    prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  };
}
