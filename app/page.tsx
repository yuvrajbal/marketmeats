import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pb-24">
      <Hero />
      <TheDifferenceSection />
      <VariationsSection />
      <VisualAllItems />
    </main>
  );
}

function Hero() {
  return (
    <main className="relative overflow-x-visible">
      <div className="relative w-full h-screen">
        <Image
          src="/home-hero.webp"
          alt="hero"
          fill
          className="object-cover w-full h-full lg:w-full lg:h-fit md:object-center object-right"
          priority
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 md:gap-12 text-white uppercase z-10 p-2 ">
          <h1 className="text-center font-sans  text-5xl/10 md:text-7xl/16 max-w-2xl md:max-w-5xl font-bold tracking-tighter  drop-shadow-xl">
            "IF IT'S NOT RAISED RIGHT IT CAN'T BE DELICIOUS"
          </h1>
          <div className=" flex sm:flex-row flex-col sm:justify-between md:w-4xl  gap-4 font-semibold md:font-bold text-sm md:text-lg tracking-widest">
            <p className="drop-shadow-xl">no hormones</p>
            <p className="drop-shadow-xl">no antibiotics</p>
            <p className="drop-shadow-xl">pasture-raised</p>
          </div>
          <button className="w-6/7 sm:w-48 mt-6  py-4 bg-neutral-800 text-white  font-bold hover:bg-white hover:text-black hover:border hover:border-gray-400 transition uppercase tracking-wide">
            Shop Now
          </button>
        </div>
      </div>
    </main>
  );
}

function TheDifferenceSection() {
  return (
    <section className="bg-gray-50 py-12 ">
      <div className="max-w-5xl p-4 mx-auto">
        <div className="border-b border-b-gray-800  flex flex-col items-center justify-center gap-6 mx-auto py-8 text-center">
          <h1
            className="max-w-sm  
            uppercase 
            text-black 
            font-bold text-xl md:text-2xl/6 md:font-extrabold md:tracking-normal tracking-tighter"
          >
            Now delivering meat the way meat should be
          </h1>
          <p className="text-gray-800 font-sans text-base ">
            By sourcing from pastures in Vancouver, and dry aging and
            hand-cutting it at our own facilities, we’re setting a new standard
            for meat. After years of serving our local community, we’re now
            delivering nationwide. Once you taste the difference, you’ll never
            go back.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-12">
          <div className="flex-1 font-sans uppercase tracking-tighter  text-orange-600 font-bold md:font-extrabold md:text-7xl/18 md:tracking-tight text-6xl/12">
            <h1 className="">Let's </h1>
            <h1 className="ml-16 md:ml-24">dig in </h1>
          </div>
          <div className="flex-1  ">
            <p className=" mt-12 mb-8">
              Cooking for two or ten? Firing up the grill or the skillet? How
              you’re cooking matters, and we want to help you get it right every
              time. By practicing whole-animal butchery, we’re able to offer
              tons of incredible cuts and can guide you toward the perfect one
              for any occasion.
            </p>

            <Link
              href={"/learn"}
              className=" uppercase tracking-wide text-sm font-bold border-b-1 border-b-orange-600 pb-1 "
            >
              Learn more about our philosophy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function VariationsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4  mx-auto ">
      <ShopItem
        mobileSrc={"/skillet-stand-outs_2xrmobile_800x322.jpg"}
        desktopSrc={"/skillet-stand-outs_2xr_700x1360.jpg"}
        overlayText="Subscribe & Save"
      />
      <ShopItem
        mobileSrc={"/burger-to-end-all-burgs_2xrmobile_800x322.jpg"}
        desktopSrc={"/burger-to-end-all-burgers_2xr_700x1360.jpg"}
        overlayText="Dry aged burgers"
      />
      <ShopItem
        mobileSrc={"/grill-go-tos_2xrmobile_800x322.jpg"}
        desktopSrc={"/grill-go-tos_2xr_700x1360.jpg"}
        overlayText="grill go-tos"
      />
      <ShopItem
        mobileSrc={"/cuts-for-a-crowd_2xrmobile_800x322.jpg"}
        desktopSrc={"/cuts-for-a-crowd_2xr_700x1360.webp"}
        overlayText="cuts for the crowd"
      />
    </section>
  );
}

interface ShopItemProps {
  mobileSrc: string;
  desktopSrc: string;
  overlayText: string;
}
function ShopItem({ mobileSrc, desktopSrc, overlayText }: ShopItemProps) {
  return (
    <div className="relative w-full h-[171px] sm:h-[700px]">
      {/* Mobile Image */}
      <Image
        src={mobileSrc}
        alt={overlayText}
        fill
        className="object-cover block sm:hidden"
      />

      {/* Desktop Image */}
      <Image
        src={desktopSrc}
        alt={overlayText}
        fill
        className="object-cover hidden sm:block"
      />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="uppercase text-white text-xl font-bold text-center drop-shadow-lg">
          {overlayText}
        </h2>
      </div>
    </div>
  );
}

function VisualAllItems() {
  return (
    <main className="max-w-7xl mx-auto py-36">
      <div className="relative">
        <Image
          src={"/Box_Overhead-0081-Edit_lo_1880x1050.webp"}
          alt="all items"
          height={1050}
          width={1880}
          className="w-full h-auto"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-28 md:-bottom-40 lg:-bottom-56 flex flex-col items-center">
          <Image
            src="/Inspirational_Glass_of_Whiskey_61814cff-55d9-48dc-ac72-452216e63819_1060x720.webp"
            alt="cheers"
            height={420}
            width={420}
            className="w-44 md:w-72 lg:w-fit h-auto"
          />
          <h1 className="mt-4 text-center uppercase text-2xl font-bold text-black tracking-tight">
            Cheers
          </h1>
        </div>
      </div>
    </main>
  );
}
