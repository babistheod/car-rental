import car2 from "./images/details-2.jpg";
import car3 from "./images/details-3.jpg";
import car4 from "./images/details-4.jpg";
import img1 from "./images/car-1.jpg";
import img2 from "./images/car-2.jpg";
import img3 from "./images/car-3.jpg";
import img4 from "./images/car-4.jpg";
import img5 from "./images/car-5.jpg";
import img6 from "./images/car-6.jpg";
import img7 from "./images/car-7.jpg";
import img8 from "./images/car-8.jpg";
import img9 from "./images/car-9.jpg";
import img10 from "./images/car-10.jpg";
import img11 from "./images/car-11.jpg";
import img12 from "./images/car-12.jpg";

const cars = [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Hyundai i10",
      slug: "hyundai-i10",
      type: "small",
      price: 16,
      size: 1000,
      capacity: 4,
      automatic: true,
      electric: false,
      featured: false,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Toyota Aygo",
      slug: "toyota-aygo",
      type: "small",
      price: 16,
      size: 1000,
      capacity: 4,
      automatic: false,
      electric: false,
      featured: false,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },

  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Fiat 500",
      slug: "fiat-500",
      type: "small",
      price: 18,
      size: 1000,
      capacity: 4,
      automatic: true,
      electric: true,
      featured: false,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Toyota Yaris",
      slug: "toyota-yaris",
      type: "small",
      price: 18,
      size: 1200,
      capacity: 5,
      automatic: false,
      electric: false,
      featured: true,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },

  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Mercedes E220",
      slug: "mercedes-e220",
      type: "large",
      price: 25,
      size: 1800,
      capacity: 5,
      automatic: true,
      electric: false,
      featured: false,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Mercedes S350",
      slug: "mercedes-s350",
      type: "large",
      price: 30,
      size: 2000,
      capacity: 5,
      automatic: false,
      electric: false,
      featured: false,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "Tesla",
      slug: "tesla",
      type: "large",
      price: 35,
      size: 3000,
      capacity: 5,
      automatic: true,
      electric: true,
      featured: false,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "Ford Puma",
      slug: "ford-puma",
      type: "SUV",
      price: 30,
      size: 1800,
      capacity: 5,
      automatic: true,
      electric: false,
      featured: true,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "Nissan Qashqai",
      slug: "nissan-qashqai",
      type: "SUV",
      price: 26,
      size: 1400,
      capacity: 5,
      automatic: false,
      electric: false,
      featured: false,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "Toyota CHR",
      slug: "toyota-chr",
      type: "SUV",
      price: 28,
      size: 1800,
      capacity: 5,
      automatic: false,
      electric: false,
      featured: false,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "Mercedes VClass",
      slug: "mercedes-vclass",
      type: "minivan",
      price: 45,
      size: 2000,
      capacity: 7,
      automatic: false,
      electric: false,
      featured: true,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "Mercedes Vito",
      slug: "mercedes-vito",
      type: "minivan",
      price: 40,
      size: 2000,
      capacity: 7,
      automatic: false,
      electric: false,
      featured: false,
      description:
        "Unleash the thrill of the road with our car. From its captivating design to cutting-edge technology, every detail is crafted for an exhilarating driving experience. The powerful engine delivers dynamic performance, while the luxurious interior offers comfort and sophistication. Whether cruising through city streets or embarking on a road trip, the [Car Model] redefines driving pleasure. Elevate your journey with this fusion of style and performance, and make every drive an unforgettable adventure.",
      extras: [
        "Air Conditioning",
        "Airbags",
		"FM/AM Radio",
        "Parking Assistance",
        "Spacious Interior Design",
        "Collision Avoidance System",
        "Fuel Efficiency"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: car2
            }
          }
        },
        {
          fields: {
            file: {
              url: car3
            }
          }
        },
        {
          fields: {
            file: {
              url: car4
            }
          }
        }
      ]
    }
  }
];

export default cars;