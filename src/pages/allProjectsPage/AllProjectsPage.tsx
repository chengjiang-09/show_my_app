import React from 'react'
import style from './AllProjectsPage.module.less'
import { AllProjectsOneProject } from '../../components'
import { useSelector } from '../../redux/hook'

export const AllProjectsPage: React.FC = () => {
    let projectDetil = useSelector(state => state.projectDetil.detil)

    return (
        <div className={style.AllProjectsPage}>
            {
                projectDetil.map(obj => <AllProjectsOneProject key={obj.id} path={obj.path} id={obj.id}/>)
            }
        </div>
    )
}