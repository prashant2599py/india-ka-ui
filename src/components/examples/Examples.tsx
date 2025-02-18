import AvatarExample from "./avatar/AvatarExample";
import ButtonExample from "./button/ButtonExample";

const Examples = () => {
  return (
    <div>
       <div className="mt-8">
        <h2 className="text-3xl font-semibold">Examples</h2>
        <hr className="mt-4" />
      </div>
      <div>
        <AvatarExample />
      </div>
      <div>
        <ButtonExample />
      </div>
    </div>
  )
}

export default Examples;