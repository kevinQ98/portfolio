import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* {`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} */}
      {/* absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-sm bg-[#0072c6]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Desarrollo de software a{" "}
            <span className="text-[#0072c6]">medida.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}></p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center">
        <a href="#acerca">
          <div className="w-[35px] h-[55px] rounded-xl border-4 border-gray-100 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#0072c6] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
