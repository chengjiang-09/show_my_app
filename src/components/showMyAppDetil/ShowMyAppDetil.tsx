import React, { useEffect, useState, useRef } from 'react'
import style from './ShowMyAppDetil.module.less'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from '../../redux/hook'
import { useDispatch } from 'react-redux'
import { LeftCircleOutlined, RightCircleOutlined, CaretRightOutlined } from '@ant-design/icons'
import { getProjectList } from '../../redux/projectList/index'
import { serverKey } from '../../utils/serverKey'
import appList from '../../assets/json/appList.json'

export const ShowMyAppDetil: React.FC = () => {
    const Navigate = useNavigate()
    const Location = useLocation()
    const Dispatch = useDispatch()

    const projectName = Location.pathname.substring(1)
    const imgList: string[] = useSelector(state => state.projectList[projectName])

    const [thisApp, setThisApp] = useState({
        id: "",
        title: "",
        picName: ""
    })
    const [maxLength, setMaxLength] = useState(1)

    const moveBox = useRef(null)

    useEffect(() => {
        Dispatch(getProjectList(projectName))

        setThisApp(appList.appList.filter(obj => obj.title === projectName)[0])
    }, [Dispatch, projectName])

    useEffect(() => {
        if (imgList) {
            setMaxLength(imgList.length + 1)
        }
    }, [imgList])

    const goBack = () => {
        Navigate('/')
    }

    let basePlace = 0
    let reFlag = false
    const goLeft = () => {
        if (moveBox.current) {
            const box: HTMLDivElement = moveBox.current
            basePlace += 74
            if (basePlace > 0) {
                basePlace = -((maxLength) * 74)
                box.style.transition = "transform 0s"
                reFlag = true
            }
            box.style.transform = `translate(${basePlace}vw,0)`
            if (reFlag) {
                reFlag = false
                setTimeout(() => {
                    box.style.transition = "transform .5s"
                    goLeft()
                })
            }
        }
    }

    const goRight = () => {
        if (moveBox.current) {
            const box: HTMLDivElement = moveBox.current
            if (reFlag) {
                box.style.transition = "transform .5s"
                reFlag = false
            }
            basePlace -= 74
            box.style.transform = `translate(${basePlace}vw,0)`
            if (basePlace < -((maxLength - 1) * 74)) {
                basePlace = 0
                setTimeout(() => {
                    box.style.transition = "transform 0s"
                    box.style.transform = `translate(0,0)`
                }, 500)
                reFlag = true
            }
        }
    }


    const startIcon = useRef(null)
    const videoBox = useRef(null)
    let showIconFlag = true

    const videoStart = () => {     
        if(startIcon.current){
            const iconBox:HTMLDivElement = startIcon.current
            if(showIconFlag){
                iconBox.style.display = 'none'
            }else {
                iconBox.style.display = 'block'
            }
            showIconFlag = !showIconFlag
        }
    }

    if(videoBox.current){
        const videoDom:HTMLVideoElement = videoBox.current
        videoDom.onerror = () => {
            showIconFlag = false
            videoStart()
            alert("暂无展示视频")
        }
    }

    return (
        <div className={style.ShowMyAppDetil}>
            <div className={style['ShowMyAppDetil-container']}>
                <div className={style['ShowMyAppDetil-container-closeGoBack']} onClick={goBack}>
                    <span className={`${style['ShowMyAppDetil-container-closeGoBack-title']} ${style.openGoBackTitle}`}>返回</span>
                </div>
                <div className={`${style['ShowMyAppDetil-container-goLeftOrRight']} ${style['ShowMyAppDetil-container-goLeft']}`} onClick={goLeft}>
                    <LeftCircleOutlined className={style['ShowMyAppDetil-container-goLeftOrRight-icon']} />
                </div>
                <div className={`${style['ShowMyAppDetil-container-goLeftOrRight']} ${style['ShowMyAppDetil-container-goRight']}`} onClick={goRight}>
                    <RightCircleOutlined className={style['ShowMyAppDetil-container-goLeftOrRight-icon']} />
                </div>
                <div className={style['ShowMyAppDetil-container-body']}>
                    <div className={style['ShowMyAppDetil-container-body-box']} ref={moveBox}>
                        <div className={`${style['ShowMyAppDetil-container-body-box-layout']} ${style.videoBox}`}>
                            <div ref={startIcon} className={`${style['ShowMyAppDetil-container-body-box-layout-videoStart']}`}>
                                <CaretRightOutlined className={`${style['ShowMyAppDetil-container-body-box-layout-videoStart-icon']} ${style.actionIcon}`}/>
                            </div>
                            <video ref={videoBox} className={style['ShowMyAppDetil-container-body-box-layout-video']} src={`${serverKey.BASE_VIDEO_SERVER}${projectName}.mp4`} controls poster={`${serverKey.BASE_IMG_SERVER}${projectName}/${thisApp.picName}`} onClick={videoStart}></video>
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
                            <img className={style['ShowMyAppDetil-container-body-box-layout-img']} src={`${serverKey.BASE_IMG_SERVER}${projectName}/${thisApp.picName}`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}