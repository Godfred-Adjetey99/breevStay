import fronView from "../assets/frontView.png";
import ApartmentBedroom from "../assets/ApartmentBedroom.png";
import OpenhallApartment from "../assets/OpenhallApartment.png";
import ApartmentOutdoor from "../assets/ApartmentOutdoor.png";
import ApartmentWashroom from "../assets/ApartmentWashroom.png";
import ApartmentKite from "../assets/ApartmentKite.jpg";
import apartmentswashroom1 from "../assets/apartmentswashroom1.jpeg";
import apartmentbath from "../assets/apartmentbath.png";
import apartmenttoilet from "../assets/apartmenttoilet.png";
import room1Bed from "../assets/room1Bed.jpeg";
import room1Indoors from "../assets/room1Indoors.jpeg";
import room1Outdoor from "../assets/room1Outdoor.jpeg";
import room1toilet from "../assets/room1toilet.jpeg";
import room1washroom from "../assets/room1washroom.jpeg";
import room1waredrope from "../assets/room1waredrope.jpeg";
import room1bal from "../assets/room1bal.jpeg";
import room2Bed from "../assets/room2Bed.jpeg";
import room2Washroom from "../assets/room2Washroom.jpeg";
import room2toilet from "../assets/room2toilet.jpeg";
import room2bal from "../assets/room2bal.jpeg";
import room2waredrope from "../assets/room2waredrope.jpeg";
import room2Outside from "../assets/room2Outside.jpeg";
import room3bed from "../assets/room3bed.jpeg";
import room3chair from "../assets/room3chair.jpeg";
import room3bal from "../assets/room3bal.jpeg";
import room3toilet from "../assets/room3toilet.jpeg";
import room3waredrope from "../assets/room3waredrope.jpeg";
import freeWifiIcon from "../assets/freeWifiIcon.svg";
import roomServiceIcon from "../assets/roomServiceIcon.svg";
import homeIcon from "../assets/homeIcon.svg";
import badgeIcon from "../assets/badgeIcon.svg";
import locationFilledIcon from "../assets/locationFilledIcon.svg";
import heartIcon from "../assets/heartIcon.svg";
import freeBreakfastIcon from "../assets/freeBreakfastIcon.svg";
import airConditioner from "../assets/airConditioner.svg";

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
    descriptionh1: "Discover Your Perfect Stay with BreevStay in Nungua",
    descriptionp:
      "Unparalleled luxury and comfort await you at BreevStay. Start your journey today",
    images: [
      {
        name: "heroFrontView of a rental apartment in accra",
        value: fronView,
      },
    ],
  },
];

export const featuredRooms = [
  {
    id: "apartment1",
    name: "One Bedroom Apartment ",
    descriptionCard:
      "This beachside apartment offers a comfortable and tranquil stay along the beach",
    description2: `This beachside apartment offers a comfortable and tranquil stay along the soft, golden sands of Coco Beach, a shoreline stretching approximately 1.5 kilometers. Guests can enjoy the natural coastal environment, with opportunities for surfing and for accompanying local fishermen on their traditional boats, providing an authentic insight into daily maritime life. The beachfront maintains a calm yet naturally active atmosphere, characteristic of Accra’s coast, and includes essential amenities such as lifeguards, bathroom facilities, and a beachside bar for added convenience. From the apartment, the sea view enhances the serene setting, while the gentle sound of the waves at night and the soft sea breeze create a refreshing and peaceful ambiance throughout the stay. Please send a message to us, our contact details are in the automatic reply. We request payment before arrival, because we directly pay our share to booking. Payment through booking does not exist yet for Ghana.
I was born in Ghana, but I moved to Belgium in my early twenties, where I spent most of my adult life. After many years abroad, I decided it was time to come back home. I’m a chatty, warm person who enjoys meeting new people, and I’m happy to welcome guests who want to experience Ghana the way I’ve always known it—friendly, open, and full of life.
The apartment is located in a calm coastal area near Coco Beach, offering a pleasant balance between quiet seaside living and the natural liveliness of Accra’s shoreline. The beachfront has a relaxed but active atmosphere, typical of this part of the city. Although the area feels somewhat tucked away, it still maintains what visitors describe as an “out‑of‑the‑way atmosphere in the centre of Accra,” making it easy to enjoy peace while remaining connected to the city. From this neighbourhood, guests can easily reach other parts of Accra, including cultural landmarks, markets, and essential services, ensuring smooth access to the wider city without losing the comfort of a quieter coastal environment`,
    priceCents: "5500",
    image: ApartmentBedroom,
    images: [
      {
        name: "apartmentOpenHall in nungua",
        value: OpenhallApartment,
      },
      {
        name: "ApartmentOutdoor  in nungua",
        value: ApartmentOutdoor,
      },
      {
        name: "ApartmentKite  in nungua",
        value: ApartmentKite,
      },
      {
        name: "ApartmentBedroom  in nungua",
        value: ApartmentBedroom,
      },
      {
        name: "ApartmentWashroom in nungua",
        value: ApartmentWashroom,
      },
      {
        name: "ApartmentWashroom1 in nungua",
        value: apartmentswashroom1,
      },
      {
        name: "ApartmentBath in nungua",
        value: apartmentbath,
      },
      {
        name: "ApartmentToilet in nungua",
        value: apartmenttoilet,
      },
    ],
    roomCommonData: [
      {
        icon: homeIcon,
        title: "Clean & Safe Stay",
        description: "A well-maintained and hygienic space just for you.",
      },
      {
        icon: badgeIcon,
        title: "Enhanced Cleaning",
        description: "This host follows Staybnb's strict cleaning standards.",
      },
      {
        icon: locationFilledIcon,
        title: "Excellent Location",
        description: "90% of guests rated the location 5 stars.",
      },
      {
        icon: heartIcon,
        title: "Smooth Check-In",
        description: "100% of guests gave check-in a 5-star rating.",
      },
    ],

    facilityIcons: [
      { name: " Free Wifi", icon: freeWifiIcon },
      { name: "Room Service", icon: roomServiceIcon },
      { name: " Conditional Breakfast", icon: freeBreakfastIcon },
      { name: "Air Condition", icon: airConditioner },
    ],
  },
  {
    id: "room1",
    name: "Room For 2 Adults",
    descriptionCard:
      "A cozy room for two adults with a balcony in the heart of the city and closer to the beach.",
    description2:
      "At BreevStay, we believe that luxury is not just a service, but an experience. Our dedicated staff is committed to providing personalized attention and exceptional hospitality to ensure that your stay exceeds your expectations. From the moment you step through our doors, you'll be enveloped in an atmosphere of elegance and sophistication, where every need is anticipated and every desire is fulfilled.",
    priceCents: "3500",
    image: room1Bed,
    images: [
      {
        name: "room1Bed  in nungua",
        value: room1Bed,
      },
      {
        name: "room1Indoors  in nungua",
        value: room1Indoors,
      },
      {
        name: "room1Outdoor  in nungua",
        value: room1Outdoor,
      },
      {
        name: "room1toilet  in nungua",
        value: room1toilet,
      },
      {
        name: "room1Washroom  in nungua",
        value: room1washroom,
      },
      {
        name: "room1waredrope  in nungua",
        value: room1waredrope,
      },
      {
        name: "room1bal  in nungua",
        value: room1bal,
      },
    ],
    roomCommonData: [
      {
        icon: homeIcon,
        title: "Clean & Safe Stay",
        description: "A well-maintained and hygienic space just for you.",
      },
      {
        icon: badgeIcon,
        title: "Enhanced Cleaning",
        description: "This host follows Staybnb's strict cleaning standards.",
      },
      {
        icon: locationFilledIcon,
        title: "Excellent Location",
        description: "90% of guests rated the location 5 stars.",
      },
      {
        icon: heartIcon,
        title: "Smooth Check-In",
        description: "100% of guests gave check-in a 5-star rating.",
      },
    ],

    facilityIcons: [
      { name: " Free Wifi", icon: freeWifiIcon },
      { name: "Room Service", icon: roomServiceIcon },
      { name: " Conditional Breakfast", icon: freeBreakfastIcon },
      { name: "Air Condition", icon: airConditioner },
    ],
  },
  {
    id: "room2",
    name: "Room For 2 Adults",
    descriptionCard:
      "A cozy room for two adults with a balcony in the heart of the city and closer to the beach.",
    description2:
      "Discover the perfect blend of opulence and comfort at BreevStay in nungua coco beach, where every room is a sanctuary of indulgence. Whether you're here for a romantic escape or a leisurely retreat, our luxurious accommodations promise an unforgettable experience that will leave you longing to return.",
    priceCents: "3500",
    image: room2Bed,
    images: [
      {
        name: "room2Ben  in nungua",
        value: room2Bed,
      },
      {
        name: "room2Indoors  in nungua",
        value: room2Washroom,
      },
      {
        name: "room2Outdoor  in nungua",
        value: room2Outside,
      },
      {
        name: "room2toilet  in nungua",
        value: room2toilet,
      },
      {
        name: "room2bal  in nungua",
        value: room2bal,
      },
      {
        name: "room2waredrope  in nungua",
        value: room2waredrope,
      },
    ],
    roomCommonData: [
      {
        icon: homeIcon,
        title: "Clean & Safe Stay",
        description: "A well-maintained and hygienic space just for you.",
      },
      {
        icon: badgeIcon,
        title: "Enhanced Cleaning",
        description: "This host follows Staybnb's strict cleaning standards.",
      },
      {
        icon: locationFilledIcon,
        title: "Excellent Location",
        description: "90% of guests rated the location 5 stars.",
      },
      {
        icon: heartIcon,
        title: "Smooth Check-In",
        description: "100% of guests gave check-in a 5-star rating.",
      },
    ],

    facilityIcons: [
      { name: " Free Wifi", icon: freeWifiIcon },
      { name: "Room Service", icon: roomServiceIcon },
      { name: " Conditional Breakfast", icon: freeBreakfastIcon },
      { name: "Air Condition", icon: airConditioner },
    ],
  },
  {
    id: "room3",
    name: "Room For 2 Adults",
    descriptionCard:
      "A cozy room for two adults with a balcony in the heart of the city and closer to the beach.",
    description2:
      "At BreevStay, we believe that luxury is not just a service, but an experience. Our dedicated staff is committed to providing personalized attention and exceptional hospitality to ensure that your stay exceeds your expectations. From the moment you step through our doors, you'll be enveloped in an atmosphere of elegance and sophistication, where every need is anticipated and every desire is fulfilled.",
    priceCents: "3500",
    image: room3bed,
    images: [
      {
        name: "room3Bed  in nungua",
        value: room3bed,
      },
      {
        name: "room3toilet  in nungua",
        value: room3toilet,
      },
      {
        name: "room3bal  in nungua",
        value: room3bal,
      },
      {
        name: "room3waredrope  in nungua",
        value: room3waredrope,
      },
      {
        name: "room3chair  in nungua",
        value: room3chair,
      },
    ],
    roomCommonData: [
      {
        icon: homeIcon,
        title: "Clean & Safe Stay",
        description: "A well-maintained and hygienic space just for you.",
      },
      {
        icon: badgeIcon,
        title: "Enhanced Cleaning",
        description: "This host follows Staybnb's strict cleaning standards.",
      },
      {
        icon: locationFilledIcon,
        title: "Excellent Location",
        description: "90% of guests rated the location 5 stars.",
      },
      {
        icon: heartIcon,
        title: "Smooth Check-In",
        description: "100% of guests gave check-in a 5-star rating.",
      },
    ],

    facilityIcons: [
      { name: " Free Wifi", icon: freeWifiIcon },
      { name: "Room Service", icon: roomServiceIcon },
      { name: " Conditional Breakfast", icon: freeBreakfastIcon },
      { name: "Air Condition", icon: airConditioner },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that BreevStay provides.",
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    review:
      "BreevStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    review:
      "Amazing service! I always find the best luxury accommodations through BreevStay. Their recommendations never disappoint!",
  },
];

export const ContactInfo = [
  {
    name: "Email",
    value: "breevstay1@gmail.com",
    link: "https://breevstay1@gmail.com",
  },
  { name: "Phone", value: "+233 55 090 6480", link: "" },
  {
    name: "Address",
    value: "Coco Beach Near Coco De Villa, Nungua , Ghana",
    link: "https://maps.app.goo.gl/NX5n7vjBGt2sJYTp7",
  },
  {
    name: "What's App Number",
    value: "+233 53 194 2154",
  },
];
