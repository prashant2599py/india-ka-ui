import { useNavigate } from "react-router-dom";
import AppBar from "./AppBar";



const Home = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/examples')
    }
    return (
        <div className="bg-black min-h-screen">
            <div>
                <AppBar />
            </div>
            
            <div className="border-b-2 border-gray-800 flex flex-col justify-normal mt-8 pb-4 ">
                <div className="ml-4">
                    <h2 className="text-gray-400 text-5xl font-bold">Customized Components</h2>
                    <h2 className="text-white text-xl mt-2 font-bold">You can just use in your projects by just copy and paste</h2>
                    <h4 className="text-gray-400 text-lg mt-3 font-semibold">Made with Tailwindcss</h4>
                </div>
                <div className="flex mt-4">
                    <button className="bg-black text-white py-2 px-4 rounded-lg mr- hover:text-gray-500" onClick={handleGetStarted}>Get Started</button>
                    <button className="bg-white text-black py-2 px-4 rounded-lg ml-4 hover:bg-gray-700 hover:text-white">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Home;