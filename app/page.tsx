import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Image from "next/image";
import { heroSectionTexts } from "../data/constants";
import InfluenceBoostCard from "../components/InfluenceBoostCard";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="">
      <section className="sticky top-0 z-50">
        <Banner />
      </section>
      <section className="bg-black m-auto">
        <NavBar />
      </section>

      <main className="w-full flex flex-col-reverse max-w-7xl m-auto py-0 px-5 font-urbanist relative md:p-8 md:flex-row md:items-start mb-5">
        <div className="flex-1 z-20 bg-transparent relative md:w-[60%] md:pr-0">
          <div className="md:max-w-[65%]">
            <h1 className="font-extrabold text-[25px] leading-[115%] mb-1 text-center md:font-bold md:text-[35px] md:text-left">
              Want to Turn Social Media Into a Profitable Career?{" "}
            </h1>

            <h1 className="font-extrabold text-[25px] leading-[115%] text-fame-cyan drop-shadow-[0_5px_5px_rgba(252,0,78,1)] text-center md:font-bold md:text-[35px] md:text-left">
              Discover your way to success with Fametonic:
            </h1>
            {/* Influence boost cards */}
            <div className="my-5 md:max-w-[90%]">
              {heroSectionTexts.map((text) => (
                <InfluenceBoostCard key={text} text={text} />
              ))}
            </div>

            {/* Bottom section */}
            <div className="py-3 flex flex-col-reverse gap-8 md:flex-col">
              {/* First part */}
              <div className="flex flex-col w-full gap-3 sm:max-w-80">
                <Button text="GET STARTED" />
                <p className="font-figtree font-normal text-xs text-center text-secondary-200">
                  1-minute quiz for personalized Insights
                </p>
              </div>
              {/* Second part */}
              <div className="flex flex-col gap-5">
                <p className="font-figtree font-medium text-xs leading-[100%] text-secondary-200 text-center md:text-left">
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="font-figtree font-medium text-xs leading-[100%] text-secondary-200 text-center md:text-left">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
              {/* Bottom section ends */}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 relative z-10 md:absolute md:right-0 md:top-0 md:w-[50%] md:h-full">
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
