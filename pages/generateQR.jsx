import React from 'react'
import QRCode from 'qrcode.react';

const generateQR = () => {
    const websiteUrl = 'https://northsouthtourstravels.com';

    return (
      <div className='flex flex-col gap-2 items-center justify-center mt-36'>
        {/* <h1>QR Code for Website</h1> */}
        <QRCode value={websiteUrl} />
        <p>{websiteUrl}</p>
      </div>
    );
}

export default generateQR