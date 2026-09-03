import type { Migraine } from "../types/migraine"

const MIGRAINES_KEY = "migraines";

export function getMigraines(): Migraine[] {
  const savedMigraines = localStorage.getItem(MIGRAINES_KEY);

  if (!savedMigraines) {
    return [];
  }

  return JSON.parse(savedMigraines);
}

export function saveMigraines(migraines: Migraine[]) {
  localStorage.setItem(MIGRAINES_KEY, JSON.stringify(migraines));
}