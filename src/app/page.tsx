import { WidgetPRs } from '../components/PRs/PRs';
import { WidgetMesocycles } from '../components/Mesocycles/Mesocyles';
import { WidgetStats } from '../components/Stats/Stats';

export default function Home() {
  return (
    <main className={`grid grid-areas-home grid-cols-home pt-4 h-full`}>
      <WidgetPRs />
      <WidgetMesocycles />
      <WidgetStats />
    </main>
  );
}
