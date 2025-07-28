const Button = ({ text, theme }: { text: string; theme?: string }) => {
  return (
    <button
      type="button"
      className="flex flex-row justify-center items-center gap-2 bg-fame-pink py-2.5 px-10 w-full sm:max-w-80 border-none rounded-lg font-figtree max-sm:font-urbanist leading-[100%] text-white font-bold text-xl shadow-fame-button"
    >
      <span>{text}</span>
      <img
        src="/slide-right.png"
        alt="Slide Right Icon"
        className="inline-block ml-2"
      />
    </button>
  );
};

export default Button;
