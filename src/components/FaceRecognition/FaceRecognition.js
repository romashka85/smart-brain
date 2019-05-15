import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                {box.map((el, i) => {
                    return (
                        <div key={i} className='bounding-box' 
                            style={{top: el.topRow, right: el.rightCol, bottom: el.bottomRow, left: el.leftCol}}>
                        </div>
                    )
                   
                })}
            </div>
        </div>
    )
}

export default FaceRecognition;