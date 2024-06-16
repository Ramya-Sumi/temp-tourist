
import tour1 from './images/tour-1.jpg';
import tour2 from './images/tour-2.jpg';
import tour3 from './images/tour-3.jpg';
import tour4 from './images/tour-4.jpg';
import tour5 from './images/tour-5.jpg';
import tour6 from './images/tour-6.jpg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Saving money on your travels is easy with our tips: book in advance, choose budget-friendly accommodations, and explore free local attractions. Start your adventure without breaking the bank!',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Experience endless hiking trails with breathtaking views and diverse landscapes, perfect for every adventure seeker. Lace up your boots and explore nature beauty at its finest.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Enjoy amazing comfort in our accommodations, designed to make your stay relaxing and unforgettable. Experience the perfect blend of elegance and coziness.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'The Golden Triangle Tour',
    info: ` Upon your arrival at Agra, our tour representatives will greet and transfer you to the hotel. After quick refreshment, move for Agra sightseeingtour and explore great fun. You will be visiting one of the Seven Wonders of the World-Taj Mahal. Later, return back to the hotel for overnight stay.`,
    location: 'Delhi, Agra',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'Enchanting Himachal Tour',
    info: ` After your arrival at New Delhi airport /railway station, our tour representatives transfer you by highway to Shimla. It is the capital of Himachal Pradesh and also the capital of Britishers situated at an elevation of (2500 mts). Get into the hotel and enjoy your overnight stay.`,
    location: 'Shimla, Delhi',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'Explore Nainital Tour',
    info: ` After your arrival from Railway Station / Airport, meet our tour representatives and they will drive you to Nainital. Check into the hotel and relax for sometime. In the evening, enjoy a great time in the Mall Road and Boat ride at Naini Lake. Get back to the hotel for dinner.`,
    location: 'Nainital',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'Best Shimla Manali Tour',
    info: ` On arrival, you will be received by our tour representative from New Delhi air terminal/railway station and transferred by street to Shimla. It is the capital of Himachal Pradesh and former capital of Britishers situated at an elevation of (2500 mts). Move back to the hotel for overnight stay.`,
    location: 'Shimla',
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: 'november 20th, 2020',
    title: 'Combo Kashmir Package   ',
    info: `After your arrival at Jammu, our tour representatives will greet and drive you to Katra. Get into the hotel and relax for sometime. Enjoy your overnight stay at Katra. You will get a perspective of some exceptionally fascinating places around the Lake and Char Chinar.`,
    location: 'Gulmark',
    duration: 3,
    cost: 1500,
  },
  {
    id: 6,
    image: tour6,
    date: 'april 5th, 2013',
    title: 'Explore Pondicherry Tour',
    info: ` Get ready to visit the Pondicherry beach and enjoy the chill breeze. Later, proceed to Auroville - a universal city, Panjavadi Temple, Aurobindo Ashram, Manakkula Vinayakar Temple - an attractive, massive temple dedicated to Lord Ganesha. Spend your overnight stay at the hotel. `,
    location: 'Pondicherry',
    duration: 2,
    cost: 1000,
  },
];
