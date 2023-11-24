import React from 'react'
import {handleDownload} from './DownloadBrouchure'

const WantToKnowMore = () => {
  return (
    <div className="bg-theme2 py-5 my-5">
          <div className="w-2/3 mx-auto">
            <h2 className="text-theme mb-3 font-semibold text-2xl">Want to know more?</h2>
            <p className='mb-8 text-sm text-themeText2'>
              Download Our Brochure for a Comprehensive Overview of Our
              Services!.
            </p>

            <button
              className="bg-theme py-2 px-4 rounded-sm text-white whitespace-nowrap"
              onClick={handleDownload}
            >
              Download Brouchre
            </button>
          </div>
        </div>
  )
}

export default WantToKnowMore