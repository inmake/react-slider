import { motion } from "framer-motion";

function ThirdSlide() {
  return (
    <div>
      ThirdSlide{" "}
      <motion.div
        initial={{ opacity: 0, translateY: 64 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ amount: "all" }}
        transition={{ duration: 1, ease: [0.58, 0.12, 0.27, 0.98] }}
        className="flex flex-col gap-1"
      >
        <p className="font-medium xl:text-xl text-base font-gilroy">123</p>
        <p className="xl:text-sm text-xs">qweqwe</p>
      </motion.div>
    </div>
  );
}

export default ThirdSlide;
