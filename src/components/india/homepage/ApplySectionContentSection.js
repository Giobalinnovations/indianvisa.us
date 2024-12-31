const ApplySectionContentSection = () => {
  const eligibleCountries = [
    'Albania',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua & Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Barbados',
    'Belgium',
    'Belize',
    'Brazil',
    'Bulgaria',
    'Cambodia',
    'Canada',
    'Chile',
    'Colombia',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Indonesia',
    'Ireland',
    'Israel',
    'Italy',
    'Japan',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Malaysia',
    'Malta',
    'Mexico',
    'Monaco',
    'Mongolia',
    'Netherlands',
    'New Zealand',
    'Norway',
    'Oman',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Korea',
    'Spain',
    'Sweden',
    'Switzerland',
    'Thailand',
    'UAE',
    'United Kingdom',
    'USA',
    'Vietnam',
  ];

  const featuredDestinations = [
    {
      city: 'New Delhi',
      description:
        "Experience the blend of history and modernity in India's capital",
    },
    {
      city: 'Mumbai',
      description:
        "Discover the vibrant heart of India's commerce and entertainment",
    },
    {
      city: 'Bengaluru',
      description: "Explore India's innovation hub and garden city",
    },
    {
      city: 'Taj Mahal',
      description: 'Visit the iconic symbol of eternal love in Agra',
    },
    {
      city: 'Pink City',
      description: "Immerse in Jaipur's royal heritage and architecture",
    },
    {
      city: 'Goan Beaches',
      description: 'Relax on pristine shores and experience vibrant culture',
    },
    {
      city: 'Holy Ganges',
      description: 'Witness spiritual traditions in ancient Varanasi',
    },
    {
      city: 'Backwaters',
      description: "Cruise Kerala's tranquil waterways and lush landscapes",
    },
  ];

  return (
    <div className="text-base">
      {/* Welcome Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-secondary via-primary to-orange rounded-t-2xl">
        <div className="absolute inset-0 bg-[url('/assets/images/india/common/pattern.png')] opacity-10"></div>
        <h2 className="relative flex items-center justify-center py-6 text-lg font-semibold text-center text-white md:text-xl lg:text-2xl">
          Discover India Through e-Visa Services
        </h2>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Introduction */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-secondary">
            Begin Your Indian Adventure
          </h2>
          <p className="leading-relaxed text-gray-600">
            India beckons with its kaleidoscope of experiences - from ancient
            temples to modern metropolises, from snow-capped Himalayas to
            sun-kissed beaches. Our streamlined e-Visa service opens the door to
            this extraordinary land, making your travel preparations seamless
            and efficient.
          </p>
        </div>

        {/* Service Features */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Swift Processing',
              description:
                'Experience rapid visa processing with our advanced digital system',
            },
            {
              title: 'Enhanced Security',
              description:
                'Your data protected by cutting-edge encryption technology',
            },
            {
              title: 'Expert Support',
              description:
                'Access to dedicated visa specialists around the clock',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 bg-white border-2 rounded-xl shadow-md hover:shadow-lg border-primary/5 hover:border-primary/20 group"
            >
              <h3 className="mb-3 text-lg font-semibold text-secondary group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Eligible Nations */}
        <div className="p-8 space-y-6 bg-gradient-to-br from-secondary/5 via-primary/5 to-orange/5 rounded-2xl border-2 border-primary/5">
          <h2 className="text-xl font-bold text-secondary">
            Nations Eligible for e-Visa
          </h2>
          <p className="text-gray-600">
            Citizens from the following countries can access our streamlined
            online visa application process. Experience a paperless, efficient
            journey to your Indian adventure.
          </p>
          <div className="flex flex-wrap gap-3">
            {eligibleCountries.map((country, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm text-gray-600 transition-all duration-300 bg-white border-2 rounded-full shadow-sm hover:shadow-md border-primary/5 hover:border-primary/20 hover:text-primary hover:-translate-y-1"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Destinations */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-secondary">
            Must-Visit Destinations
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((dest, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 bg-white border-2 rounded-xl shadow-md hover:shadow-lg border-primary/5 hover:border-primary/20 hover:-translate-y-1 group"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-orange">
                  {dest.city}
                </h3>
                <p className="text-gray-600">{dest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="p-8 space-y-6 bg-gradient-to-br from-orange/5 via-primary/5 to-success/5 rounded-2xl border-2 border-primary/5">
          <h2 className="text-xl font-bold text-secondary">
            Benefits of Indian e-Visa
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The Indian e-Visa system revolutionizes international travel to
              India through its digital-first approach. Our platform transforms
              the traditional visa process into a smooth, paperless experience
              accessible from anywhere in the world.
            </p>
            <p>
              Whether you&apos;re planning a cultural expedition, business
              venture, or medical visit, our comprehensive e-Visa categories
              cater to your specific needs. The system ensures thorough security
              checks while maintaining quick processing times.
            </p>
            <p>
              From the majestic Himalayas to the tropical beaches, from ancient
              temples to modern business hubs - your Indian journey begins with
              a simple, secure online application. Let us help you unlock the
              doors to incredible India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySectionContentSection;
