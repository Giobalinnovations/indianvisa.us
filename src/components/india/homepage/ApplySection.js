import UnderlineTextCenter from '../common/UnderlineTextCenter';
import ApplySectionContentSection from './ApplySectionContentSection';
import ApplySectionUrgentHelp from './ApplySectionUrgentHelp';

const ApplySection = () => {
  const stepData = [
    {
      id: 1,
      title: 'Complete Online Form',
      imgSrc: '/assets/images/india/common/apply-online.jpg',
      description:
        'Fill out your Indian visa application digitally with our secure and user-friendly platform.',
      arrow: true,
    },
    {
      id: 2,
      title: 'Upload Requirements',
      imgSrc: '/assets/images/india/common/doc.jpg',
      description:
        'Submit your digital documents and photos according to Indian embassy specifications.',
      arrow: true,
    },
    {
      id: 3,
      title: 'Get Your e-Visa',
      imgSrc: '/assets/images/india/common/visaImg.jpg',
      description:
        'Receive your approved e-Visa electronically and prepare for your journey to India.',
      arrow: false,
    },
  ];

  return (
    <div className="container mx-auto relative z-0">
      {/* Two Column Layout */}
      <div className="lg:flex lg:gap-8 p-4">
        {/* Quick Access Panel */}
        <aside className="lg:w-1/4 mb-8 lg:mb-0">
          <div
            style={{
              position: '-webkit-sticky',
              position: 'sticky',
              top: '96px',
            }}
            className="bg-white rounded-2xl shadow-lg border-2 border-primary/5 will-change-transform"
          >
            <ApplySectionUrgentHelp />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:w-3/4">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-primary/5">
            <ApplySectionContentSection />
          </div>

          {/* Application Journey */}
          <section className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary relative inline-block">
                Your Journey to Indian e-Visa
                <div className="absolute left-0 right-0 h-1 -bottom-4 bg-gradient-to-r from-orange via-primary to-success"></div>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-16 md:gap-8">
              {stepData.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Process Card */}
                  <div className="bg-white rounded-2xl shadow-lg border-2 border-primary/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative">
                    {/* Image Container */}
                    <div className="absolute left-1/2 -top-12 -translate-x-1/2">
                      <div className="relative">
                        {/* Background Shape */}
                        <div className="absolute inset-0 rotate-45 bg-gradient-to-br from-orange/20 to-primary/20 rounded-2xl blur-sm transition-all duration-300 group-hover:rotate-90"></div>
                        {/* Image */}
                        <img
                          src={step.imgSrc}
                          alt={step.title}
                          className="relative w-24 h-24 object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-16 text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-orange to-primary text-white text-lg font-semibold mb-4">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-semibold text-secondary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  {step.arrow && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
                      <img
                        src="/assets/images/india/common/curved-arrow.png"
                        alt="Next step"
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-125"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Important Notice */}
          <section className="mt-24 mb-8 bg-gradient-to-br from-secondary/5 via-primary/5 to-orange/5 rounded-2xl p-8 border-2 border-primary/5">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary text-center relative inline-block mb-8">
              Official Guidelines
              <div className="absolute left-0 right-0 h-1 -bottom-4 bg-gradient-to-r from-orange via-primary to-success"></div>
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              The Indian government maintains strict regulations regarding visa
              processing. No third-party agents are authorized to expedite visa
              services or charge additional fees. All travelers must obtain a
              valid visa or e-Visa before entering India, except those from
              exempt countries. Indian origin travelers should note that OCI
              card requirements are mandatory where applicable.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ApplySection;
