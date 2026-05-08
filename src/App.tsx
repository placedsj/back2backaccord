/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BookOpen, FileText, Printer, ArrowUp, Gavel } from 'lucide-react';
import AccordDocument from './components/AccordDocument';
import ChildrensBook from './components/ChildrensBook';
import ReplyAffidavit from './components/ReplyAffidavit';

export default function App() {
  const [view, setView] = useState<'accord' | 'book' | 'affidavit'>('accord');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.focus();
    window.print();
  };

  return (
    <div className="min-h-screen selection:bg-accord-gold/30">
      <AnimatePresence mode="wait">
        {view === 'accord' ? (
          <motion.div
            key="accord"
            className="motion-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AccordDocument />
          </motion.div>
        ) : view === 'book' ? (
          <motion.div
            key="book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white book-view motion-container"
          >
            <ChildrensBook onClose={() => setView('accord')} />
          </motion.div>
        ) : (
          <motion.div
            key="affidavit"
            className="motion-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ReplyAffidavit />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 no-print">
        <div className="flex items-center gap-2 bg-accord-navy text-white px-4 py-2 rounded-full shadow-2xl border border-white/10 backdrop-blur-md">
          <button 
            onClick={() => setView('accord')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${view === 'accord' ? 'bg-accord-gold text-accord-navy font-semibold' : 'hover:bg-white/10'}`}
          >
            <FileText size={18} />
            <span className="text-sm">Accord</span>
          </button>

          <button 
            onClick={() => setView('affidavit')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${view === 'affidavit' ? 'bg-accord-gold text-accord-navy font-semibold' : 'hover:bg-white/10'}`}
          >
            <Gavel size={18} />
            <span className="text-sm">Affidavit</span>
          </button>
          
          <button 
            onClick={() => setView('book')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${view === 'book' ? 'bg-accord-gold text-accord-navy font-semibold' : 'hover:bg-white/10'}`}
          >
            <BookOpen size={18} />
            <span className="text-sm">Book</span>
          </button>

          <div className="w-px h-6 bg-white/20 mx-1" />

          <button 
            onClick={handlePrint}
            className="p-2 hover:bg-white/10 rounded-full transition-all group"
            title="Print View"
          >
            <Printer size={18} />
          </button>
        </div>
      </div>

      {/* Floating Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && view === 'accord' && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-white border border-accord-border rounded-full shadow-lg text-accord-navy hover:bg-accord-cream transition-all z-40 no-print"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
