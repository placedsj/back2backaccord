/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BookOpen, FileText, Printer, ArrowUp, Gavel, Lock } from 'lucide-react';
import AccordDocument from './components/AccordDocument';
import ChildrensBook from './components/ChildrensBook';
import ReplyAffidavit from './components/ReplyAffidavit';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [view, setView] = useState<'accord' | 'book' | 'affidavit'>('accord');

  useEffect(() => {
    // Prevent right click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    // Prevent keyboard shortcuts for copy, print, save
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'p' || e.key === 's' || e.key === 'a')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'kings') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-accord-cream flex items-center justify-center p-4 select-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 shadow-xl border border-accord-border max-w-md w-full text-center rounded-sm"
        >
          <div className="w-16 h-16 bg-accord-navy text-accord-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={24} />
          </div>
          <h1 className="font-serif text-2xl text-accord-navy mb-2 tracking-tight">Protected Document</h1>
          <p className="text-slate-500 mb-8 text-sm">Please enter the password to view this agreement.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-accord-border bg-slate-50 focus:outline-none focus:ring-1 focus:ring-accord-gold focus:border-accord-gold transition-colors text-center font-mono placeholder:font-sans placeholder:font-light"
                placeholder="Enter password"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm font-medium">Incorrect password.</p>
            )}
            <button
              type="submit"
              className="w-full bg-accord-navy text-white px-6 py-3 font-medium hover:bg-accord-gold transition-colors duration-300 shadow-md"
            >
              Access Document
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen select-none selection:bg-transparent">
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
