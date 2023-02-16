import "./App.css";
import { useState } from "react";

function App() {
    const storageJob = JSON.parse(localStorage.getItem("jobs"));
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(storageJob ?? []);
    //Handle Add
    const handleAdd = () => {
        setJobs((prev) => {
            const newJob = [...prev, job];
            const jsonJobs = JSON.stringify(newJob);
            localStorage.setItem("jobs", jsonJobs);
            return newJob;
        });
        setJob("");
    };
    //Handle Delete
    const handleDelete = (id) => {
        jobs.splice(id, 1);
        const listNew = jobs.filter((item) => {
            return item;
        });
        localStorage.setItem("jobs", JSON.stringify(listNew));
        setJobs(listNew);
    };
    console.log("Huy");
    //HandleEdit
    const handleEdit = (id) => {
        if (job == "") {
            alert("Vui lòng nhập giá trị vào ô input");
        } else {
            jobs.splice(id, 1, job);
            localStorage.setItem("jobs", JSON.stringify(jobs));
            setJob("");
        }
    };
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
            <div>
                <input
                    value={job}
                    type="text"
                    className="border border-blue-600 px-4 py-2 w-[400px] outline-none rounded-md"
                    onChange={(e) => setJob(e.target.value)}
                />
                <button
                    type="button"
                    className="outline-none bg-blue-500 rounded-md px-4 py-2 text-white text-center m-2"
                    onClick={handleAdd}
                >
                    ADD
                </button>
            </div>
            `
            <ul>
                {jobs?.map((item, index) => (
                    <li className="mt-10" key={index}>
                        {item}
                        <button
                            className="ml-10"
                            onClick={() => handleEdit(index)}
                        >
                            EDIT
                        </button>
                        <button
                            className="ml-10"
                            onClick={() => handleDelete(index)}
                        >
                            DELETE
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
