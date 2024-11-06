import {createBlob} from "../../helpers/generateBlob";
import React from "react";
import image from '../../avatar.png'

import style from './Blob.module.css'

interface BlobProps {
    value: string
    photo?: string | null
}

export function Blob({value, photo}: BlobProps) {
    const [blobData, setBlobData] = React.useState<{ blobPath: string, color1: string, color2: string } | null>(null)

    React.useEffect(() => {
        createBlob(value).then(setBlobData)
    }, [value]);


    if (!blobData?.blobPath) {
        return null;
    }

    const imageComponent = photo ? <pattern id="image" patternUnits="userSpaceOnUse" width="500" height="500">
            <image href={photo} x="-75" y="-75" width="500" height="500"/>
        </pattern> :
        <pattern id="image" patternUnits="userSpaceOnUse" width="300" height="300">
            <image href={image} x="0" y="0" width="300" height="300"/>
        </pattern>


    return <>
        <svg className={style.root} width="300" height="300" overflow='visible'>
            <defs>
                <clipPath id="svgPath" clipPathUnits="userSpaceOnUse">
                    <path id="shape" d={blobData?.blobPath}/>
                </clipPath>
                <linearGradient id="linear-grad">
                    <stop offset="0" stopColor={`#${blobData?.color1}`}/>
                    <stop offset="1" stopColor={`#${blobData?.color2}`}/>
                </linearGradient>
                {imageComponent}
            </defs>
            <use xlinkHref="#shape" stroke="url(#linear-grad)" fill="url(#image)" strokeWidth="3"/>
        </svg>
    </>
}