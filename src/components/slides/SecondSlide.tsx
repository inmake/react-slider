import { motion } from "framer-motion";

function SecondSlide() {
  return (
    <div className="bg-cyan-200">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
      provident aliquid expedita nulla deleniti numquam cum asperiores
      voluptate. Accusantium sunt possimus harum eaque repellendus consequuntur
      similique delectus voluptas repellat aliquam. Rerum harum libero nostrum
      doloribus sit pariatur repellat. Culpa debitis impedit natus omnis odit
      amet, rem hic cumque, voluptas sint quasi a itaque rerum. Facilis officiis
      repudiandae asperiores iusto porro.

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

export default SecondSlide;
