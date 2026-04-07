import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  /** Deklarasi state **/
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
  });

  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /** Deklarasi Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const name = framework.name?.toLowerCase() || "";
    const developer = framework.details.developer?.toLowerCase() || "";
    const releaseYear = framework.details.releaseYear?.toString() || "";
    const description = framework.description?.toLowerCase() || "";

    const matchesSearch =
      name.includes(_searchTerm) ||
      developer.includes(_searchTerm) ||
      releaseYear.includes(_searchTerm) ||
      description.includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags?.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  // Ditambahkan .sort() agar urutan dropdown lebih rapi secara alfabetis
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ].sort();

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden font-sans selection:bg-indigo-100 selection:text-indigo-700 pb-20">
      {/* Background Decor - Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-50/80 to-transparent -z-10" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/20 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-xs font-semibold text-indigo-600 mb-4">
            v2.0 Ecosystem Update
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
            Build with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Confidence.
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Eksplorasi teknologi modern untuk membangun antarmuka digital yang
            responsif dan berperforma tinggi.
          </p>
        </header>

        {/* Control Bar (Search & Filter) */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 group">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              name="searchTerm"
              placeholder="Search framework..."
              value={dataForm.searchTerm}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200/80 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all text-slate-700 placeholder:text-slate-400 font-medium"
            />
          </div>

          <div className="relative sm:w-64">
            <select
              name="selectedTag"
              value={dataForm.selectedTag}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-3.5 bg-white border border-slate-200/80 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all text-slate-700 appearance-none cursor-pointer font-medium"
            >
              <option value="">All Categories</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Grid Layout untuk Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredFrameworks.length > 0 ? (
            filteredFrameworks.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col bg-white border border-slate-200/60 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] hover:border-indigo-200 hover:-translate-y-1"
              >
                {/* Card Header: Icon & Year */}
                <div className="flex items-start justify-between mb-8">
                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-500">
                    <span className="text-2xl font-bold">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    {item.details.releaseYear}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-slate-500 text-[15px] leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags: Subtle Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-md group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors uppercase tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Info & Link */}
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                      Developer
                    </p>
                    <p className="text-sm font-semibold text-slate-700 truncate max-w-[150px]">
                      {item.details.developer}
                    </p>
                  </div>

                  <a
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                    title="Visit Official Website"
                  >
                    <svg
                      className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            /* Empty State yang lebih cantik */
            <div className="col-span-full py-24 text-center flex flex-col items-center justify-center bg-white rounded-3xl border border-slate-200/60 border-dashed">
              <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Framework tidak ditemukan
              </h3>
              <p className="text-slate-500 max-w-sm">
                Coba gunakan kata kunci lain atau hapus filter kategori untuk
                melihat semua hasil.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTag("");
                }}
                className="mt-6 px-6 py-2 bg-indigo-50 text-indigo-600 font-semibold rounded-full hover:bg-indigo-100 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
