import { BannerSection } from "../../PageHeader/BannerSection"
import { DiscountContainer } from "./DiscountSection"
import { Suggestion } from "./Suggestion"
import { VacationRentals } from "./VacationRentals"
import { UserSearchForm } from './UserSearchForm'


export const HomePage = () => {

    return (
        <div>
            <BannerSection />
            <UserSearchForm/>
            <DiscountContainer />
            <Suggestion />
            <VacationRentals />




        </div>
    )
}