import s from './Settings.module.scss';
import { PasswordForm } from "./passwordForm/PasswordForm";
import { EmailForm } from "./emailForm/EmailForm";
import { Collapse } from "../../../../../../components/collapse/Collapse";


export const Settings = () => {

    return (
        <Collapse collapsed={true} title='Настройки входа'>
            <section className={s.settings}>
                <PasswordForm />
                <EmailForm />
            </section>
        </Collapse>
    )
}
