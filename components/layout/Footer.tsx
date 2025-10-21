import Link from 'next/link';
import Container from '@/components/common/Container';
import { COMPANY_INFO, NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-foreground-secondary/10">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 회사 정보 */}
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-bold text-foreground inline-block mb-4">
                The Nines
              </Link>
              <p className="text-foreground-secondary mb-4">
                {COMPANY_INFO.description}
              </p>
              <div className="space-y-2 text-sm text-foreground-secondary">
                <p>{COMPANY_INFO.email}</p>
                <p>{COMPANY_INFO.phone}</p>
                <p>{COMPANY_INFO.address}</p>
              </div>
            </div>

            {/* 링크 */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">메뉴</h3>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 소셜 미디어 */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">소셜</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 하단 */}
          <div className="mt-12 pt-8 border-t border-foreground-secondary/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-foreground-secondary">
                © {currentYear} {COMPANY_INFO.name}. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/legal" className="text-foreground-secondary hover:text-foreground transition-colors">
                  이용약관
                </Link>
                <Link href="/legal" className="text-foreground-secondary hover:text-foreground transition-colors">
                  개인정보처리방침
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
