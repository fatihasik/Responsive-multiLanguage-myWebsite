import { createStore } from 'redux';

const initialState = {
 language: 'English',
 translations: {
  English: {
    appBar: 'Home Page',
    appBarPT: 'Plan Your Treatment',
    appBarB: 'Medical Specialties',
    appBarContact: 'Contact With Us',
    footer: "Thank you for choosing us. You can follow our social media accounts for gifts and offers!",
    whyTurkeyHead:'Why Turkey?',
    whyTurkey: `In today's world, medical tourism is becoming increasingly popular worldwide, and in this regard, Turkey has become a prominent destination with its high-quality healthcare services and unique tourist experiences. Here are some reasons why utilizing health tourism in Turkey is an excellent option for you:

        1. **High-Quality Healthcare Services:**
        Turkey is renowned for its internationally accredited healthcare institutions and expert healthcare professionals. Modern facilities, state-of-the-art equipment, and doctors with international experience make Turkey an ideal place for medical tourism.

        2. **Cost-Effectiveness:**
        Health services in Turkey are more cost-effective compared to many Western countries. You can save on treatment expenses while receiving the same quality healthcare, contributing not only to a positive impact on your budget but also making health tourism an attractive option.

        3. **Cultural Richness:**
        Turkey is famous for its historical and cultural richness. After your treatment process, you can visit magnificent historical sites, experience delicious Turkish cuisine, and have a unique travel experience. Health tourism not only focuses on your health but also allows you to explore new cultures and create unforgettable memories.

        4. **Quick and Easy Access:**
        Turkey is within a short flight distance from many European and Middle Eastern countries. Quick and easy access facilitates the planning and organization of your treatment process. Additionally, Turkey's advanced infrastructure for health tourism ensures the smooth progression of your treatment.

        5. **Specialization Areas:**
        Turkey offers a wide range of specialties covering various medical fields. Specialized doctors in areas such as aesthetic surgery, dental treatment, orthopedics, cardiology, and more make Turkey an ideal treatment center for various health issues.

        Health tourism in Turkey is not just a journey focused on your physical health; it is also an adventure that opens doors to cultural discoveries, cost-effective solutions, and high-quality healthcare services. If you want to prioritize your health while exploring a new country, Turkey could be the perfect destination for you.

        Wishing you an unforgettable health and travel experience!`
  },
  Turkish: {
    appBar: 'Anasayfa',
    appBarPT: 'Tedavini Planla',
    appBarB: 'Branşlar',
    appBarContact: 'Bizimle İletişime Geçin',
    footer: 'Bizi tercih ettiğiniz için teşekkür ederiz. Hediye ve fırsatlar için sosyal medya hesaplarımızı takip edebilirsiniz!',
    whyTurkeyHead:'Neden Türkiye?',
    whyTurkey:`Günümüzde sağlık turizmi, dünya genelinde giderek daha popüler hale gelmektedir ve bu konuda Türkiye, sunduğu kaliteli sağlık hizmetleri ve benzersiz turistik deneyimleriyle öne çıkan bir destinasyon haline gelmiştir. İşte Türkiye'ye gelip sağlık turizminden faydalanmanın sizin için neden mükemmel bir seçenek olduğuna dair bazı nedenler:

    1. Yüksek Kaliteli Sağlık Hizmetleri:
    Türkiye, uluslararası standartlarda akredite edilmiş sağlık kuruluşları ve uzman sağlık profesyonelleri ile ünlüdür. Modern tesisler, son teknoloji ekipmanlar ve uluslararası tecrübeye sahip doktorlar, Türkiye'yi sağlık turizmi için ideal bir yer haline getirir.
    
    2. Uygun Maliyetler:
    Türkiye'de sağlık hizmetleri, birçok Batı ülkesine göre daha uygun maliyetlidir. Aynı kalitede sağlık hizmetlerini alırken tasarruf edebilir, tedavi masraflarınızı önemli ölçüde azaltabilirsiniz. Bu, bütçeniz üzerinde olumlu bir etki yaratmanın yanı sıra, sağlık turizminin cazip bir seçenek haline gelmesine de katkı sağlar.
    
    3. Kültürel Zenginlik:
    Türkiye, tarihi ve kültürel zenginlikleriyle ünlüdür. Tedavi sürecinizin ardından, muazzam tarihi yerleri ziyaret edebilir, nefis Türk mutfağını deneyimleyebilir ve eşsiz bir seyahat deneyimi yaşayabilirsiniz. Sağlık turizmi, sadece sağlığınıza odaklanmakla kalmaz, aynı zamanda yeni kültürleri keşfetmenize ve unutulmaz anılar biriktirmenize de olanak tanır.
    
    4. Hızlı ve Kolay Erişim:
    Türkiye, birçok Avrupa ve Orta Doğu ülkesine kısa uçuş mesafesindedir. Hızlı ve kolay erişim, tedavi sürecinizin planlanmasını ve düzenlenmesini daha da kolaylaştırır. Ayrıca, Türkiye'nin sağlık turizmi için gelişmiş altyapısı, tedavi sürecinizin sorunsuz bir şekilde ilerlemesini sağlar.
    
    5. Uzmanlık Alanları:
    Türkiye, bir dizi tıbbi alanı kapsayan geniş bir uzmanlık yelpazesi sunar. Estetik cerrahi, diş tedavisi, ortopedi, kardiyoloji gibi birçok alanda uzmanlaşmış doktorlar, Türkiye'yi çeşitli sağlık sorunları için ideal bir tedavi merkezi haline getirir.
    
    Türkiye'de sağlık turizmi, sadece fiziksel sağlığınıza odaklanan bir yolculuk değil, aynı zamanda kültürel keşiflere, uygun maliyetlere ve yüksek kaliteli sağlık hizmetlerine adım atmanızı sağlayan bir maceradır. Sağlığınıza önem verirken aynı zamanda yeni bir ülke keşfetmek istiyorsanız, Türkiye sizin için mükemmel bir destinasyon olabilir.
    
    Unutulmaz bir sağlık ve seyahat deneyimi geçirmeniz dileğiyle!`
  },
  French: {
    appBar: "Page d'accueil",
    appBarPT: 'Planifiez Votre Traitement',
    appBarB: 'Spécialités Médicales',
    appBarContact: 'Contactez-nous',
    footer: "Merci de nous avoir choisis. Vous pouvez suivre nos comptes sur les réseaux sociaux pour des cadeaux et des offres !",
    whyTurkeyHead:'Pourquoi la Turquie ?',
  },
  Russian: {
    appBar: 'Главная страница',
    appBarPT: 'Запланируйте свое лечение',
    appBarB: 'Медицинские специальности',
    appBarContact: 'Свяжитесь с нами',
    footer: "Спасибо за то, что выбрали нас. Вы можете следить за нашими социальными медиа для подарков и акций!",
    whyTurkeyHead:'Почему Турция?',
  },
  Arabic: {
    appBar: 'الصفحة الرئيسية',
    appBarPT: 'خطط لعلاجك',
    appBarB: 'التخصصات الطبية',
    appBarContact: 'اتصل بنا',
    footer: 'شكرًا لاختياركم لنا. يمكنكم متابعة حساباتنا على وسائل التواصل الاجتماعي للهدايا والعروض',
    whyTurkeyHead:'لماذا تركيا؟',
  },
  German: {
    appBar: 'Startseite',
    appBarPT: 'Planen Sie Ihre Behandlung',
    appBarB: 'Medizinische Fachgebiete',
    appBarContact: 'Kontaktieren Sie uns',
    footer: 'Vielen Dank, dass Sie uns gewählt haben. Sie können unsere Social-Media-Konten für Geschenke und Angebote verfolgen!',
    whyTurkeyHead:'Warum die Türkei?',
  },
  Turkmen: {
    appBar: 'Baş Sahypa',
    appBarPT: 'Siziň Döwür Için Plan',
    appBarB: 'Tibbi Işler',
    appBarContact: 'Biziň bilen Habarlaş',
    footer: 'Siziň üçin saýlanmak üçin sag boluň. Hediýe we baha almak üçin sosial mediýa hasabymyza goşulyp bilersiňiz!',
    whyTurkeyHead:'Näme üçin Türkiýe?',
  },
  Azerbaijani: {
    appBar: 'Əsas Səhifə',
    appBarPT: 'Müalicənizi Planlaşdırın',
    appBarB: 'Tibbi İxtisaslar',
    appBarContact: 'Bizimlə Əlaqə Saxlayın',
    footer: 'Bizi seçdiyiniz üçün təşəkkür edirik. Hediyələr və təkliflər üçün sosial media hesablarımızı izləyə bilərsiniz!',
    whyTurkeyHead:'Niyə Türkiyə?',
  },
},

};

const reducer = (state = initialState, action) => {
 switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
 }
};

const store = createStore(reducer);

export default store;