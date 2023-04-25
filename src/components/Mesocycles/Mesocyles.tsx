import { MesocyclesItem } from '../ui/home/MesocycleItem';
import { Mesocycle } from '../interfaces';

const mesocycles: Mesocycle[] = [
  { id: 1, name: 'Strenght Focus', duration: 4 },
  { id: 2, name: 'Hypertrophy Chain by PR', duration: 6 },
  { id: 3, name: 'Close to Failure', duration: 1 },
  { id: 4, name: 'Deload Summer', duration: 8 },
];

const WidgetMesocycles = () => {
  return (
    <div className='grid-in-mc'>
      <h1 className='flex justify-center font-bold '>
        <div className='pt-2 px-2 border-b border-slate-700 rounded-md text-lg'>Mesocycles</div>
      </h1>
      <div className='flex gap-4 px-8 py-4'>
        {mesocycles.map(({ id, name, duration }) => (
          <MesocyclesItem
            key={id}
            id={id}
            name={name}
            duration={duration}
          />
        ))}
      </div>
      
    </div>
  );
};

export { WidgetMesocycles };
