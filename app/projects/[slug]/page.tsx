import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import SingleProjectDetailsSection from "@/components/single-project/single-project-details-section"
import ContactSection from "@/components/landing/contact/contact-section"

const SingleProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const project = projects.filter(project => project.slug === slug)[0]

    if(!project) {
        notFound()
    }

    return (
        <main className="space-y-32 md:space-y-40 lg:space-y-50">
            <SingleProjectDetailsSection project={ project } />
            <ContactSection />
        </main>
    )
}

export default SingleProjectPage