import React from 'react';
import '../../css/Footer.css'

export default function Footer() {
    return (
        <div className="footer">
                <div class="row">
                    <h2>บริการพิเศษเฉพาะลูกค้าออนไลน์</h2>
                    <div class="col-sm-3">
                        <img src="/images/icon1.png" />
                        <h4>จัดส่งฟรี</h4>
                        <p>บริการจัดส่งแบบมาตรฐานฟรี สำหรับทุกคำสั่งซื้อ</p>
                    </div>
                    <div class="col-sm-3">
                        <img src="/images/icon2.png" />
                        <h4>บริการห่อของขวัญ</h4>
                        <p>บริการห่อของขวัญตามแบบฉบับของดิออร์ สำหรับทุกคำสั่งซื้อ</p>
                    </div>
                    <div class="col-sm-3">
                        <img src="/images/icon3.png" />
                        <h4>ผลิตภัณฑ์ดิออร์ขนาดทดลอง</h4>
                        <p>รับผลิตภัณฑ์ดิออร์ขนาดทดลองเพิ่มเติม สำหรับทุกคำสั่งซื้อ</p>
                    </div>
                    <div class="col-sm-3">
                        <img src="/images/icon4.png" />
                        <h4>บริการแกะสลักข้อความ</h4>
                        <p>สร้างสรรค์ของขวัญเป็นเอกลักษณ์ ด้วยการแกะสลักบนผลิตภัณฑ์</p>
                    </div>
                </div>
           



            <div className="footers">
                    <div class="row">
                        <div class="col-sm-6">
                            <h1>ข้อมูลเพิ่มเติม</h1>
                            <p>Dior Beauty Loyalty Program</p>
                            <p>ติดต่อฝ่ายบริการลูกค้า</p>
                            <p>การจัดส่งและคืนสินค้า</p>
                            <p>คำถามที่พบบ่อย</p>
                            <p>ข้อกำหนดและเงื่อนไขทางกฎหมาย</p>
                            <p>การคุ้มครองข้อมูลส่วนบุคคล</p>
                            <p>ข้อกำหนดในการใช้บริการ</p>
                            <p>นโยบายและข้อกำหนดการคืนสินค้า</p>
                        </div>

                        <div class="col-sm-6">
                            <h5>FOLLOW US</h5>
                            <div class="col">
                                <a href="https://www.facebook.com/Dior"> <img src="/images/fb.png" style={{ marginLeft: -200 }} /></a>
                                <a hrefLang="https://www.instagram.com/dior/"><img src="/images/ig1.png" /></a>
                                <a href="https://twitter.com/DIOR"><img src="/images/twit.png" /></a>
                                <a href="https://page.line.me/760sjvyc?openQrModal=true"><img src="/images/line1.png" /></a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    )
}
