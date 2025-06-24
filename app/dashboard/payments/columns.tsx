"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Titulo",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "author",
    header: "Autor",
  },
];
