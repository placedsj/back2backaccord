import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addDays } from 'date-fns';

const HOLIDAYS = [
  { date: '2026-05-10', name: "Mother's Day" },
  { date: '2026-05-18', name: "Victoria Day" },
  { date: '2026-06-21', name: "Father's Day" },
  { date: '2026-07-01', name: "Canada Day" },
  { date: '2026-08-03', name: "New Brunswick Day" },
  { date: '2026-09-07', name: "Labour Day" },
  { date: '2026-10-12', name: "Thanksgiving" },
  { date: '2026-11-11', name: "Remembrance Day" },
  { date: '2026-11-12', name: "Harper's 2nd Birthday" },
  { date: '2026-12-15', name: "Mother's Birthday" },
  { date: '2026-12-24', name: "Christmas Eve" },
  { date: '2026-12-25', name: "Christmas Day" },
  { date: '2026-12-26', name: "Boxing Day" },
  { date: '2026-12-31', name: "New Year's Eve" },
];

const FIXED_MOTHER_DATES = [
  '05-10', // Mother's Day
  '11-12', // Harper's Birthday
  '12-15', // Mother's Birthday
  '12-24', // Christmas Eve
  '12-25', // Christmas Day
];

const FIXED_FATHER_DATES = [
  '06-21', // Father's Day
];

export default function Calendar() {
  const months = [4, 5, 6, 7, 8, 9, 10, 11]; // May to Dec (0-indexed)
  const currentYear = 2026;

  const getParentStatus = (date: Date) => {
    const formatted = format(date, 'MM-dd');
    const fullDate = format(date, 'yyyy-MM-dd');

    // Holiday Overrides
    if (FIXED_MOTHER_DATES.includes(formatted)) return 'mother-holiday';
    if (FIXED_FATHER_DATES.includes(formatted)) return 'father-holiday';
    
    // Rotating Holidays 2026 (Even Year)
    if (fullDate === '2026-10-12') return 'mother-holiday'; // Thanksgiving - Even Mother
    if (fullDate === '2026-07-01') return 'father-holiday'; // Canada Day - Even Father
    if (fullDate === '2026-05-18') return 'father-holiday'; // Victoria Day - Random choice for example or per agreement

    // Phase Logic
    const phase2Start = new Date(2026, 7, 9); // Aug 9 (Sunday)

    if (date < phase2Start) {
      // Phase 1: 90-Day Transition (Dad's Primary)
      // Visual approximation: weekends to Mom, weekdays to Dad
      const day = date.getDay();
      if (day === 5 || day === 6 || day === 0) return 'mother';
      return 'father';
    } else {
      // Phase 2 & 3: Week on / Week off (Starting Aug 9, Sunday)
      const diffWeeks = Math.floor((date.getTime() - phase2Start.getTime()) / (1000 * 60 * 60 * 24 * 7));
      // "Aug 9 First Phase 2 Handoff Sunday 6:00PM - Mom's first full week" -> Mom gets week 0
      return diffWeeks % 2 === 0 ? 'mother' : 'father';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 bg-white">
      {months.map((monthIndex) => {
        const start = startOfMonth(new Date(currentYear, monthIndex));
        const end = endOfMonth(start);
        const days = eachDayOfInterval({ start, end });
        const startDay = start.getDay();

        return (
          <div key={monthIndex} className="doc-calendar-month border border-accord-border p-4">
            <h4 className="font-serif text-lg text-center mb-4 uppercase tracking-widest border-b border-accord-border pb-2">
              {format(start, 'MMMM')}
            </h4>
            <div className="grid grid-cols-7 gap-1 text-[10px] font-mono text-center">
              {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(d => (
                <div key={d} className="text-slate-400 mb-2">{d}</div>
              ))}
              {Array.from({ length: startDay }).map((_, i) => <div key={`empty-${i}`} />)}
              {days.map((day) => {
                const status = getParentStatus(day);
                const holiday = HOLIDAYS.find(h => h.date === format(day, 'yyyy-MM-dd'));
                
                let bgColor = 'bg-transparent';
                let textColor = 'text-accord-navy';
                let ring = '';

                if (status === 'father') bgColor = 'bg-blue-100';
                if (status === 'mother') bgColor = 'bg-pink-100';
                if (status === 'father-holiday') { bgColor = 'bg-blue-600'; textColor = 'text-white'; ring = 'ring-2 ring-offset-1 ring-accord-gold'; }
                if (status === 'mother-holiday') { bgColor = 'bg-pink-600'; textColor = 'text-white'; ring = 'ring-2 ring-offset-1 ring-accord-gold'; }

                return (
                  <div
                    key={day.toISOString()}
                    className={`aspect-square flex items-center justify-center rounded-sm relative group cursor-help transition-all ${bgColor} ${textColor} ${ring}`}
                    title={holiday?.name}
                  >
                    {format(day, 'd')}
                    {holiday && (
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accord-gold rounded-full" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
