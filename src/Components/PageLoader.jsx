import React from "react";

export default function PageLoader() {
    return (
        <div className="h-screen flex items-center justify-center bg-darkBg">
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((line) => (
                    <div
                        key={line}
                        className="w-2 h-16 bg-neonPurple rounded-md animate-lineMove"
                        style={{ animationDelay: `${line * 0.1}s` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
