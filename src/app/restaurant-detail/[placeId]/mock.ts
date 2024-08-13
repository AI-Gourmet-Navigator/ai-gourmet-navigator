import { env } from '@/env'
export const MOCK_RESTAURANT_DETAILS = {
  id: 'ChIJJ_oZQcpzhlQRYmMyGpKp7PA',
  name: "Farmer's Apprentice Restaurant",
  location: { lat: 49.2663397, lng: -123.1396572 },
  rating: 4.4,
  ratingsTotal: 382,
  isFavorite: true,
  url: 'https://maps.google.com/?cid=7298221253814641466',
  website: 'https://sushiinnvancouver.ca/',
  formatted_address: '3772 W 10th Ave, Vancouver, BC V6R 2G4, Canada',
  serves_vegetarian_food: true,
  takeout: true,
  delivery: false,
  dine_in: true,
  wheelchair_accessible_entrance: false,
  reservable: true,
  price_level: 2,
  opening_hours: {
    open_now: true,
    weekday_text: [
      'Monday: 11:00 AM – 12:45 AM',
      'Tuesday: 11:00 AM – 12:45 AM',
      'Wednesday: 11:00 AM – 12:45 AM',
      'Thursday: 11:00 AM – 12:45 AM',
      'Friday: 11:00 AM – 12:45 AM',
      'Saturday: 11:00 AM – 12:45 AM',
      'Sunday: 11:00 AM – 11:45 PM',
    ],
  },
  photos: [
    {
      imageUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=AUGGfZmTsd7W6yo6YCPkOqxfNdvPR-GdfGDH6zlWJqzbouMQOLO6LlpUYHkLW6bCKR-omQ4rO49_ETKflXH-V0Xu5c7DfUpItE03F69SPzqzDEWt4lmTJzKBRwN_qpyfRiJVRtOjbS2Xcy5eXGtGTNUYeWrhIYZTYK4_IxEAJ0b0rn-wKnSD&key=${env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
    },
    {
      imageUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=AUGGfZlBfA5d809W42UY393ABVO6eYUpp_VjA9iICbtD7L4y3jzGMaJz2Ubha3gVmLQK-AOOk61IFk69ptiK-AEU2Z2HC7hc68dwtwKa6LSKQWIL7t6wki8DaPK_3msLnuEDY200g7tp2SavAi1Qx0G5zvYbMABk_X4UvJuXzkGRgtm9SnMr&key=${env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
    },
    {
      imageUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=AUGGfZlk6JxFqrN4AnO-OdBHdjWa6oJyk7FQ5c8IQURlmnWhXB0QZH_Q06N1v-ETjGeYp-5HHeNNhGQejWrcBh5RtY0IU0crYVPGBlNqDPcEhA95B-LxiBfWMwhe2TBbSIpkToldFuJN6h2a19o5IzDjEynsP6Zodr8FdyeA_IJbkMfZe8EO&key=${env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
    },
    {
      imageUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=AUGGfZlBfA5d809W42UY393ABVO6eYUpp_VjA9iICbtD7L4y3jzGMaJz2Ubha3gVmLQK-AOOk61IFk69ptiK-AEU2Z2HC7hc68dwtwKa6LSKQWIL7t6wki8DaPK_3msLnuEDY200g7tp2SavAi1Qx0G5zvYbMABk_X4UvJuXzkGRgtm9SnMr&key=${env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
    },
    {
      imageUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=AUGGfZlk6JxFqrN4AnO-OdBHdjWa6oJyk7FQ5c8IQURlmnWhXB0QZH_Q06N1v-ETjGeYp-5HHeNNhGQejWrcBh5RtY0IU0crYVPGBlNqDPcEhA95B-LxiBfWMwhe2TBbSIpkToldFuJN6h2a19o5IzDjEynsP6Zodr8FdyeA_IJbkMfZe8EO&key=${env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
    },
  ],
  reviews: [
    {
      author_name: 'brian',
      author_url:
        'https://www.google.com/maps/contrib/110596244611305220326/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjXoOHoOwjoQadF3CbfH7TgxUqpS-oiges_MTae81MAAKB0BxGJ6=s128-c0x00000000-cc-rp-mo-ba4',
      rating: 5,
      relative_time_description: '2 months ago',
      text: 'had an excellent experience! the food was fresh and served promptly. open later than any other sushi house in the area. nice!',
      time: 1710712832,
      translated: false,
    },
    {
      author_name: 'Gimgi Wang',
      author_url:
        'https://www.google.com/maps/contrib/105747781242343550365/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjUCUiyfCYcwOc7rqjgh4Uu2x4-lkajxQ9eEs8JpA5MEMYuimDY=s128-c0x00000000-cc-rp-mo-ba3',
      rating: 4,
      relative_time_description: '4 months ago',
      text: "It's alright ~sad about the assorted tempura, it only comes with 2 pieces of prawn tempura. We'd have asked before we ordered.",
      time: 1706500382,
      translated: false,
    },
    {
      author_name: 'Alex Gosselin',
      author_url:
        'https://www.google.com/maps/contrib/111644889538517849743/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjX9siCaYLlsVATR39GgP5c_1JUni8uTLMNUQCPgOFgC8qbw538h=s128-c0x00000000-cc-rp-mo-ba3',
      rating: 5,
      relative_time_description: '3 years ago',
      text: "Eating at Sushi Inn was a very nice experience. The patio was cool and we'll shaded, which was very welcome after a long walk on a hot sunny day. I had the yam and vegetable sushi combos; miso soup and gomae included. The food was delicious and the server was  sweet and kind.",
      time: 1620782197,
      translated: false,
    },
    {
      author_name: 'Robin Marshall',
      author_url:
        'https://www.google.com/maps/contrib/113668537335073519695/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/ACg8ocJkcdh4hsItwwtghDBg9wsWjT4aX_9uSAUfub0my4L4VcRWNw=s128-c0x00000000-cc-rp-mo',
      rating: 5,
      relative_time_description: '6 months ago',
      text:
        'My roommate and I had just moved into the neighbourhood and we were craving sushi after a long moving day and stumbled upon Sushi Inn.\n' +
        'I cannot rave about this restaurant enough!\n' +
        'We were greeted with smiles, the service was exceptionally quick and lovely, the food was fantastic and of such good quality.\n' +
        'I’m so glad I’ve found my new favourite spot :)\n' +
        '\n' +
        'P.S: try the spicy tuna roll!! It was melt in your mouth good !',
      time: 1701400037,
      translated: false,
    },
    {
      author_name: 'Oleksandra Onofreichuk',
      author_url:
        'https://www.google.com/maps/contrib/102433720153019815543/reviews',
      language: 'en',
      original_language: 'en',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjVGY8iQfAmOBvVu9ZOziLMjNetccej3skT2oBdvN97ryFTEvUg=s128-c0x00000000-cc-rp-mo',
      rating: 4,
      relative_time_description: '2 months ago',
      text: 'Excellent service and atmosphere! I truly appreciate the communication and hard work of the staff. I would highly recommend the pork gyoza, Asahi beer, miso soup, tempura prawn, and the special combos for dinner here.',
      time: 1711859934,
      translated: false,
    },
  ],
}
