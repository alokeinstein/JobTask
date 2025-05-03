import React from "react";
import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const TermsAndConditions = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-[#b42638]/90 py-20 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-[#b42638]/10 p-6 rounded-lg border-l-4 border-[#b42638] mb-8">
            <p className="text-gray-700">
              Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-6">
            By accessing or using any services provided by Pribhaytech ("Company", "we", "us", or "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            2. Services Provided
          </h2>
          <p className="text-gray-700 mb-4">
            We provide digital solutions including but not limited to:
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Web development and design services</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Digital marketing solutions</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Consulting and advisory services</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            3. User Responsibilities
          </h2>
          <p className="text-gray-700 mb-4">
            When using our services, you agree to:
          </p>
          <ol className="mb-6 space-y-3 list-decimal list-inside">
            <li className="text-gray-700 pl-2">Provide accurate and complete information</li>
            <li className="text-gray-700 pl-2">Not engage in any unlawful activities</li>
            <li className="text-gray-700 pl-2">Not attempt to disrupt our services</li>
            <li className="text-gray-700 pl-2">Comply with all applicable laws and regulations</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            4. Intellectual Property
          </h2>
          <p className="text-gray-700 mb-6">
            All content, trademarks, service marks, trade names, logos, and icons are proprietary to Pribhaytech. Nothing contained on the service should be construed as granting any license or right to use any trademark without our prior written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-6">
            To the maximum extent permitted by law, Pribhaytech shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            6. Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            Your use of our services is also governed by our Privacy Policy, which explains how we collect, use and protect your information. Please review our Privacy Policy to understand our practices.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            7. Changes to Terms
          </h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the new Terms on this page. Changes are effective immediately upon posting.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            8. Contact Information
          </h2>
          <p className="text-gray-700 mb-6">
            For any questions about these Terms, please contact us at:
            <br />
            <a href="mailto:legal@pribhaytech.com" className="text-[#b42638] hover:underline">
            Info@iidataintelligence-gmail.com
            </a>
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
            <p className="text-gray-700">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;