import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Image from "next/image";
import { heroSectionTexts } from "../data/constants";
import InfluenceBoostCard from "../components/InfluenceBoostCard";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <section className="bg-black m-auto">
        <NavBar />
      </section>

      <main className="w-full max-w-7xl flex flex-col-reverse md:flex-row justify-center m-auto items-center py-0 px-5 md:p-8 font-urbanist">
        <div className="flex-1 z-20 bg-transparent">
          <h1 className="font-extrabold md:font-bold text-[25px] md:text-[35px] space-y-5 max-md:text-center leading-[115%] mb-1">
            Want to Turn Social Media Into a Profitable Career?{" "}
          </h1>

          <h1 className="font-extrabold md:font-bold text-[25px] md:text-[35px] space-y-5 max-md:text-center leading-[115%] text-fame-cyan drop-shadow-[0_5px_5px_rgba(252,0,78,1)]">
            Discover your way to success with Fametonic:
          </h1>
          {/* Influence boost cards */}
          <div className="my-4 max-w-[90%]">
            {heroSectionTexts.map((text) => (
              <InfluenceBoostCard key={text} text={text} />
            ))}
          </div>

          {/* Bottom section */}
          <div className="py-3 flex flex-col-reverse md:flex-col gap-8">
            {/* First part */}
            <div className="flex flex-col w-full sm:max-w-80  gap-3">
              <Button text="GET STARTED" />
              <p className="font-figtree font-normal text-xs text-center text-secondary-200">
                1-minute quiz for personalized Insights
              </p>
            </div>
            {/* Second part */}
            <div className="flex flex-col gap-5">
              <p className="font-figtree font-medium text-xs leading-[100%] text-secondary-200 max-md:text-center">
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p className="font-figtree font-medium text-xs leading-[100%] text-secondary-200 max-md:text-center">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
            {/* Bottom section ends */}
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 relative z-10 md:right-28">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={666}
            height={679}
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
    </div>
  );
}
