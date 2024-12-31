'use client';
import PartiallyFillForm from '@/components/homePage/PartiallyFillForm';
import PaymentForCompletedForm from '@/components/homePage/PaymentForCompletedForm';
import VisaStatusForm from '@/components/homePage/VisaStatusForm';
import ApplySection from '@/components/india/homepage/ApplySection';
import Banner from '@/components/india/homepage/Banner';
import { useFormContext } from '@/context/formContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home = () => {
  const { dispatch } = useFormContext();
  const [isPartiallyFillFormOpen, setPartiallyFillFormOpen] = useState(false);
  const [isPaymentForCompletedFormOpen, setPaymentForCompletedFormOpen] =
    useState(false);
  const [isVisaStatusFormOpen, setVisaStatusFormOpen] = useState(false);

  useEffect(() => {
    localStorage.removeItem('formId');
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background Patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-orange/5 via-transparent to-primary/5"></div>
        <div className="absolute inset-0 bg-[url('/assets/images/india/common/pattern.png')] bg-repeat opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <Banner />

        {/* Action Buttons Section */}
        <div className="container relative w-full py-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 px-4 md:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {/* Apply for India */}
            <Link href="/visa/step-one" className="h-full group">
              <div className="relative flex flex-col h-full p-6 transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 border-primary/10 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 group-hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent -z-10"></div>
                <div className="flex flex-col items-center justify-center flex-grow space-y-4 text-center">
                  <span className="text-xl font-semibold text-secondary">
                    Apply For INDIA
                  </span>
                  <span className="text-sm text-gray-600">
                    Start New Application
                  </span>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-primary to-primary/80 group-hover:scale-110 shadow-lg shadow-primary/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Amend or Complete */}
            <button
              onClick={() => setPartiallyFillFormOpen(true)}
              className="h-full group"
            >
              <div className="relative flex flex-col h-full p-6 transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 border-pink/10 rounded-2xl hover:border-pink/30 hover:shadow-xl hover:shadow-pink/10 group-hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] bg-gradient-to-br from-pink/20 via-pink/10 to-transparent -z-10"></div>
                <div className="flex flex-col items-center justify-center flex-grow space-y-4 text-center">
                  <span className="text-xl font-semibold text-secondary">
                    Amend or Complete
                  </span>
                  <span className="text-sm text-gray-600">
                    Partially Filled Form
                  </span>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-pink to-pink/80 group-hover:scale-110 shadow-lg shadow-pink/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>

            {/* Make Payment */}
            <button
              onClick={() => setPaymentForCompletedFormOpen(true)}
              className="h-full group"
            >
              <div className="relative flex flex-col h-full p-6 transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 border-success/10 rounded-2xl hover:border-success/30 hover:shadow-xl hover:shadow-success/10 group-hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] bg-gradient-to-br from-success/20 via-success/10 to-transparent -z-10"></div>
                <div className="flex flex-col items-center justify-center flex-grow space-y-4 text-center">
                  <span className="text-xl font-semibold text-secondary">
                    Make Payment
                  </span>
                  <span className="text-sm text-gray-600">
                    For Completed Form
                  </span>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-success to-success/80 group-hover:scale-110 shadow-lg shadow-success/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>

            {/* Visa Status */}
            <button
              onClick={() => setVisaStatusFormOpen(true)}
              className="h-full group"
            >
              <div className="relative flex flex-col h-full p-6 transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 border-brown/10 rounded-2xl hover:border-brown/30 hover:shadow-xl hover:shadow-brown/10 group-hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] bg-gradient-to-br from-brown/20 via-brown/10 to-transparent -z-10"></div>
                <div className="flex flex-col items-center justify-center flex-grow space-y-4 text-center">
                  <span className="text-xl font-semibold text-secondary">
                    Visa Status
                  </span>
                  <span className="text-sm text-gray-600">
                    Check Application Status
                  </span>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-full bg-gradient-to-r from-brown to-brown/80 group-hover:scale-110 shadow-lg shadow-brown/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="relative">
          <ApplySection />
        </div>
      </div>

      {/* Modals */}
      <PartiallyFillForm
        isFormModalOpen={isPartiallyFillFormOpen}
        handleFormModal={() => setPartiallyFillFormOpen(false)}
      />
      <PaymentForCompletedForm
        isFormModalOpen={isPaymentForCompletedFormOpen}
        handleFormModal={() => setPaymentForCompletedFormOpen(false)}
      />
      <VisaStatusForm
        isFormModalOpen={isVisaStatusFormOpen}
        handleFormModal={() => setVisaStatusFormOpen(false)}
      />
    </main>
  );
};

export default Home;
