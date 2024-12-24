import React, {useState} from 'react';
import './style.scss';
import noImage from './image/no-image.png'

const useImage = ({src, alt}) => {
    // 判斷加載狀態
    const [loaded, setLoaded] = useState(false);
    // 判斷資料來源狀態
    const [isValidSrc, setIsValidSrc] = useState(!!src);
    return (
        <div className="smooth-image-wrapper">
            {isValidSrc ? (
                <img
                    className={`smooth-image image-${ loaded ? 'visible' : 'hidden' }`}
                    src={src}
                    alt={alt}
                    onLoad={()=> setLoaded(true)}
                    onError={() => setIsValidSrc(false)}
                />
                ) : (
                <img
                    className={`smooth-image image-${ isValidSrc ? 'hidden' : 'visible' }`}
                    src={ noImage }
                    alt={ alt }
                ></img>
                )}
            {isValidSrc && !loaded && (
                <div className="smooth-preloader">
                    <span className="loader" />
                </div>
            )}
        </div>
    );
};

export default useImage