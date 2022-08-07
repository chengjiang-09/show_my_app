import React from 'react'
import style from './FooterPage.module.less'

export const FooterPage: React.FC = () => {
    return (
        <div className={style.FooterPage}>
            <div className={style['FooterPage-container']}>
            <h1 className={style['FooterPage-container-title']}>
                    受服务器性能影响，出此下策展示应用，如仍然需查看已上线项目，请联系 chengjiang_09@163.com (如通过视频中网址访问网站，首页加载缓慢请多多谅解)
                </h1>
            </div>
        </div>
    )
}

