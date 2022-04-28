import { BannerSection } from "../../PageHeader/BannerSection"
import { DiscountContainer } from "./DiscountSection"
import { Suggestion } from "./Suggestion"
import { VacationRentals } from "./VacationRentals"



export const HomePage = () => {

    return (
        <div>
            <BannerSection />
            <DiscountContainer />
            <Suggestion />
            <VacationRentals />




        </div>
    )
}