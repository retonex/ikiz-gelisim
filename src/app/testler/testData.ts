export interface Question {
  id: number;
  text: string;
  options: string[];
}

export interface TestContent {
  [key: number]: {
    questions: Question[];
    evaluations: {
      [key: string]: string | string[];
    };
  };
}

export const testContent: TestContent = {
  1: { // Kimlik Gelişimi Testi
    questions: [
      {
        id: 1,
        text: 'İkizimle aynı kıyafetleri giymekten hoşlanırım.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 2,
        text: 'Kendi tercihlerimi yaparken ikizimin fikrini almadan karar verebilirim.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 3,
        text: 'İkizimden farklı bir meslek seçmeyi düşünüyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 4,
        text: 'Kendimi ikizimden bağımsız bir birey olarak görüyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 5,
        text: 'İkizimden farklı arkadaş gruplarım var.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 6,
        text: 'Kendi başıma karar alabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 7,
        text: 'İkizimden farklı hobilere sahip olmak istiyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 8,
        text: 'Kendimi ikizimle sürekli kıyaslıyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 9,
        text: 'İkizimden farklı bir stil sahibi olmak istiyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 10,
        text: 'Kendi kimliğimi oluşturmakta zorlanıyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 11,
        text: 'İkizimle aynı ortamda olmadığımda kendimi rahat hissediyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 12,
        text: 'Gelecekte ikizimden bağımsız bir hayat kurmayı düşünüyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 13,
        text: 'İkizimle farklı görüşlere sahip olduğumuzda bunu ifade edebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 14,
        text: 'Kendi başarılarımla gurur duyuyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 15,
        text: 'İkizimden farklı bir şehirde yaşamayı düşünebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 16,
        text: 'Kendi kararlarımın sorumluluğunu alabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 17,
        text: 'İkizimle aramızdaki farklılıkları kabul ediyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 18,
        text: 'Kendimi ikizimden bağımsız tanımlayabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 19,
        text: 'İkizimle rekabet etmek yerine işbirliği yapmayı tercih ediyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 20,
        text: 'Kendime özgü hedeflerim var.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      }
    ],
    evaluations: {
      low: 'Kimlik gelişiminiz henüz başlangıç aşamasında. Kendi bireysel kimliğinizi keşfetmek için daha fazla çaba göstermelisiniz. İkizinizden bağımsız kararlar almaya ve kendi tercihlerinizi yapmaya odaklanmanız faydalı olacaktır.',
      medium: 'Kimlik gelişiminiz orta düzeyde. Kendi tercihlerinizi yapmaya başlamışsınız ve bireysel kimliğinizi oluşturma yolunda ilerliyorsunuz. Bu süreci desteklemek için farklı ilgi alanları keşfetmeye ve kendinizi daha iyi tanımaya devam edin.',
      high: 'Kimlik gelişiminiz oldukça iyi düzeyde. Kendi bireysel kimliğinizi oluşturma konusunda başarılı bir yoldasınız. İkizinizle sağlıklı bir ilişki kurarak kendi özgün kimliğinizi korumayı başarıyorsunuz.',
      recommendations: [
        'Kendinize özel bir hobi edinin',
        'Farklı sosyal gruplara katılın',
        'Kendi tarzınızı oluşturun (giyim, saç stili vb.)',
        'Günlük tutarak duygularınızı ve düşüncelerinizi kaydedin',
        'İkizinizden farklı etkinliklere katılın',
        'Kendi odanızı kişiselleştirin',
        'Bireysel hedefler belirleyin'
      ]
    }
  },
  2: { // Sosyal İlişkiler Testi
    questions: [
      {
        id: 1,
        text: 'İkizim olmadan da yeni arkadaşlıklar kurabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 2,
        text: 'Sosyal ortamlarda ikizimden bağımsız hareket edebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 3,
        text: 'Grup çalışmalarında ikizimden farklı gruplarda yer almakta zorlanmıyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 4,
        text: 'Sosyal etkinliklerde ikizimden ayrı olmak beni rahatsız etmiyor.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 5,
        text: 'İkizimle ortak arkadaşlarımız dışında kendi arkadaşlarım var.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 6,
        text: 'Sosyal medyada ikizimden farklı bir profil oluşturmakta zorlanmıyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 7,
        text: 'Arkadaşlarımla ikizim olmadan da vakit geçirebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 8,
        text: 'Yeni insanlarla tanışırken ikizimden bahsetmek zorunda hissetmiyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 9,
        text: 'Sosyal ortamlarda kendi başıma karar verebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 10,
        text: 'İkizimle farklı sosyal çevrelere sahip olmak beni mutlu ediyor.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 11,
        text: 'Arkadaşlarımla olan ilişkilerimde ikizimin etkisi yok.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 12,
        text: 'Sosyal aktivitelerde kendi tercihlerimi yapabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 13,
        text: 'İkizimden farklı sosyal becerilere sahip olduğumu düşünüyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 14,
        text: 'Grup içinde kendi fikirlerimi rahatlıkla ifade edebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 15,
        text: 'Sosyal ilişkilerimde ikizimden bağımsız kararlar alabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 16,
        text: 'İkizimle aynı ortamda olduğumuzda bile kendi sosyal çevremle ilgilenebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 17,
        text: 'Sosyal etkinliklerde ikizimden farklı roller üstlenebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 18,
        text: 'İkizimle ortak arkadaşlarımızla vakit geçirirken kendim olabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 19,
        text: 'Sosyal medyada ikizimden farklı içerikler paylaşmaktan çekinmiyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 20,
        text: 'Kendi sosyal çevremi oluşturma konusunda kendime güveniyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      }
    ],
    evaluations: {
      low: 'Sosyal ilişkilerinizi geliştirme konusunda desteğe ihtiyacınız var. İkizinizden bağımsız sosyal etkileşimlere girme konusunda kendinizi geliştirmelisiniz.',
      medium: 'Sosyal ilişkileriniz gelişiyor ve ikizinizden bağımsız sosyal bağlar kurabiliyorsunuz. Bu yöndeki çabalarınızı sürdürün.',
      high: 'Sosyal ilişkileriniz oldukça iyi düzeyde. İkizinizle ve diğer insanlarla dengeli ilişkiler kurabiliyorsunuz.',
      recommendations: [
        'Okul kulüplerine katılın',
        'İkizinizden farklı arkadaş gruplarıyla vakit geçirin',
        'Sosyal etkinliklerde aktif rol alın',
        'Yeni insanlarla tanışmak için fırsatlar yaratın',
        'Grup çalışmalarında farklı gruplarda yer alın',
        'Sosyal medyada kendi tarzınızı yansıtın',
        'Bireysel sosyal aktivitelere katılın'
      ]
    }
  },
  3: { // Duygusal Bağımsızlık Testi
    questions: [
      {
        id: 1,
        text: 'İkizim yanımda olmadığında kendimi yalnız hissediyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 2,
        text: 'Duygusal sorunlarımı ikizim olmadan da çözebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 3,
        text: 'İkizimin başarısızlıklarından kendimi sorumlu hissediyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 4,
        text: 'Kendi duygularımı ikizimden bağımsız olarak ifade edebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 5,
        text: 'İkizimin duygusal durumu beni doğrudan etkiliyor.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 6,
        text: 'Kendi duygusal ihtiyaçlarımı tanıyabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 7,
        text: 'İkizimle aramızda duygusal sınırlar koyabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 8,
        text: 'Zor durumlarla ikizim olmadan da başa çıkabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 9,
        text: 'İkizimin duygusal desteği olmadan kendimi güvende hissedebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 10,
        text: 'Kendi duygusal kararlarımı alabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 11,
        text: 'İkizimle farklı duygusal tepkiler verebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 12,
        text: 'Duygusal olarak ikizime bağımlı olmadığımı düşünüyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 13,
        text: 'İkizimin duygusal desteğine sürekli ihtiyaç duymuyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 14,
        text: 'Kendi duygusal süreçlerimi yönetebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 15,
        text: 'İkizimle duygusal çatışma yaşadığımda bunu çözebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 16,
        text: 'Duygusal konularda kendi yolumu çizebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 17,
        text: 'İkizimden farklı duygusal deneyimler yaşayabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 18,
        text: 'Duygusal zorluklarla kendi başıma mücadele edebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 19,
        text: 'İkizimle aramızdaki duygusal bağın sağlıklı olduğunu düşünüyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 20,
        text: 'Duygusal bağımsızlığımı koruyabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      }
    ],
    evaluations: {
      low: 'Duygusal bağımsızlık konusunda gelişime ihtiyacınız var. İkizinizle aranızdaki duygusal bağı dengelemeye çalışın.',
      medium: 'Duygusal bağımsızlığınız gelişiyor. Kendi duygularınızı tanıma ve yönetme konusunda ilerleme kaydetmişsiniz.',
      high: 'Duygusal bağımsızlığınız iyi düzeyde. İkizinizle sağlıklı bir duygusal bağ kurmuşsunuz.',
      recommendations: [
        'Duygularınızı ifade etme egzersizleri yapın',
        'Kendi başınıza zaman geçirin',
        'Stres yönetimi teknikleri öğrenin',
        'Duygusal günlük tutun',
        'Kendi kararlarınızı verme pratiği yapın',
        'Meditasyon ve mindfulness aktiviteleri deneyin',
        'Duygusal sınırlar belirleme alıştırmaları yapın'
      ]
    }
  },
  4: { // Akademik Gelişim Testi
    questions: [
      {
        id: 1,
        text: 'Derslerimde kendi öğrenme stilimi geliştirdim.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 2,
        text: 'İkizimle aynı dersleri almak zorunda hissetmiyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 3,
        text: 'Akademik başarılarımı ikiziminkiyle kıyaslamıyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 4,
        text: 'Kendi akademik hedeflerimi belirleyebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 5,
        text: 'İkizimden farklı derslerde başarılı olabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 6,
        text: 'Kendi çalışma programımı oluşturabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 7,
        text: 'Akademik konularda kendi kararlarımı alabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 8,
        text: 'İkizimden farklı akademik ilgi alanlarım var.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 9,
        text: 'Sınavlarda kendi performansıma odaklanabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 10,
        text: 'Akademik başarısızlıklarımı kendi sorumluluğum olarak görüyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 11,
        text: 'Derslerde kendi notlarımı tutabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 12,
        text: 'İkizimden bağımsız olarak ödev yapabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 13,
        text: 'Akademik zorluklarla kendi başıma mücadele edebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 14,
        text: 'Farklı öğrenme kaynaklarını kullanabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 15,
        text: 'Akademik başarılarımla gurur duyuyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 16,
        text: 'Derslerde aktif katılım gösterebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 17,
        text: 'Kendi akademik potansiyelimin farkındayım.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 18,
        text: 'İkizimden farklı bir akademik gelecek planlayabiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 19,
        text: 'Akademik konularda özgüvenli hissediyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      },
      {
        id: 20,
        text: 'Kendi akademik gelişimimi takip edebiliyorum.',
        options: ['Hiç katılmıyorum', 'Katılmıyorum', 'Kararsızım', 'Katılıyorum', 'Tamamen katılıyorum']
      }
    ],
    evaluations: {
      low: 'Akademik gelişiminizde daha fazla bireyselleşmeye ihtiyacınız var. Kendi öğrenme stilinizi ve akademik hedeflerinizi belirlemeye odaklanın.',
      medium: 'Akademik gelişiminiz iyi yönde ilerliyor. Kendi öğrenme yöntemlerinizi geliştirmeye devam edin.',
      high: 'Akademik gelişiminiz oldukça iyi düzeyde. Kendi öğrenme stilinizi oluşturmuş ve akademik hedeflerinizi belirlemişsiniz.',
      recommendations: [
        'Kendi çalışma programınızı oluşturun',
        'Farklı öğrenme teknikleri deneyin',
        'Bireysel ders çalışma rutini geliştirin',
        'Kendi not tutma sisteminizi oluşturun',
        'Akademik hedefler belirleyin',
        'Online eğitim kaynaklarından yararlanın',
        'Öğretmenlerinizle birebir iletişim kurun'
      ]
    }
  }
}; 