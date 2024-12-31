import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Home',
  description: 'Visa Application',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} flex flex-col antialiased bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 text-secondary/90`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <Header />
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-[url('/assets/images/india/common/pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>
              {children}
            </div>
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              toastClassName="!bg-white/90 !backdrop-blur-sm !shadow-xl !border-2 !border-primary/10"
            />
          </ReactQueryProvider>
        </FormProvider>
        <GoogleTagManager gtmId="G-LC9MZM89N4" />
        <GoogleAnalytics gaId="G-LC9MZM89N4" />
      </body>
    </html>
  );
}
