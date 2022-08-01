import React from 'react'
import style from './AllProjectsPage.module.less'
import { AllProjectsOneProject } from '../../components'

export const AllProjectsPage: React.FC = () => {

    const projectList = ['../../assets/image/1.jpg','../../assets/image/5.jpg','../../assets/image/4.jpg','../../assets/image/3.jpg','../../assets/image/2.jpg']

    return (
        <div className={style.AllProjectsPage}>
            {
                projectList.map((path, index) => <AllProjectsOneProject key={index} path={require(path)}/>)
            }
        </div>
    )
}