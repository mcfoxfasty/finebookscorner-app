import React from 'react';

export function CopyrightPage() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-navy mb-8">Copyright Notice</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: March 19, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Copyright Protection</h2>
            <p>All content included on FineBooks Corner, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of FineBooks Corner or its content suppliers and protected by international copyright laws.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">2. Fair Use</h2>
            <p>Limited quotations from the content may be used, provided that there is proper attribution to FineBooks Corner. The content may not be copied, reproduced, modified, published, uploaded, posted, transmitted, or distributed in any way without our prior written permission.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">3. Book Information</h2>
            <p>Book information and metadata are provided by various sources including Google Books API. All book covers, descriptions, and other metadata are property of their respective owners.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Trademarks</h2>
            <p>FineBooks Corner™ and the FineBooks Corner logo are trademarks of FineBooks Corner. All other trademarks appearing on our website are the property of their respective owners.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">5. Contact Information</h2>
            <p>For copyright inquiries, please contact us at:</p>
            <p>Email: copyright@finebookscorner.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}