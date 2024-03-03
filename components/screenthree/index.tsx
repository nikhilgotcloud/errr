"use client"
import Image from 'next/image';
import React from 'react';
import Printer from '../../public/images/printer/printer.png';
import { useRouter } from 'next/navigation';
import styles from './screenthree.module.scss';


const Screenthree = () => {
  const router=useRouter();
  const handleClick=()=>{
    router.push('/cannon-software-download')
  }
  
  return (
    <>
    <div className={styles.aboutmain}>
      <div className={styles.screen}>
      <div className="row">
        <div className='col-1'></div>

        <div className='col-lg-8 w-100' >
          <p style={{ "color": "white" , "fontSize":"30px" }} className='mb-1'>Kindly verify the below details</p>
          <br />

          <div className="col-12 form-group " >
              <input type="text" className="form-control p-3 rounded mb-3" placeholder="Your Full Name " required style={{"width":"120%"}}/>
            </div>
        <br />
        <div className="col-12 form-group " >
              <input type="email" className="form-control p-3 rounded mb-3" placeholder="Your Email "  required  style={{"width":"120%"}}/>
            </div>
            <br />
            <div className="col-12 form-group " >
              <input type="number" className="form-control p-3 rounded mb-3" placeholder="Your Contact No. " required  style={{"width":"120%"}} />
            </div>
            
            <button type="button" onClick={handleClick} className="btn rounded bg-white border border-white mt-5 py-3 px-5 shadow" style={{ "color": "blue" , "width":"30%" }}>Next</button>
          
          
        </div>

        <div className='col-1' style={{"marginLeft":"60%"}}>
          <Image src={Printer} alt={'Canon printer setup'} loading='lazy' width={400} height={400}/>
        </div>

        <div className='col-1'></div>
      </div>

      <div></div></div></div>
    </>
  );
};

export default Screenthree;
