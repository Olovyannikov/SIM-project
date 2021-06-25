import s from './Collapse.module.scss';
import {useState} from "react";
import {chevronIcon} from "../icons/Icons";

interface CollapseModel {
    collapsed?: boolean,
    children: any,
    title: string,
    isMod?: boolean
}

export const Collapse = (props: CollapseModel) => {
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleClassCollapse = () => {
        if (isCollapsed) {
            return s.collapsed
        }
        return s.expanded
    }

    return (
        <div className={s.collapse}>
            <button className={`btn-reset ${s.btn} ${toggleClassCollapse()}`}
                    onClick={() => setIsCollapsed(!isCollapsed)}>
                <p className={s.title}>{props.title}</p>
                {chevronIcon()}
            </button>
            <div
                className={`${s.content} ${isCollapsed ? `${s.collapsed}` : `${s.expanded}`}`}
                aria-expanded={isCollapsed}
            >
                {props.children}
            </div>
        </div>
    );
};
