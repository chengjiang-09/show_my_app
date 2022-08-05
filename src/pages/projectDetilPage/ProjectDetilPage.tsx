import React from 'react'
import style from './ProjectDetilPage.module.less'
import { useParams  } from 'react-router-dom'
import { ShowMyAppDetil } from '../../components'

export const ProjectDetilPage: React.FC = () => {
    const { id } = useParams()


    return (
        <div className={style.ProjectDetilPage}>
            <ShowMyAppDetil/>
        </div>
    )
}