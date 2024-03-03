"use client"
import Image from 'next/image';
import React from 'react';
import Printer from '../../public/images/printer/printer.png';
import styles from './screenfive.module.scss';

const Screenfive = () => {
  
  return (
    <>
    <div className={styles.aboutmain}>
      <div className={styles.screen}>
      <div className="row">
        <div className='col-1'></div>

        <div className='col-8 w-100' >
          <p style={{ "color": "white" , "fontSize":"30px" }} >Setup Failed- Cannon Printer Driver </p>
          <br />
          <p style={{ "color": "white" , "fontSize":"22" }} className='ms-2'> Cannon Printer Driver installation has filled 
          </p>
          <br />
          <p style={{ "color": "white" , "fontSize":"20px"}} className='mb-3'> ⚠️ Error Code: CNPRINT5677. 
          </p>
          <p style={{ "color": "white" , "fontSize":"22" }} className='ms-2'> Contact Cannon support to resolve this problem . 
          </p>
          <br />
            
            <button type="button"  className="btn rounded text-white border text-center border-white mt-5 mb-2 py-3 px-5 shadow" style={{  "width":"30%" }}>Call Support</button>
            <p style={{ "color": "white" , "fontSize":"22" }} className='ms-2'> Note: Do not attempt to retry the installation as it can damange the printer and void the product warranty. 
          </p>
          
        </div>

        <div className='col-1' style={{"marginLeft":"70%"}}>
          <Image src={Printer} alt={'Canon printer setup'} loading='lazy' width={400} height={400}/>
        </div>

        <div className='col-1'></div>
      </div>

      <div></div></div></div>
    </>
  );
};

export default Screenfive;
