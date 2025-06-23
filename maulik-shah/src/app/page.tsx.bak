"use client";

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useEmblaCarousel from 'embla-carousel-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
    {children}
  </a>
);

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const navLinks = [
    { href: '#about', label: 'About Me' },
    { href: '#vision', label: 'My Vision' },
    { href: '#action', label: 'Record of Action' },
    { href: '#gallery', label: 'Community' },
    { href: '#contact', label: 'Contact' },
  ];

  const heroImages = [
    { src: '/img/airdrie-hero.jpg', alt: 'Nose Creek Park in Airdrie' },
    { src: '/img/airdrie-community.jpg', alt: 'Community park in Airdrie' },
  ];

  const galleryImages = Array.from({ length: 8 }, (_, i) => ({
    src: `/img/gallery-${i + 1}.jpeg`,
    alt: `Community gallery image ${i + 1}`,
  }));

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-primary shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-white text-2xl font-bold">
              Maulik Shah <span className="text-secondary font-semibold">for Airdrie</span>
            </a>
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-primary pb-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-white hover:bg-blue-800 px-6 py-2 rounded-md text-base font-medium transition-colors">{link.label}</a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container h-full">
            {heroImages.map((img, index) => (
              <div key={index} className="embla__slide relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white shadow-lg">
            A Better Future for Airdrie
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
            Focused on smart growth, community well-being, and a transparent government for all residents.
          </p>
        </div>
        <button className="embla__prev absolute top-1/2 left-4 z-20 -translate-y-1/2" onClick={scrollPrev}>
          &#10094;
        </button>
        <button className="embla__next absolute top-1/2 right-4 z-20 -translate-y-1/2" onClick={scrollNext}>
          &#10095;
        </button>
      </section>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section
          id="about"
          className="section-padding"
          style={{
            backgroundImage: "url('/img/about-background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container bg-white bg-opacity-90 p-10 rounded-lg shadow-xl">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <Image
                  src="/img/maulik-shah.png"
                  alt="Maulik Shah"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              </div>
              <div className="md:col-span-3">
                <h2 className="text-4xl font-bold mb-6 text-primary">My Story: Airdrie Is My Home</h2>
                <p className="text-lg mb-4 text-text-secondary leading-relaxed">
                  For over 14 years, my family and I have proudly called Airdrie home. As a father of four, I am deeply invested in the future of our city—a future where all families can thrive. This drive led me to co-found the Indian Society of Airdrie, where I've worked to support newcomers and build a more connected, inclusive community for everyone.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  My professional background in engineering has given me extensive experience in project planning and responsible development—skills I am ready to put to work for you at City Hall.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="section-padding bg-surface">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-12">My Vision for a Better Airdrie</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Responsible Financial Stewardship</h3>
                <p className="text-text-secondary">I will work to attract new businesses to grow our economy and reduce the tax burden on residents, ensuring your money is spent wisely and transparently.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2">Infrastructure for a Growing City</h3>
                <p className="text-text-secondary">I will prioritize smart investments in our roads and transit to ease congestion and better connect our communities for the future.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2">A Strong, Supported Community</h3>
                <p className="text-text-secondary">I will be a strong advocate for better healthcare access and will champion investment in the parks and facilities that improve our quality of life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Record of Action Section */}
        <section id="action" className="section-padding bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">My Record of Action</h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg text-center text-text-secondary mb-10">I believe that leadership is about more than words; it's about getting things done. Here are some of the initiatives I am proud to have led:</p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-secondary text-white p-3 rounded-full mr-4 mt-1">
                    <span>&#10003;</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Co-founded the Indian Society of Airdrie</h4>
                    <p className="text-text-secondary">To support newcomers and foster a more inclusive community.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary text-white p-3 rounded-full mr-4 mt-1">
                    <span>&#10003;</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Initiated the "Fight Against Hunger Drive"</h4>
                    <p className="text-text-secondary">Successfully provided free groceries to over 1,000 families in need.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary text-white p-3 rounded-full mr-4 mt-1">
                    <span>&#10003;</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Organized a Free Dental Camp</h4>
                    <p className="text-text-secondary">Provided essential dental care for underprivileged children in our community.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section-padding bg-surface">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Engaging with Our Community</h2>
            {isClient && (
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="2rem">
                  {galleryImages.map((image, index) => (
                    <div key={image.src} className="cursor-pointer" onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={600}
                        className="w-full h-auto object-contain rounded-lg shadow-md hover:shadow-xl transition-shadow"
                      />
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        </section>

      </main>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryImages}
        index={lightboxIndex}
      />

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

export default Home;
