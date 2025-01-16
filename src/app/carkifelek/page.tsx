'use client';

import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';

const activities = [
  { name: 'Bireysel Zaman', color: '#FF6B6B', icon: '👤' },
  { name: 'Sosyal İlişkiler', color: '#4ECDC4', icon: '👥' },
  { name: 'Duygusal Gelişim', color: '#45B7D1', icon: '❤️' },
  { name: 'Akademik Gelişim', color: '#96CEB4', icon: '📚' },
  { name: 'Özgüven', color: '#FFEEAD', icon: '🌟' },
  { name: 'İletişim', color: '#FFD93D', icon: '💭' },
  { name: 'Bağımsızlık', color: '#6C5B7B', icon: '🦋' },
  { name: 'Kimlik Gelişimi', color: '#F7A072', icon: '🎭' }
];

export default function WheelPage() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <WheelContent />
    </Suspense>
  );
}

function WheelContent() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);

  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true);
      const newRotation = rotation + 1800 + Math.random() * 360;
      setRotation(newRotation);

      setTimeout(() => {
        setSpinning(false);
        const selectedIndex = Math.floor((360 - (newRotation % 360)) / (360 / activities.length));
        setSelectedActivity(activities[selectedIndex]);
      }, 3000);
    }
  };

  const getActivityDescription = (activityName: string) => {
    const descriptions: { [key: string]: string } = {
      'Bireysel Zaman': 'Kendinize özel zaman ayırın. Kendi ilgi alanlarınızı keşfedin ve bireysel aktivitelerle vakit geçirin.',
      'Sosyal İlişkiler': 'Arkadaşlarınızla vakit geçirin, yeni insanlarla tanışın ve sosyal becerilerinizi geliştirin.',
      'Duygusal Gelişim': 'Duygularınızı tanıyın, ifade edin ve başkalarının duygularını anlamaya çalışın.',
      'Akademik Gelişim': 'Kendi öğrenme stilinizi keşfedin ve akademik hedeflerinize odaklanın.',
      'Özgüven': 'Kendinize güvenin, yeteneklerinizi keşfedin ve başarılarınızla gurur duyun.',
      'İletişim': 'Düşüncelerinizi açıkça ifade edin ve başkalarıyla etkili iletişim kurun.',
      'Bağımsızlık': 'Kendi kararlarınızı alın ve sorumluluklarınızı üstlenin.',
      'Kimlik Gelişimi': 'Kendi kimliğinizi keşfedin, ilgi alanlarınızı ve değerlerinizi belirleyin.'
    };
    return descriptions[activityName] || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-yellow-500 to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Aktivite Çarkı</h1>
          <p className="text-xl text-gray-200">Bugün hangi aktiviteyi yapacağını öğrenmek için çarkı çevir!</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            {/* Siyah ok işareti */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl text-black">▼</div>
            
            {/* Çark */}
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="w-[400px] h-[400px] rounded-full border-8 border-white relative overflow-hidden shadow-xl"
              style={{
                background: `conic-gradient(
                  ${activities.map((activity, index) => 
                    `${activity.color} ${(index * 360) / activities.length}deg ${((index + 1) * 360) / activities.length}deg`
                  ).join(', ')}
                )`
              }}
            >
              {/* Merkez nokta */}
              <div className="absolute inset-[40%] bg-white rounded-full shadow-inner flex items-center justify-center">
                <div className="text-2xl">🎯</div>
              </div>

              {/* Aktivite isimleri */}
              {activities.map((activity, index) => {
                const angle = (360 / activities.length) * index + (360 / activities.length / 2);
                return (
                  <div
                    key={index}
                    className="absolute w-full h-full flex items-start justify-center"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: 'center',
                    }}
                  >
                    <div 
                      className="mt-8 text-white font-bold text-sm flex flex-col items-center"
                      style={{ transform: `rotate(-${angle}deg)` }}
                    >
                      <span className="text-xl mb-1">{activity.icon}</span>
                      <span className="text-shadow">{activity.name}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Çevirme butonu */}
            <motion.button
              onClick={spinWheel}
              disabled={spinning}
              whileHover={{ scale: spinning ? 1 : 1.05 }}
              whileTap={{ scale: spinning ? 1 : 0.95 }}
              className="mt-8 bg-indigo-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg 
                         hover:bg-indigo-700 transition-all duration-200 w-64 mx-auto block"
            >
              {spinning ? 'Çevriliyor...' : 'Çarkı Çevir'}
            </motion.button>

            {/* Seçilen aktivite */}
            {selectedActivity && !spinning && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-8 bg-white rounded-xl shadow-lg text-center max-w-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">Seçilen Aktivite</h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-5xl">{selectedActivity.icon}</span>
                  <span className="text-3xl font-semibold" style={{ color: selectedActivity.color }}>
                    {selectedActivity.name}
                  </span>
                </div>
                <p className="text-gray-600 text-lg mt-4">
                  {getActivityDescription(selectedActivity.name)}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-shadow {
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
} 