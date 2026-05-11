import fronView from "../assets/frontView.png";
import ApartmentBedroom from "../assets/ApartmentBedroom.png";
import OpenhallApartment from "../assets/OpenhallApartment.png";
import ApartmentOutdoor from "../assets/ApartmentOutdoor.png";
import ApartmentWashroom from "../assets/ApartmentWashroom.png";

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
    price: "6300",
    image: ApartmentBedroom,
    images: [
      {
        name: "apartmentOpenHall",
        value: OpenhallApartment,
      },
      {
        name: "ApartmentOutdoor",
        value: ApartmentOutdoor,
      },
      {
        name: "ApartmentWashroom",
        value: ApartmentWashroom,
      },
      {
        name: "ApartmentBedroom",
        value: ApartmentBedroom,
      },
    ],
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
