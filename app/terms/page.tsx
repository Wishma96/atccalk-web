import type { Metadata } from 'next';

import Terms from '@/pageComponents/Terms';
import { buildMetadata } from '@/utils/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'Review ATCCA terms and conditions for bookings, payments, cancellations, and service usage.',
  path: '/terms',
});

export default function TermsPage() {
  return <Terms />;
}
