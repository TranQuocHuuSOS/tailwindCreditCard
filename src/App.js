import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';
function App() {
  return (
    <div className="text-xl overflow-y-auto overflow-x-hidden font-sora text-white h-screen pl-4 py-8 bg-gradient-to-b from-purple-900  to-purple-700">
      <NavBar/>
      <Slogan/>
      <Content/>
    </div>
  );
}
export default App;