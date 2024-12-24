import Link from "next/link";

const SuccessPage: React.FC = () => {

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-12 text-center">
      <h1 className="text-3xl font-semibold text-green-600 mb-4">
        Thank You for Booking!
      </h1>
      <p className="text-gray-700 mb-6">
        Your appointment request has been successfully submitted. We’ll review your request and contact you shortly to confirm the details.
      </p>
      <p className="text-gray-700 mb-6">
        If you have any urgent questions, feel free to reach out at{" "}
        <Link href={`mailto:${process.env.EMAIL_USER}`} className="text-blue-600 underline">
          {process.env.EMAIL_USER}
        </Link>
        .
      </p>
      <Link href='/'
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default SuccessPage;
