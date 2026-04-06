export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  icon: 'gipsowe' | 'cementowe' | 'hybrydowe' | 'gliniane' | 'twarde' | 'szpachlowanie';
}

export const services: Service[] = [
  {
    slug: 'tynki-gipsowe',
    name: 'Tynki gipsowe',
    shortDescription:
      'Idealne rozwiązanie do wnętrz mieszkalnych. Gładka, równa powierzchnia gotowa pod malowanie.',
    fullDescription:
      'Tynki gipsowe maszynowe to najpopularniejszy wybór do wykąńczania ścian wewnętrznych w budynkach mieszkalnych. Nakładane maszynowo, zapewniają idealnie gładką i równą powierzchnię, gotową pod malowanie lub tapetowanie. Dzięki zastosowaniu nowoczesnych agregatów tynkarskich, proces nakładania jest szybki i precyzyjny, co gwarantuje równomierną grubość warstwy na całej powierzchni.',
    benefits: [
      'Gładka powierzchnia gotowa pod malowanie',
      'Szybki czas realizacji dzięki aplikacji maszynowej',
      'Doskonała regulacja wilgotności w pomieszczeniu',
      'Idealne do pomieszczeń mieszkalnych i biurowych',
      'Równomierna grubość warstwy',
    ],
    icon: 'gipsowe',
  },
  {
    slug: 'tynki-cementowo-wapienne',
    name: 'Tynki cementowo-wapienne',
    shortDescription:
      'Trwałe i odporne tynki do pomieszczeń wilgotnych, garaży i elewacji.',
    fullDescription:
      'Tynki cementowo-wapienne to uniwersalne rozwiązanie łączące trwałość cementu z elastycznością wapna. Są szczególnie polecane do pomieszczeń wilgotnych, takich jak łazienki, kuchnie, piwnice oraz garaże. Dzięki wysokiej odporności na wilgoć i uszkodzenia mechaniczne, doskonale sprawdzają się również jako tynki zewnętrzne.',
    benefits: [
      'Wysoka odporność na wilgoć',
      'Doskonała wytrzymałość mechaniczna',
      'Uniwersalne zastosowanie — wewnętrz i na zewnątrz',
      'Idealne do pomieszczeń wilgotnych',
      'Długa żywotność',
    ],
    icon: 'cementowe',
  },
  {
    slug: 'tynki-hybrydowe',
    name: 'Tynki hybrydowe',
    shortDescription:
      'Połączenie zalet tynków gipsowych i cementowych. Wszechstronne i trwałe.',
    fullDescription:
      'Tynki hybrydowe łączą najlepsze cechy tynków gipsowych i cementowo-wapiennych. Oferują gładkość i estetykę tynku gipsowego przy jednoczesnej odporności na wilgoć i wytrzymałości mechanicznej tynku cementowego. To idealne rozwiązanie, gdy potrzebna jest wszechstronność i trwałość.',
    benefits: [
      'Łączy zalety tynków gipsowych i cementowych',
      'Gładka, estetyczna powierzchnia',
      'Lepsza odporność na wilgoć niż tynk gipsowy',
      'Wszechstronne zastosowanie',
      'Dobry stosunek jakości do ceny',
    ],
    icon: 'hybrydowe',
  },
  {
    slug: 'tynki-gliniane',
    name: 'Tynki gliniane',
    shortDescription:
      'Ekologiczne tynki z naturalnych materiałów. Regulują wilgotność i poprawiają mikroklimat.',
    fullDescription:
      'Tynki gliniane to rozwiązanie dla osób ceniących ekologię i naturalne materiały budowlane. Wykonane z gliny, piasku i włókien naturalnych, doskonale regulują wilgotność powietrza i tworzą zdrowy mikroklimat w pomieszczeniach. Tynki gliniane są antybakteryjne, antystatyczne i nie emitują szkodliwych substancji.',
    benefits: [
      'W pełni ekologiczne i naturalne',
      'Doskonała regulacja wilgotności powietrza',
      'Tworzą zdrowy mikroklimat w pomieszczeniu',
      'Właściwości antybakteryjne i antystatyczne',
      'Przyjemna, naturalna estetyka',
    ],
    icon: 'gliniane',
  },
  {
    slug: 'szpachlowanie-z-malowaniem',
    name: 'Szpachlowanie z malowaniem',
    shortDescription:
      'Kompleksowe wykończenie po tynkowaniu — szpachlowanie i malowanie ścian w jednym zleceniu.',
    fullDescription:
      'Szpachlowanie z malowaniem to idealne uzupełnienie naszych usług tynkarskich. Po nałożeniu tynku maszynowego wykonujemy profesjonalne szpachlowanie ścian i sufitów, a następnie malowanie farbami najwyższej jakości. Dzięki temu cały proces wykończenia wnętrz realizowany jest przez jeden zespół, co gwarantuje spójność, terminowość i najwyższą jakość na każdym etapie — od surowej ściany po gotowe do zamieszkania pomieszczenie.',
    benefits: [
      'Kompleksowa usługa — od tynku po gotową ścianę',
      'Idealnie gładka powierzchnia pod malowanie',
      'Oszczędność czasu — jeden wykonawca na cały proces',
      'Profesjonalne materiały szpachlarskie i malarskie',
      'Gwarancja spójnej jakości wykończenia',
    ],
    icon: 'szpachlowanie',
  },
];

export const allServicesWithTwarde = [
  ...services.slice(0, 1),
  {
    slug: 'tynki-gipsowe',
    name: 'Tynki gipsowe twarde',
    shortDescription:
      'Wzmocniona wersja tynku gipsowego o wyższej twardości i odporności na uszkodzenia.',
    icon: 'twarde' as const,
  },
  ...services.slice(1),
];
