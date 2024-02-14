import { motion } from "framer-motion";

type ChipProps = {
    text: string;
    selected: string;
    setSelected: () => void;
  };
  
export  const Chip = ({ text, selected, setSelected }: ChipProps) => {
    return (
      <button
        onClick={setSelected}
        className={`${
          selected ? 'text-black' : 'hover:bg-gray-300'
        } text-lg transition-colors px-6 py-2.5 rounded-lg relative font-semibold`}
      >
        <span className="relative z-10">{text}</span>
        {selected === text && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: 'spring', duration: 0.5 }}
            className="absolute inset-0 z-0 bg-white rounded-lg"
          ></motion.span>
        )}
      </button>
    );
};
  