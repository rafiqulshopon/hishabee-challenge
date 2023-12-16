import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
function App() {
  return (
    <div className='flex'>
      <div className='hidden md:flex mb-4 shadow-md rounded-lg'>
        <Sidebar />
      </div>
      <div className='flex-1'>
        <Header />
        <main>
          <MainContent />
        </main>
      </div>
    </div>
  );
}

export default App;
