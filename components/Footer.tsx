"use client";
import { MoveDown, MoveUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  return (
    <main className="pt-28 pb-16 flex flex-col lg:flex-row">
      <div className="bg-orange-50 flex-1">
        <h1 className="text-3xl font-bold uppercase  tracking-wide text-center mt-10">
          promotion
        </h1>
        <div className="border-b border-b-black w-3/4 flex flex-row justify-between gap-4 mx-auto my-12">
          <input
            type="text"
            placeholder="Enter Your Email Here"
            className="outline-none"
          />
          <button className="uppercase font-bold outline-none hover:text-gray-100">
            Submit
          </button>
        </div>
      </div>
      <FooterDetails />
    </main>
  );
}

// function FooterDetails() {
//   // State to track expanded sections on mobile
//   const [expandedSections, setExpandedSections] = useState({
//     shop: false,
//     help: false,
//     company: false,
//   });

//   // Toggle function for expanding/collapsing sections on mobile
//   const toggleSection = (section) => {
//     setExpandedSections({
//       ...expandedSections,
//       [section]: !expandedSections[section],
//     });
//   };

//   return (
//     <footer className="bg-gray-100 py-8 px-4 flex-1">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row md:justify-between">
//           {/* Shop Column */}
//           <div className="mb-6 md:mb-0">
//             <div
//               className="flex items-center gap-2 justify-center md:block"
//               onClick={() => toggleSection("shop")}
//             >
//               <h2 className="text-xl font-bold text-gray-700  md:mb-6">SHOP</h2>
//               <button className="md:hidden">
//                 <MoveDown
//                   className={`size-3 transform transition-transform duration-300 ${
//                     expandedSections.shop ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>
//             </div>
//             <div
//               className={`${
//                 expandedSections.shop ? "block" : "hidden"
//               } md:block`}
//             >
//               <ul className="space-y-2 flex flex-col items-center md:items-start">
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     BEEF
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     PORK
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     CHICKEN
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     BUNDLES
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     SUBSCRIPTIONS
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Help Column */}
//           <div className="mb-6 md:mb-0">
//             <div
//               className="flex justify-between items-center md:block"
//               onClick={() => toggleSection("help")}
//             >
//               <h2 className="text-xl font-bold text-gray-700 mb-2 md:mb-6">
//                 HELP
//               </h2>
//               <button className="md:hidden">
//                 {expandedSections.help ? (
//                   <span className="text-2xl">−</span>
//                 ) : (
//                   <span className="text-2xl">+</span>
//                 )}
//               </button>
//             </div>
//             <div
//               className={`${
//                 expandedSections.help ? "block" : "hidden"
//               } md:block`}
//             >
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     CONTACT US
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     FAQ
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     CORPORATE GIFTS
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Company Column */}
//           <div className="mb-6 md:mb-0">
//             <div
//               className="flex justify-between items-center md:block"
//               onClick={() => toggleSection("company")}
//             >
//               <h2 className="text-xl font-bold text-gray-700 mb-2 md:mb-6">
//                 COMPANY
//               </h2>
//               <button className="md:hidden">
//                 {expandedSections.company ? (
//                   <span className="text-2xl">−</span>
//                 ) : (
//                   <span className="text-2xl">+</span>
//                 )}
//               </button>
//             </div>
//             <div
//               className={`${
//                 expandedSections.company ? "block" : "hidden"
//               } md:block`}
//             >
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     OUR PROCESS
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     NASHVILLE BUTCHER SHOP
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     WHOLESALE
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     GROCERY LOCATIONS
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     AFFILIATES
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-600 hover:text-gray-900">
//                     REWARDS
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500">
//           <p>© {new Date().getFullYear()} Market Meats. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

interface ExpandedSections {
  [key: string]: boolean;
}

function FooterDetails() {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    shop: false,
    help: false,
    company: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-gray-100 py-8 px-4 flex-1">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <FooterColumn
            title="Shop"
            sectionKey="shop"
            links={["BEEF", "PORK", "POULTRY", "SEAFOOD", "SAVER PACKS"]}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
          <FooterColumn
            title="Help"
            sectionKey="help"
            links={["CONTACT US", "FAQ"]}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
          <FooterColumn
            title="Company"
            sectionKey="company"
            links={[
              "OUR PROCESS",
              "KERRISDALE BUTCHER SHOP",
              "KISLANO BUTCHER SHOP",
            ]}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Market Meats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  sectionKey: string;
  links: string[];
  expandedSections: Record<string, boolean>;
  toggleSection: (section: string) => void;
}

function FooterColumn({
  title,
  sectionKey,
  links,
  expandedSections,
  toggleSection,
}: FooterColumnProps) {
  const isExpanded = expandedSections[sectionKey];

  return (
    <div className="mb-6 md:mb-0">
      <div
        className="flex items-center gap-2 justify-center md:block cursor-pointer"
        onClick={() => toggleSection(sectionKey)}
      >
        <h2 className="text-xl font-bold text-gray-700 md:mb-6">
          {title.toUpperCase()}
        </h2>
        <button className="md:hidden transition-transform duration-300">
          <MoveDown
            className={`size-3 transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <div className={`${isExpanded ? "block" : "hidden"} md:block`}>
        <ul className="space-y-2 flex flex-col items-center md:items-start">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={`/collections/${link.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
