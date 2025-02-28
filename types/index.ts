import type { Database, Tables } from "./database.types";

export type Project = Database["public"]["Tables"]["project"]["Row"];
export type ProjectExtra = Pick<Project, "name" | "deploy"> & {
  icon: string;
  background: string;
};

// @iconify-json/devicon 1.2.17
// - @iconify-json/fluent-color 1.2.6
// - @iconify-json/heroicons 1.2.2
// - @iconify-json/pajamas 1.2.5
// - @iconify-json/vscode-icons 1.2.16
