import React from 'react';
import { Slide } from 'react-slideshow-image';
import './voucher.css'

const slideVoucherImages = [
    // {
    //     url: './Voucher-Images/sale10.jpg',
    //     id: 1
    // },
    {
        url: './Voucher-Images/giá combo.jpg',
        id: 2
    },
    {
        url: './Voucher-Images/sale 10.jpg',
        id: 3
    },
    {
        url: './Voucher-Images/sale 15.jpg',
        id: 4
    },
    {
        url: './Voucher-Images/sale 20.jpg',
        id: 5
    },
    {
        url: './Voucher-Images/tìm ưu đãi.jpg',
        id: 6
    },
];
export const Voucher = () => {
    return <div className="voucherContainer">
        <Slide className="slide">
            {slideVoucherImages.map((slideImage) => (
                <div className="each-slide" key={slideImage.id}>
                    <div>
                        <img id="voucherImg" src={require(`` + slideImage.url + ``)} />
                    </div>
                </div>
            ))}
        </Slide>
    </div>
}