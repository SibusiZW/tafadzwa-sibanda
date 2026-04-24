export default function OtherSkills() {

    const skills = ["Prompt Engineering", "Problem Solving", "Teamwork", "Communications", "AI assisted programming", "Project Planning"]

    return (
        <div className="p-4 w-full">
            <h1 className="text-3xl mb-4 font-serif">My Other <span className="text-green-500">Skills</span></h1>

            {skills.map(skill => 
                <div className="p-8 mb-4 rounded-[10px] border border-green-200" key={skill}>
                    <h1 className="font-serif text-2xl">{skill}</h1>
                </div>)
            }
        </div>
    )
}