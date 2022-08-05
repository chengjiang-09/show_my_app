import React from 'react'
import style from './HeaderPage.module.less'

export const HeaderPage : React.FC = () => {
    return (
        <div className={style.header}>
            <div className={style['header-container']}>
                <h2 className={style['header-container-title']}>欢迎你的到来！</h2>
            </div>
        </div>
    )
}
