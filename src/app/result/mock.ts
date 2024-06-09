import { env } from "@/env";
console.log(env.NEXT_PUBLIC_GOOGLE_MAP_API);
export const MOCK_RESTAURANTS = [
  {
    id: "ChIJJ_oZQcpzhlQRYmMyGpKp7PA",
    name: "Farmer's Apprentice Restaurant",
    location: { lat: 49.2663397, lng: -123.1396572 },
    imageUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=AUGGfZmTsd7W6yo6YCPkOqxfNdvPR-GdfGDH6zlWJqzbouMQOLO6LlpUYHkLW6bCKR-omQ4rO49_ETKflXH-V0Xu5c7DfUpItE03F69SPzqzDEWt4lmTJzKBRwN_qpyfRiJVRtOjbS2Xcy5eXGtGTNUYeWrhIYZTYK4_IxEAJ0b0rn-wKnSD&key=${env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
    rating: 4.4,
    ratingsTotal: 382,
    isFavorite: true,
  },
  {
    id: "ChIJTZVOoN1zhlQRSMNq0C_JoIo",
    name: "Sylvia Hotel, Restaurant and Lounge",
    location: { lat: 49.2887225, lng: -123.1424491 },
    imageUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=AUGGfZlBfA5d809W42UY393ABVO6eYUpp_VjA9iICbtD7L4y3jzGMaJz2Ubha3gVmLQK-AOOk61IFk69ptiK-AEU2Z2HC7hc68dwtwKa6LSKQWIL7t6wki8DaPK_3msLnuEDY200g7tp2SavAi1Qx0G5zvYbMABk_X4UvJuXzkGRgtm9SnMr&key=${env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
    rating: 4.3,
    ratingsTotal: 1894,
    isFavorite: false,
  },
  {
    id: "ChIJiVOKeshzhlQRH8k4h0rMVc4",
    name: "AnnaLena",
    location: { lat: 49.2708, lng: -123.1467765 },
    imageUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=320&photo_reference=AUGGfZlk6JxFqrN4AnO-OdBHdjWa6oJyk7FQ5c8IQURlmnWhXB0QZH_Q06N1v-ETjGeYp-5HHeNNhGQejWrcBh5RtY0IU0crYVPGBlNqDPcEhA95B-LxiBfWMwhe2TBbSIpkToldFuJN6h2a19o5IzDjEynsP6Zodr8FdyeA_IJbkMfZe8EO&key=${env.NEXT_PUBLIC_GOOGLE_MAP_API}`,
    rating: 4.7,
    ratingsTotal: 1346,
    isFavorite: false,
  },
];
