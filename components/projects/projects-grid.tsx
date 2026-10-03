import SingleProject from "@/components/projects/single-project"

export type project = {
    title: string
    tags: string[]
    description: string
}

const projects = [
    { title: "Metoda Silvy Polska", tags: ["Wordpress", "Page Builder", "Custom PHP"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat." },
    { title: "Metoda Silvy Polska 2", tags: ["Wordpress", "Page Builder", "Custom PHP"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat." },
    { title: "Metoda Silvy Polska 3", tags: ["Wordpress", "Page Builder", "Custom PHP"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat." },
    { title: "Metoda Silvy Polska 4", tags: ["Wordpress", "Page Builder", "Custom PHP"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat." },
    { title: "Metoda Silvy Polska 5", tags: ["Wordpress", "Page Builder", "Custom PHP"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat." },
    { title: "Metoda Silvy Polska 6", tags: ["Wordpress", "Page Builder", "Custom PHP"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non libero ornare, tristique sapien nec, ullamcorper erat." },
] as project[]

const ProjectsGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-16">
            {
                projects.map((project, key) => (
                    <SingleProject key={ project.title } item={ project } className={`${ key % 3 === 2 && "col-span-2" }`} />
                ))
            }
        </div>
    )
}

export default ProjectsGrid