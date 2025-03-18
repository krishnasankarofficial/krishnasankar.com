import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const greetings = [
  { language: 'Hindi', greeting: 'नमस्ते!' },
  { language: 'Malayalam', greeting: 'നമസ്കാരം!' },
  { language: 'Tamil', greeting: 'வணக்கம்!' },
  { language: 'Telugu', greeting: 'నమస్తే!' },
  { language: 'Kannada', greeting: 'ನಮಸ್ತೆ!' },
  { language: 'Bengali', greeting: 'নমস্কার!' },
  { language: 'Gujarati', greeting: 'નમસ્તે!' },
  { language: 'Punjabi', greeting: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ!' },
  { language: 'Odia', greeting: 'ନମସ୍କାର!' },
  { language: 'English', greeting: 'Hello!' },
  { language: 'Spanish', greeting: '¡Hola!' },
  { language: 'French', greeting: 'Bonjour!' },
  { language: 'German', greeting: 'Hallo!' },
  { language: 'Italian', greeting: 'Ciao!' },
  { language: 'Portugese', greeting: 'Olá!' },
  { language: 'Russian', greeting: 'Здравствуйте!' },
  { language: 'Japanese', greeting: 'こんにちは!' }, 
  { language: 'Chinese', greeting: '你好!' },
  { language: 'Arabic', greeting: 'السلام عليكم!' },
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
    <motion.div
      key={currentGreetingIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl lg:text-6xl font-semibold z-10 bg-gradient-to-b from-gray-700 to-black bg-clip-text text-transparent py-4 md:py-12"
      >
      <p>{greetings[currentGreetingIndex].greeting}</p>
    </motion.div>
  );
};

export default Greeting;
