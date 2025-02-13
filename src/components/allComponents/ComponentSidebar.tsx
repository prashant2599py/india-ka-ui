import { useState } from "react";
import AppBar from "../AppBar";
import componentList from "../data/components"
import {  useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const ComponentSidebar = () => {

    const [selectedComponent, setSelectedComponent] = useState(componentList[0]);
    
    // const navigate = useNavigate();
    // const handleComponentSelect = (comp: any) =>{
    //     setSelectedComponent(comp);
    //     navigate(comp.href)
    // }

    // const navigate = useNavigate();
    const { id } = useParams();
    return (
        <div className=" bg-black min-h-screen text-white">
            <div>
                <AppBar />
            </div>
            <div className="flex h-screen">
                {/* {SideBar} */}
                <div className="w-1/5 p-4 border-r border-gray-800">
                    <h2 className="text-xl font-semibold mb-4">Components</h2>
                    <ul>
                        {componentList.map((comp) => {
                            return (
                                <li key={comp.id} onClick={() => setSelectedComponent(componentList.find((comp) => comp.id === id) || componentList[0])} className={`cursor-pointer ${id === comp.id ? 'text-blue-500' : 'text-white'}`}>
                                    {comp.type}
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