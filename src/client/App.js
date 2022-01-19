import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const inCreaseClick = () => setCount((c) => c + 1);
    const deCreaseClick = () => setCount((c) => c - 1);
    return (
        <div>
            <div>Count: {count}</div>

            <div>
                <button onClick={inCreaseClick}>Increase</button>
                <button onClick={deCreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default App;
