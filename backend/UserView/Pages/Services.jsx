import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "../../../utils/Data";
import VisibilitySensor from "react-visibility-sensor";
import { Spinner } from "@chakra-ui/react";

const ServiceCard = ({ icon, title, description }) => (
  <>
    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-teal-400 shadow-teal-500/40">
      <i className={`${icon} h-6 w-6 text-white`} />
    </div>
    <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{title}</h1>
    <p className="px-4 text-gray-500">{description}</p>
  </>
);

export const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (visibility) => {
    setIsVisible(visibility);
  };
  // mongodb+srv://Karan:Iamphenomenol1!@cluster0.ypx1erc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  return (
    <VisibilitySensor onChange={handleChange} partialVisibility>
      {({ isVisible }) => (
        <div className="h-full mt-4 rounded w-full bg-black  pt-12 p-4">
          <AnimatePresence>
            {isVisible ? (
              <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    data-aos-delay={`${150 * (index + 1)}`}
                    className="rounded-xl bg-white p-6 text-center shadow-xl slide-in-left"
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <Spinner />
            )}
          </AnimatePresence>
        </div>
      )}
    </VisibilitySensor>
  );
};
