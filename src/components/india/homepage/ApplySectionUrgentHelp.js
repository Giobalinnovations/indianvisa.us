import { BiMailSend } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

const ApplySectionUrgentHelp = () => {
  const quickLinks = [
    { title: 'Support Center' },
    { title: 'Express Processing' },
    { title: 'Tourist Guidelines' },
    { title: 'Medical Travel' },
    { title: 'Business Entry' },
    { title: 'Capital Region' },
    { title: 'Travel Resources' },
  ];

  const securePayments = [
    { imgSrc: '/assets/images/india/common/paypal.png', alt: 'PayPal Secure' },
    {
      imgSrc: '/assets/images/india/common/mastercard-secured.png',
      alt: 'Mastercard SecureCode',
    },
    {
      imgSrc: '/assets/images/india/common/varified.png',
      alt: 'Verified Payment',
    },
    { imgSrc: '/assets/images/india/common/mastercard.png', alt: 'Mastercard' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Quick Access Links */}
      <section>
        <h2 className="bg-gradient-to-r from-secondary via-primary to-orange text-white text-center py-4 font-semibold rounded-t-2xl">
          QUICK ACCESS
        </h2>
        <div className="divide-y divide-primary/10">
          {quickLinks.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 p-4 hover:bg-primary/5 transition-colors group"
            >
              <span className="w-6 h-6 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <FaCheck className="w-3 h-3 text-primary" />
              </span>
              <span className="text-gray-600 group-hover:text-primary transition-colors">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Support Information */}
      <section>
        <h2 className="bg-gradient-to-r from-secondary via-primary to-orange text-white text-center py-4 font-semibold">
          ASSISTANCE CENTER
        </h2>
        <div className="p-4 border-b border-primary/10 hover:bg-primary/5 transition-colors group">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
              <BiMailSend className="w-5 h-5 text-primary" />
            </span>
            <span className="text-gray-600 group-hover:text-primary transition-colors">
              support@traveltoindiaservices.com
            </span>
          </div>
        </div>
      </section>

      {/* Secure Payment Options */}
      <section className="p-6">
        <div className="grid grid-cols-2 gap-6">
          {securePayments.map((payment, index) => (
            <div
              key={index}
              className="flex items-center justify-center hover:scale-105 transition-transform"
            >
              <img
                src={payment.imgSrc}
                alt={payment.alt}
                className="w-full max-w-[120px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ApplySectionUrgentHelp;
