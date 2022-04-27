import "./App.sass";
import { m, motion, Variants } from "framer-motion";

function App() {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className="App">
      <motion.ul
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
      >
        <motion.li className="card-item" variants={cardVariants}>
          card-item
        </motion.li>
        <motion.li className="card-item" variants={cardVariants}>
          card-item
        </motion.li>
        <motion.li className="card-item" variants={cardVariants}>
          card-item
        </motion.li>
        <motion.li className="card-item" variants={cardVariants}>
          card-item
        </motion.li>
        <motion.li className="card-item" variants={cardVariants}>
          card-item
        </motion.li>
        <motion.li className="card-item" variants={cardVariants}>
          card-item
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default App;
