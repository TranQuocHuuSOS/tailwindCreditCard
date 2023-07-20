import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';
import { useEffect, useState } from 'react';
function App() {
  const [windownSize, setWindownSize]= useState({
    width: undefined,
    height: undefined,
  })
  const [isMobile, setMobile]=useState(false);


  useEffect(()=>{
      const handleSize=()=>{
        setWindownSize({
          width:window.innerWidth,
          height:window.innerHeight,
        });
      };
      window.addEventListener("resize", handleSize)
      handleSize();
      return()=>window.removeEventListener("resize", handleSize);
  },[]);


  useEffect(()=>{
    console.log(windownSize);
    if(windownSize.width<500){
      setMobile(true)
    }
    else{
      setMobile(false)
    }
  },[windownSize])


  return (
    <div className="text-xl overflow-y-auto overflow-x-hidden font-sora  h-screen pl-4 py-8 bg-gradient-to-b dark:from-purple-900   dark:to-purple-700 from-white to-purple-500 dark:text-white md:px-20 text-black">
      <NavBar isMobile={isMobile}/>
      <Slogan/>
      <Content/>
    </div>
  );
}
export default App;