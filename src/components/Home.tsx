import { useNavigate } from "react-router-dom";
import AppBar from "./AppBar";
import { motion } from "framer-motion";

const Home = () => {
    const navigate = useNavigate();
    
    const handleGetStarted = () => {
        navigate('/components');
    };

    return (
        <div className="bg-black h-screen">
            <AppBar />
        
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }} 
                className="flex flex-col justify-center items-center mt-8 pb-4"
            >
                <h2 className="text-gray-400 text-5xl font-bold mt-4">Customized Components</h2>

                <h2 className="text-white text-xl font-bold mt-8">
                    You can just use in your projects by just copy and paste
                </h2>                        

                <h4 className="text-gray-400 text-lg mt-4 font-semibold">Made with Tailwindcss</h4>

                <motion.div 
                    className="flex mt-8"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white py-2 px-4 rounded-lg mr-4 hover:text-gray-500"
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </motion.button>

                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black py-2 px-4 rounded-lg ml-4 hover:bg-gray-700 hover:text-white"
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
