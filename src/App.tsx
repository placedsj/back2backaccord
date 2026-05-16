/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BookOpen, FileText, Printer, ArrowUp, Gavel, Lock, FileCheck } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import AccordDocument from './components/AccordDocument';
import ChildrensBook from './components/ChildrensBook';
import ConsentOrder from './components/ConsentOrder';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [view, setView] = useState<'accord' | 'book' | 'consent'>('accord');

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
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 sm:p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-2xl max-w-5xl w-full rounded-sm overflow-hidden flex flex-col md:flex-row border border-slate-700"
        >
          {/* Confidentiality & Scripture Section */}
          <div className="bg-accord-navy p-8 md:p-12 md:w-3/5 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-5 text-white pointer-events-none">
              <BookOpen size={240} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <h1 className="font-serif text-3xl text-accord-gold mb-6 tracking-tight">Covenant of Confidentiality</h1>
              
              <div className="space-y-4 text-slate-200 text-[15px] leading-relaxed mb-10 font-light max-w-lg">
                <p>
                  This portal securely houses the private, structural foundation for the upbringing and life of Harper June Elizabeth Ryan.
                </p>
                <p>
                  Guided by truth and an unwavering commitment to Harper's paramount best interests, this document is shared under a strict mandate of confidentiality. It is intended solely for authorized pastoral review, designated counsel, and the parents involved.
                </p>
                <p>
                  By entering this password, you solemnly agree to hold these contents in trust and privacy, protecting the peace and future of this child. 
                </p>
              </div>

              <blockquote className="border-l-[3px] border-accord-gold pl-5 py-2 mt-4 bg-slate-900/40 p-4 rounded-r-md">
                <p className="text-slate-100 italic font-serif text-base leading-relaxed">
                  "Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."
                </p>
                <footer className="text-accord-gold text-xs mt-3 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-accord-gold"></span>
                  1 Corinthians 13:6-7
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Login Section */}
          <div className="bg-accord-cream p-8 md:p-12 md:w-2/5 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-white shadow-sm text-accord-gold rounded-full flex items-center justify-center mb-6">
              <Lock size={24} />
            </div>
            <h2 className="font-serif text-2xl text-accord-navy mb-2 tracking-tight">Authorized Access</h2>
            <p className="text-slate-500 mb-8 text-sm">Please enter the designated passcode to proceed.</p>
            
            <form onSubmit={handleLogin} className="space-y-4 w-full max-w-[280px] mx-auto">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-accord-border bg-white focus:outline-none focus:ring-1 focus:ring-accord-gold focus:border-accord-gold transition-colors text-center font-mono placeholder:font-sans placeholder:font-light"
                  placeholder="Enter password"
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm font-medium">Incorrect password. Access denied.</p>
              )}
              <button
                type="submit"
                className="w-full bg-accord-navy text-white px-6 py-3 font-medium hover:bg-accord-gold transition-colors duration-300 shadow-md flex items-center justify-center gap-2 mx-auto"
              >
                Enter Document
                <Lock size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none print:hidden">
        <div className="bg-slate-900/90 backdrop-blur-md rounded-full shadow-2xl p-1.5 flex gap-1 pointer-events-auto border border-slate-700/50">
          <button
            onClick={() => setView('accord')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              view === 'accord' 
                ? 'bg-accord-gold text-white shadow-lg' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Gavel size={16} />
            <span className="hidden sm:inline">The Accord</span>
          </button>
          
          <button
            onClick={() => setView('book')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              view === 'book' 
                ? 'bg-accord-gold text-white shadow-lg' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen size={16} />
            <span className="hidden sm:inline">Harper's Book</span>
          </button>

          <button
            onClick={() => setView('consent')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              view === 'consent' 
                ? 'bg-accord-gold text-white shadow-lg' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileCheck size={16} />
            <span className="hidden sm:inline">Consent Order</span>
          </button>

          <div className="w-px bg-slate-700/50 mx-1 my-2"></div>
          
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 text-slate-300 hover:text-white hover:bg-slate-800"
            title="Print Document"
          >
            <Printer size={16} />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </div>

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
            key="consent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ConsentOrder />
          </motion.div>
        )}
      </AnimatePresence>
      <Analytics />
    </div>
  );
}
