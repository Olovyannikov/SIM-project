import { MainInfo } from "./blocks/mainInfo/MainInfo";
import { SimCards } from "./blocks/simCards/SimCards";
import { Accordion } from "./blocks/accordion/Accordion";

export const Cabinet = () => {

    return (
        <div className='Cabinet'>
            <MainInfo />
            <SimCards />
            <Accordion />
        </div>
    )
}
