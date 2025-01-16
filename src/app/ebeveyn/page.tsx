'use client';

import React from 'react';
import { parentSurvey } from './surveyData';

export default function EbeveynPage() {
  return (
    <div className="min-h-screen p-8" role="main">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Ebeveyn Bilgilendirme</h1>
        
        <div className="grid gap-8">
          <section 
            className="bg-white rounded-lg shadow-lg p-6"
            role="region"
            aria-labelledby="egitim-baslik"
          >
            <h2 id="egitim-baslik" className="text-2xl font-bold mb-4 text-gray-800">
              Eğitim İçeriği
            </h2>
            <div className="prose max-w-none text-gray-600">
              {/* Eğitim içeriği buraya gelecek */}
            </div>
          </section>

          <section 
            className="bg-white rounded-lg shadow-lg p-6"
            role="region"
            aria-labelledby="anket-baslik"
          >
            <h2 id="anket-baslik" className="text-2xl font-bold mb-4 text-gray-800">
              Ebeveyn Anketi
            </h2>
            <form role="form" aria-label="Ebeveyn anketi formu">
              {parentSurvey.map((soru) => (
                <div 
                  key={soru.id}
                  className="mb-6"
                  role="group"
                  aria-labelledby={`soru-${soru.id}`}
                >
                  <p id={`soru-${soru.id}`} className="text-lg mb-3 text-gray-700">
                    {soru.question}
                  </p>
                  <div 
                    className="space-y-2"
                    role="radiogroup"
                    aria-label={`Soru ${soru.id} için cevap seçenekleri`}
                  >
                    {soru.options.map((option, index) => (
                      <label 
                        key={index}
                        className="flex items-center space-x-3 text-gray-600"
                      >
                        <input
                          type="radio"
                          name={`soru-${soru.id}`}
                          value={option}
                          className="form-radio"
                          aria-label={option}
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
                aria-label="Anketi gönder"
              >
                Gönder
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
} 