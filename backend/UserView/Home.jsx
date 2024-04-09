import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { OurMenu } from "./Pages/OurMenu";
import { Today_Special } from "./Pages/TodaySpecial";
import { Services } from "./Pages/Services";
import { OrderNow } from "./OrderNow";
// import { Today_Special } from "./Pages/TodaySpecial";
export const Home = () => {
  return (
    <>
      <div className="bgimage h-[50vh]  w-full flex items-center justify-center text-white px-4 lg:px-8">
        {/* Added padding for responsiveness */}
        <motion.div className="text-center">
          {/* Added text alignment class */}
          <h1 className="text-3xl max-[400px]:text-2xl  pt-8 lg:pt-0 pr-2 font-extrabold tracking-in-expand">
            {/* Adjusted padding and alignment */}
            "Savor every bite of culinary excellence at Chaska, <br /> where
            each dish tells a story of flavor and passion."
          </h1>
        </motion.div>
      </div>
      <OurMenu />
      <Services />
      <Today_Special />
      <OrderNow/>
    </>
  );
};
