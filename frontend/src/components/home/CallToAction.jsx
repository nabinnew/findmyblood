const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 text-red-50">
          Join our community of life-savers today
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-red-500 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors">
            Register as Donor
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-red-500 transition-colors">
            Find Blood Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
