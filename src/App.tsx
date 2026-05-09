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
      {/* 
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 no-print flex flex-col items-center gap-4">
        ...
      </div> 
      */}

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
