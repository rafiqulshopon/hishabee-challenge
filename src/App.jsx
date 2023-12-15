import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
function App() {
  return (
    <div className='flex'>
      <Sidebar />
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
