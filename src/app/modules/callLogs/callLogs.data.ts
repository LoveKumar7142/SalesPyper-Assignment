import type { CallLog } from "../../types";

const leadNames = [
  "Rahul Sharma",
  "Amit Verma",
  "Priya Singh",
  "Neha Gupta",
  "Rohit Mehra",
  "Anjali Kapoor",
  "Vikas Yadav",
  "Pooja Mishra",
  "Sandeep Jain",
  "Kiran Patel",
];

const outcomes = [
  "Interested",
  "Follow-up",
  "Not Interested",
  "Callback Requested",
];

const tenants: CallLog["tenant"][] = ["orgA", "orgB"];

export const callLogsData: CallLog[] = Array.from(
  { length: 80 },
  (_, i) => {
    const leadName = leadNames[i % leadNames.length];
    const tenant = tenants[i % tenants.length];

    return {
      id: i + 1,
      leadName,
      dateTime: `2026-01-${(i % 28) + 1} ${10 + (i % 8)}:${
        (i * 7) % 60
      }`,
      duration: `${2 + (i % 6)} min`,
      outcome: outcomes[i % outcomes.length],
      tenant,
    };
  }
);
