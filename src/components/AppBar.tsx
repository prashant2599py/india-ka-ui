import { Link } from "react-router-dom";

const AppBar = () => {
    return (
        <div>
            <div className="flex justify-between pb-4 border-b border-gray-200">
                <h4 className="text-white font-bold ml-4 pt-4 text-xl">India-ui</h4>
                <ul className="text-white mt-4 flex mx-4">
                    <li className="mr-4 text-gray-400 font-semibold"><Link to="/docs">Docs</Link></li>
                    <li className="mr-4 text-gray-400 font-semibold"><Link to="/examples">Examples</Link></li>
                    <li className="mr-4 text-gray-400 font-semibold"><Link to="/components">Components</Link></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
export default AppBar;
