import React from 'react'
import QRCode from 'qrcode.react';

const generateQR = () => {
    const websiteUrl = 'https://northsouthtourstravels.com';

    return (
      <div className='flex flex-col gap-2 items-center justify-center mt-36 text-blue-100'>
        {/* <h1>QR Code for Website</h1> */}
        <QRCode value={websiteUrl} bgColor="black" fgColor='#ade6d8' />
        <p>{websiteUrl}</p>
      </div>
    );
}

export default generateQR