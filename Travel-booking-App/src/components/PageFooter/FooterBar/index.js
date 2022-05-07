import './footer.css'
export const FooterBar = () => {
return <div className="footer">
    <div id='foot1'>
    Mọi nội dung tại đây © 2005 – 2022 Công ty TNHH Tư nhân XXX. Bảo Lưu Mọi Quyền.
    </div>
    <div>
        XXX.com là thành viên của Tập đoàn Bkcking Holdings, nhà cung cấp dịch vụ du lịch trực tuyến & các dịch vụ có liên quan hàng đầu thế giới.
    </div>
    <div className='footerPicCon'>
         <div>
             <img className='footerPic' src={require('./img/img1.png')}/> 
         </div>
         <div>
             <img className='footerPic'  src={require('./img/img2.jpg')}/> 
         </div>
         <div>
             <img className='footerPic'  src={require('./img/img3.png')}/> 
         </div>
         <div>
             <img className='footerPic'  src={require('./img/img4.png')}/> 
         </div>
    </div>
    <div id='foot3'>
    hk-acmweb-2006
    </div>
</div>
}