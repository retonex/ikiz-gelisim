'use client';

import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';

interface Character {
  name: string;
  avatar: string;
  personality: string[];
  hobbies: string[];
  dreams: string[];
  strengths: string[];
}

const personalityTraits = [
  'Yaratıcı', 'Düşünceli', 'Enerjik', 'Sakin', 'Lider', 'Yardımsever',
  'Meraklı', 'Cesur', 'Sabırlı', 'Özgüvenli', 'Neşeli', 'Kararlı'
];

const hobbies = [
  'Resim', 'Müzik', 'Dans', 'Spor', 'Kitap Okuma', 'Yazı Yazma',
  'Bahçecilik', 'Fotoğrafçılık', 'Yemek Yapma', 'Bilgisayar', 'Satranç', 'Yüzme'
];

const dreams = [
  'Bilim İnsanı', 'Sanatçı', 'Sporcu', 'Doktor', 'Öğretmen', 'Mühendis',
  'Yazar', 'Müzisyen', 'Şef', 'Pilot', 'Veteriner', 'Tasarımcı'
];

const strengths = [
  'Problem Çözme', 'İletişim', 'Organizasyon', 'Yaratıcılık', 'Empati', 'Analitik Düşünme',
  'Takım Çalışması', 'Liderlik', 'Adaptasyon', 'Öğrenme Hızı', 'El Becerisi', 'Hafıza'
];

const avatars = [
  '👧', '👦', '👩', '👨', '🧑‍🎨', '🧑‍🔬', '🧑‍🌾', '🧑‍🏫', 
  '🧑‍💻', '🧑‍🍳', '🧑‍✈️', '🧑‍🎤'
];

export default function CharacterGame() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <CharacterGameContent />
    </Suspense>
  );
}

function CharacterGameContent() {
  const [character, setCharacter] = useState<Character>({
    name: '',
    avatar: '',
    personality: [],
    hobbies: [],
    dreams: [],
    strengths: []
  });
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (category: keyof Character, item: string) => {
    if (category === 'avatar') {
      setCharacter(prev => ({ ...prev, [category]: item }));
    } else {
      setCharacter(prev => ({
        ...prev,
        [category]: Array.isArray(prev[category]) 
          ? (prev[category] as string[]).includes(item)
            ? (prev[category] as string[]).filter((i: string) => i !== item)
            : [...(prev[category] as string[]), item].slice(0, 3)
          : []
      }));
    }
  };

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-black">İsminizi Girin</h2>
            <input
              type="text"
              value={character.name}
              onChange={(e) => setCharacter(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-3 border rounded-lg"
              placeholder="İsminizi yazın"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-black">Avatarınızı Seçin</h2>
            <div className="grid grid-cols-4 gap-4">
              {avatars.map((avatar, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSelect('avatar', avatar)}
                  className={`text-4xl p-4 rounded-lg ${
                    character.avatar === avatar ? 'bg-purple-200' : 'bg-gray-100'
                  }`}
                >
                  {avatar}
                </motion.button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-black">Kişilik Özelliklerinizi Seçin (En fazla 3)</h2>
            <div className="grid grid-cols-3 gap-4">
              {personalityTraits.map((trait, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect('personality', trait)}
                  className={`p-3 rounded-lg ${
                    character.personality.includes(trait)
                      ? 'bg-purple-500 text-black'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {trait}
                </motion.button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-black">Hobilerinizi Seçin (En fazla 3)</h2>
            <div className="grid grid-cols-3 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect('hobbies', hobby)}
                  className={`p-3 rounded-lg ${
                    character.hobbies.includes(hobby)
                      ? 'bg-purple-500 text-black'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {hobby}
                </motion.button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-black">Hayallerinizi Seçin (En fazla 3)</h2>
            <div className="grid grid-cols-3 gap-4">
              {dreams.map((dream, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect('dreams', dream)}
                  className={`p-3 rounded-lg ${
                    character.dreams.includes(dream)
                      ? 'bg-purple-500 text-black'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {dream}
                </motion.button>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-black">Güçlü Yönlerinizi Seçin (En fazla 3)</h2>
            <div className="grid grid-cols-3 gap-4">
              {strengths.map((strength, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect('strengths', strength)}
                  className={`p-3 rounded-lg ${
                    character.strengths.includes(strength)
                      ? 'bg-purple-500 text-black'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {strength}
                </motion.button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-yellow-500 to-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black rounded-xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Karakterin Hazır!</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-8xl mb-4">{character.avatar}</div>
                <h3 className="text-2xl font-bold mb-2 text-black">{character.name}</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2 text-black">Kişilik Özellikleri:</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.personality.map((trait, index) => (
                      <span key={index} className="bg-purple-100 px-3 py-1 rounded-full text-black">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-black">Hobiler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.hobbies.map((hobby, index) => (
                      <span key={index} className="bg-blue-100 px-3 py-1 rounded-full text-black">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-black">Hayaller:</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.dreams.map((dream, index) => (
                      <span key={index} className="bg-green-100 px-3 py-1 rounded-full text-black">
                        {dream}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-black">Güçlü Yönler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.strengths.map((strength, index) => (
                      <span key={index} className="bg-yellow-100 px-3 py-1 rounded-full text-black">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCharacter({
                    name: '',
                    avatar: '',
                    personality: [],
                    hobbies: [],
                    dreams: [],
                    strengths: []
                  });
                  setStep(1);
                  setShowResult(false);
                }}
                className="bg-purple-600 text-black px-8 py-3 rounded-lg font-bold"
              >
                Yeni Karakter Oluştur
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-yellow-500 to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-black rounded-xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-black">Kendi Karakterini Oluştur</h1>
          
          {renderStep()}

          <div className="mt-8 flex justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              disabled={step === 1}
              className={`px-6 py-2 rounded-lg ${
                step === 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-600 text-black'
              }`}
            >
              Geri
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              disabled={
                (step === 1 && !character.name) ||
                (step === 2 && !character.avatar) ||
                (step === 3 && character.personality.length === 0) ||
                (step === 4 && character.hobbies.length === 0) ||
                (step === 5 && character.dreams.length === 0) ||
                (step === 6 && character.strengths.length === 0)
              }
              className={`px-6 py-2 rounded-lg ${
                ((step === 1 && !character.name) ||
                (step === 2 && !character.avatar) ||
                (step === 3 && character.personality.length === 0) ||
                (step === 4 && character.hobbies.length === 0) ||
                (step === 5 && character.dreams.length === 0) ||
                (step === 6 && character.strengths.length === 0))
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-purple-600 text-black'
              }`}
            >
              {step === 6 ? 'Karakteri Tamamla' : 'İleri'}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 