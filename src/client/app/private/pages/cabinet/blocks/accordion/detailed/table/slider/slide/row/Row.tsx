import s from "./Row.module.scss";

interface RowModel {
    date: any,
    request: any,
    title: any,
    money: any
}

export const Row = (props: RowModel) => {
    return (
        <tr>
            <td className={s.date}>{props.date}</td>
            <td className={s.operation}>{props.request}</td>
            <td className={s.type}>{props.title}</td>
            <td className={s.sum}>{props.money}₽</td>
        </tr>
    )
}
