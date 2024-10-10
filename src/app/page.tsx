import { Overview } from '@/components';
import Dashboard from '@/components/Dashboard';

const Homepage = () => {
  return (
    <div className="pl-7 pr-[50px] pt-5 pb-11">
      <Overview />
      <Dashboard />
    </div>
  );
};

export default Homepage;
