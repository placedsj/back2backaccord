import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Heart, Star, Cloud, Printer, Book } from 'lucide-react';

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
    type: 'story',
    pageNumber: 1,
    title: 'Harper has two roofs.',
    content: 'One roof is where she cuddles, laughs, and plays. The other roof is where she rests, grows, and feels safe. Both roofs are Harper\'s — and she belongs in both of them.'
  },
  {
    type: 'story',
    pageNumber: 2,
    title: 'Home is bigger than one house.',
    content: 'Home is the feeling that follows Harper everywhere the grown-ups remember what matters most. Home is the sound of her name said gently. A warm bottle, clean pyjamas, and someone who always shows up.'
  },
  {
    type: 'story',
    pageNumber: 3,
    title: 'Harper never has to carry the grown-up stuff.',
    content: 'She does not have to fix anything. She does not have to choose sides. She does not have to hold messages or worries for the adults around her. Her only job is to be little, loved, and free to grow.'
  },
  {
    type: 'story',
    pageNumber: 4,
    title: 'Love can travel.',
    content: 'Love can travel in a car seat, through a winter coat, inside a storybook, and across a phone screen at bedtime. Even when Harper sleeps under a different roof, she is still held by the same love.'
  },
  {
    type: 'story',
    pageNumber: 5,
    title: 'Harper has a big circle.',
    content: 'At Mom\'s roof: Piper, Wyatt, Uncle Nick, Grampy, and Nanny. At Dad\'s roof: Luna the dog, Gram, Grammy, Aunt Rissa, Aunt Amber, Dan, and cousin Harleigh. Every one of them is part of Harper\'s circle.'
  },
  {
    type: 'story',
    pageNumber: 6,
    title: 'When Mom and Dad stand back-to-back, they protect Harper together.',
    content: 'Two parents facing each other see only the fight. Two parents standing back-to-back see all the things coming at their child — and they stop them together. That is the promise.'
  },
  {
    type: 'story',
    pageNumber: 7,
    title: 'Every single day, Harper is loved.',
    content: 'At the blue roof. At the pink roof. In the car. On the phone. At breakfast. At bedtime. No matter the day, no matter the weather, no matter what — Harper is loved. Every. Single. Day.'
  },
  {
    type: 'promise',
    title: 'The Promise',
    content: 'Two Roofs. One Home. One Promise.',
    subcontent: 'Because home is not just a building. Home is the love Harper\'s Mom and Dad have for her, everywhere she goes.'
  },
  {
    type: 'luna',
    title: 'This is Luna.',
    content: 'Luna lives at Dad\'s roof. She has four soft paws, a golden coat, and a tail that never stops wagging — especially for Harper. Luna does not care about grown-up things. She only cares about cuddles, walks, and being exactly where Harper is.'
  },
  {
    type: 'backcover',
    title: 'Two Roofs. One Home. One Promise.',
    metadata: 'Harper June Elizabeth Ryan · Born Nov 12, 2024'
  }
];

export default function ChildrensBook({ onClose }: ChildrensBookProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const next = () => setCurrentPage(prev => Math.min(prev + 1, PAGES.length - 1));
  const prev = () => setCurrentPage(prev => Math.max(prev - 1, 0));

  const page = PAGES[currentPage];

  const handlePrint = () => {
    window.focus();
    window.print();
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col font-sans overflow-hidden printable-area motion-container">
      {/* Header toolbar */}
      <div className="flex justify-between items-center p-6 bg-white shrink-0 z-20 no-print">
        <div className="flex items-center gap-2">
          <Book className="text-accord-gold" />
          <span className="font-serif italic text-lg text-slate-400 font-medium">Two Roofs, One Home</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrint}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-all hover:text-accord-navy"
            title="Print Page"
          >
            <Printer size={20} />
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-all hover:text-accord-navy"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Main Page Area */}
      <div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="max-w-4xl w-full text-center"
          >
            {/* Visual elements based on page type */}
            <div className="mb-12 flex justify-center gap-8 relative">
              {currentPage === 0 && (
                <>
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative"
                  >
                    <div className="w-40 h-40 bg-blue-500 rounded-sm relative overflow-hidden">
                      <div className="absolute top-0 right-4 w-8 h-12 bg-blue-400" /> {/* Chimney */}
                      <div className="absolute -top-10 -left-10 w-60 h-20 bg-blue-600 rotate-45" /> {/* Roof */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-blue-900 rounded-t-sm" />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-blue-500 font-bold text-sm tracking-widest uppercase">Dad's Roof</span>
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center self-center"
                  >
                    <Heart className="text-accord-gold fill-accord-gold" size={64} />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="relative"
                  >
                    <div className="w-40 h-40 bg-pink-500 rounded-sm relative overflow-hidden">
                      <div className="absolute top-0 left-4 w-8 h-12 bg-pink-400" />
                      <div className="absolute -top-10 -right-10 w-60 h-20 bg-pink-600 -rotate-45" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-pink-900 rounded-t-sm" />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-pink-500 font-bold text-sm tracking-widest uppercase">Mom's Roof</span>
                  </motion.div>
                </>
              )}

              {page.type === 'dedication' && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="flex items-center justify-center p-12 bg-accord-cream rounded-full border-4 border-dashed border-accord-gold/30"
                >
                  <span className="text-8xl font-serif text-accord-gold">H</span>
                </motion.div>
              )}

              {page.type === 'story' && (
                <div className="flex gap-4">
                  <Star className="text-accord-gold animate-pulse" />
                  <Cloud className="text-blue-200 animate-bounce" />
                  <Star className="text-accord-gold animate-pulse delay-75" />
                </div>
              )}
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-accord-navy mb-8 leading-tight">
              {page.title}
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {page.content}
            </p>
            {page.subcontent && (
              <p className="mt-8 text-lg italic text-accord-gold font-serif">
                {page.subcontent}
              </p>
            )}
            {page.metadata && (
              <p className="mt-12 text-sm uppercase tracking-[0.3em] text-slate-300">
                {page.metadata}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="p-12 shrink-0 flex flex-col items-center gap-8 no-print">
        <div className="flex items-center gap-12">
          <button 
            disabled={currentPage === 0}
            onClick={prev}
            className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-accord-navy hover:bg-slate-50 disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="flex gap-2">
            {PAGES.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all ${i === currentPage ? 'w-8 bg-accord-gold' : 'w-2 bg-slate-200'}`} 
              />
            ))}
          </div>

          <button 
            disabled={currentPage === PAGES.length - 1}
            onClick={next}
            className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-accord-navy hover:bg-slate-50 disabled:opacity-30 transition-all"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        
        <p className="text-sm font-mono text-slate-300 uppercase tracking-widest">
          Page {currentPage + 1} of {PAGES.length}
        </p>
      </div>
    </div>
  );
}
