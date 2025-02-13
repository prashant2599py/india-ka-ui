import PreviewCode from "../../utils/PreviewCode"

const Button = () => {

  const preview = <button className=" flex bg-gray-800 text-white font-bold px-4 py-2 rounded">Button</button>;
  const code = `<button className="text-black">Click me</button>`;

  return (
    <div>
      <div className="font-bold text-gray-400">
        <p>Buttons are used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.</p>
      </div>
      <div>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button> */}
      </div>
      <div>
          <PreviewCode
              previewContent={preview}
              codeContent={code}
              description="This is a simple button  component"
          />
      </div>
    </div>
  )
}

export default Button