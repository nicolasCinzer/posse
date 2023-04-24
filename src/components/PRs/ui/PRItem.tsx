import { PR } from '../interfaces';

const PRItem = ({ excersice, reps, weight, series, unit }: PR) => {
  return (
    <div className='grid grid-areas-prs border-b border-slate-700 rounded-sm px-2 py-1 w-1/2'>
      <div className='grid-in-excersice font-bold flex justify-center pb-1'>{excersice}</div>
      <div className='grid-in-times pl-1'>
        {reps} x {series}
      </div>
      <div className='grid-in-lift flex justify-end pr-1'>
        {weight}
        {unit}
      </div>
    </div>
  );
};

export { PRItem };
