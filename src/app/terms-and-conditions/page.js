export const metadata = {
  title: 'Terms and Conditions - Indian Visa US',
  description:
    'Terms and conditions governing the use of our visa application services',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:py-6">
          Terms and Conditions
        </h1>
        <p className="my-4 text-lg leading-relaxed text-gray-700">
          Welcome to Indian Visa US. These terms and conditions outline the
          rules and regulations for using our visa application services. By
          accessing our platform and using our services, you agree to comply
          with these terms.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Our Services</h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We provide the following services:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Indian visa application processing assistance</li>
            <li>Document verification and guidance</li>
            <li>Application status tracking</li>
            <li>24/7 customer support</li>
            <li>Secure payment processing</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          User Obligations
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            When using our services, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide accurate and complete information</li>
            <li>Submit authentic documents</li>
            <li>Pay all applicable fees</li>
            <li>Follow Indian visa regulations</li>
            <li>Maintain account security</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Service Fees</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          All service fees must be paid in advance. Our fees are non-refundable
          except in specific circumstances outlined in our refund policy. We use
          secure payment methods to protect your financial information.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Liability Limitations
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          While we strive to provide reliable services, we cannot guarantee visa
          approval as this decision lies solely with Indian authorities. Our
          liability is limited to the service fees paid. We are not responsible
          for:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Visa application rejections</li>
          <li>Delays in processing</li>
          <li>Changes in government policies</li>
          <li>Consequential damages</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Intellectual Property
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          All content on our website is protected by intellectual property
          rights. You may not copy, distribute, or use our content without
          explicit permission.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Privacy Protection
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Your use of our services is subject to our Privacy Policy. We protect
          your personal information and use it only for processing your visa
          application and related services.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Term Modifications
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We reserve the right to modify these terms at any time. Changes become
          effective immediately upon posting. Continued use of our services
          constitutes acceptance of modified terms.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Contact Information
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For questions about these terms and conditions, please contact our
          support team at support@indianvisa.us
        </p>
      </div>
    </div>
  );
};

export default page;
