function GalleryFilterTabs({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              isActive
                ? "border-primary-600 bg-primary-600 text-white"
                : "border-slate-200 bg-white text-navy-700 hover:border-primary-500 hover:text-primary-600"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default GalleryFilterTabs;
