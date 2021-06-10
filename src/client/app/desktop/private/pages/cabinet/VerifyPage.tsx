import {MainInfo} from "./blocks/mainInfo/MainInfo";
import {SimCards} from "./blocks/simCards/SimCards";
import {Accordion} from "./blocks/accordion/Accordion";
import {MainLayout} from "../../../../components/mainLayout/MainLayout";

export const VerifyPage = () => {
    return (
        <MainLayout>
            <MainInfo/>
            <SimCards/>
            <Accordion/>
        </MainLayout>
    )
}