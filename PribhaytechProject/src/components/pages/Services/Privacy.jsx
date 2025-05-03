import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
      <p className="text-gray-600 mb-8 border-b pb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At NexGen Technologies Inc. ("Company," "we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <span className="font-medium">nexgentech.com</span> or use our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Please read this policy carefully. By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our practices, please do not use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We collect several types of information from and about users of our services, including:
          </p>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Personal Identification Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Full name, email address, phone number, mailing address</li>
              <li>Company name and job title (for business accounts)</li>
              <li>Account credentials (username and encrypted password)</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Financial Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Payment card details (processed securely via PCI-compliant payment processors)</li>
              <li>Billing address and transaction history</li>
              <li>Tax identification numbers (for business transactions)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Technical and Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address, browser type, device information</li>
              <li>Cookies and tracking pixels data</li>
              <li>Usage patterns and service interaction metrics</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We use the collected information for legitimate business purposes including:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Service Delivery</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Account creation and authentication</li>
                <li>Order processing and fulfillment</li>
                <li>Customer support and service notifications</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Business Operations</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Fraud prevention and security monitoring</li>
                <li>Service improvement and product development</li>
                <li>Legal compliance and regulatory requirements</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Marketing Communications</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Promotional offers (with opt-out option)</li>
                <li>Newsletters and product updates</li>
                <li>Personalized content recommendations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Analytics</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Website usage statistics</li>
                <li>Customer behavior analysis</li>
                <li>Market research and trend identification</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may share your information in the following circumstances:
          </p>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Service Providers</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Payment processing, hosting, analytics, customer support</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Business Partners</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Joint offerings with your consent</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Legal Authorities</td>
                  <td className="px-6 py-4 text-sm text-gray-700">When required by law or to protect rights</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Corporate Transactions</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Mergers, acquisitions, or asset sales</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 text-sm leading-relaxed">
            We require all third parties to respect your privacy and to treat your information in accordance with the law. We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. International Data Transfers</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For transfers to countries not recognized as providing an adequate level of data protection, we implement appropriate safeguards including standard contractual clauses approved by the European Commission.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We implement robust security measures including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and multi-factor authentication</li>
            <li>Employee privacy training and confidentiality agreements</li>
          </ul>
          <p className="text-gray-700 text-sm leading-relaxed">
            While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but will promptly notify you of any data breaches as required by applicable law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Data Protection Rights</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Depending on your jurisdiction, you may have the following rights regarding your personal data:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Access & Portability</h3>
              <p className="text-gray-700 text-sm">Request copies or machine-readable format of your data</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Correction</h3>
              <p className="text-gray-700 text-sm">Request rectification of inaccurate data</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Erasure</h3>
              <p className="text-gray-700 text-sm">Request deletion under certain circumstances</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Restriction</h3>
              <p className="text-gray-700 text-sm">Request limitation of processing</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Objection</h3>
              <p className="text-gray-700 text-sm">Object to certain processing activities</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Withdraw Consent</h3>
              <p className="text-gray-700 text-sm">Withdraw previously given consent</p>
            </div>
          </div>
          <p className="text-gray-700 mt-6 text-sm leading-relaxed">
            To exercise these rights, please contact our Data Protection Officer. We may require verification of your identity before processing requests. There is typically no charge for reasonable requests.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Authenticate users and prevent fraud</li>
            <li>Remember preferences and settings</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Deliver targeted advertisements (with consent)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            You can control cookies through your browser settings. Disabling cookies may affect certain website functionalities.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Policy Updates</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through prominent notices on our website or direct communication.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The "Last updated" date at the top indicates when this policy was last revised. Your continued use of our services after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have questions about this Privacy Policy or wish to exercise your data protection rights, please contact our Data Protection Officer:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-1">International Institute of Data Intelligence</h3>
              <p className="text-gray-700">Attn: Data Protection Officer</p>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-1">Mailing Address</h3>
              <address className="text-gray-700 not-italic">
              India: Near Gaba Chowk, Kashipur Road, Rudrapur-263153, Distt. Udham Singh Nagar<br />
                <br />
                Australia : 1248 High St Rd, wantirna South vic 3152.<br />
               
              </address>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-1">Email</h3>
              <p className="text-gray-700">Info@iidataintelligence-gmail.com</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
              <p className="text-gray-700">+91 7251947000</p>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;