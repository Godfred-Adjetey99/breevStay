import fronView from "../assets/frontView.png";
import ApartmentBedroom from "../assets/ApartmentBedroom.png";
import OpenhallApartment from "../assets/OpenhallApartment.png";
import ApartmentOutdoor from "../assets/ApartmentOutdoor.png";
import ApartmentWashroom from "../assets/ApartmentWashroom.png";
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
    descriptionCard:
      "A cozy single room apartment in the heart of the city and closer to the beach.",
    description2:
      "Indulge in the epitome of luxury and comfort at BreevStay. Our meticulously designed rooms offer a haven of tranquility, where every detail is crafted to perfection. From plush bedding to elegant decor, we ensure that your stay with us is nothing short of extraordinary. Whether you're seeking a romantic getaway or a peaceful retreat, our rooms provide the perfect sanctuary for you to unwind and create unforgettable memories.",
    priceCents: "5500",
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
      { name: " Condition Breakfast", icon: freeBreakfastIcon },
      { name: "Air Condition", icon: airConditioner },
    ],
  },
  {
    id: "room1",
    name: "Single Room",
    descriptionCard:
      "A cozy single room apartment in the heart of the city and closer to the beach.",
    description2:
      "At BreevStay, we believe that luxury is not just a service, but an experience. Our dedicated staff is committed to providing personalized attention and exceptional hospitality to ensure that your stay exceeds your expectations. From the moment you step through our doors, you'll be enveloped in an atmosphere of elegance and sophistication, where every need is anticipated and every desire is fulfilled.",
    priceCents: "3500",
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
      { name: " Condition Breakfast", icon: freeBreakfastIcon },
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
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    review:
      "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    review:
      "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!",
  },
];

export const ContactInfo = [
  { name: "Email", value: "breevstay@gmail.com" },
  { name: "Phone", value: "+233 550906480" },
  {
    name: "Address",
    value: "Coco Beach Opposite Blackmama Resort, Nungua , Ghana",
  },
];

// </div>
//           <p className="text-gray-600 mt-4 text-lg">Indulge in the epitome of luxury and comfort at BreevStay. Our meticulously designed rooms offer a haven of tranquility, where every detail is crafted to perfection. From plush bedding to elegant decor, we ensure that your stay with us is nothing short of extraordinary. Whether you're seeking a romantic getaway or a peaceful retreat, our rooms provide the perfect sanctuary for you to unwind and create unforgettable memories.</p>
//           <p className="text-gray-600 mt-4 text-lg">At BreevStay, we believe that luxury is not just a service, but an experience. Our dedicated staff is committed to providing personalized attention and exceptional hospitality to ensure that your stay exceeds your expectations. From the moment you step through our doors, you'll be enveloped in an atmosphere of elegance and sophistication, where every need is anticipated and every desire is fulfilled.</p>
//           <p className="text-gray-600 mt-4 text-lg">Discover the perfect blend of opulence and comfort at BreevStay, where every room is a sanctuary of indulgence. Whether you're here for a romantic escape or a leisurely retreat, our luxurious accommodations promise an unforgettable experience that will leave you longing to return.</p>
//         </div>
//       </div>
