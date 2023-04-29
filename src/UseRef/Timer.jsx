import React,{useState} from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Timer = () => {
    // let id;
    const [timer, setTimer] = useState(0)

    // const [id, setId] = useState(null)

    let timerId = useRef(null);

    let h2Ref = useRef(null);
    let startbutton = useRef(null);


    useEffect(()=>{
        if(timer === 0){
              h2Ref.current.innerText = `value is ${timer}`
              h2Ref.current.style.color = "black";
        }else {
             h2Ref.current.innerText = `Timer started and value is ${timer}`;
             h2Ref.current.style.color = "green";
        }
    })

    const StartTimer = () => {
        startbutton.current.disabled = true;
      timerId.current =  setInterval(()=>{
            setTimer((prevTimer)=>prevTimer+1)
        },1000)
    }
    const StopTimer = () => {
        startbutton.current.disabled = false;
        h2Ref.current.style.color = "red";
        clearInterval(timerId.current);
    
    }
  return (
    <div style={{ backgroundColor: "violet", boxShadow: "0px 0px 10px black", width: "400px", height: "200px", margin: "100px auto", padding: "20px" }}>
      <h2 ref={h2Ref}>UseRef</h2>
      <h2>Timer is {timer}</h2>
      <button onClick={StartTimer} ref={startbutton}>Start</button>&nbsp;&nbsp;&nbsp;
      <button onClick={StopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
