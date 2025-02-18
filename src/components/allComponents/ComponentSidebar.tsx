import { useState } from "react";
import AppBar from "../AppBar";
import componentList from "../data/components"
import { motion } from "framer-motion";

const ComponentSidebar = () => {

    const [selectedComponent, setSelectedComponent] = useState(componentList[0]);
    
    return (
        <div className=" bg-black min-h-screen text-white">
            <div>
                <AppBar />
            </div>
            <div className="flex">
                {/* {SideBar} */}
                <div className="w-1/5 p-4 border-r border-gray-200 pl-10">
                    <h2 className="text-xl font-semibold mb-4">Components</h2>
                    <ul>
                        {componentList.map((comp) => {
                            return (
                                <li key={comp.id} onClick={() => setSelectedComponent(comp)} className={`cursor-pointer ${selectedComponent.id === comp.id ? 'text-blue-500' : 'text-white'}`}>
                                    <motion.div
                                        whileHover={{scale: 0.9, color: 'white'}}
                                        transition={{ duration: 0.2 }}
                                        className="text-gray-500"
                                    >
                                        {comp.type}
                                    </motion.div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* {Main Content} */}    
                <div className="w-4/5 p-6">
                    <h2 className="text-3xl font-bold mb-4">{selectedComponent.type}</h2>
                    <selectedComponent.component /> 
                </div>           
            </div>
        </div>
    )
}

export default ComponentSidebar;