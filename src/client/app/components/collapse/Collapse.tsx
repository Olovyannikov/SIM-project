import s from './Collapse.module.scss';
import {CSSProperties, useState} from "react";

export const Collapse = (props: { collapsed: any, children: any, title: any, isMod: boolean }) => {
    const [isCollapsed, setIsCollapsed] = useState(props.collapsed);

    return (
        <div className={s.collapse}>
            <button
                className={`${s.btn} btn-reset ${isCollapsed ? `${s.collapsed}` : `${s.expanded}`}`}
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                <p className={`${s.title} ${props.isMod === true ? s.accent : ''} `}>{props.title}</p>
                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.88294 0.465648L8.99526 6.58L15.1229 0.481035L17.0006 2.3634L8.99052 10.3533L1.00058 2.34328L2.88294 0.465648Z" fill="#1F2326"/>
                </svg>

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

Collapse.defaultProps = {
    isMod: false,
    collapsed: false
}