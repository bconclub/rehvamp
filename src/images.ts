// Central image manifest, every section references a SPECIFIC real image
// (downloaded from the live site into /public/images/<section>/). No random images.

export const IMG = {
  logo: {
    white: "/assets/logo-white.webp",
    dark: "/assets/logo-dark.png",
    icon: "/assets/icon.webp",
  },
  home: {
    hero: "/images/home/hero-v1.webp", // Hero Image 1 V1 (compressed from PNG)
    trioLeft: "/images/home/trio-right.webp", // swapped: group-of-children photo on the left
    trioRight: "/images/home/trio-left.webp", // swapped: teen-with-children photo on the right
    heroChildren: "/images/home/people-1.webp", // children learning with a mentor
    childBoard: "/images/home/child-board.webp", // child holding a board (cutout)
    classroom: "/images/home/event-1.webp", // teacher + circle of kids
    people2: "/images/home/people-2.webp",
    people3: "/images/home/people-3.webp",
    event2: "/images/home/event-2.webp",
    event3: "/images/home/event-3.webp",
    circle1: "/images/home/face-1.webp", // children's faces cropped from event-1
    circle2: "/images/home/face-2.webp",
    circle3: "/images/home/face-3.webp",
  },
  founder: {
    portrait: "/images/founder/ishita-founder-photo.jpg",  // Challenge page
    about: "/images/founder/ishita-about-portrait.jpg",    // About page
    festival: "/images/founder/ishita-festival.jpg",
    certificate: "/images/founder/ishita-certificate.jpg",
  },
  about: {
    a1: "/images/about/about-1.jpg",
    a2: "/images/about/about-2.jpg",
  },
  blog: {
    featured: "/images/blog/featured.webp",
    event: "/images/blog/event.jpg",
  },
  gaza: {
    g1: "/images/gaza/gaza-1.jpg",
    g2: "/images/gaza/gaza-2.webp",
    g3: "/images/gaza/gaza-3.jpg",
    g4: "/images/gaza/gaza-4.jpg",
  },
  emergencyExit: {
    hero: "/images/emergency-exit/emergency-exit.jpg",
  },
  challenge: {
    thirdSpace: "/images/challenge/third-space.png",
    aire: "/images/challenge/aire.png",
    book: "/images/challenge/book-reward.jpg",
    gym: "/images/challenge/third-space-gym.webp",
    bath: "/images/challenge/aire-bath.jpg",
  },
};
