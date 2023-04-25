import { PRItem } from '../ui/home/PRItem';
import { PR } from '../interfaces/index';

const currentPRs: PR[] = [
  { id: 1, exercise: 'Bench Press', reps: 1, series: 1, weight: 190, unit: 'LBs' },
  { id: 2, exercise: 'Bench Press', reps: 1, series: 1, weight: 190, unit: 'LBs' },
  { id: 3, exercise: 'Bench Press', reps: 1, series: 1, weight: 190, unit: 'LBs' },
  { id: 4, exercise: 'Bench Press', reps: 1, series: 1, weight: 190, unit: 'LBs' },
];

const WidgetPRs = () => {
  return (
    <div className='grid-in-prs gap-4 flex flex-col items-center border-r border-slate-700'>
      <h1 className='font-bold text-lg pt-2 px-2 border-b rounded-md border-slate-700'>PRs</h1>
      {currentPRs.map(pr => (
        <PRItem
          key={pr.id}
          id={pr.id}
          exercise={pr.exercise}
          reps={pr.reps}
          series={pr.series}
          weight={pr.weight}
          unit={pr.unit}
        />
      ))}
    </div>
  );
};

export { WidgetPRs };
