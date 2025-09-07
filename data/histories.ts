type HistoryType = {
  date: string;
  title: string;
  description: string;
};

export type HistorySlideType = {
  image: string;
  slideHistories: [HistoryType?, HistoryType?];
};

export const histories: HistorySlideType[] = [
  {
    image: "/history.jpg",
    slideHistories: [
      {
        date: "24/06/1997",
        title: "Company Registration",
        description: `Sana Cash & Carry is a chain of supermarkets in 
            Malawi with locations in Lilongwe and Blantyre. They offer a
            wide selection of fresh produce, groceries, and household goods,
            with competitive pricing. They also provide online shopping and
            delivery services through their website.`,
      },
      {
        date: "14/05/2015",
        title: "20+ Stores",
        description: `Sana Cash & Carry is a large retail company with 
            multiple supermarket locations across Malawi, including in
            Lilongwe, Blantyre, and Mzuzu. It is known for offering a wide
            selection of groceries, household items, fresh produce, and
            other goods at competitive prices.`,
      },
    ],
  },
  {
    image: "/furniture.jpg",
    slideHistories: [
      {
        date: "06/24/1997",
        title: "Company Registration",
        description: `Sana Cash & Carry is a chain of supermarkets in 
            Malawi with locations in Lilongwe and Blantyre. They offer a
            wide selection of fresh produce, groceries, and household goods,
            with competitive pricing. They also provide online shopping and
            delivery services through their website.`,
      },
      {
        date: "05/14/2015",
        title: "20+ Stores",
        description: `Sana Cash & Carry is a large retail company with 
            multiple supermarket locations across Malawi, including in
            Lilongwe, Blantyre, and Mzuzu. It is known for offering a wide
            selection of groceries, household items, fresh produce, and
            other goods at competitive prices.`,
      },
    ],
  },
  {
    image: "/clothes.jpg",
    slideHistories: [
      {
        date: "06/24/1997",
        title: "Company Registration",
        description: `Sana Cash & Carry is a chain of supermarkets in 
            Malawi with locations in Lilongwe and Blantyre. They offer a
            wide selection of fresh produce, groceries, and household goods,
            with competitive pricing. They also provide online shopping and
            delivery services through their website.`,
      },
      {
        date: "05/14/2015",
        title: "20+ Stores",
        description: `Sana Cash & Carry is a large retail company with 
            multiple supermarket locations across Malawi, including in
            Lilongwe, Blantyre, and Mzuzu. It is known for offering a wide
            selection of groceries, household items, fresh produce, and
            other goods at competitive prices.`,
      },
    ],
  },
];
