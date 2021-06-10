import s from './Dropdown.module.scss';
import {useState} from "react";

export const Dropdown = (props: { title: any, data: any }) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(props.data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id: any) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        toggleDropdown();
    }

    return (
        <div className={s.dropdown}>
            <div className={`${s.header} ${isOpen ? s.open : ''}`} onClick={toggleDropdown}>
                {selectedItem ? items.find((item: any) => item.id == selectedItem).label : "Все"}
                <svg className={`${s.icon} ${isOpen ? s.open : ''}`} width="18" height="11" viewBox="0 0 18 11"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.88294 0.465648L8.99526 6.58L15.1229 0.481035L17.0006 2.3634L8.99052 10.3533L1.00058 2.34328L2.88294 0.465648Z"/>
                </svg>
            </div>
            <div className={`${s.body} ${isOpen && s.open}`}>
                {items.map((item: any) => (
                    <div className={s.item} onClick={(e: any) => handleItemClick(e.target.id)} key={item.id}
                         id={item.id}>
                        <span className={`${item.id == selectedItem ? s.isSelected : ''}`}>
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
