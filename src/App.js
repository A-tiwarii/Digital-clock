import React,{useState} from 'react'
import './App.css';

const App=()=>{
  let time=new Date().toLocaleTimeString();
  const[cTime, setCTime]=useState(time);
  const[color, setColor] = useState();

  const UpdateTime=()=>{
    let time=new Date().toLocaleTimeString();
    let seconds = new Date().getSeconds();

    if(seconds%2 === 0){
      setColor('black');
    } else{
      setColor('white');
    }

  
    setCTime(time);
  };
  setInterval(UpdateTime,1000);



  return(
    <>
    <div style={{ backgroundColor: color }}>
    <h1 style={{fontSize:"50px",textAlign:"center",color:"red"}}>Digital Clock </h1>
    <div style={{height:"1000px"}} >
      <div style={{backgroundColor:"azure", width:"400px", height:"250px",marginLeft:"602px",  textAlign:"center"}}>
        
    <h1 style={{fontSize:"70px",textAlign:"center", paddingTop:"150px"}}>{cTime}</h1>
    </div>
    </div>
    </div>

    </>

  );
}

export default App;
