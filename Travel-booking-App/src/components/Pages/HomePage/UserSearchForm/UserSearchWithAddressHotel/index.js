// trang render thông tin (list Khách sạn ) lọc theo từng vùng / khu vực sau khi click chọn khu vực ở Home Page
// City 's Details page
// hiện list các ks cùng khu vực
import {CityDetail} from './City Details'
import {Outlet} from 'react-router-dom'
export const CityPage = () => {

    return (
        <div>
           
            <Outlet/>
        </div>
    )
}