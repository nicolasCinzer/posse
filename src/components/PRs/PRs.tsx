import { PRItem } from './ui/PRItem';
import { PR } from './interfaces';

const currentPRs: PR[] = [
  { excersice: 'Bench Press', reps: 1, series: 1, weight: 190, unit: 'LBs' },
  { excersice: 'Bench Press', reps: 1, series: 1, weight: 190, unit: 'LBs' },
  { excersice: 'Bench Press', reps: 1, series: 1, weight: 190, unit: 'LBs' },
  { excersice: 'Bench Press', reps: 1, series: 1, weight: 190, unit: 'LBs' },
];

const WidgetPRs = () => {
  return (
    <div className='grid-in-prs gap-4 flex flex-col items-center border-r border-slate-700'>
      <h1 className='font-bold text-lg pt-2 px-2 border-b rounded-sm border-slate-700'>PRs</h1>
      {currentPRs.map(pr => (
        <PRItem
          key={pr.excersice}
          excersice={pr.excersice}
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
