export type Tenant = "orgA" | "orgB";
export type Role = "admin" | "agent";

export interface AuthState {
  tenant: Tenant;
  role: Role;
}

export type LeadStatus = "new" | "contacted" | "closed";

export interface Lead {
  id: number;
  name: string;
  phone: string;
  status: LeadStatus;
  tenant: Tenant;
}

export interface CallLog {
  id: number;
  leadName: string;
  dateTime: string;
  duration: string;
  outcome: string;
  tenant: Tenant;
}

