'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { topicContent } from './data/topicContent';

type TopicKey = keyof typeof topicContent;

const topicImages = {
  'kimlik-gelisimi': '/images/identy.jpg',
  'sosyal-iliskiler': '/images/social.jpg',
  'duygusal-gelisim': '/images/emotional.jpg',
  'akademik-gelisim': '/images/academic.jpg'
};

const topicAlts = {
  'kimlik-gelisimi': 'İkizlerin bireysel kimlik gelişimini gösteren fotoğraf',
  'sosyal-iliskiler': 'İkizlerin sosyal etkileşimlerini gösteren fotoğraf',
  'duygusal-gelisim': 'İkizlerin duygusal gelişimini temsil eden fotoğraf',
  'akademik-gelisim': 'İkizlerin akademik çalışmalarını gösteren fotoğraf'
};

export default function Home() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const [activeTab] = useState<string>(searchParams.get('tab') || 'konular');
  const [selectedTopic, setSelectedTopic] = useState<TopicKey | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-yellow-500 to-gray-900" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'konular' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6" role="list" aria-label="Konu listesi">
            {(Object.entries(topicContent) as [TopicKey, typeof topicContent[TopicKey]][]).map(([key, topic]) => (
              <div 
                key={key}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer overflow-hidden relative"
                onClick={() => setSelectedTopic(key)}
                role="button"
                tabIndex={0}
                aria-label={`${topic.title} konusunu görüntüle`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedTopic(key);
                  }
                }}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={topicImages[key]}
                    alt={topicAlts[key]}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <p className="text-gray-600">
                  {topic.content.split('\n')[1].trim().substring(0, 150)}...
                </p>
              </div>
            ))}
          </div>
        )}

        {selectedTopic && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
          >
            <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative">
              <button 
                onClick={() => setSelectedTopic(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Kapat"
              >
                ✕
              </button>
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={topicImages[selectedTopic]}
                  alt={topicAlts[selectedTopic]}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 id="modal-title" className="text-3xl font-bold text-gray-900 mb-6">
                {topicContent[selectedTopic].title}
              </h2>
              <div className="prose prose-lg">
                {topicContent[selectedTopic].content.split('\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
