import React from 'react'
import style from './AllProjectsOneProject.module.less'
// import img1 from '../../assets/image/1.jpg'
import { useNavigate } from 'react-router-dom'

interface propsList {
    path:string
}

export const AllProjectsOneProject: React.FC<propsList> = (props) => {

    const Navigate = useNavigate()
    const path = props.path

    const goDetil = () => {
        Navigate(path)
    }

    return (
        <div className={style.AllProjectsOneProject} onClick={goDetil}>
            <div className={style['AllProjectsOneProject-container']}>
                <img className={`${style['AllProjectsOneProject-container-pic']} ${style['pic-animation']}`} src={path} alt=""/>
                <div className={`${style['AllProjectsOneProject-container-title']} ${style['title-animation']}`}>123</div>
            </div>
        </div>
    )
}