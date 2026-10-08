import AccentText from "@/components/ui/accent-text"
import Button from "@/components/ui/button"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

const NotFoundPage = () => {
    return (
        <main className="container min-h-svh flex flex-col items-center justify-center">
            <AccentText>
                Page Not Found
            </AccentText>

            <h1 className="mb-6 md:mb-8 mt-1 md:mt-2 flex items-center text-[min(38cqw,18rem)] leading-[0.9]">
                404
            </h1>

            <p className="mb-8 max-w-2xl text-center text-xl/7 sm:text-2xl/8 md:mb-10 md:text-3xl/10">
                This page took a wrong turn. The link may be broken, or the page may have moved.
            </p>

            <div data-reveal="cta" className="flex flex-wrap justify-center gap-3 sm:gap-6">
                <Button icon={ ArrowLeftIcon } iconBeforeText={ true } href="/">
                    Back home
                </Button>

                <Button style="secondary" href="/projects">
                    View projects
                </Button>
            </div>
        </main>
    )
}

export default NotFoundPage