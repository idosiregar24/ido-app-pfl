import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-900">
      {/* Header Section untuk context */}
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Framework <span className="text-indigo-600">Ecosystem</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Eksplorasi teknologi modern untuk membangun antarmuka digital yang
          responsif dan berperforma tinggi.
        </p>
      </header>

      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Tags</option>
      </select>

      {/* Grid Layout - 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-indigo-100"
          >
            <div>
              {/* Badge/Icon Placeholder Concept */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <span className="text-xl font-bold">{item.name.charAt(0)}</span>
              </div>

              <h2 className="text-2xl font-bold leading-7 text-slate-900 group-hover:text-indigo-600 transition-colors">
                {item.name}
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600 line-clamp-3">
                {item.description}
              </p>

              {/* Meta Data with subtle border */}
              <div className="mt-6 space-y-2 border-t border-slate-100 pt-6">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-slate-400 uppercase tracking-wider">
                    Developer
                  </span>
                  <span className="text-slate-700">
                    {item.details.developer}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-slate-400 uppercase tracking-wider">
                    Released
                  </span>
                  <span className="text-slate-700">
                    {item.details.releaseYear}
                  </span>
                </div>
              </div>

              {/* Tags dengan styling yang lebih 'clean' */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600 uppercase tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Link as a prominent button-like style */}
            <div className="mt-8">
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Explore Docs
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
