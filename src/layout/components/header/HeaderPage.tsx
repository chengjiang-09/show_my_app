import React from 'react'
import style from './HeaderPage.module.less'

export const HeaderPage : React.FC = () => {
    return (
        <div className={style.header}>
            <div className={style['header-container']}>
                <h2 className={style['header-container-title']}>欢迎你的到来！</h2>
                <h2 className={style['header-container-alert']}>网站素材为本人亲自从网络寻找或爬取，如有侵权请联系下方邮箱</h2>
            </div>
        </div>
    )
}
