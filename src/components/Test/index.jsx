import style from './Test.module.scss'
import clsx from 'clsx'


function Test() {
    return (
        <h1 className={clsx(style.color, style.font)}>
            hello
        </h1>
    )
}
export default Test