import { motion } from 'framer-motion';
import Image from 'next/image';

const SpinningImage = () => {
  return (
    <motion.div
      whileHover={{ rotate: 360 }} // Animation property for rotation on hover
      transition={{ duration: 0.3 }} // Animation duration for hover
    >
      <Image
        alt={"Login Image"}
        objectFit={"cover"}
        src={"/Esvin Ruiz -3233-fotor-20231205231454.png"}
        width={450}
        height={195}
        layout="contain"
      />
    </motion.div>
  );
};

export default SpinningImage;
