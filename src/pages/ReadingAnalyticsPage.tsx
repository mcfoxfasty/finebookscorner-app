import React from 'react';
import { BarChart, LineChart, PieChart, TrendingUp, Clock, BookOpen, Calendar } from 'lucide-react';

export function ReadingAnalyticsPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Reading Analytics</h1>
          <p className="text-xl text-gray-600">
            Track your reading habits and progress over time
          </p>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Books Read</h3>
              <BookOpen className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="text-3xl font-bold text-navy">24</p>
            <p className="text-sm text-emerald-600">+3 from last month</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Reading Time</h3>
              <Clock className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="text-3xl font-bold text-navy">156h</p>
            <p className="text-sm text-emerald-600">12h this week</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Current Streak</h3>
              <TrendingUp className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="text-3xl font-bold text-navy">15 days</p>
            <p className="text-sm text-emerald-600">Best: 28 days</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Pages Read</h3>
              <Calendar className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="text-3xl font-bold text-navy">4,521</p>
            <p className="text-sm text-emerald-600">Avg. 150 per day</p>
          </div>
        </div>

        {/* Reading Progress Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Reading Progress</h3>
              <LineChart className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-500">Reading progress chart will be displayed here</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Genre Distribution</h3>
              <PieChart className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-500">Genre distribution chart will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Reading Goals */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Reading Goals</h3>
            <BarChart className="h-6 w-6 text-emerald-600" />
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Yearly Goal (50 books)</span>
                <span className="text-gray-900 font-medium">24/50</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '48%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Monthly Goal (5 books)</span>
                <span className="text-gray-900 font-medium">3/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Daily Reading Time (2 hours)</span>
                <span className="text-gray-900 font-medium">1.5/2h</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}