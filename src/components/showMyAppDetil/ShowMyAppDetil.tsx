import React, { useEffect, useState } from 'react'
import style from './ShowMyAppDetil.module.less'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from '../../redux/hook'
import { useDispatch } from 'react-redux'

import { getProjectList } from '../../redux/projectList/index'
import { serverKey } from '../../utils/serverKey'

export const ShowMyAppDetil: React.FC = () => {
    const Navigate = useNavigate()
    const Location = useLocation()
    const Dispatch = useDispatch()

    const projectName = Location.pathname.substring(1)
    const imgList: string[] = useSelector(state => state.projectList[projectName])

    useEffect(() => {
        Dispatch(getProjectList(projectName))
    }, [Dispatch, projectName])

    const goBack = () => {
        Navigate('/')
    }

    return (
        <div className={style.ShowMyAppDetil}>
            <div className={style['ShowMyAppDetil-container']}>
                <div className={style['ShowMyAppDetil-container-closeGoBack']} onClick={goBack}>
                    <span className={`${style['ShowMyAppDetil-container-closeGoBack-title']} ${style.openGoBackTitle}`}>返回</span>
                </div>
                <div className={`${style['ShowMyAppDetil-container-goLeftOrRight']} ${style['ShowMyAppDetil-container-goLeft']}`}></div>
                <div className={`${style['ShowMyAppDetil-container-goLeftOrRight']} ${style['ShowMyAppDetil-container-goRight']}`}></div>
                <div className={style['ShowMyAppDetil-container-body']}>
                    <div className={style['ShowMyAppDetil-container-body-box']}>
                        <div className={style['ShowMyAppDetil-container-body-box-layout']}>
                            <video className={style['ShowMyAppDetil-container-body-box-layout-video']} src={`${serverKey.BASE_VIDEO_SERVER}${projectName}.mp4`} controls poster={`${serverKey.BASE_IMG_SERVER}${projectName}/${projectName}.png`}></video>
                        </div>
                        {
                            imgList ? imgList.map((key, index) => {
                                return (
                                    <div key={index} className={style['ShowMyAppDetil-container-body-box-layout']}>
                                        <img className={style['ShowMyAppDetil-container-body-box-layout-img']} src={`${serverKey.BASE_IMG_SERVER}${projectName}/${key}`} alt="" />
                                    </div>
                                )
                            }) : "空"
                        }
                        <div className={style['ShowMyAppDetil-container-body-box-layout']}>
                            <img className={style['ShowMyAppDetil-container-body-box-layout-img']} src={`${serverKey.BASE_IMG_SERVER}${projectName}/${projectName}.png`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}