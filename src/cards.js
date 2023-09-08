import React from "react"


export default function Card({amount , checkouthandler}){

    return(
        <>

          <div className="reambursement"> 
          {/* <div className="text2">    
                <div className="reambursement1">hellow1500</div>
        <button>buy now</button> */}
        {/* </div> */}
        <div className="text2">
          <div className="reambursement2">hellow{amount}</div>
          <button onClick={()=>{checkouthandler(amount)}}>buy now</button>
          </div>
          </div>
        {/* hellow{props.amount} */}
        </>
    )
}