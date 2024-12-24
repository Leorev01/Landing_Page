import SalesButton from "./SalesButton";

interface PricingTier {
  title: string;
  description: string;
  price: string;
  now: string;
  features: string[];
}

const pricingData: PricingTier[] = [
  {
    title: "Starter",
    description: "Ideal for small businesses or personal websites.",
    price: "£499",
    now: "£399",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "SEO optimized",
      "Basic contact form"
    ],
  },
  {
    title: "Growth",
    description: "Perfect for growing businesses looking to scale.",
    price: "£999",
    now: "£799",
    features: [
      "Up to 10 pages",
      "E-commerce integration",
      "Advanced SEO",
      "Analytics integration",
      "Blog setup"
    ],
  },
  {
    title: "Custom",
    description: "Tailored to your unique needs. We’ll build something special for you.",
    price: "",
    now: "Contact us",
    features: ["Fully custom design", "Custom features", "Dedicated support"],
  }
];

const PricingComponent = () => {
  return (
    <section className="py-16 bg-[#EDF2F4] dark:bg-gray-800 mb-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Our Pricing Plans
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {pricingData.map((tier, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {tier.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {tier.description}
              </p>
              <div className="flex flex-row gap-2 justify-center font-bold mb-4">
                <p className="text-blue-600 text-3xl">{tier.now}</p>
                <p className="text-red-600 line-through text-lg">{tier.price}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300">
                    <span className="mr-2">✔</span>{feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <SalesButton />
      </div>
    </section>
  );
};

export default PricingComponent;
