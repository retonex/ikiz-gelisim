'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testContent, TestContent } from './testData';

const tests = [
  {
    id: 1,
    title: 'Kimlik Gelişimi Testi',
    description: 'İkizlerin kimlik gelişimi ve bireyselleşme sürecini değerlendiren kapsamlı bir test.',
    icon: '👥',
    image: '/images/identity-test.jpg'
  },
  {
    id: 2,
    title: 'Sosyal İlişkiler Testi',
    description: 'İkizlerin sosyal ilişkilerini ve iletişim becerilerini ölçen interaktif bir değerlendirme.',
    icon: '🤝',
    image: '/images/social-test.jpg'
  },
  {
    id: 3,
    title: 'Duygusal Bağımsızlık Testi',
    description: 'İkizlerin duygusal bağımsızlık düzeylerini ve özerklik gelişimlerini ölçen test.',
    icon: '❤️',
    image: '/images/emotional-test.jpg'
  },
  {
    id: 4,
    title: 'Akademik Gelişim Testi',
    description: 'İkizlerin akademik başarılarını ve öğrenme stillerini değerlendiren test.',
    icon: '📚',
    image: '/images/academic-test.jpg'
  }
];

const testAlts = {
  'identity-test': 'İkizlerin kimlik gelişimini temsil eden test görseli',
  'social-test': 'İkizlerin sosyal ilişkilerini temsil eden test görseli',
  'emotional-test': 'İkizlerin duygusal bağımsızlığını temsil eden test görseli',
  'academic-test': 'İkizlerin akademik gelişimini temsil eden test görseli'
};

const getTestAltKey = (id: number): keyof typeof testAlts => {
  switch (id) {
    case 1:
      return 'identity-test';
    case 2:
      return 'social-test';
    case 3:
      return 'emotional-test';
    case 4:
      return 'academic-test';
    default:
      return 'identity-test';
  }
};

export default function TestlerPage() {
  const [selectedTest, setSelectedTest] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleTestSelect = (testId: number) => {
    setSelectedTest(testId);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < 19) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const positiveAnswers = answers.filter(
      answer => answer === 'Katılıyorum' || answer === 'Tamamen katılıyorum'
    ).length;

    if (positiveAnswers <= 7) return 'low';
    if (positiveAnswers <= 14) return 'medium';
    return 'high';
  };

  if (selectedTest && !showResult) {
    return (
      <div className="min-h-screen p-8" role="form" aria-label="Test soruları">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {tests.find(t => t.id === selectedTest)?.title}
          </h2>
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-4" role="heading" aria-level={2}>
              Soru {currentQuestion + 1}/20: {testContent[selectedTest as keyof TestContent]?.questions[currentQuestion]?.text}
            </p>
            <div className="space-y-3" role="radiogroup" aria-label="Cevap seçenekleri">
              {testContent[selectedTest as keyof TestContent]?.questions[currentQuestion]?.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-gray-900"
                  role="radio"
                  aria-checked="false"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => setSelectedTest(null)}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Testlere geri dön"
          >
            Testlere Geri Dön
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    const result = calculateResult();
    return (
      <div className="min-h-screen p-8" role="region" aria-label="Test sonucu">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Test Sonucunuz</h2>
          <p className="text-lg text-gray-700 mb-6">
            {testContent[selectedTest as keyof TestContent]?.evaluations[result]}
          </p>
          <button
            onClick={() => setSelectedTest(null)}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            aria-label="Testlere geri dön"
          >
            Testlere Geri Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8" role="main">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {tests.map((test) => (
          <motion.div
            key={test.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer"
            onClick={() => handleTestSelect(test.id)}
            role="button"
            tabIndex={0}
            aria-label={`${test.title} testini başlat`}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleTestSelect(test.id);
              }
            }}
          >
            <div className="relative h-48">
              <Image
                src={test.image}
                alt={testAlts[getTestAltKey(test.id)]}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4" role="img" aria-label={test.icon}>
                {test.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{test.title}</h3>
              <p className="text-gray-600">{test.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedTest && !showResult && (
        <div className="min-h-screen p-8" role="form" aria-label="Test soruları">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {tests.find(t => t.id === selectedTest)?.title}
            </h2>
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-4" role="heading" aria-level={2}>
                Soru {currentQuestion + 1}/20: {testContent[selectedTest as keyof TestContent]?.questions[currentQuestion]?.text}
              </p>
              <div className="space-y-3" role="radiogroup" aria-label="Cevap seçenekleri">
                {testContent[selectedTest as keyof TestContent]?.questions[currentQuestion]?.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 text-left rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-gray-900"
                    role="radio"
                    aria-checked="false"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSelectedTest(null)}
              className="text-gray-600 hover:text-gray-800"
              aria-label="Testlere geri dön"
            >
              Testlere Geri Dön
            </button>
          </div>
        </div>
      )}

      {showResult && (
        <div className="min-h-screen p-8" role="region" aria-label="Test sonucu">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Test Sonucunuz</h2>
            <p className="text-lg text-gray-700 mb-6">
              {testContent[selectedTest as keyof TestContent]?.evaluations[calculateResult()]}
            </p>
            <button
              onClick={() => setSelectedTest(null)}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              aria-label="Testlere geri dön"
            >
              Testlere Geri Dön
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 