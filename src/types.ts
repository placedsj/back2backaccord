export type SectionID = 
  | 'cover' 
  | 'preliminary' 
  | 'part1' 
  | 'part2' 
  | 'part3' 
  | 'part4' 
  | 'part5' 
  | 'part6' 
  | 'part7' 
  | 'part8' 
  | 'part9' 
  | 'part10' 
  | 'part11' 
  | 'summary' 
  | 'appendices' 
  | 'calendar' 
  | 'execution';

export interface NavSection {
  id: SectionID;
  label: string;
  sublabel?: string;
}

export interface CalendarDay {
  date: Date;
  isFatherDay: boolean;
  holiday?: string;
  isTransitionDay?: boolean;
}
