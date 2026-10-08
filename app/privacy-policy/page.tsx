import { ReactNode } from "react"
import RollingText from "@/components/ui/rolling-text"
import Link from "next/link"

const EMAIL = "hello@juliakawa.dev"
const HOSTING_LOCATION = "Poland"
const LAST_UPDATED = "7 October 2026"

const Section = ({ title, children }: { title: string, children: ReactNode }) => (
    <section className="space-y-3 md:space-y-4">
        <h2 className="text-2xl md:text-3xl">{ title }</h2>
        { children }
    </section>
)

const List = ({ children }: { children: ReactNode }) => (
    <ul className="list-disc space-y-1 md:space-y-2 pl-4 md:pl-6">{ children }</ul>
)

const MailLink = () => (
    <Link href={ `mailto:${ EMAIL }` } className="text-black transition-all hover:opacity-80 active:opacity-60">
        <RollingText>
            { EMAIL }
        </RollingText>
    </Link>
)

const PrivacyPolicyPage = () => {
    return (
        <main className="container pt-28 md:pt-32 lg:pt-40">
            <article className="space-y-10 md:space-y-12 [&_strong]:font-medium [&_strong]:text-black">
                <header className="space-y-4">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl text-black mb-8">Privacy Policy</h1>

                    <p>
                        Last updated: { LAST_UPDATED }
                    </p>

                    <p>
                        Protecting your privacy is a top priority. This document explains how personal data provided through
                        the website juliakawa.dev is collected and processed in accordance with the EU General Data Protection
                        Regulation (GDPR).
                    </p>
                </header>

                <Section title="1. Data Controller">
                    <p>
                        The Data Controller responsible for your personal data is <strong>Julia Kawa</strong>.
                    </p>

                    <p>
                        Contact: <MailLink />
                    </p>
                </Section>

                <Section title="2. Scope and Purpose of Data Processing">
                    <p>
                        This website does not require user accounts and does not store personal data itself. The only
                        place where you can submit personal data is the contact form or a direct e-mail message.
                    </p>

                    <p>The contact form collects the following data:</p>

                    <List>
                        <li>Name (required)</li>
                        <li>E-mail address (required)</li>
                        <li>Company name (required)</li>
                        <li>Role selection (required)</li>
                        <li>Link to the offer or website (optional)</li>
                        <li>Message content (optional)</li>
                    </List>

                    <p>
                        <strong>Purpose:</strong> your data is processed solely to respond to your inquiry, to maintain
                        the correspondence, and to consider a job or recruitment opportunity.
                    </p>
                </Section>

                <Section title="3. Legal Basis and Data Retention">
                    <p><strong>Legal basis:</strong></p>

                    <List>
                        <li>
                            Art. 6(1)(f) GDPR (legitimate interest): handling incoming correspondence and answering inquiries.
                        </li>

                        <li>
                            Art. 6(1)(b) GDPR: where the contact is a step taken at your request before entering into
                            a contract, such as an employment or other work-related agreement.
                        </li>
                    </List>

                    <p>
                        <strong>Retention:</strong> messages are stored in the e-mail inbox of the Controller for as long
                        as they are needed to handle your inquiry and any related recruitment process, or until you ask
                        for them to be deleted. To request deletion, write to <MailLink />.
                    </p>
                </Section>

                <Section title="4. Data Recipients and Third-Country Transfers">
                    <List>
                        <li>
                            <strong>No database:</strong> the website does not store form submissions in a database.
                            Messages are delivered directly to the inbox at <MailLink />.
                        </li>

                        <li>
                            <strong>Service providers:</strong> e-mail delivery relies on infrastructure provided
                            by Google Ireland Ltd. / Google LLC (SMTP).
                        </li>

                        <li>
                            <strong>Transfers outside the EEA:</strong> because Google operates globally, data may be
                            processed on servers outside the European Economic Area, for example in the United States.
                            Such transfers are safeguarded by Standard Contractual Clauses approved by the European
                            Commission and by the EU-U.S. Data Privacy Framework.
                        </li>
                    </List>
                </Section>

                <Section title="5. Hosting and Server Logs">
                    <p>
                        The website is hosted on a server located in { HOSTING_LOCATION }, operated on behalf of
                        the Controller by a trusted third party. Like any web server, it may record technical data
                        needed to deliver and secure the site, such as your IP address, browser type and time of
                        the request, in standard server logs. The Controller does not use this data to identify
                        visitors.
                    </p>

                    <p>
                        Legal basis: Art. 6(1)(f) GDPR (legitimate interest in running and securing the website).
                        Logs are used only for security and troubleshooting and are not transferred outside the
                        European Economic Area.
                    </p>
                </Section>

                <Section title="6. Cookies and Tracking Technologies">
                    <List>
                        <li>This website does <strong>not</strong> use cookies, neither first-party nor third-party.</li>

                        <li>
                            It does not use analytics, performance tracking or marketing scripts (such as Google Analytics
                            or Meta Pixel), and it does not profile visitors.
                        </li>
                    </List>
                </Section>

                <Section title="7. Your Rights">
                    <p>Under the GDPR, you have the right to:</p>

                    <List>
                        <li><strong>Access:</strong> obtain information about your data and a copy of it.</li>
                        <li><strong>Rectification:</strong> have inaccurate data corrected.</li>
                        <li><strong>Erasure:</strong> have your data deleted when there is no legal obligation to keep it.</li>
                        <li><strong>Restriction:</strong> request limited processing of your data.</li>
                        <li><strong>Object:</strong> object to processing based on legitimate interest.</li>
                        <li>
                            <strong>Data portability:</strong> receive the data you provided in a structured format, where
                            processing is based on a contract.
                        </li>
                        <li>
                            <strong>Lodge a complaint</strong> with a supervisory authority. In Poland this is the
                            President of the Personal Data Protection Office (UODO), ul. Stawki 2, 00-193 Warsaw, or
                            the data protection authority in your own EU country.
                        </li>
                    </List>

                    <p>
                        To exercise any of these rights, write to <MailLink />.
                    </p>
                </Section>

                <Section title="8. Voluntary Provision of Data">
                    <p>
                        Providing your personal data in the contact form is voluntary, but it is necessary to send
                        a message and receive a reply.
                    </p>
                </Section>

                <Section title="9. Automated Decision-Making">
                    <p>
                        Your personal data is not subject to automated decision-making or profiling.
                    </p>
                </Section>
            </article>
        </main>
    )
}

export default PrivacyPolicyPage