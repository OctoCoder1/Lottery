import { useState } from "react";
import LikeButton from './islike'

export default function Lottery(){
    let [randomNo , setRandonNo] = useState(null);
    const [digitSum, setDigitSum] = useState(0);
    let sum = 0;

     let randomdig = ()=>{
     let newNo = Math.floor(Math.random() * 900) + 100;
       let temp = newNo;
       for(let i=0 ;i<3 ;i++){
         let lsDigit = temp%10;
         temp=   Math.floor(temp/10);
         sum += lsDigit;
    }
    setRandonNo(newNo);
    setDigitSum(sum);
    console.log(sum);
    }
    return (
        <div>
             {digitSum == 15 ? <h1>Lottery "Congratulations you won"<LikeButton/></h1> : <h1>Lottery</h1>}
             <p>To win the Lottery, the sum of the numbers must equal 15.</p>
            <h3>Lottery Ticket = {randomNo}</h3>
            <button onClick={randomdig}>Get New Ticket</button>
        </div>
    )
}
