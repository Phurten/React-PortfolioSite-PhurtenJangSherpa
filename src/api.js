// src/api.js

export async function fetchProjects() {
  const res = await fetch("https://jassignment1-phurtenjangsherpa.onrender.com/api/projects");
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function fetchSkills() {
  const res = await fetch("https://jassignment1-phurtenjangsherpa.onrender.com/api/skills");
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
}
