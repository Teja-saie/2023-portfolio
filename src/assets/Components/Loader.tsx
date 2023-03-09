import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-20 h-20"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke="#fff"
        strokeWidth="8"
        strokeDasharray="62.8"
        strokeDashoffset="62.8"
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}

      />
    </motion.svg>
    <p className="text-white ml-10">Loading...</p>
    </div>
  );
};

export default PageLoader;
