import PreviewCode from '../../../utils/PreviewCode'
import avatar from "../../../../public/india-ka-ui.png"

const AvatarExample = () => {
    
  const preview2 = (
    <div className="flex">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-500 rounded-lg mr-4 overflow-hidden">
          <img src={avatar} alt="@india/ka/ui" className="w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Aman</h2>
        <p className="text-gray-400">Software Engineer</p>
    </div>
    </div>
)
const code2 = `<div className="w-12 h-12 bg-gray-500 rounded-lg mr-4 overflow-hidden">
                  <img src={avatar} alt="@india/ka/ui" className="w-full h-full object-cover" />
              </div>`
  
  return (
    <div>
       <h2 className='text-3xl font-semibold mt-8'>Examples</h2>
       <hr className="mt-4" />
      <div>
        <PreviewCode 
          previewContent = {preview2}
          codeContent={code2} 
          description="This is an avatar component with an image and a fallback."
        />
      </div>
    </div>
  )
}

export default AvatarExample