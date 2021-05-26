export default {
  namespaced: true,

  state: {
    popularDestinations: null,
    defaultPopularDestinations: [
      {
        city: 'Paris',
        country: 'France',
        description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
        image: '/images/index/popular-destinations/paris.jpeg'
      },
      {
        city: 'Barcelona',
        country: 'Spain',
        description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites.',
        image: '/images/index/popular-destinations/barcelona.jpeg'
      },
      {
        city: 'London',
        country: 'Great Britain',
        description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',
        image: '/images/index/popular-destinations/london.jpeg'
      },
      {
        city: 'Dubai',
        country: 'UAE',
        description: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.',
        image: '/images/index/popular-destinations/dubai.jpeg'
      },
      {
        city: 'Tokyo',
        country: 'Japan',
        description: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city\'s many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).',
        image: '/images/index/popular-destinations/tokyo.jpeg'
      },
      {
        city: 'Istanbul',
        country: 'Turkey',
        description: 'Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics.',
        image: '/images/index/popular-destinations/istanbul.jpeg'
      },
      {
        city: 'Rome',
        country: 'Italy',
        description: 'Rome is the capital city and a special comune of Italy, as well as the capital of the Lazio region. The city has been a major human settlement for almost three millennia. With 2,860,009 residents in 1,285 km², it is also the country\'s most populated comune.',
        image: '/images/index/popular-destinations/rome.jpeg'
      },
      {
        city: 'Amsterdam',
        country: 'Netherlands',
        description: 'Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there are numerous bike paths.',
        image: '/images/index/popular-destinations/amsterdam.jpeg'
      },
      {
        city: 'Los Angeles',
        country: 'USA',
        description: 'Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes.',
        image: '/images/index/popular-destinations/los-angeles.jpeg'
      }
    ]
  },

  mutations: {
    setPopularDestinations (state, payload) {
      state.popularDestinations = payload
    }
  },

  actions: {
    getPopularDestinations () {
    }
  }
}
