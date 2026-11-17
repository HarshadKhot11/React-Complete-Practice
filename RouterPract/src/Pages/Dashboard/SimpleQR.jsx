import {QRCodeSVG} from 'qrcode.react';

export default function SimpleQR(){
    return <QRCodeSVG value="https://harshadkhot.online" size={180}/>;
}