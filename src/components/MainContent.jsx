import RevenueCard from './widgets/RevenueCard';
import SubscriptionsCard from './widgets/SubscriptionsCard';
import SalesCard from './widgets/SalesCard';
import ActiveUsersCard from './widgets/ActiveUsersCard';
import BarChartComponent from './charts/BarChartComponent';
import PieChartComponent from './charts/PieChartComponent';
import RecentSalesList from './lists/RecentSalesList';
import TasksList from './lists/TasksList';
import { salesData, tasksData } from './helpers';

const MainContent = () => {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4'>
        <RevenueCard />
        <SubscriptionsCard />
        <SalesCard />
        <ActiveUsersCard />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='p-4 bg-white rounded-lg shadow-md'>
          <BarChartComponent />
        </div>
        <div className='p-4 bg-white rounded-lg shadow-md'>
          <PieChartComponent />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='p-4 mt-2 bg-white rounded-lg shadow-md'>
          <RecentSalesList salesData={salesData} />
        </div>
        <div className='p-4 mt-2 bg-white rounded-lg shadow-md'>
          <TasksList tasksData={tasksData} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
