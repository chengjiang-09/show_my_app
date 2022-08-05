import React from 'react'
import style from './AllProjectsOneProject.module.less'
import { useNavigate } from 'react-router-dom'

interface propsList {
    path:string,
    id: string
}

export const AllProjectsOneProject: React.FC<propsList> = (props) => {

    const Navigate = useNavigate()
    const path = props.path
    const id = props.id

    const goDetil = () => {
        Navigate(id)
    }
    
    return (
        <div className={style.AllProjectsOneProject} onClick={goDetil}>
            <div className={style['AllProjectsOneProject-container']}>
                <img className={`${style['AllProjectsOneProject-container-pic']} ${style['pic-animation']}`} src={path} alt=""/>
                <div className={`${style['AllProjectsOneProject-container-title']} ${style['title-animation']}`}>{id}</div>
            </div>
        </div>
    )
}