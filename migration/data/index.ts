export const initSubject = [
  { name: 'Mathématiques', levelId: 1 },
  { name: 'Français', levelId: 2 },
  { name: 'Éducation civique', levelId: 3 },
  { name: 'Éducation physique et sportive', levelId: 4 },
  { name: 'Musique', levelId: 5 },
];

export const initLevel = [
  { name: 'Élémentaire' },
  { name: 'Maternelle' },
  { name: 'Collège' },
  { name: 'Lycée' },
  { name: 'Université' },
];

export const formatStringToSql = (str: string | undefined | null): string =>
  str ? `'${str.replace(/'/g, "''")}'` : 'NULL';
