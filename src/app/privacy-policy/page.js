export const metadata = {
  title: 'Privacy Policy - Indian Visa US',
  description:
    'Our commitment to protecting your privacy and personal information',
  alternates: {
    canonical: '/privacy-policy',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:py-6">
          Privacy Policy
        </h1>
        <p className="my-4 text-lg leading-relaxed text-gray-700">
          At Indian Visa US, we are committed to safeguarding your privacy and
          ensuring the security of your personal information. This privacy
          policy explains how we collect, use, and protect your data throughout
          the visa application process.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Data Collection
        </h2>
        <div className="mt-4 space-y-4">
          <h3 className="text-xl font-medium text-gray-800">
            Personal Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Personal identification details</li>
            <li>Contact information</li>
            <li>Travel documentation</li>
            <li>Payment information</li>
            <li>Communication records</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Purpose of Data Collection
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We collect and process your data to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Process your visa application</li>
            <li>Provide customer support</li>
            <li>Send important updates and notifications</li>
            <li>Improve our services</li>
            <li>Comply with legal requirements</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Data Security Measures
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We implement comprehensive security measures including:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Advanced encryption protocols</li>
          <li>Secure data storage systems</li>
          <li>Regular security assessments</li>
          <li>Employee data protection training</li>
          <li>Access control mechanisms</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Data Sharing and Third Parties
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We share your information only with:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Indian government authorities (for visa processing)</li>
          <li>Authorized service providers</li>
          <li>Payment processors</li>
          <li>Legal authorities (when required by law)</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Your Privacy Rights
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          You have the right to:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Access your personal data</li>
          <li>Request data corrections</li>
          <li>Withdraw consent for marketing</li>
          <li>Request data deletion (where applicable)</li>
          <li>Receive data in a portable format</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Cookie Usage</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our website uses cookies and similar technologies to enhance your
          experience and analyze website traffic. You can control cookie
          preferences through your browser settings.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Policy Updates</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We regularly review and update this privacy policy to reflect changes
          in our practices and legal requirements. The latest version will
          always be available on our website.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For privacy-related inquiries or to exercise your rights, please
          contact our privacy team at privacy@indianvisa.us
        </p>
      </div>
    </div>
  );
};

export default page;
