// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

import { monthYearToDate } from "./utils";

// https://nextjs.org/learn/dashboard-app/fetching-data
const usersData = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const customersData = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    imageUrl: "/customers/evil-rabbit.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    imageUrl: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    imageUrl: "/customers/lee-robinson.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    imageUrl: "/customers/michael-novotny.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    imageUrl: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    imageUrl: "/customers/balazs-orban.png",
  },
];

const invoicesData = [
  {
    customer_id: customersData[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customersData[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customersData[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer_id: customersData[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer_id: customersData[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer_id: customersData[2].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer_id: customersData[0].id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer_id: customersData[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer_id: customersData[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer_id: customersData[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    customer_id: customersData[1].id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    customer_id: customersData[5].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    customer_id: customersData[2].id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
];

const revenueData = [
  { period: monthYearToDate(2022, 1), revenue: 2000 },
  { period: monthYearToDate(2022, 2), revenue: 1800 },
  { period: monthYearToDate(2022, 3), revenue: 2200 },
  { period: monthYearToDate(2022, 4), revenue: 2500 },
  { period: monthYearToDate(2022, 5), revenue: 2300 },
  { period: monthYearToDate(2022, 6), revenue: 3200 },
  { period: monthYearToDate(2022, 7), revenue: 3500 },
  { period: monthYearToDate(2022, 8), revenue: 3700 },
  { period: monthYearToDate(2022, 9), revenue: 2500 },
  { period: monthYearToDate(2022, 10), revenue: 2800 },
  { period: monthYearToDate(2022, 11), revenue: 3000 },
  { period: monthYearToDate(2022, 12), revenue: 4800 },
];

export { usersData, customersData, invoicesData, revenueData };
