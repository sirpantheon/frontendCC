import React from 'react'
import * as S from './style'
import Webcam from 'react-webcam'
import { useRef } from 'react'

const videoConstraints = {
    width: 640,
    height: 360,
    facingMode: "user"
  };


function WebcamComponent(){

    const webcamRef = useRef(null);

    const capture = React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
          console.log(imageSrc);
        },
        [webcamRef]
      );

    return (
        <S.Container >
            <Webcam ref={webcamRef} 
                audio={false}
                height={300}
                width={260}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />

            <button onClick={capture}>Capturar Foto</button>
        </S.Container>
    )
}

export default WebcamComponent
