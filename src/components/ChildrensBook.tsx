import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Heart, Star, Cloud, Printer, Book, Sun, Moon, MapPin, ShieldCheck, Users, Sparkles } from 'lucide-react';

interface ChildrensBookProps {
  onClose: () => void;
}

const PAGES = [
  {
    type: 'cover',
    title: 'Two Roofs, One Home',
    subtitle: 'A story about love, two houses, and the one promise that never changes.',
    metadata: '11:11 was our wish. On 11.12 it came true.'
  },
  {
    type: 'dedication',
    content: 'You were our 11:11 wish.',
    subcontent: 'On November 12, 2024, at 11:12, you came true. Both of your parents love you more than words can hold. This book is yours. Forever.'
  },
  {
    type: 'story-1',
    pageNumber: 1,
    title: 'Harper has two roofs.',
    content: 'One roof is where she cuddles, laughs, and plays. The other roof is where she rests, grows, and feels safe. Both roofs are Harper\'s — and she belongs in both of them.'
  },
  {
    type: 'story-2',
    pageNumber: 2,
    title: 'Home is bigger than one house.',
    content: 'Home is the feeling that follows Harper everywhere the grown-ups remember what matters most. Home is the sound of her name said gently. A warm bottle, clean pyjamas, and someone who always shows up.'
  },
  {
    type: 'story-3',
    pageNumber: 3,
    title: 'Harper never has to carry the grown-up stuff.',
    content: 'She does not have to fix anything. She does not have to choose sides. She does not have to hold messages or worries for the adults around her. Her only job is to be little, loved, and free to grow.'
  },
  {
    type: 'story-4',
    pageNumber: 4,
    title: 'Love can travel.',
    content: 'Love can travel in a car seat, through a winter coat, inside a storybook, and across a phone screen at bedtime. Even when Harper sleeps under a different roof, she is still held by the same love.'
  },
  {
    type: 'story-5',
    pageNumber: 5,
    title: 'Harper has a big circle.',
    content: 'At Mom\'s roof: Piper, Wyatt, Uncle Nick, Grampy, and Nanny. At Dad\'s roof: Luna the dog, Gram, Grammy, Aunt Rissa, Aunt Amber, Dan, and cousin Harleigh. Every one of them is part of Harper\'s circle.'
  },
  {
    type: 'story-6',
    pageNumber: 6,
    title: 'When Mom and Dad stand back-to-back...',
    content: 'Two parents facing each other see only the fight. Two parents standing back-to-back see all the things coming at their child — and they stop them together. They protect Harper together. That is the promise.'
  },
  {
    type: 'story-7',
    pageNumber: 7,
    title: 'Every single day, Harper is loved.',
    content: 'At the blue roof. At the pink roof. In the car. On the phone. At breakfast. At bedtime. No matter the day, no matter the weather, no matter what — Harper is loved. Every. Single. Day.'
  },
  {
    type: 'story-8',
    pageNumber: 8,
    title: 'Special days are doubled.',
    content: 'On Harper\'s birthday, everyone celebrates. At Christmas, Easter, and every big day of the year, Harper does not lose out — she gets double the love, double the cake, and double the joy. Special days at one roof do not cancel special days at the other. They add up.'
  },
  {
    type: 'story-9',
    pageNumber: 9,
    title: 'Harper already knows what she loves.',
    content: 'Bath time splashes. Her mobile spinning above her. Peek-a-boo at breakfast. Being sung to at 7:00 PM. Giggles that fill a whole room. Both roofs have every single one.'
  },
  {
    type: 'luna',
    title: 'This is Luna.',
    content: 'Luna lives at Dad\'s roof. She has four soft paws, a golden coat, and a tail that never stops wagging — especially for Harper. Luna does not care about grown-up things. She only cares about cuddles, walks, and being exactly where Harper is.'
  },
  {
    type: 'promise',
    title: 'The Promise',
    content: 'Two Roofs. One Home. One Promise.',
    subcontent: 'Because home is not just a building. Home is the love Harper\'s Mom and Dad have for her, everywhere she goes.'
  },
  {
    type: 'backcover',
    title: 'Two Roofs. One Home. One Promise.',
    metadata: 'Harper June Elizabeth Ryan · Born Nov 12, 2024'
  }
];

const HouseIllustration = ({ color }: { color: 'blue' | 'pink' }) => (
  <div className="relative w-48 h-48 drop-shadow-xl">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="180" r="80" fill="#f1f5f9" className="opacity-50" />
      <rect x="50" y="80" width="100" height="90" rx="4" fill={color === 'blue' ? '#3b82f6' : '#ec4899'} />
      <path d="M40 85 L100 20 L160 85 Z" fill={color === 'blue' ? '#1d4ed8' : '#be185d'} stroke="white" strokeWidth="2" />
      <rect x="125" y="40" width="15" height="30" fill={color === 'blue' ? '#2563eb' : '#db2777'} />
      <rect x="85" y="120" width="30" height="50" rx="2" fill={color === 'blue' ? '#1e3a8a' : '#831843'} />
      <circle cx="110" cy="145" r="3" fill="#fbbf24" />
      <rect x="60" y="100" width="20" height="20" rx="2" fill="white" className="opacity-90" />
      <rect x="120" y="100" width="20" height="20" rx="2" fill="white" className="opacity-90" />
      <motion.path 
        d="M100 55 C100 55 95 45 85 45 C75 45 75 60 100 75 C125 60 125 45 115 45 C105 45 100 55 100 55"
        fill="white"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  </div>
);

export default function ChildrensBook({ onClose }: ChildrensBookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const playPageTurnSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      
      // Paper flip duration
      const duration = 0.25; 
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      // Generate noise
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.7; // scaled down white noise
      }
      
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      
      // Filter the noise to sound more like paper
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + duration);
      
      // Envelope to shape it into a "swish"
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.05); // Attack
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration); // Release
      
      noiseSource.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      noiseSource.start();
      
      // Slight pitch shift / second layer for paper texture
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(100, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(40, ctx.currentTime + duration);
      
      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0, ctx.currentTime);
      oscGain.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 0.02);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
      
    } catch (e) {
      console.warn("AudioContext playback blocked or unsupported.");
    }
  };

  const next = () => {
    if (currentPage < PAGES.length - 1) {
      setDirection(1);
      setCurrentPage(prev => prev + 1);
      playPageTurnSound();
    }
  };

  const prev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(prev => prev - 1);
      playPageTurnSound();
    }
  };

  const setPage = (i: number) => {
    if (i !== currentPage) {
      setDirection(i > currentPage ? 1 : -1);
      setCurrentPage(i);
      playPageTurnSound();
    }
  };

  const page = PAGES[currentPage];

  const handlePrint = () => {
    window.focus();
    window.print();
  };

  return (
    <div className="h-screen w-screen bg-[#fdfaf5] flex flex-col font-sans overflow-hidden printable-area motion-container relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-10" />

      <div className="flex justify-between items-center p-6 bg-transparent shrink-0 z-20 no-print">
        <div className="flex items-center gap-2">
          <Book className="text-accord-gold" />
          <span className="font-serif italic text-lg text-slate-400 font-medium">Harper's Constitution</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrint}
            className="p-2 hover:bg-white/50 rounded-full text-slate-400 transition-all hover:text-accord-navy shadow-inner"
            title="Print Page"
          >
            <Printer size={20} />
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/50 rounded-full text-slate-400 transition-all hover:text-accord-navy shadow-inner"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center p-8 md:p-16 overflow-hidden" style={{ perspective: '2000px' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{ opacity: 0, rotateY: direction > 0 ? 45 : -45, x: direction > 0 ? 100 : -100, scale: 0.95, transformOrigin: direction > 0 ? 'right center' : 'left center' }}
            animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1, transformOrigin: 'center center' }}
            exit={{ opacity: 0, rotateY: direction > 0 ? -45 : 45, x: direction > 0 ? -100 : 100, scale: 0.95, transformOrigin: direction > 0 ? 'left center' : 'right center' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 text-center md:text-left z-20"
          >
            <div className="w-full md:w-1/2 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
              {page.type === 'cover' && (
                <div className="relative flex flex-col items-center gap-8">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4 items-end"
                  >
                    <HouseIllustration color="blue" />
                    <HouseIllustration color="pink" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="bg-accord-gold p-6 rounded-full shadow-2xl border-4 border-white">
                      <Heart className="text-white fill-white" size={48} />
                    </div>
                  </motion.div>
                </div>
              )}

              {page.type === 'dedication' && (
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="w-80 h-80 border-2 border-dashed border-accord-gold/30 rounded-full flex items-center justify-center"
                  >
                    {[...Array(12)].map((_, i) => (
                      <motion.div key={i} className="absolute" style={{ rotate: i * 30, translateY: -160 }}>
                        <Star size={16} className={`${i % 2 === 0 ? 'text-accord-gold' : 'text-blue-300'}`} fill="currentColor" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl font-serif text-accord-gold drop-shadow-lg">H</span>
                  </div>
                </div>
              )}

              {page.type === 'story-1' && (
                <div className="flex gap-8 relative">
                   <HouseIllustration color="blue" />
                   <div className="w-12" />
                   <HouseIllustration color="pink" />
                   <motion.div 
                     className="absolute bottom-0 left-1/2 -translate-x-1/2"
                     animate={{ y: [0, -5, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     <Users size={48} className="text-accord-gold" />
                   </motion.div>
                </div>
              )}

              {page.type === 'story-2' && (
                <div className="relative w-80 h-80 flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-accord-gold/20 rounded-full blur-3xl opacity-30" 
                  />
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    <Heart size={48} className="text-pink-400 fill-pink-100" />
                    <Moon size={48} className="text-blue-400 fill-blue-50" />
                    <Sun size={48} className="text-accord-gold fill-yellow-50" />
                    <Cloud size={48} className="text-slate-400 fill-slate-50" />
                  </div>
                </div>
              )}

              {page.type === 'story-3' && (
                <div className="relative w-full h-[400px]">
                  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
                     <div className="p-8 bg-slate-50 rounded-2xl border-4 border-dashed border-slate-200">
                        <ShieldCheck className="text-slate-300 mx-auto" size={100} />
                        <p className="text-slate-300 font-bold uppercase tracking-widest mt-4">Safe & Sound</p>
                     </div>
                  </motion.div>
                  {[...Array(6)].map((_, i) => (
                    <motion.div key={i} className="absolute" animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }} style={{ top: 50 + (i * 40), left: 20 + (i * 60) }}>
                      <Sparkles className="text-accord-gold/40" />
                    </motion.div>
                  ))}
                </div>
              )}

              {page.type === 'story-4' && (
                <div className="relative w-full h-40">
                  <div className="absolute inset-x-0 top-1/2 h-1 bg-dashed border-t-2 border-dashed border-accord-gold/20" />
                  <motion.div animate={{ x: [-200, 400] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute top-0">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-10 bg-blue-500 rounded-lg relative">
                        <div className="absolute -top-4 left-2 w-8 h-4 bg-blue-400 rounded-t-full" />
                        <div className="absolute bottom-[-4px] left-2 w-4 h-4 bg-slate-800 rounded-full" />
                        <div className="absolute bottom-[-4px] right-2 w-4 h-4 bg-slate-800 rounded-full" />
                      </div>
                      <Heart className="text-pink-400 mt-2" size={12} fill="currentColor" />
                    </div>
                  </motion.div>
                  <MapPin className="absolute right-0 top-1/2 -translate-y-1/2 text-accord-gold" size={32} />
                  <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 text-accord-navy" size={32} />
                </div>
              )}

              {page.type === 'story-6' && (
                <div className="relative flex items-center justify-center">
                  <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 8, repeat: Infinity }} className="relative z-10 flex gap-4">
                    <div className="w-24 h-48 bg-blue-400 rounded-t-full rounded-bl-3xl opacity-80" />
                    <div className="w-24 h-48 bg-pink-400 rounded-t-full rounded-br-3xl opacity-80" />
                  </motion.div>
                  <div className="absolute z-20">
                    <div className="w-16 h-16 bg-accord-gold rounded-full border-4 border-white flex items-center justify-center">
                       <Heart size={32} className="text-white fill-white" />
                    </div>
                  </div>
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-accord-gold/10 rounded-full scale-150 blur-2xl" />
                </div>
              )}

              {page.type === 'luna' && (
                <div className="relative flex flex-col items-center">
                  <div className="w-64 h-64 bg-yellow-400 rounded-full relative overflow-hidden group">
                     <div className="absolute bottom-0 inset-x-0 h-40 bg-yellow-500 rounded-t-[100px]" />
                     <div className="absolute top-16 left-4 w-12 h-20 bg-yellow-600 rounded-full -rotate-12" />
                     <div className="absolute top-16 right-4 w-12 h-20 bg-yellow-600 rounded-full rotate-12" />
                     <div className="absolute top-32 left-16 w-4 h-4 bg-slate-800 rounded-full" />
                     <div className="absolute top-32 right-16 w-4 h-4 bg-slate-800 rounded-full" />
                     <div className="absolute top-40 left-1/2 -translate-x-1/2 w-8 h-4 bg-slate-900 rounded-full" />
                  </div>
                  <motion.div animate={{ rotate: [0, 40, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-24 h-8 bg-yellow-500 rounded-full -mt-4 origin-left" />
                </div>
              )}

              {page.type === 'backcover' && (
                <div className="flex flex-col items-center gap-12">
                   <div className="flex gap-2">
                     <Heart className="text-pink-400" fill="currentColor" />
                     <Heart className="text-accord-gold" fill="currentColor" />
                     <Heart className="text-blue-400" fill="currentColor" />
                   </div>
                   <div className="h-px w-64 bg-accord-gold/30" />
                   <p className="font-serif italic text-accord-navy select-none">Fin.</p>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 bg-white/40 backdrop-blur-sm p-10 md:p-12 rounded-[40px] border border-white/60 shadow-xl self-stretch flex flex-col justify-center">
              {page.pageNumber && (
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accord-gold mb-6 block">
                  Page {page.pageNumber}
                </span>
              )}

              <h2 className={`text-4xl md:text-5xl font-bold text-accord-navy mb-8 leading-tight font-serif ${page.type === 'cover' ? 'text-6xl text-center md:text-center' : ''}`}>
                {page.title}
              </h2>
              
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                {page.content}
              </p>

              {page.subtitle && (
                <p className="mt-4 text-xl text-slate-400 italic font-serif">
                  {page.subtitle}
                </p>
              )}

              {page.subcontent && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10 p-6 bg-accord-cream/50 rounded-2xl border border-accord-gold/10">
                  <p className="text-lg italic text-accord-gold font-serif leading-relaxed">
                    {page.subcontent}
                  </p>
                </motion.div>
              )}

              {page.metadata && (
                <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">
                  {page.metadata}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-8 md:p-12 shrink-0 flex flex-col items-center gap-8 no-print z-30">
        <div className="flex items-center gap-8 md:gap-12 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-white/50">
          <button disabled={currentPage === 0} onClick={prev} className="p-3 rounded-full text-slate-400 hover:text-accord-navy hover:bg-slate-50 disabled:opacity-20 transition-all active:scale-95">
            <ChevronLeft size={32} />
          </button>
          
          <div className="flex gap-2">
            {PAGES.map((_, i) => (
              <button key={i} onClick={() => setPage(i)} className={`h-2 rounded-full transition-all duration-500 ${i === currentPage ? 'w-10 bg-accord-gold' : 'w-2 bg-slate-200 hover:bg-slate-300'}`} />
            ))}
          </div>

          <button disabled={currentPage === PAGES.length - 1} onClick={next} className="p-3 rounded-full text-slate-400 hover:text-accord-navy hover:bg-slate-50 disabled:opacity-20 transition-all active:scale-95">
            <ChevronRight size={32} />
          </button>
        </div>
        
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">
          Book Page · {currentPage + 1} of {PAGES.length}
        </p>
      </div>
    </div>
  );
}

