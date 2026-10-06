import StyledHeader from "@/components/ui/styled-header"
import SkillstackGrid from "@/components/landing/skillstack/skillstack-grid"
import FadeIn from "@/components/ui/fade-in"

const SkillstackSection = () => {
    return (
        <section className="container space-y-15" id="skillstack">
            <StyledHeader
                header="The tech & tools behind my workflow."
                tag="Skillstack"
            />

            <FadeIn>
                <SkillstackGrid />
            </FadeIn>
        </section>
    )
}

export default SkillstackSection