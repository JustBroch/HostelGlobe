import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Navbar1 } from "./components/Navbar";
import { Footer2 } from "./components/Footer";
import bilde from "./assets/travel.jpg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar1 />
            <main className="p-4">
                <h1>Velkommen til HostelGlobe!</h1>
            </main>
            <div>
                <img src={bilde} alt="Image of Thailand" />{" "}
            </div>
            <Footer2 />
        </>
    );
}

export default App;
