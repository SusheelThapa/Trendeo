import { FaShippingFast, FaHeadset } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import PopupAnimation from "./common/PopupAnimation";
const features = [
  {
    icon: FaShippingFast,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: FaHeadset,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: IoShieldCheckmarkOutline,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center py-10 md:px-24 my-10 md:my-24">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <PopupAnimation key={index}>
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="bg-black border-[16px] border-gray-300 p-4 rounded-full mb-4">
                <Icon className="text-white" size={48} />
              </div>
              <h2 className="font-bold text-lg mb-2">{feature.title}</h2>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </PopupAnimation>
        );
      })}
    </section>
  );
};

export default Features;
