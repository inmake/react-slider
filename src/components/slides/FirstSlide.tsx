import { motion } from "framer-motion";

function FirstSlide() {
  return (
    <div className="bg-red-200">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero et ea
      laborum! Sequi facere voluptas repellendus perspiciatis tenetur voluptates
      beatae fugit asperiores laborum aperiam quae, qui quis? Temporibus, animi
      mollitia.
      <motion.div
        initial={{ opacity: 0, translateY: 64 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ amount: "all" }}
        transition={{ duration: 1, ease: [0.58, 0.12, 0.27, 0.98] }}
        className="flex flex-col gap-1"
      >
        <p className="font-medium xl:text-xl text-base font-gilroy">123</p>
        <p className="xl:text-sm text-xs">qwe</p>
      </motion.div>
    </div>
  );
}

export default FirstSlide;
