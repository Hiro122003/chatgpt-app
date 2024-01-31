import { Timestamp } from "firebase/firestore";

export type Inputs = {
  email:string;
  password:string;
}

export type Room = {
  id: string;
  name: string;
  createdAt: Timestamp;
};