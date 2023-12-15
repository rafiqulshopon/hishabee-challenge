import RevenueCard from './widgets/RevenueCard';
import SubscriptionsCard from './widgets/SubscriptionsCard';
import SalesCard from './widgets/SalesCard';
import ActiveUsersCard from './widgets/ActiveUsersCard';

const MainContent = () => {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <RevenueCard />
        <SubscriptionsCard />
        <SalesCard />
        <ActiveUsersCard />
      </div>
    </div>
  );
};

export default MainContent;
