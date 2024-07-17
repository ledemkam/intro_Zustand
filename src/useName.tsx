import { create } from "zustand";

type NameState = {
  name: string;
 
};

// Create a store

export const useName = create<NameState>(() => ({
  name: "Rico",

}));