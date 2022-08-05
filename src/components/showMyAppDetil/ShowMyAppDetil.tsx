import React from 'react'
import style from './ShowMyAppDetil.module.less'
import { useNavigate } from 'react-router-dom'

export const ShowMyAppDetil:React.FC = () => {
    const Navigate = useNavigate()

    const goBack = () => {
        Navigate('/')
    }

    return (
        <div className={style.ShowMyAppDetil}>
            <div className={style['ShowMyAppDetil-container']}>
                <div className={style['ShowMyAppDetil-container-closeGoBack']} onClick={goBack}>
                    <span className={`${style['ShowMyAppDetil-container-closeGoBack-title']} ${style.openGoBackTitle}`}>返回</span>
                </div>
            </div>
        </div>
    )
}