// server/src/modules/category/categoryActions.ts

import type { RequestHandler } from "express";
// Données en dur pour les catégories
const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
  {
    id: 3,
    name: "Drame",
  },
  {
    id: 4,
    name: "Action",
  },
  {
    id: 5,
    name: "Horreur",
  },
  {
    id: 6,
    name: "Documentaire",
  },
  {
    id: 7,
    name: "Animation",
  },
];

// Action pour obtenir toutes les catégories
export const getAllCategories = () => {
  return categories;
};

// Action pour obtenir une catégorie par son ID
export const getCategoryById = (id: number) => {
  return categories.find((category) => category.id === id);
};
export default { getAllCategories };
