import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: {},
  setUser: (userData) => set({ user: userData }),
  userCourses: [],
  setUserCourses: (userData) => set({ userCourses: userData }),
  allCourses: [],
  setAllCourses: (userData) => set({ allCourses: userData }),
  allCategories: [],
  setAllCategories: (userData) => set({ allCategories: userData }),
}));
