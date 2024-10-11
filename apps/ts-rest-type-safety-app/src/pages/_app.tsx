import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { AppProps } from 'next/app';
import { Metadata } from 'next'
import '../styles.scss';
import { tsr } from '../pages-tsr';
import { Layout } from '../components/fe/Layout';

export const queryClient = new QueryClient();
export const metadata: Metadata = {
  title: 'My Page Title',
}

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*<Head>*/}
      {/*  <title>Welcome to example-next!</title>*/}
      {/*</Head>*/}
      <QueryClientProvider client={queryClient}>
        <tsr.ReactQueryProvider>
          <main className="app">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
        </tsr.ReactQueryProvider>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
