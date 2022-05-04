import {useState} from 'react'
import {Outlet} from 'react-router-dom'
export * from './Hotel-Images-Header'
export * from './InformationComponent'
export * from './RatingSection'

export const HotelsDetailPage = () => {



    return (
        <div>
            Thông tin chi tiết khách sạn
            <Outlet/>
        </div>
    )
}



