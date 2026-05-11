import fronView from "../assets/frontView.png";

export const Links = [
  { name: "Home", link: "/" },
  {
    name: "Gallery",
    link: "/#gallery",
  },
  {
    name: "Reviews",
    link: "/#reviews",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

export const HeroSection = [
  {
    title: "BreevStay",
    descriptionh1: "Discover Your Perfect Stay with BreevStay",
    descriptionp:
      "Unparalleled luxury and comfort await you at BreevStay. Start your journey today",
    images: [
      {
        name: "heroFrontView",
        value: fronView,
      },
    ],
  },
];

export const featuredRooms = [
  {
    id: "apartment1",
    name: "Apartment",
    description: "A cozy apartment in the heart of the city.",
    price: "",
    image: "https://via.placeholder.com/400x300?text=Apartment+1",
  },
];

export const ContactInfo = [
  { name: "Email", value: "breevstay@gmail.com" },
  { name: "Phone", value: "+1 (555) 123-4567" },
  {
    name: "Address",
    value: "123 Main Street, Anytown, USA",
  },
];
