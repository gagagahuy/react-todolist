import "./App.css";
import { useState } from "react";

function App() {
    const [value, setValue] = useState("");
    console.log(value);
    return (
        <div className="flex gap-4 justify-center items-center h-screen">
            <input
                type="text"
                className="border border-blue-600 px-4 py-2 w-[400px] outline-none rounded-md"
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="button"
                className="outline-none bg-blue-500 rounded-md px-4 py-2 text-white text-center"
            >
                ADD
            </button>
        </div>
    );
}

export default App;
