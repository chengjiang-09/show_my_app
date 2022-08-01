import React from 'react'
import style from './LayoutPage.module.less'
import { HeaderPage, FooterPage } from './components'
import { Outlet } from 'react-router-dom'

export const LayoutPage: React.FC = () => {
    return (
        <>
            <HeaderPage />
            <div className={style['LayoutPage-body']}>
                <Outlet />
            </div>
            <FooterPage />
        </>
    )
}

