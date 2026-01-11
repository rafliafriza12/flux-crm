import { ROUTES } from "@/config/index";
import {
  BrandItem,
  ClientItem,
  FeatureItem,
  HeaderRouter,
  HowItWorkItem,
  InsightItem,
  ProjectItem,
  TestimonialItem,
} from "@/types";

export const HeaderNavigate: HeaderRouter[] = [
  {
    id: 1,
    title: "Home",
    href: ROUTES.HOME,
  },
  {
    id: 2,
    title: "Service",
    href: "#",
  },
  {
    id: 3,
    title: "Project",
    href: "#",
  },
  {
    id: 4,
    title: "About Us",
    href: "#",
  },
];

export const Features: FeatureItem[] = [
  {
    title: "UI/UX Design",
    description:
      "UI/UX in app is key to creating a great user experience. This will increase user loyalty, strengthen brand image, and provide a competitive advantage.",
    icon: "ri-pencil-ruler-2-line",
  },
  {
    title: "Branding",
    description:
      "Branding can involve strategies and efforts to build a consistent image, identity, and perception associated with a product, service, or company.",
    icon: "ri-box-3-line",
  },
  {
    title: "Developer",
    description:
      "Developers play an important role in creating technology solutions that make life easier, improve business processes, and drive innovation.",
    icon: "ri-code-s-slash-line",
  },
];

export const CLientlist: ClientItem[] = [
  {
    id: 1,
    title: "500",
    icon: "+",
    desc: "Happy Client",
  },
  {
    id: 2,
    title: "200",
    icon: "+",
    desc: "Project Complate",
  },
  {
    id: 3,
    title: "12",
    icon: "yr+",
    desc: "Experience",
  },
];

export const ItWorkData: HowItWorkItem[] = [
  {
    step: "01",
    title: "Smart digital marketing strategy",
    description:
      "Overall, we leverage technological intelligence and understanding of customer behavior to achieve marketing goals more efficiently.",
    primary: true,
  },
  {
    step: "02",
    title: "Best web and app developers",
    description:
      "We are able to create great user experiences, intuitive interfaces, and integrate advanced features to add significant value.",
  },
  {
    step: "03",
    title: "Visualization of user-appealing designs",
    description:
      "A user-appealing design can create a mesmerizing experience and motivate users to continue using the product.",
  },
  {
    step: "04",
    title: "Quick and friendly service",
    description:
      "Quick and friendly service includes the ability to respond and handle complaints or problems quickly.",
  },
];

export const insightsData: InsightItem[] = [
  {
    id: 1,
    category: "lorem",
    title: "lorem",
    description: "lorem",
    image: "/images/companyDummy.jpg",
  },
  {
    id: 2,
    category: "lorem",
    title: "lorem",
    description: "lorem",
    image: "/images/companyDummy.jpg",
  },
  {
    id: 3,
    category: "lorem",
    title: "lorem",
    description: "lorem",
    image: "/images/companyDummy.jpg",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia ipsam.",
    image: "/images/companyDummy.jpg",
  },
  {
    id: 2,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia ipsam.",
    image: "/images/companyDummy.jpg",
  },
  {
    id: 3,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia ipsam.",
    image: "/images/companyDummy.jpg",
  },
  {
    id: 4,
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia ipsam.",
    image: "/images/companyDummy.jpg",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Lorem",
    role: "Product designer at DataDrive",
    avatar: "/avatar/1.jpg",
    quote:
      "We are very impressed with this creative agency. Working with this agency is not only fun, but also yields great results.",
    date: "Jun 23, 2020",
    rating: 5,
  },
  {
    id: 2,
    name: "Lorem",
    role: "CEO at IdeaForge",
    avatar: "/avatar/2.jpg",
    quote:
      "Great! We saw a significant increase in visitors and conversion rates. Highly recommend to anyone looking for innovative solutions.",
    date: "Aug 20, 2021",
    rating: 5,
  },
  {
    id: 3,
    name: "Lorem",
    role: "CEO at IdeaForge",
    avatar: "/avatar/3.jpg",
    quote:
      "Great! We saw a significant increase in visitors and conversion rates. Highly recommend to anyone looking for innovative solutions.",
    date: "Aug 20, 2021",
    rating: 5,
  },
  {
    id: 4,
    name: "Nathaniel Jameson",
    role: "CEO at IdeaForge",
    avatar: "/avatar/4.jpg",
    quote:
      "Great! We saw a significant increase in visitors and conversion rates. Highly recommend to anyone looking for innovative solutions.",
    date: "Aug 20, 2021",
    rating: 5,
  },
];

export const brandsList: BrandItem[] = [
  { id: 1, logo: "/icon/Gt.png", name: "Brand 1" },
  { id: 2, logo: "/icon/Gt.png", name: "Brand 2" },
  { id: 3, logo: "/icon/Gt.png", name: "Brand 3" },
  { id: 4, logo: "/icon/Gt.png", name: "Brand 4" },
  { id: 5, logo: "/icon/Gt.png", name: "Brand 5" },
];
