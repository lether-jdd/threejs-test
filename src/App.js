import './App.css';
import {useEffect,useRef, useState} from 'react'

function App() {
  const [rotate,setRotate] = useState(0)
  // useEffect(()=>{
  //   const timer = setTimeout(()=>{
  //     if(rotate >= 360){
  //       return setRotate(0) 
  //     }
  //     setRotate(rotate + 20)
  //   },500)
  //   return () => clearTimeout(timer)
  // })
  return (
    <div class="scene">
      {/* <div class="cube" style={{transform: `rotateX(${rotate}deg) rotateY(${rotate}deg)`}}>
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--top">top</div>
        <div class="cube__face cube__face--bottom">bottom</div>
      </div> */}
    </div>

  );
}

export default App;
