function Props({ name, age, jobTitle, buttonText }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-3 border">
      {/* Name */}
      <h2 className="text-xl font-bold text-gray-800">
        {name}
      </h2>

      {/* Age */}
      <p className="text-gray-600">
        Age: <span className="font-medium">{age}</span>
      </p>

      {/* Job Title */}
      <p className="text-blue-600 font-semibold">
        {jobTitle}
      </p>

      {/* Button */}
      <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        {buttonText}
      </button>
    </div>
  );
}

export default Props;