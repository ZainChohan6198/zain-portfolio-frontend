import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Dashboard from '@/modules/dashboard';

interface DashboardPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fallback: any;
}

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';

const DashboardPage: NextPage<DashboardPageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <NextSeo title={`${PAGE_TITLE} - Zain Chohan`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard />
      </Container>
    </SWRConfig>
  );
};

export default DashboardPage;

export const getStaticProps: GetStaticProps = async () => {
  // const readStats = await getReadStats();
  // Don't pass GitHub data as fallback so the client always fetches from /api/github
  // with the correct from/to date range (last 365 days). Build-time data would use
  // whatever range was computed at build time and can show only partial months.
  return {
    props: {
      fallback: {
        // '/api/read-stats': readStats.data,
        '/api/github?type=personal': null,
      },
    },
    revalidate: 1,
  };
};
