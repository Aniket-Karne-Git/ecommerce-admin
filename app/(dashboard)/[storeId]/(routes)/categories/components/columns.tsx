"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

export type CategoryColumn = {
  id: string;
  name: string;
  billboardLabel: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell: ({ row }) => row.original.billboardLabel,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />, // Access the original object that data table is working with i.e. for Billboard- id: string; label: string; createdAt: string;
  },
];
