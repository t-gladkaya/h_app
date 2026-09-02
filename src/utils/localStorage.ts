import type { MigraineDataProps } from "../types/types"

const MIGRAINES_KEY = "migraines";

export function getMigraines(): MigraineDataProps[] {
  const savedMigraines = localStorage.getItem(MIGRAINES_KEY);

  if (!savedMigraines) {
    return [];
  }

  return JSON.parse(savedMigraines);
}

export function saveMigraines(migraines: MigraineDataProps[]) {
  localStorage.setItem(MIGRAINES_KEY, JSON.stringify(migraines));
}