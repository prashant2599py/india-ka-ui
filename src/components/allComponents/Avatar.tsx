// import PreviewCode from "../../utils/PreviewCode"
import avatar from "../../../public/india-ka-ui.png"
import PreviewCode from "../../utils/PreviewCode"


const Avatar = () => {

  const preview = (
      <div className="w-12 h-12 bg-gray-500 rounded-full mr-4 overflow-hidden">
        <img src={avatar} alt="@india/ka/ui" className="w-full h-full object-cover" />
      </div>
    );

  const code = `<div className="w-12 h-12 bg-gray-500 rounded-full mr-4 overflow-hidden">
          <img src={avatar} alt="@india/ka/ui" className="w-full h-full object-cover" />
        </div>`
  return (
    <div>
      <div className="font-bold text-gray-400">
        <p>An image element with a fallback for representing the user.</p>
      </div>
      <div className="flex items-center mt-8">
        
        <div>
          <h2 className="text-lg font-semibold">pLodhi</h2>
          <p className="text-gray-400">Software Engineer</p>
        </div>
      </div>
      
      <div>
          <PreviewCode 
            previewContent = {preview}
            codeContent={code} 
            description="This is an avatar component with an image and a fallback."
          />
      </div>
    </div>
  )
}

export default Avatar