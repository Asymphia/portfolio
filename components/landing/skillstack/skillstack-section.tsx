import StyledHeader from "@/components/ui/styled-header"
import SkillstackGrid from "@/components/landing/skillstack/skillstack-grid"

const SkillstackSection = () => {
    return (
        <section className="container space-y-15">
            <StyledHeader
                header="The tech & tools behind my workflow."
                tag="Skillstack"
            />

            <SkillstackGrid />
        </section>
    )
}

export default SkillstackSection