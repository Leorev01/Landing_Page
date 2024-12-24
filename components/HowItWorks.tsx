export default function HowItWorks() {
    return (
      <section className="bg-[#EDF2F4] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How It Works: Your Journey to Success Starts Here!
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Discover how simple it is to take the first step toward achieving your goals. Follow these steps to book your free consultation:
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Choose a Date & Time
              </h3>
              <p className="text-gray-600">
                Select a convenient time from our booking calendar that fits your schedule. We make it easy for you!
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Provide Your Details
              </h3>
              <p className="text-gray-600">
                Fill out a quick form with your contact information and let us know about your goals or challenges.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Receive Confirmation
              </h3>
              <p className="text-gray-600">
                You’ll get a confirmation email with all the details of your consultation. We’ll even remind you closer to the date!
              </p>
            </div>
  
            {/* Step 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Meet Your Expert
              </h3>
              <p className="text-gray-600">
                Join a one-on-one session with our expert. Get personalized advice, answers to your questions, and a roadmap for success.
              </p>
            </div>
  
            {/* Step 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                5
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Take the First Step
              </h3>
              <p className="text-gray-600">
                Walk away with a clear plan to achieve your goals. No obligations—just valuable insights tailored to you.
              </p>
            </div>
          </div>
  
          <div className="mt-12">
          </div>
        </div>
      </section>
    );
  }
  