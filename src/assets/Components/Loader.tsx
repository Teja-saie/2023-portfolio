import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col justify-center items-center">
      <motion.div
        className="relative"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-24 h-24"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="#61dafb"
            strokeWidth="8"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset="0"
            animate={{
              strokeDashoffset: [251.2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </motion.div>
      <motion.p
        className="text-white text-xl mt-6"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default PageLoader;
