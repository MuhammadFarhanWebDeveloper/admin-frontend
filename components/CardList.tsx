import React from "react";
import { Badge } from "./ui/badge";

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "Michael Johnson",

    count: 1300,
  },
  {
    id: 2,
    title: "Payment Received",
    badge: "Sarah Connor",

    count: 4200,
  },
  {
    id: 3,
    title: "Invoice Sent",
    badge: "John Wick",

    count: 2300,
  },
  {
    id: 4,
    title: "Refund Issued",
    badge: "Ellen Ripley",

    count: 980,
  },
  {
    id: 5,
    title: "Service Fee Charged",
    badge: "Bruce Wayne",

    count: 5000,
  },
  {
    id: 6,
    title: "Credit Issued",
    badge: "Clark Kent",

    count: 1500,
  },
  {
    id: 7,
    title: "Order Completed",
    badge: "Tony Stark",

    count: 3500,
  },
  {
    id: 8,
    title: "Subscription Canceled",
    badge: "Natasha Romanoff",

    count: 800,
  },
  {
    id: 9,
    title: "Payment Pending",
    badge: "Steve Rogers",

    count: 2000,
  },
  {
    id: 10,
    title: "Overdue Payment",
    badge: "Thor Odinson",

    count: 1100,
  },
];

const popularContent = [
  {
    id: 1,
    title: "Image Generation with AI",
    badge: "AI",

    count: 1200,
  },
  {
    id: 2,
    title: "Next.js Performance Tuning",
    badge: "Web Dev",

    count: 980,
  },
  {
    id: 3,
    title: "Mastering MERN Stack",
    badge: "Coding",

    count: 1450,
  },
  {
    id: 4,
    title: "Mastering MERN Stack",
    badge: "Coding",

    count: 1450,
  },
  {
    id: 5,
    title: "Understanding JavaScript Closures",
    badge: "JavaScript",

    count: 2600,
  },
  {
    id: 6,
    title: "Building a Full Stack Application with React and Node",
    badge: "React",

    count: 3200,
  },
  {
    id: 7,
    title: "CSS Grid Layout Tutorial",
    badge: "CSS",

    count: 1800,
  },
  {
    id: 8,
    title: "Setting up a Node.js Environment for Beginners",
    badge: "Node.js",

    count: 2300,
  },
  {
    id: 9,
    title: "Web Accessibility Best Practices",
    badge: "Web Dev",

    count: 1500,
  },
  {
    id: 10,
    title: "Building Scalable Systems",
    badge: "Architecture",

    count: 1100,
  },
];

export default function CardList({ title }: { title: string }) {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2 h-[300px]  p-2 overflow-auto">
        {list.map((item) => (
          <div
            key={item.id}
            className="flex border p-2 items-center justify-between gap-2 rounded-sm"
          >
            <div className="flex items-center justify-start gap-2">
              {/* <div className="w-12  h-12  rounded-sm relative overflow-hidden ">
                <
                  src={item.
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div> */}
              <div>
                <h1 className="w-full text-sm px-1 font-medium">
                  {item.title}
                </h1>
                <Badge variant="outline" className="">
                  {item.badge}
                </Badge>
              </div>
            </div>
            <div className="text-sm ">{item.count / 1000}K</div>
          </div>
        ))}
      </div>
    </div>
  );
}
