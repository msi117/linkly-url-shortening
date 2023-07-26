import { useState } from 'react'
import './Links.scss'
import { storeData } from '../../data'
import axios from 'axios';


interface Data {
    urlId: string;
    originalUrl: string;
    shortUrl: string;
    clicks: number;
    date: string;
}

const Links =  () => {





  return (
    <>
    <div className='links-container'>
        <h3>Short Link</h3>
        <h3>Original Link</h3>
        <h3>QR Code</h3>
        <h3>Status Link</h3>
        <h3>Date Link</h3>
    </div>
    {/* {
        linksData.map(({short_link, original_link, qr_code,status,date}) => (
            <div key={original_link} className='links'>
                <p>{short_link}</p>
                <p>{original_link}</p>
                <p>{qr_code}</p>
                <p>{status}</p>
                <p>{date}</p>
            </div>
        ))
    } */}
    </>
  )
}

export default Links