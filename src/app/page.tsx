import { Overview, Table } from '@/components';
import { rows } from '@/mocks';

const Homepage = () => {
  return (
    <div className="pl-7 pr-[50px] pt-5 pb-11">
      <Overview />
      <Table products={rows} />
    </div>
  );
};

export default Homepage;
