import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Spacer } from "./ui/spacer"

export default function QuestionsComponent() {
    return (
        <section>

            <div className="w-full bg-[#D9F3F1] p-4 md:p-8 lg:py-32 lg:px-12">
                <div className="mx-auto max-w-screen-xl rounded-3xl bg-white p-4 px-10 md:p-12 text-center">
                    {/* Overlapping Avatars */}
                    <div className="flex justify-center mb-6 md:mb-8">
                        <div className="flex -space-x-4">
                            <Avatar className="h-16 w-16 border-4 border-white bg-[##D9F3F1]">
                                <AvatarImage src="/images/avatar1.png" alt="Team member" />
                                <AvatarFallback>TM</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-20 w-20 border-4 border-white bg-[#f8e1e8]">
                                <AvatarImage src="/images/avatar2.png" alt="Team member" />
                                <AvatarFallback>TM</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-16 w-16 border-4 border-white bg-[##D9F3F1]">
                                <AvatarImage src="/images/avatar1.png" alt="Team member" />
                                <AvatarFallback>TM</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-xl sm:text-4xl font-medium sm:font-bold md:font-bold mb-4">Still have questions?</h2>

                    {/* Subheading - responsive layout for mobile/desktop */}
                    <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                        Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
                    </p>

                    {/* CTA Button */}
                    <Button className="bg-brand-500 hover:bg-[#0aa89edd] text-white font-medium px-6 py-3 h-auto text-lg rounded-lg">
                        Get in touch
                    </Button>
                </div>
            </div>
            <Spacer y={120} className="bg-[#F5F5F5]"/>
        </section>
    )
}

