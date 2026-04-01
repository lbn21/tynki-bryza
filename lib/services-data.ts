export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  icon: 'gipsowe' | 'cementowe' | 'hybrydowe' | 'gliniane' | 'twarde';
}

export const services: Service[] = [
  {
    slug: 'tynki-gipsowe',
    name: 'Tynki gipsowe',
    shortDescription:
      'Idealne rozwi\u0105zanie do wn\u0119trz mieszkalnych. G\u0142adka, r\u00f3wna powierzchnia gotowa pod malowanie.',
    fullDescription:
      'Tynki gipsowe maszynowe to najpopularniejszy wyb\u00f3r do wyk\u0105\u0144czania \u015bcian wewn\u0119trznych w budynkach mieszkalnych. Nak\u0142adane maszynowo, zapewniaj\u0105 idealnie g\u0142adk\u0105 i r\u00f3wn\u0105 powierzchni\u0119, gotow\u0105 pod malowanie lub tapetowanie. Dzi\u0119ki zastosowaniu nowoczesnych agregat\u00f3w tynkarskich, proces nak\u0142adania jest szybki i precyzyjny, co gwarantuje r\u00f3wnomiern\u0105 grubo\u015b\u0107 warstwy na ca\u0142ej powierzchni.',
    benefits: [
      'G\u0142adka powierzchnia gotowa pod malowanie',
      'Szybki czas realizacji dzi\u0119ki aplikacji maszynowej',
      'Doskonała regulacja wilgotno\u015bci w pomieszczeniu',
      'Idealne do pomieszcze\u0144 mieszkalnych i biurowych',
      'R\u00f3wnomierna grubo\u015b\u0107 warstwy',
    ],
    icon: 'gipsowe',
  },
  {
    slug: 'tynki-cementowo-wapienne',
    name: 'Tynki cementowo-wapienne',
    shortDescription:
      'Trwa\u0142e i odporne tynki do pomieszcze\u0144 wilgotnych, gara\u017cy i elewacji.',
    fullDescription:
      'Tynki cementowo-wapienne to uniwersalne rozwi\u0105zanie \u0142\u0105cz\u0105ce trwa\u0142o\u015b\u0107 cementu z elastyczno\u015bci\u0105 wapna. S\u0105 szczeg\u00f3lnie polecane do pomieszcze\u0144 wilgotnych, takich jak \u0142azienki, kuchnie, piwnice oraz gara\u017ce. Dzi\u0119ki wysokiej odporno\u015bci na wilgo\u0107 i uszkodzenia mechaniczne, doskonale sprawdzaj\u0105 si\u0119 r\u00f3wnie\u017c jako tynki zewn\u0119trzne.',
    benefits: [
      'Wysoka odporno\u015b\u0107 na wilgo\u0107',
      'Doskona\u0142a wytrzyma\u0142o\u015b\u0107 mechaniczna',
      'Uniwersalne zastosowanie \u2014 wewn\u0119trz i na zewn\u0105trz',
      'Idealne do pomieszcze\u0144 wilgotnych',
      'D\u0142uga \u017cywotno\u015b\u0107',
    ],
    icon: 'cementowe',
  },
  {
    slug: 'tynki-hybrydowe',
    name: 'Tynki hybrydowe',
    shortDescription:
      'Po\u0142\u0105czenie zalet tynk\u00f3w gipsowych i cementowych. Wszechstronne i trwa\u0142e.',
    fullDescription:
      'Tynki hybrydowe \u0142\u0105cz\u0105 najlepsze cechy tynk\u00f3w gipsowych i cementowo-wapiennych. Oferuj\u0105 g\u0142adko\u015b\u0107 i estetyk\u0119 tynku gipsowego przy jednoczesnej odporno\u015bci na wilgo\u0107 i wytrzyma\u0142o\u015bci mechanicznej tynku cementowego. To idealne rozwi\u0105zanie, gdy potrzebna jest wszechstronno\u015b\u0107 i trwa\u0142o\u015b\u0107.',
    benefits: [
      '\u0141\u0105czy zalety tynk\u00f3w gipsowych i cementowych',
      'G\u0142adka, estetyczna powierzchnia',
      'Lepsza odporno\u015b\u0107 na wilgo\u0107 ni\u017c tynk gipsowy',
      'Wszechstronne zastosowanie',
      'Dobry stosunek jako\u015bci do ceny',
    ],
    icon: 'hybrydowe',
  },
  {
    slug: 'tynki-gliniane',
    name: 'Tynki gliniane',
    shortDescription:
      'Ekologiczne tynki z naturalnych materia\u0142\u00f3w. Reguluj\u0105 wilgotno\u015b\u0107 i poprawiaj\u0105 mikroklimat.',
    fullDescription:
      'Tynki gliniane to rozwi\u0105zanie dla os\u00f3b ceni\u0105cych ekologi\u0119 i naturalne materia\u0142y budowlane. Wykonane z gliny, piasku i w\u0142\u00f3kien naturalnych, doskonale reguluj\u0105 wilgotno\u015b\u0107 powietrza i tworz\u0105 zdrowy mikroklimat w pomieszczeniach. Tynki gliniane s\u0105 antybakteryjne, antystatyczne i nie emituj\u0105 szkodliwych substancji.',
    benefits: [
      'W pe\u0142ni ekologiczne i naturalne',
      'Doskona\u0142a regulacja wilgotno\u015bci powietrza',
      'Tworz\u0105 zdrowy mikroklimat w pomieszczeniu',
      'W\u0142a\u015bciwo\u015bci antybakteryjne i antystatyczne',
      'Przyjemna, naturalna estetyka',
    ],
    icon: 'gliniane',
  },
];

export const allServicesWithTwarde = [
  ...services.slice(0, 1),
  {
    slug: 'tynki-gipsowe',
    name: 'Tynki gipsowe twarde',
    shortDescription:
      'Wzmocniona wersja tynku gipsowego o wy\u017cszej twardo\u015bci i odporno\u015bci na uszkodzenia.',
    icon: 'twarde' as const,
  },
  ...services.slice(1),
];
