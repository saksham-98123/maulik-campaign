import React from "react";
import { Heart, Users, Building, GraduationCap, Phone, Mail, MapPin, Calendar, Award, Target, CheckCircle, Star, Handshake } from "lucide-react";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <span className="inline-block mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2 rounded-full font-semibold">
                            2025 Airdrie City Council Candidate
                        </span>
                        <h1 className="text-6xl font-bold mb-6 leading-tight">Maulik Shah</h1>
                        <h2 className="text-3xl mb-8 text-blue-100 font-medium">Your Voice on Airdrie City Council</h2>
                        <p className="text-xl mb-10 leading-relaxed max-w-4xl mx-auto">
                            A proven community leader, Professional Engineer, and founder of the Indian Society of Airdrie.
                            With over 20 years of professional experience and a track record of delivering results for our community,
                            I'm ready to bring practical solutions and fresh perspectives to City Council.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#vision" className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-3 rounded shadow font-semibold transition">My Vision for Airdrie</a>
                            <a href="#contact" className="border border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-3 rounded shadow font-semibold transition">Join the Campaign</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                            <div className="text-gray-600">Families Supported</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
                            <div className="text-gray-600">Years Engineering Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">10</div>
                            <div className="text-gray-600">Years in Airdrie</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                            <div className="text-gray-600">Community Events Organized</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold mb-6 text-gray-800">About Maulik Shah</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A dedicated leader who combines professional expertise with grassroots community action
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                            <div>
                                <img
                                    src="/lovable-uploads/ee6b4dae-239b-4453-ae66-442739c1af63.png"
                                    alt="Maulik Shah with community volunteers at Fight Against Hunger Drive"
                                    className="rounded-xl shadow-2xl w-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-6 text-gray-800">Ready to Serve You</h3>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Since moving to Airdrie in 2015 with my wife and four children, I've witnessed firsthand
                                    the incredible potential of our community. As a Professional Engineer with over two decades
                                    of experience in industrial refrigeration, I understand complex systems and how to make them work better.
                                </p>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    But engineering taught me more than technical skills—it taught me to solve problems systematically,
                                    work within budgets, and deliver projects on time. These same principles guide my community work
                                    and will guide my service on City Council.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-6 w-6 text-green-600" />
                                            <span className="text-gray-700 font-medium">P.Eng. Licensed Professional Engineer</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-6 w-6 text-green-600" />
                                            <span className="text-gray-700 font-medium">Master's in Mechanical Engineering</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-6 w-6 text-green-600" />
                                            <span className="text-gray-700 font-medium">Co-Founder, Indian Society of Airdrie</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-6 w-6 text-green-600" />
                                            <span className="text-gray-700 font-medium">20+ Years Management Experience</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-6 w-6 text-green-600" />
                                            <span className="text-gray-700 font-medium">Airdrie Resident Since 2015</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="h-6 w-6 text-green-600" />
                                            <span className="text-gray-700 font-medium">Father of Four Children</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Political Endorsements */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-gray-800">Recognition & Partnerships</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white shadow-lg rounded-xl p-6">
                                <div className="flex items-center gap-3 text-2xl font-bold mb-2">
                                    <Handshake className="h-8 w-8 text-blue-600" />
                                    Premier Danielle Smith
                                </div>
                                <p className="text-gray-600 text-lg">
                                    Premier Danielle Smith personally attended our Volunteer Appreciation Award Night in December 2024,
                                    recognizing the outstanding community contributions organized by Maulik and the Indian Society of Airdrie.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg rounded-xl p-6">
                                <div className="flex items-center gap-3 text-2xl font-bold mb-2">
                                    <Users className="h-8 w-8 text-green-600" />
                                    Blake Richards, MP
                                </div>
                                <p className="text-gray-600 text-lg">
                                    Working alongside Member of Parliament Blake Richards on various community initiatives,
                                    building strong federal-municipal partnerships that benefit all Airdrie residents.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Recognized as "Airdrie's Men We Admire"</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                "This recognition reflects the values I strive to embody in my work and community involvement.
                                It motivates me to continue advocating for positive change in Airdrie and inspiring others to get involved."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Major Achievements */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Proven Track Record</h2>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-l-red-500">
                                <div className="flex items-center gap-3 text-xl font-bold mb-2">
                                    <Heart className="h-7 w-7 text-red-500" />
                                    Fight Against Hunger Drive
                                </div>
                                <span className="inline-block w-fit bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">2025 Flagship Initiative</span>
                                <p className="text-gray-600 mb-4">
                                    Founded and leads this grassroots initiative providing free groceries to over 1,000 families every Saturday,
                                    directly addressing food insecurity in our community.
                                </p>
                                <div className="text-sm text-gray-500">
                                    <strong>Impact:</strong> 1,000+ families served • Weekly distribution • 100% volunteer-driven
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-l-gold-500">
                                <div className="flex items-center gap-3 text-xl font-bold mb-2">
                                    <Award className="h-7 w-7 text-yellow-600" />
                                    Volunteer Recognition Event
                                </div>
                                <span className="inline-block w-fit bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">December 2024</span>
                                <p className="text-gray-600 mb-4">
                                    Organized a major community event attended by Premier Danielle Smith, honoring outstanding
                                    volunteer contributions throughout Airdrie.
                                </p>
                                <div className="text-sm text-gray-500">
                                    <strong>Recognition:</strong> Premier attendance • 50+ volunteers honored • Community-wide impact
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-l-blue-500">
                                <div className="flex items-center gap-3 text-xl font-bold mb-2">
                                    <Users className="h-7 w-7 text-blue-500" />
                                    Indian Society of Airdrie
                                </div>
                                <span className="inline-block w-fit bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">Co-Founder</span>
                                <p className="text-gray-600 mb-4">
                                    Co-founded organization now supporting over 1,000 families with employment assistance,
                                    social integration, and business networking opportunities.
                                </p>
                                <div className="text-sm text-gray-500">
                                    <strong>Services:</strong> Job placement • Cultural events • Business support • Social integration
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-l-green-500">
                                <div className="flex items-center gap-3 text-xl font-bold mb-2">
                                    <GraduationCap className="h-7 w-7 text-green-500" />
                                    Free Dental Camp
                                </div>
                                <span className="inline-block w-fit bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">Health Initiative</span>
                                <p className="text-gray-600 mb-4">
                                    Organized and led a free dental camp for underprivileged children, providing essential dental care and education.
                                </p>
                                <div className="text-sm text-gray-500">
                                    <strong>Impact:</strong> 200+ children served • Free dental checkups • Community health focus
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <footer id="contact" className="bg-primary text-white py-10">
                <div className="container mx-auto text-center">
                    <p className="mb-2 font-bold text-lg">Get in Touch</p>
                    <p>I want to hear from you. Please reach out with your questions, concerns, and ideas.</p>
                    <div className="mt-4">
                        <a href="mailto:connect@vote4maulik.ca" className="hover:text-secondary text-lg">connect@vote4maulik.ca</a>
                    </div>
                    <div className="mt-8 border-t border-blue-800 pt-6">
                        <p className="text-sm">Paid for by the Maulik Shah for Airdrie Campaign</p>
                        <p className="text-sm">&copy; {new Date().getFullYear()} Maulik Shah for Airdrie. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
