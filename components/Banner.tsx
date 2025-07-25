const Banner = () => {
  return (
    <div className="w-full bg-fame-gradient">
      {/* Mobile-first banner */}
      <div className="px-4 py-3 text-center md:px-8">
        <p className="font-figtree font-extrabold text-base md:text-[22px] text-white">
          <span className="text-fame-cyan font-extrabold">
            🚀 FRESH BEGINNINGS SALE:{" "}
          </span>
          Extra 25% OFF, Limited Spots - start your journey today!
        </p>
      </div>
    </div>
  );
};

export default Banner;
