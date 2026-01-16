import type { Lead } from "../../types";

const names = [
  "Rahul Sharma", "Amit Verma", "Priya Singh", "Neha Gupta",
  "Rohit Mehra", "Anjali Kapoor", "Vikas Yadav", "Pooja Mishra",
  "Sandeep Jain", "Kiran Patel"
];

const statuses: Lead["status"][] = ["new", "contacted", "closed"];
const tenants: Lead["tenant"][] = ["orgA", "orgB"];

export const leadsData: Lead[] = Array.from({ length: 100 }, (_, i) => {
  const name = names[i % names.length];
  return {
    id: i + 1,
    name,
    phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
    status: statuses[i % statuses.length],
    tenant: tenants[i % tenants.length],
  };
});
