import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Users, Building, GraduationCap, Phone, Mail, MapPin, Calendar, Award, Target, CheckCircle, Star, Handshake } from "lucide-react";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
                            2025 Airdrie City Council Candidate
                        </Badge>
                        <h1 className="text-6xl font-bold mb-6 leading-tight">Maulik Shah</h1>
                        <h2 className="text-3xl mb-8 text-blue-100 font-medium">Your Voice on Airdrie City Council</h2>
                        <p className="text-xl mb-10 leading-relaxed max-w-4xl mx-auto">
                            A proven community leader, Professional Engineer, and founder of the Indian Society of Airdrie.
                            With over 20 years of professional experience and a track record of delivering results for our community,
                            I'm ready to bring practical solutions and fresh perspectives to City Council.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-3">
                                My Vision for Airdrie
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-3">
                                Join the Campaign
                            </Button>
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
                            <Card className="bg-white shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-2xl">
                                        <Handshake className="h-8 w-8 text-blue-600" />
                                        Premier Danielle Smith
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-lg">
                                        Premier Danielle Smith personally attended our Volunteer Appreciation Award Night in December 2024,
                                        recognizing the outstanding community contributions organized by Maulik and the Indian Society of Airdrie.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-2xl">
                                        <Users className="h-8 w-8 text-green-600" />
                                        Blake Richards, MP
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-lg">
                                        Working alongside Member of Parliament Blake Richards on various community initiatives,
                                        building strong federal-municipal partnerships that benefit all Airdrie residents.
                                    </p>
                                </CardContent>
                            </Card>
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
                            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <Heart className="h-7 w-7 text-red-500" />
                                        Fight Against Hunger Drive
                                    </CardTitle>
                                    <Badge className="w-fit bg-red-100 text-red-800">2025 Flagship Initiative</Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Founded and leads this grassroots initiative providing free groceries to over 1,000 families every Saturday,
                                        directly addressing food insecurity in our community.
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        <strong>Impact:</strong> 1,000+ families served • Weekly distribution • 100% volunteer-driven
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-gold-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <Award className="h-7 w-7 text-yellow-600" />
                                        Volunteer Recognition Event
                                    </CardTitle>
                                    <Badge className="w-fit bg-yellow-100 text-yellow-800">December 2024</Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Organized a major community event attended by Premier Danielle Smith, honoring outstanding
                                        volunteer contributions throughout Airdrie.
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        <strong>Recognition:</strong> Premier attendance • 50+ volunteers honored • Community-wide impact
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <Users className="h-7 w-7 text-blue-500" />
                                        Indian Society of Airdrie
                                    </CardTitle>
                                    <Badge className="w-fit bg-blue-100 text-blue-800">Co-Founder</Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Co-founded organization now supporting over 1,000 families with employment assistance,
                                        social integration, and business networking opportunities.
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        <strong>Services:</strong> Job placement • Cultural events • Business support • Social integration
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <GraduationCap className="h-7 w-7 text-green-500" />
                                        Free Dental Camp
                                    </CardTitle>
                                    <Badge className="w-fit bg-green-100 text-green-800">Health Initiative</Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Partnered with Tooth Pal Pediatric Dental to provide free dental care for underprivileged
                                        children in Airdrie, ensuring access to essential healthcare.
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        <strong>Partnership:</strong> Professional dental clinic • Free services • Children focused
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <Building className="h-7 w-7 text-purple-500" />
                                        Business & Employment Expo
                                    </CardTitle>
                                    <Badge className="w-fit bg-purple-100 text-purple-800">Economic Development</Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Organized business networking events and employment fairs, helping newcomers find opportunities
                                        and supporting local business growth.
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        <strong>Focus:</strong> Job creation • Business networking • Newcomer integration
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <Star className="h-7 w-7 text-orange-500" />
                                        Cultural Bridge Building
                                    </CardTitle>
                                    <Badge className="w-fit bg-orange-100 text-orange-800">Community Unity</Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Hosted unique Indo-Canadian Stampede Breakfasts, Diwali celebrations, and multicultural events
                                        that bring diverse communities together.
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        <strong>Events:</strong> Stampede breakfast • Cultural festivals • Youth mentorship • Senior support
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img
                                    src="/lovable-uploads/1ac19aba-eee8-41d2-a7ea-a2c9c386b211.png"
                                    alt="Spring Festival community celebration featuring cultural performances"
                                    className="rounded-xl shadow-2xl w-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-6 text-gray-800">Building Bridges, Creating Opportunities</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">Organized unique Indo-Canadian Stampede Breakfast events that celebrate our diverse heritage</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">Facilitated over 200 employment opportunities for new immigrants and local residents</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">Provided mentorship programs for youth and comprehensive support services for seniors</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">Created business networking opportunities that have helped launch 15+ local enterprises</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">Distributed thermal appreciation bags to recognize and encourage ongoing volunteer service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Platform */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold mb-6 text-gray-800">My Platform for Airdrie</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Practical solutions backed by experience, focused on the issues that matter most to families
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            <Card className="bg-white shadow-xl">
                                <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                                    <CardTitle className="text-3xl flex items-center gap-3">
                                        <Target className="h-8 w-8" />
                                        Immediate Priorities
                                    </CardTitle>
                                    <CardDescription className="text-blue-100 text-lg">
                                        Day-one commitments for urgent community needs
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 p-2 rounded-lg">
                                                <Building className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">Healthcare Infrastructure</h4>
                                                <p className="text-gray-600">Work with Provincial Government to upgrade Airdrie Community Health Centre emergency services and reduce Calgary hospital trips</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 p-2 rounded-lg">
                                                <Users className="h-6 w-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">Senior Support Systems</h4>
                                                <p className="text-gray-600">Establish comprehensive seniors helpline and expand support services for our aging population</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-purple-100 p-2 rounded-lg">
                                                <MapPin className="h-6 w-6 text-purple-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">Better Transportation</h4>
                                                <p className="text-gray-600">Improve transportation to hospitals and labs, plus better internal Airdrie transit systems</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-orange-100 p-2 rounded-lg">
                                                <Heart className="h-6 w-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">Food Security</h4>
                                                <p className="text-gray-600">Expand food bank weekend availability and strengthen community food security programs</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white shadow-xl">
                                <CardHeader className="bg-green-600 text-white rounded-t-lg">
                                    <CardTitle className="text-3xl flex items-center gap-3">
                                        <Star className="h-8 w-8" />
                                        Long-term Vision
                                    </CardTitle>
                                    <CardDescription className="text-green-100 text-lg">
                                        Building sustainable growth for Airdrie's future
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 p-2 rounded-lg">
                                                <Target className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">"Airdrie First" Initiative</h4>
                                                <p className="text-gray-600">Prioritize local resources, businesses, and talent while managing sustainable growth and property tax stability</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 p-2 rounded-lg">
                                                <Building className="h-6 w-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">Business & Economic Growth</h4>
                                                <p className="text-gray-600">Enhanced local business support programs and employment opportunities for all residents</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-purple-100 p-2 rounded-lg">
                                                <GraduationCap className="h-6 w-6 text-purple-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">Youth Development</h4>
                                                <p className="text-gray-600">Comprehensive education, employment, and youth empowerment programs for the next generation</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-orange-100 p-2 rounded-lg">
                                                <Users className="h-6 w-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">Community Safety</h4>
                                                <p className="text-gray-600">Enhanced domestic abuse prevention and support services for vulnerable community members</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl font-bold mb-8">Ready to Build Airdrie's Future Together?</h2>
                        <p className="text-xl mb-10 leading-relaxed">
                            Join me in creating positive change for our community. Whether you want to volunteer,
                            learn more about my platform, or simply connect, I'd love to hear from you.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="flex flex-col items-center gap-4 p-6 bg-white/10 rounded-xl">
                                <Phone className="h-10 w-10 text-blue-200" />
                                <h3 className="font-bold text-xl">Phone</h3>
                                <p className="text-blue-200">Contact campaign office for details</p>
                            </div>
                            <div className="flex flex-col items-center gap-4 p-6 bg-white/10 rounded-xl">
                                <Mail className="h-10 w-10 text-blue-200" />
                                <h3 className="font-bold text-xl">Email</h3>
                                <p className="text-blue-200">maulik@airdrieforward.ca</p>
                            </div>
                            <div className="flex flex-col items-center gap-4 p-6 bg-white/10 rounded-xl">
                                <MapPin className="h-10 w-10 text-blue-200" />
                                <h3 className="font-bold text-xl">Location</h3>
                                <p className="text-blue-200">Proudly serving all of Airdrie</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 text-xl px-12 py-4">
                                Volunteer with Our Campaign
                            </Button>
                            <p className="text-blue-200">
                                Authorized by Maulik Shah Campaign Team • Paid for by Maulik Shah Campaign
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Maulik Shah for Airdrie City Council</h3>
                        <p className="text-gray-400 text-lg mb-6">
                            Building Community • Creating Connections • Delivering Results
                        </p>
                        <Separator className="bg-gray-600 mb-6" />
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 mb-4">
                            <span>Professional Engineer (P.Eng.)</span>
                            <span>•</span>
                            <span>Community Leader</span>
                            <span>•</span>
                            <span>Airdrie Resident Since 2015</span>
                            <span>•</span>
                            <span>Father of Four</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            © 2025 Maulik Shah Campaign. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
