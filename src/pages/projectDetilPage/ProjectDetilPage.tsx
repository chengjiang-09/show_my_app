import React from 'react'
import style from './ProjectDetilPage.module.less'
import { ShowMyAppDetil } from '../../components'

export const ProjectDetilPage: React.FC = () => {

    return (
        <div className={style.ProjectDetilPage}>
            <ShowMyAppDetil/>
        </div>
    )
}