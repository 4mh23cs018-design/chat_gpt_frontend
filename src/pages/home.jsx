import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === "Enter" && query.trim() !== "") {
            navigate(`/chat?q=${encodeURIComponent(query)}`);
        }
    };

    const handleQuickAction = (action) => {
        navigate(`/chat?q=${encodeURIComponent(action)}`);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            {/* Main content */}
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                What can I help with?
            </h1>

            {/* Input box */}
            <div className="w-full max-w-xl">
                <div className="flex items-center gap-2 border border-gray-300 rounded-2xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-gray-300">
                    <input
                        type="text"
                        placeholder="Ask anything"
                        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {["Attach", "Search", "Study", "Create image"].map((item) => (
                        <button
                            key={item}
                            onClick={() => handleQuickAction(item)}
                            className="px-4 py-1.5 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Footer text */}
            <p className="text-xs text-gray-400 mt-10 text-center max-w-md">
                By messaging ChatGPT, you agree to our Terms and have read our Privacy
                Policy.
            </p>
        </div>
    );
};

export default Home;