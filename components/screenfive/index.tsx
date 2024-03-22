/* eslint-disable @next/next/no-img-element */
"use client"
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import Printer from '../../public/images/printer/printer.png';
import styles from './screenfive.module.scss';


const Screenfive = () => {
  const router = useRouter();
  const handleclick = () => {
    router.push('https://tawk.to/chat/6427da434247f20fefe93064/1gstqp6p9')
  }
  return (
    <>
      <div className={styles.aboutmain}>
        <div className={styles.screen}>
          <div className="row">
            <div className='col-1'></div>

            <div className='col-8 w-100' >
              <p style={{ "color": "white", "fontSize": "30px" }} >⚠️ Fatal error occured during installation </p>
              <br />
              <p style={{ "color": "white", "fontSize": "22" }} className='ms-1'>Canon Printer Driver installation has failed. ⓘ
              </p>
              <br />
              <p style={{ "color": "white", "fontSize": "20px" }} className='mb-3'>🚫 Printer driver installation has been failed due to fatal error “C0000022” preventing <br /> product driver installation.
              </p>
              <p style={{ "color": "white", "fontSize": "22" }} className='ms-1'><b>Please Contact Canon Customer Support For Further Assistance !</b>
              </p>
              <br />
              <button type="button" onClick={handleclick} className="btn rounded  border text-warning  border-white mt-5 mb-2 py-3 px-4 shadow " style={{ "width": "80%","fontSize":"17px" ,"backgroundColor":"white", "color":"red"}}> <b>Chat Now</b></button> <br /> 
              <button type="button" className="btn rounded  border text-center border-white mt-5 mb-2 py-3 px-4 shadow"
                style={{ "width": "40%" ,"backgroundColor":"white", "color":"red"}}>
                <div style={{ "display": "flex", "alignItems": "center" }}>
                  <img src="https://flagcdn.com/us.svg" alt='' width={20} height={20} style={{ "marginRight": "10px" }} />
                  <span style={{"fontSize":"17px"}}> <b>✆ +1-888-276-3805</b></span>
                </div>
                </button>

              <button type="button" className="btn rounded  border text-center border-white mt-5 mb-2 py-3 px-4 shadow ms-2"
                style={{ "width": "40%", "backgroundColor":"white", "color":"red" }}> 
                <div style={{ "display": "flex", "alignItems": "center" }}>
                  <img src="https://flagcdn.com/gb.svg" alt='' width={20} height={20} style={{ "marginRight": "10px" }} />
                  <span style={{"fontSize":"17px"}}><b>✆ +44 20 3239 0302</b> </span>
                </div>
                </button>

              
              <br /><br />

              <p style={{ "color": "white", "fontSize": "22" }} className='ms-2'>Note: Do not attempt to retry the installation as it can damange the printer and void the product warranty.
              </p>

            </div>

            <div className='col-1' style={{ "marginLeft": "70%" }}>
              <Image src={Printer} alt={'Canon printer setup'} loading='lazy' width={400} height={400} />
            </div>

            <div className='col-1'></div>
          </div>

          <div></div></div></div>
    </>
  );
};

export default Screenfive;
