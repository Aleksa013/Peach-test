import direction1 from "./../assets/imgs/direction1.png";
import direction2 from "./../assets/imgs/direction2.png";
import direction3 from "./../assets/imgs/direction3.png";
import direction4 from "./../assets/imgs/direction4.png";
import direction5 from "./../assets/imgs/direction5.png";
import direction6 from "./../assets/imgs/direction6.png";
import medicine from "./../assets/imgs/medicine.png";
import cake from "./../assets/imgs/cake.png";
import phone from "./../assets/imgs/phone.png";
import gym from "./../assets/imgs/gym.png";
import hands from "./../assets/imgs/hands.png";
import printer from "./../assets/imgs/printer.png";
import house from "./../assets/imgs/house.png";

export const menuItems = [
  "Облачные решения",
  "Кибербезопасность",
  "Импортозамещение",
  "Цифровая трансформация",
];

export const bannerContent = {
  text: "Поставщик услуг цифровой трансформации и&nbsp;кибербезопасности",
  buttonText: "На сайт",
  buttonLinkText: "https://softline.ru",
};

export const aboutContent = {
  text: " – ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное и аппаратное&nbsp;обеспечение,&nbsp;решения&nbsp;по&nbsp;цифровой&nbsp;трансформации и кибербезопасности, а также широкий спектр IT-услуг.",
  companyName: "Softline",
};

export const numberContent = {
  years: ["> 30 лет", "на IT-рынке"],
  employers: ["4600", "сотрудников в России"],
  cities: ["25", "городов России"],
  developers: ["2000+", "разработчиков"],
  education: ["3000+", "сотрудников ежегодно проходят оценку и обучение"],
};

export const mapsContent = {
  buttons: [
    "Все",
    "Москва",
    "Центр",
    "Северо-Запад",
    "Юг",
    "Волга",
    "Урал",
    "Сибирь",
    "Дальний восток",
  ],
};

export const missionsContent = {
  header: "Миссия Softline",
  text: "Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях цифровой экономики.",
};

export const directionContent = {
  header: "Направления бизнеса",
  solutions: [
    {
      solution: "Решения Softline",
      description:
        "ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.",
      bgPath: direction1,
    },
    {
      solution: "Кибербезопасность",
      description:
        "Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.",
      bgPath: direction2,
    },
    {
      solution: "Импортозамещение",
      description:
        "ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.",
      bgPath: direction3,
    },
    {
      solution: "Облачные решения",
      description:
        "Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.",
      bgPath: direction4,
    },
    {
      solution: "Цифровая трансформация и разработка ПО",
      description:
        "Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.",
      bgPath: direction5,
    },
    {
      solution: "Техническая поддержка Softline",
      description:
        "200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.",
      bgPath: direction6,
    },
  ],
};

export const benefitsContent = {
  package: {
    header: "Компенсационный пакет",
    benefits: [
      {
        text: "ДМС",
        icon: medicine,
      },
      {
        text: "Выходной<br>в день рождения",
        icon: cake,
      },
      {
        text: "Корпоративная мобильная связь",
        icon: phone,
      },
      {
        text: "Корпоративные скидки на спорт",
        icon: gym,
      },
      {
        text: "LTI",
        icon: hands,
      },
    ],
    nameClass: "first",
  },
  motivation: {
    header: "Программа дополнительной мотивации",
    accent: "доплата 12% от суммы",
    benefits: [
      {
        text: "Оргтехники",
        icon: printer,
      },
      {
        text: "ДМС",
        icon: medicine,
      },
      {
        text: "Ипотеки",
        icon: house,
      },
    ],
    nameClass: "second",
  },
};

export const galeryContent = {
  header: "Корпоративная жизнь",
};
