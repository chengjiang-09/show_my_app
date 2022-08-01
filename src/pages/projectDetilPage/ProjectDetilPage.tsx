import React from 'react'
import style from './ProjectDetilPage.module.less'
import { useParams  } from 'react-router-dom'

export const ProjectDetilPage: React.FC = () => {
    const { id } = useParams()


    return (
        <div className={style.ProjectDetilPage}>
            {id}
        </div>
    )
}