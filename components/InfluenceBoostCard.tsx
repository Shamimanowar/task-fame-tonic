import Image from "next/image";

interface InfluenceBoostCardProps {
  text: string;
}

const InfluenceBoostCard = ({ text }: InfluenceBoostCardProps) => {
  return (
    <p
      key={text}
      className="leading-7 flex flex-row justify-start items-center gap-2"
    >
      <Image
        src="/star-mark.png"
        className="size-6"
        alt="Star Icon"
        width={22}
        height={22}
      />
      <span className="font-semibold font-figtree text-base text-white">
        {text}
      </span>
      <br />
    </p>
  );
};

export default InfluenceBoostCard;
