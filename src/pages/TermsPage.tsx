import React from 'react';

export function TermsPage() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-navy mb-8">Terms and Conditions</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: March 19, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Agreement to Terms</h2>
            <p>By accessing and using FineBooks Corner, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, you may not access our service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily access the materials on FineBooks Corner for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">3. User Accounts</h2>
            <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Intellectual Property</h2>
            <p>The service and its original content, features, and functionality are owned by FineBooks Corner and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">5. Disclaimer</h2>
            <p>The materials on FineBooks Corner are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">6. Limitations</h2>
            <p>In no event shall FineBooks Corner or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">7. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>Email: legal@finebookscorner.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}