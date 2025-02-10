import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const greetings = [
  { language: 'English', greeting: 'Hello!' },
  { language: 'Hindi', greeting: 'नमस्ते!' },
  { language: 'Spanish', greeting: '¡Hola!' },
  { language: 'French', greeting: 'Bonjour!' },
  { language: 'German', greeting: 'Hallo!' },
  { language: 'Italian', greeting: 'Ciao!' },
  { language: 'Japanese', greeting: 'こんにちは!' }, 
  { language: 'Chinese', greeting: '你好!' },
];

const Greeting = () => {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 1000); // Change greeting every 1 second

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <motion.div
        key={currentGreetingIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-7xl md:text-5xl font-semibold z-10"
        >
        <p>{greetings[currentGreetingIndex].greeting}</p>
      </motion.div>
    </div>
  );
};

export default Greeting;
