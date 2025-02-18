import PreviewCode from '../../../utils/PreviewCode'

const ButtonExample = () => {
    const previewContent1 = (
        <div>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg">Button</button>
        </div>
    )
    const codeContent1 = `<div>
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg">Click Me</button>
    </div>`

    const previewContent2 = (
        <div>
            <button className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-md">Button</button>
        </div>
    )
    const codeContent2 = `
        <div>
            <button className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-md">Button</button
        </div>
    `
    const previewContent3 = (
        <div>
            <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md">Button</button>
        </div>
    )
    const codeContent3 = `
        <div>
            <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md">Button</button
        </div>
    `
  return (
    <div>
        <h2 className='text-3xl font-semibold mt-8'>Examples</h2>
        <hr className="mt-4" />

        
        <div>
            <h2 className='text-xl font-semibold mt-8'>Primary</h2>
            <div>
                <PreviewCode 
                    previewContent = {previewContent1}
                    codeContent={codeContent1}
                    description='Displays a button or a component that looks like a button.'
                />
            </div>
            <div>
            <h2 className='text-xl font-semibold mt-8'>Secondary</h2>
                <PreviewCode 
                    previewContent = {previewContent2}
                    codeContent={codeContent2}
                />
            </div>

            <div>
            <h2 className='text-xl font-semibold mt-8'>Danger</h2>
                <PreviewCode 
                    previewContent = {previewContent3}
                    codeContent={codeContent3}
                />
            </div>
        </div>
    </div>
  )
}

export default ButtonExample