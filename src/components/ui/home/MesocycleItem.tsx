import { Mesocycle } from '../../interfaces';

const MesocyclesItem = ({ name, duration }: Mesocycle) => {
  return (
    <div className='border-b px-2 py-1 text-lg rounded-md border-slate-700 cursor-pointer'>
      <div className='font-bold'>{name}</div>
      <div className='flex justify-center'>
        {duration} {duration === 1 ? 'Mes' : 'Meses'}
      </div>
    </div>
  );
};

export { MesocyclesItem };
