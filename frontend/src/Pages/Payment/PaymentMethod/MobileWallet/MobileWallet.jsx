import React from 'react'
import "./MobileWallet.css"
const MobileWallet = () => {
  return (
    <>
    <div className='walletdiv'>
            <div className='upi_heading'  >
            <div>
                <p className='upi_content_head' >Mobile Wallet</p> 
                <p>Amount: ₹2380.0</p>
            </div>
            <div style={{marginTop:"30px"}}>
                <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png" alt="sdv" />
            </div>
        </div>
        <div className='upiPayment'>
  <img src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070" alt="" />
    <p>Paytm UPI</p>
    <input type="checkbox" className='inputcheck'/>
  </div>
  <div className='cardsubmmit'>
        <div className='check'>
        <input type="checkbox" />
        <p>Securely save card details</p>
        </div>
        
        <button >PAY ₹2380.0</button>
    </div>
    </div>
    </>
  )
}

export default MobileWallet