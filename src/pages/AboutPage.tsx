import React from 'react';
import { BookOpen, Users, Heart, Globe2 } from 'lucide-react';

const stats = [
  { icon: BookOpen, label: 'Books Available', value: '2M+' },
  { icon: Users, label: 'Happy Readers', value: '500K+' },
  { icon: Heart, label: 'Positive Reviews', value: '98%' },
  { icon: Globe2, label: 'Countries Served', value: '150+' },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Book enthusiast with 15+ years in publishing'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    bio: 'Expert in sustainable business practices'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chief Curator',
    bio: 'Literature professor turned book curator'
  }
];

export function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-300">
              Founded in 2010, FineBooks Corner has grown from a small local bookstore to a global
              marketplace for quality books. Our mission is to make literature accessible
              to everyone while promoting the joy of reading.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-navy mb-2">{value}</div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At FineBooks Corner, we believe that everyone deserves access to quality literature.
                Our mission is to create a vibrant community of readers where book lovers can discover,
                share, and discuss their favorite reads.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're committed to promoting literacy, fostering a love for reading,
                and building a global community of book enthusiasts. Every interaction on
                FineBooks Corner helps connect readers with their next favorite book.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800"
                alt="Library interior"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people behind FineBooks Corner
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-sm p-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
                  <p className="text-emerald-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}