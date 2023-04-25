interface Navbar {
  label: string;
}

interface PR {
  id: number;
  exercise: string;
  reps: number;
  series: number;
  weight: number;
  unit: 'LBs' | 'KGs';
  comments?: string;
}

interface Mesocycle {
  id: number;
  name: string;
  duration: number;
}

export type { Navbar, PR, Mesocycle };
