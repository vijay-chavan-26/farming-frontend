import React from 'react'
import {handleDownload} from './DownloadBrouchure'
import { useSelector } from 'react-redux';
import { FarmerData } from '../../language-data/FarmerData';

const WantToKnowMore = () => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div className="bg-theme2 py-5 my-5">
          <div className="w-2/3 mx-auto">
            <h2 className="text-theme mb-3 font-semibold text-2xl">{FarmerData[lang].wantToKnowMore}</h2>
            <p className='mb-8 text-sm text-themeText2'>
            {FarmerData[lang].wantToKnowDesc}
            </p>

            <button
              className="bg-theme py-2 px-4 rounded-sm text-white whitespace-nowrap"
              onClick={handleDownload}
            >
             {FarmerData[lang].downloadBrochure}
            </button>
          </div>
        </div>
  )
}

export default WantToKnowMore