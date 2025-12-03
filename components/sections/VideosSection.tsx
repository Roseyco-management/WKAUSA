export function VideosSection() {
  return (
    <section className="bg-white py-8">
      {/* Red banner header */}
      <div className="bg-wka-red py-3 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
          Videos
        </h2>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Video placeholder - would be YouTube embed in production */}
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-wka-red flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white font-semibold">WKA USA Highlight Reel</p>
                <p className="text-gray-400 text-sm mt-1">Coming Soon</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6">
            Check out fight highlights, training videos, and event coverage from WKA USA events.
          </p>
        </div>
      </div>
    </section>
  );
}
