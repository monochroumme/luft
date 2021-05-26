export default {
  namespaced: true,

  state: {
    tours: null,
    defaultTours: [
      {
        slug: 'baku-tour-4-nights-5-days',
        title: 'Tour of Baku 4 nights / 5 days',
        includes: [
          '4 nights hotel with breakfast in Twin sharing room',
          'Return airport transfers',
          'Sightseeing tour as per program (English speaking guide)',
          'Visa service and fee',
          'Entry tickets. Gobustan, Fire Temple and Ferris wheel, Little Venice boat trip, cruise boat trip'
        ],
        country: 'Azerbaijan',
        city: 'Baku',
        priceUsd: '366',
        details: 'Baku is Azerbaijan\'s largest cultural center. It was here that the first national theater in the Muslim East was raised, the first opera was performed, the first Azerbaijani newspaper was published, the first Azerbaijani library was opened. Today in Baku there are 30 museums, 7 theaters, 11 universities, a Philharmonic, an opera house, a film studio, cinemas, libraries located in the most beautiful buildings of the city.',
        images: [
          '/images/index/tours/baku-t1-1.jpeg',
          '/images/index/tours/baku-t1-2.jpeg',
          '/images/index/tours/baku-t1-3.jpeg',
          '/images/index/tours/baku-t1-4.jpeg',
          '/images/index/tours/baku-t1-5.jpeg',
          '/images/index/tours/baku-t1-6.jpeg'
        ]
      },
      {
        slug: 'three-steps-to-paris',
        title: 'Three steps to Paris!',
        includes: [
          'Transport according to the program',
          'Accommodation in hotels 3-4 *',
          'Food breakfast',
          'Sightseeing tours',
          'Escort of the guide-guide along the route',
          'Group insurance',
          'Additionally paid air travel and visa'
        ],
        country: 'France',
        city: 'Paris',
        priceUsd: '350',
        details: 'The tour includes six countries: Hungary, Slovakia, Germany, Austria, France, Switzerland.',
        images: [
          '/images/index/tours/paris-1.jpeg',
          '/images/index/tours/paris-2.jpeg',
          '/images/index/tours/paris-3.jpeg',
          '/images/index/tours/paris-4.jpeg',
          '/images/index/tours/paris-5.jpeg',
          '/images/index/tours/paris-6.jpeg',
          '/images/index/tours/paris-7.jpeg',
          '/images/index/tours/paris-8.jpeg',
          '/images/index/tours/paris-9.jpeg',
          '/images/index/tours/paris-10.jpeg',
          '/images/index/tours/paris-11.jpeg'
        ]
      },
      {
        slug: 'istanbul',
        title: 'Istanbul',
        includes: [
          'Flight : Azal',
          'Hotel accommodation',
          'Transfer',
          'Insurance',
          'Meals (breakfast)',
          'Tour duration : 3 nights / 4 days'
        ],
        country: 'Turkey',
        city: 'Istanbul',
        priceUsd: '358',
        details: 'Istanbul is Turkey’s largest city on the shores of the Bosphorus, which divides it into European and Asian parts. The Old Town has preserved buildings of various historical eras. In the Sultanahmet district are located the Hippodrome erected by the Romans, where chariot races and the Egyptian obelisk have been held for many centuries. The Byzantine Hagia Sophia is famous for its huge VI-century dome and magnificent Christian mosaics.',
        images: [
          '/images/index/tours/istanbul-1.jpeg',
          '/images/index/tours/istanbul-2.jpeg',
          '/images/index/tours/istanbul-3.jpeg',
          '/images/index/tours/istanbul-4.jpeg',
          '/images/index/tours/istanbul-5.jpeg',
          '/images/index/tours/istanbul-6.jpeg',
          '/images/index/tours/istanbul-7.jpeg',
          '/images/index/tours/istanbul-8.jpeg'
        ]
      },
      {
        slug: 'baku-tour-5-nights-6-days',
        title: 'Tour of Baku 5 nights / 6 days',
        includes: [
          '4 nights hotel with breakfast in Twin sharing room',
          'Return airport transfers',
          'Sightseeing tour as per program (English speaking guide)',
          'Visa service and fee',
          'Entry tickets. Gobustan, Fire Temple and Ferris wheel, Little Venice boat trip, cruise boat trip',
          '4 lunchs , 4 diners'
        ],
        country: 'Azerbaijan',
        city: 'Baku',
        priceUsd: '460',
        details: 'Baku is Azerbaijan\'s largest cultural center. It was here that the first national theater in the Muslim East was raised, the first opera was performed, the first Azerbaijani newspaper was published, the first Azerbaijani library was opened. Today in Baku there are 30 museums, 7 theaters, 11 universities, a Philharmonic, an opera house, a film studio, cinemas, libraries located in the most beautiful buildings of the city, whose external decoration is not inferior to the internal cultural content.',
        images: [
          '/images/index/tours/baku-t1-3.jpeg',
          '/images/index/tours/baku-t1-5.jpeg',
          '/images/index/tours/baku-t1-4.jpeg',
          '/images/index/tours/baku-t1-1.jpeg',
          '/images/index/tours/baku-t1-2.jpeg',
          '/images/index/tours/baku-t1-6.jpeg'
        ]
      },
      {
        slug: 'new-year-tour-paris',
        title: 'New Year Tour to Paris!',
        includes: [
          'Flight: Azerbaijan Airlines',
          'Luggage included: 23 kg and carry-on baggage of 10 kg',
          'Group transfer: Airport-hotel-airport',
          'Hotel accommodation: breakfast meals',
          'Sightseeing tour of Paris with a Russian-speaking guide on the bus',
          'Walk on a cruise ship on the Seine',
          'Visit to the Fragonard Perfume Museum',
          'Walking tour "Historical center of Paris"',
          'Montmartre walking tour',
          'Tur duration: 7 nights / 8 days'
        ],
        country: 'France',
        city: 'Paris',
        priceUsd: '877',
        details: 'The capital of France, Paris, is one of the main European cities and a world center of culture, art, fashion and gastronomy. In the central part of the city, built in the 19th century, there are wide boulevards and the river Seine flows. The most famous sights of Paris are the Eiffel Tower and Notre Dame Cathedral in the Gothic style, built in the XII century. Also, the city is famous for its many cafes and boutiques with clothes from famous designers on the street Faubourg-Saint-Honoré.',
        images: [
          '/images/index/tours/paris-15.jpeg',
          '/images/index/tours/paris-16.jpeg',
          '/images/index/tours/paris-12.jpeg',
          '/images/index/tours/paris-1.jpeg',
          '/images/index/tours/paris-13.jpeg',
          '/images/index/tours/paris-14.jpeg'
        ]
      }
    ]
  },

  mutations: {
    setTours (state, payload) {
      state.tours = payload
    }
  },

  actions: {
    getTours () {
    }
  }
}
