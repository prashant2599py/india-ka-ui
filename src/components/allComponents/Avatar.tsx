// import PreviewCode from "../../utils/PreviewCode"


const Avatar = () => {
  return (
    <div>
      <div className="font-bold text-gray-400">
        <p>An image element with a fallback for representing the user.</p>
      </div>
      <div className="flex items-center mt-8">
        <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
        <div>
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-400">Software Engineer</p>
        </div>
      </div>
      
      <div>
          {/* <PreviewCode  children={} description={}/> */}
      </div>
    </div>
  )
}

export default Avatar