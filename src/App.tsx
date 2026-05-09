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
    </div>
  );
}
