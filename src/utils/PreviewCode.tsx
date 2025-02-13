import React, { useState } from 'react'

interface PreviewCodeProps {
  previewContent: React.ReactNode;
  codeContent: string;
  description?: string;
}

const PreviewCode: React.FC<PreviewCodeProps> = ({ previewContent, codeContent, description }) => {
  const [showPreview, setShowPreview] = useState(true);
  return (
    <div className='border p-4 h-96 w-1/2 mt-12 rounded-xl '>
      <div className='flex pb-2'>
          <div 
            className={`cursor-pointer ${showPreview ? 'font-bold' : ''}`}
            onClick={() => setShowPreview(true)}
          >
            Preview
          </div>
          <div
            className={`cursor-pointer ml-8 ${!showPreview ? 'font-bold' : ''}`}
            onClick={() => setShowPreview(false)}
          >
            Code
          </div>
      </div>

      <div className='flex justify-center items-center mt-8'>
          {showPreview ? <div >{previewContent}</div> : <pre className='bg-gray-700 p-2'>{codeContent}</pre>}    
      </div>
      
      <div className='flex justify-center'>
        {description && <p className='mt-2 text-sm text-gray-600'>{description}</p>}
      </div>

    </div>
  )
}

export default PreviewCode