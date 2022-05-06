import { BannerSection } from "./BannerSection"
import { DiscountContainer } from "./DiscountSection"
import { Suggestion } from "./Suggestion"
import { VacationRentals } from "./VacationRentals"
import { UserSearchForm } from './UserSearchForm'
import {CitySection} from "./CitySection"

export const HomePage = () => {

    return (
        <div>
            <BannerSection />
            {/* <UserSearchForm/> */}
            <DiscountContainer />
            <CitySection/>
            <Suggestion />
            <VacationRentals />




        </div>
    )
}