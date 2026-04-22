'use client'

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Critical: Prevent hydration mismatch. 
    // The server doesn't know the theme; only the client does.
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a skeleton or a placeholder to maintain layout stability
        return <div className="p-1"><Button variant="ghost" disabled><Sun className="h-5 w-5" /></Button></div>;
    }

    return (
        <Button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            variant="ghost"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
    );
}