// Recent sales and transactions data

export interface RecentSale {
  id: string;
  time: string;
  dishName: string;
  quantity: number;
  total: number;
}

export const recentSales: RecentSale[] = [
  {
    id: '1',
    time: '2:45 PM',
    dishName: 'Roasted Chicken Rice',
    quantity: 2,
    total: 10.00
  },
  {
    id: '2',
    time: '2:42 PM',
    dishName: 'Char Kway Teow',
    quantity: 1,
    total: 5.50
  },
  {
    id: '3',
    time: '2:38 PM',
    dishName: 'Wonton Mee',
    quantity: 3,
    total: 13.50
  },
  {
    id: '4',
    time: '2:35 PM',
    dishName: 'Curry Laksa',
    quantity: 1,
    total: 6.00
  },
  {
    id: '5',
    time: '2:30 PM',
    dishName: 'Roasted Chicken Rice',
    quantity: 1,
    total: 5.00
  },
  {
    id: '6',
    time: '2:25 PM',
    dishName: 'Char Kway Teow',
    quantity: 2,
    total: 11.00
  },
  {
    id: '7',
    time: '2:20 PM',
    dishName: 'Wonton Mee',
    quantity: 1,
    total: 4.50
  },
  {
    id: '8',
    time: '2:15 PM',
    dishName: 'Curry Laksa',
    quantity: 2,
    total: 12.00
  },
  {
    id: '9',
    time: '2:10 PM',
    dishName: 'Roasted Chicken Rice',
    quantity: 1,
    total: 5.00
  },
  {
    id: '10',
    time: '2:05 PM',
    dishName: 'Char Kway Teow',
    quantity: 1,
    total: 5.50
  }
];
