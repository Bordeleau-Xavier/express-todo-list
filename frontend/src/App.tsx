import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { JsonSerializer } from "typescript-json-serializer";
import { Task } from "./models";
import "reflect-metadata";
function App() {
    useEffect(() => {
        fetch("http://localhost:3000/")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                const defaultSerializer = new JsonSerializer();
                const tasks = defaultSerializer.deserializeObjectArray(
                    json,
                    Task
                );
                console.log(tasks);
            });
    }, []);

    return <div className="App"></div>;
}

export default App;
