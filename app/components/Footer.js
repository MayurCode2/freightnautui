"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ isDark }) {
  const footerRef = useRef(null);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Freight Forwarding', href: '/services/freight' },
    { name: 'Custom Clearance', href: '/services/customs' },
    { name: 'Warehousing', href: '/services/warehousing' },
    { name: 'Supply Chain', href: '/services/supply-chain' }
  ];

  const offices = [
    {
      city: 'Hyderabad',
      address: 'C8, 14th Floor, Orbit by Auro realty, Raidurg, Hyderabad, Telangana 500081'
    },
    {
      city: 'Pune',
      address: 'Office No 919, Suratwala Mark Plazoo, Opposite Indian Oil Petrol Pump, Phase 1, Hinjewadi, Pune, Maharshtra, 411057'
    },
    {
      city: 'Bengaluru',
      address: '8th block, Padmavathi Complex, 2, 80 Feet Rd, opposite to indoor stadium, Koramangala, Bengaluru, Karnataka, 560095'
    },
    {
      city: 'Loni',
      address: 'Office No. 21,22,42,43, First Floor, Loni central, loni KD Tal- Rahata, Dist: Ahmednagar, Maharashtra, 413736'
    },
    {
      city: 'Austin, US',
      address: 'P99soft Inc 2025 Guadalupe Street, Suite 260, Austin, Texas 78705'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className={`footer-section ${isDark ? 'dark-footer' : 'light-footer'}`}>
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-company-info">
          <h2 className="company-name">Freightnaut</h2>
          <p className="company-description">
            Your trusted partner in global logistics solutions.
          </p>
          <div className="social-links">
            {/* Add your social media links here */}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            {services.map((service, index) => (
              <li key={index}>
                <Link href={service.href} className="footer-link">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div className="footer-offices">
          <h3 className="footer-title">Our Offices</h3>
          <div className="offices-grid">
            {offices.map((office, index) => (
              <div key={index} className="office-item">
                <h4 className="office-city">{office.city}</h4>
                <p className="office-address">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} Freightnaut. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 