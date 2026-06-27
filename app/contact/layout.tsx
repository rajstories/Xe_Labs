import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, createMetadata, webPageSchema } from '@/lib/seo';

const title = 'Contact XE Labs | Hackathon, College & Partnership Queries';
const description = 'Contact XE Labs for Build Sprint 2026 hackathon queries, college collaborations, partnerships, product inquiries, and AI software discussions.';

export const metadata = createMetadata({
  title,
  description,
  path: '/contact',
  keywords: ['contact XE Labs', 'XE Labs college collaboration', 'XE Labs Build Sprint contact'],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[
        webPageSchema({ path: '/contact', name: title, description, type: 'ContactPage' }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact XE Labs', path: '/contact' }]),
      ]} />
      {children}
    </>
  );
}
