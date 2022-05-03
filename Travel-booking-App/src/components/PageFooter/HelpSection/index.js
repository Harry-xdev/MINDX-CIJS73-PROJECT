import './help.css'
export const HelpSection = () => {
return <div>
    <div className='helpContainer'>
        <div className='helpDetail'>
            <div className='helpLabel'>
                Trợ giúp
            </div>
            <div className='helpInfo'>
                <div className='helpTitle'>Trung tâm trợ giúp</div>
                <div className='helpTitle'>Câu hỏi thường gặp</div>
                <div className='helpTitle'>Chính sách bảo mật</div>
                <div className='helpTitle'>Chính sách về cookie</div>
                <div className='helpTitle'>Điều khoản sử dụng</div>
            </div>
        </div>
        <div className='helpDetail'>
             <div className='helpLabel'>
                 Công ty
             </div>
             <div className='helpInfo'>
                 <div className='helpTitle'>Về chúng tôi</div>
                 <div className='helpTitle'>Tuyển dụng</div>
                 <div className='helpTitle'>Báo chí</div>
                 <div className='helpTitle'>Nhật ký mạng</div>
                 <div className='helpTitle'>PointsMAX</div>
             </div>
        </div>
        <div className='helpDetail'>
              <div className='helpLabel'>
                  Điểm du lịch
              </div>
              <div className='helpInfo'>
                   <div className='helpTitle'>Quốc gia</div>
                   <div className='helpTitle'>Thành phố</div>
              </div>
        </div>
        <div className='helpDetail'>
               <div className='helpLabel'>
                   Đối tác của chúng tôi
               </div>
               <div className='helpInfo'>
                     <div className='helpTitle'>Cổng thông tin đối tác</div>
                     <div className='helpTitle'>Partner Hub</div>
                     <div className='helpTitle'>Quảng cáo trên trang này</div>
                     <div className='helpTitle'>Đối tác liên kết</div>
                     <div className='helpTitle'>Đối tác kết nối</div>
               </div>
        </div>
        <div className='helpDetail'>
               <div className='helpLabel'>
                   Tải ứng dụng
                </div>
                <div className='helpInfo'>
                      <div className='helpTitle'>Ứng dụng iOS</div>
                      <div className='helpTitle'>Ứng dụng Android</div>
                </div>
        </div>
    </div>
</div>
}