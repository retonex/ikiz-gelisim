'use client';

import React from 'react';
import Image from 'next/image';

const games = [
  {
    title: 'Duygu Eşleştirme',
    description: 'Farklı duygu durumlarını tanıma ve eşleştirme oyunu',
    image: '/images/emotions.jpg',
    difficulty: 'Kolay',
    category: 'Duygusal Gelişim'
  },
  {
    title: 'Karakter Oluşturma',
    description: 'Kendi karakterini oluştur ve özelliklerini belirle',
    image: '/images/character.jpg',
    difficulty: 'Orta',
    category: 'Kimlik Gelişimi'
  },
  {
    title: 'Sosyal Senaryolar',
    description: 'Farklı sosyal durumlarda nasıl davranılması gerektiğini öğreten interaktif oyun',
    image: '/images/social.jpg',
    difficulty: 'Zor',
    category: 'Sosyal İlişkiler'
  },
  {
    title: 'Ben Kimim?',
    description: 'Kişilik özelliklerini keşfetmeye yönelik eğlenceli bir quiz oyunu',
    image: '/images/identity.jpg',
    difficulty: 'Orta',
    category: 'Bireyselleşme'
  }
];

export default function Games() {
  return (
    <div className="min-h-screen p-8" role="main">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Oyunlar</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Oyunlar listesi">
          {games.map((game, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              role="listitem"
            >
              <div className="relative h-48">
                <Image
                  src={game.image}
                  alt={`${game.title} oyununun görseli`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4" role="img" aria-label={game.difficulty}>
                  {game.difficulty}
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {game.title}
                </h2>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <button
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  aria-label={`${game.title} oyununu oyna`}
                >
                  Oyna
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 