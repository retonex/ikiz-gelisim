'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { parentSurvey } from './surveyData';

const infoCards = [
  {
    title: 'Kimlik Gelişimi',
    description: 'İkizlerin bireysel kimlik gelişimi ve özgün kişilik oluşturma süreçleri hakkında bilgiler.',
    image: '/images/identity.jpg',
    icon: '👥'
  },
  {
    title: 'Sosyal İlişkiler',
    description: 'İkizlerin sosyal becerilerini geliştirme ve bağımsız ilişkiler kurma stratejileri.',
    image: '/images/social.jpg',
    icon: '🤝'
  },
  {
    title: 'Akademik Başarı',
    description: 'İkizlerin akademik gelişimlerini destekleme ve bireysel potansiyellerini ortaya çıkarma yöntemleri.',
    image: '/images/academic.jpg',
    icon: '📚'
  }
];

export default function EbeveynPage() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const calculateResult = () => {
    const positiveAnswers = answers.filter(
      answer => answer === 'Katılıyorum' || answer === 'Kesinlikle Katılıyorum'
    ).length;

    if (positiveAnswers <= 5) return 'low';
    if (positiveAnswers <= 10) return 'medium';
    return 'high';
  };

  const getResultMessage = () => {
    const result = calculateResult();
    switch (result) {
      case 'low':
        return 'İkizlerinizin bireyselleşme sürecini destekleme konusunda daha fazla bilgi edinmeniz faydalı olabilir. Önerilen kaynakları inceleyebilir ve uzman desteği alabilirsiniz.';
      case 'medium':
        return 'İkizlerinizin bireyselleşme sürecini destekleme konusunda iyi bir yoldasınız. Bazı alanlarda gelişim fırsatları mevcut. Önerilen stratejileri uygulayarak daha iyi sonuçlar elde edebilirsiniz.';
      case 'high':
        return 'İkizlerinizin bireyselleşme sürecini destekleme konusunda çok iyi bir yaklaşımınız var. Bu olumlu tutumu sürdürmeye devam edin ve diğer ebeveynlerle deneyimlerinizi paylaşın.';
      default:
        return '';
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Değerlendirme Sonucu</h2>
          <p className="text-lg mb-6">{getResultMessage()}</p>
          <button
            onClick={() => {
              setShowSurvey(false);
              setShowResult(false);
              setAnswers([]);
            }}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  if (showSurvey) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Ebeveyn Değerlendirme Formu</h2>
          <form onSubmit={handleSubmit}>
            {parentSurvey.map((soru, index) => (
              <div key={soru.id} className="mb-6">
                <p className="text-lg mb-3">{soru.question}</p>
                <div className="space-y-2">
                  {soru.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name={`soru-${soru.id}`}
                        value={option}
                        onChange={(e) => {
                          const newAnswers = [...answers];
                          newAnswers[index] = e.target.value;
                          setAnswers(newAnswers);
                        }}
                        required
                        className="form-radio"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Değerlendir
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Ebeveyn Bilgilendirme</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSurvey(true)}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Değerlendirme Formunu Doldur
          </motion.button>
        </div>
      </div>
    </div>
  );
} 