import { ProjectItem } from "@/lib/types"

export default function ProjectsPage() {

    const projects: ProjectItem[] = [
        { title: "Tafadzwa's Portfolio", description: "This portfolio website", githubRepo: "https://github.com/SibusiZW/tafadzwa-sibanda", liveDemo: "https://tafadzwa-sibanda.vercel.app/" },
        { title: "St Patrick's FaceMash", description: "Mark Zuckerberg's FaceMash but for St Patrick's High School in Gweru", githubRepo: "https://github.com/SibusiZW/st_patricks_facemash", liveDemo: "" },
        { title: "MixMind", description: "A startup idea generator for ready founders", githubRepo: "https://github.com/SibusiZW/mix-mind", liveDemo: "https://mix-mind-delta.vercel.app/" },
        { title: "FocusForge", description: "An AI app that helps challenged students study better", githubRepo: "https://github.com/SibusiZW/focus-forge", liveDemo: "https://focus-forge-rho.vercel.app/" },
        { title: "CodeWatcherZW", description: "A code analysis and planning app for students and proffesionals in Zimbabwe", githubRepo: "https://github.com/SibusiZW/code-watcher-zw", liveDemo: "https://code-watcher-zw.vercel.app/" },
        { title: "Simple House predictor App", description: "A house predictor made using a dummy dataset using Streamlit and Scikit-Learn", githubRepo: "http://github.com/SibusiZW/house-price-predictor-app", liveDemo: "" },
        { title: "EchoLink", description: "School Wide Emergency & Announcements System for St Patrick's. Made using Next.js and Supabase", githubRepo: "https://github.com/SibusiZW/echolink-system", liveDemo: "https://echolink-system.vercel.app/" },
        { title: "EssenceLab", description: "A perfume website", githubRepo: "https://github.com/SibusiZW/arabic-nights", liveDemo: "https://arabic-nights.vercel.app/" },
        { title: "CodeWatcher Mini", description: "The first prototype made for the CodeWatcher app primarily used for debugging", githubRepo: "https://github.com/SibusiZW/code-watcher", liveDemo: "https://code-watcher-six.vercel.app/" },
        { title: "LeadSelect", description: "A web-based school voting system which can be used for student positions", githubRepo: "https://github.com/SibusiZW/lead-select", liveDemo: "https://lead-select.onrender.com/" },
        { title: "St Patrick's Pass Subsystem", description: "A prototype for a pass issuing and validation app made using Customtkinter and SQLite3", githubRepo: "https://github.com/SibusiZW/st-patricks-pass-subsystem", liveDemo: "" },
        { title: "St Patrick's Management System", description: "A prototype for a school management system for St Patrick's High School", githubRepo: "https://github.com/SibusiZW/st-patricks-management-system", liveDemo: "" }
    ]

    return (
        <div className="p-6 w-full"></div>
    )
}