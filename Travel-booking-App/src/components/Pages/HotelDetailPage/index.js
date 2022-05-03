import {useState} from 'react'
import {Outlet} from 'react-router-dom'
export * from './Hotel-Images-Header'
export * from './InformationComponent'
export * from './RatingSection'

export const HotelsDetailPage = () => {



    return (
        <div>
            hotel details
            <Outlet/>
        </div>
    )
}



