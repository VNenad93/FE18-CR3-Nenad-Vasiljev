export interface IProduct {
  name: string;
  image: string;
  description: string;
  price: number;
  available: boolean;
};

export const products = [
  {
    name: 'Spaghetti Carbonara',
    image:
      'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    description: 'Classic Italian pasta with bacon, eggs, and cheese.',
    price: 12.99,
    available: true,
  },
  {
    name: 'Chicken Alfredo',
    image:
      'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Creamy pasta with tender chicken and Parmesan cheese.',
    price: 14.99,
    available: false,
  },
  {
    name: 'Margherita Pizza',
    image:
      'https://images.unsplash.com/photo-1564936281291-294551497d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
    description:
      'Simple and delicious pizza with tomato sauce, mozzarella, and basil.',
    price: 10.99,
    available: true,
  },
  {
    name: 'Pepperoni Pizza',
    image:
      'https://images.unsplash.com/photo-1638425793674-32119fffb3d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'Classic pizza with tomato sauce, mozzarella, and pepperoni.',
    price: 12.99,
    available: true,
  },
  {
    name: 'Caesar Salad',
    image:
      'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80',
    description: 'Crisp romaine lettuce with Parmesan cheese and croutons.',
    price: 8.99,
    available: true,
  },
  {
    name: 'Steak Frites',
    image:
      'https://images.unsplash.com/photo-1517800140676-e7e8312bc02d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Juicy steak with crispy fries and garlic butter.',
    price: 19.99,
    available: true,
  },
  {
    name: 'Fish and Chips',
    image:
      'https://images.unsplash.com/photo-1580217593608-61931cefc821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
    description: 'Crispy fried fish with golden fries and tartar sauce.',
    price: 14.99,
    available: true,
  },
  {
    name: 'Burger and Fries',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
    description: 'Juicy beef patty with cheese, lettuce, tomato, and fries.',
    price: 11.99,
    available: false,
  },
  {
    name: 'Pad Thai',
    image:
      'https://images.unsplash.com/photo-1626804475315-9644b37a2fe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description:
      'Sweet and tangy stir-fried rice noodles with shrimp and peanuts.',
    price: 13.99,
    available: true,
  },
];
