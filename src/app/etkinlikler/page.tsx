'use client';

import React from 'react';

const activities = [
  {
    title: 'İkiz Kardeş Atölyesi',
    description: 'İkizlerin birlikte katılabileceği yaratıcı aktiviteler ve paylaşım seansları',
    date: '15 Mayıs 2024',
    location: 'Online',
    type: 'Workshop'
  },
  {
    title: 'Aile Danışmanlığı',
    description: 'İkiz çocuklu aileler için özel danışmanlık seansları',
    date: 'Her Cumartesi',
    location: 'Online / Yüz yüze',
    type: 'Danışmanlık'
  },
  {
    title: 'Grup Terapisi',
    description: 'İkizler için grup terapisi seansları',
    date: 'Her Pazar',
    location: 'Online',
    type: 'Terapi'
  }
];

export default function Activities() {
  return (
    <div className="min-h-screen p-8" role="main">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Etkinlikler</h1>
        
        <div className="grid gap-6" role="list" aria-label="Etkinlikler listesi">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              role="listitem"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {activity.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="flex items-center text-gray-500 space-x-4">
                    <span role="img" aria-label="Tarih">📅</span>
                    <span>{activity.date}</span>
                    <span role="img" aria-label="Konum">📍</span>
                    <span>{activity.location}</span>
                  </div>
                </div>
                <button
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  aria-label={`${activity.title} etkinliğine katıl`}
                >
                  Katıl
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 