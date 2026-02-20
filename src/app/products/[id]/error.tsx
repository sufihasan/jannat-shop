"use client";

import { useEffect } from "react";

interface Props {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: Props) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="text-center py-20">
            <p className="text-red-500 mb-4">
                Something went wrong: {error.message}
            </p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Try Again
            </button>
        </div>
    );
}