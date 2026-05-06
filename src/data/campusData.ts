export type CampusFloors = Record<string, string[]>;

export interface CampusBuilding {
  building: string;
  floors: CampusFloors;
}

const normalizeCampusName = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const getCampusWords = (value: string) =>
  normalizeCampusName(value).split(' ').filter((word) => word.length > 0);

const campusNamesMatch = (a: string, b: string) => {
  const normalizedA = normalizeCampusName(a);
  const normalizedB = normalizeCampusName(b);
  if (normalizedA === normalizedB) return true;
  if (normalizedA.includes(normalizedB) || normalizedB.includes(normalizedA)) return true;
  const wordsA = getCampusWords(normalizedA);
  const wordsB = getCampusWords(normalizedB);
  const sharedWords = wordsA.filter((word) => word.length > 2 && wordsB.includes(word));
  return sharedWords.length > 0;
};

export const findCampusDataEntry = (buildingName: string): CampusBuilding | undefined =>
  campusData.find((entry) => campusNamesMatch(entry.building, buildingName));

export const campusData: CampusBuilding[] = [
  {
    building: "Library",
    floors: {
      "1st Floor": ["Circulation Desk", "Reading Area", "Computer Area"],
      "2nd Floor": ["Circulation Desk", "Reading Area", "Book Shelves", "Storage Room"],
      "3rd Floor": ["Book Shelves (Restricted Area)"]
    }
  },
  {
    building: "Ramon Magsaysay",
    floors: {
      "1st Floor": ["Room 101 - Lab Room", "Room 102 - Faculty Room", "Room 103 - Lab Room", "Room 104 - Dean's Office"],
      "2nd Floor": ["Room 201", "Room 202 - Accreditation Room", "Room 203", "Room 204 - Server Room"]
    }
  },
  {
    building: "College of Computing Studies, Information and Communication Technology",
    floors: {
      "1st Floor": ["Room 101", "Room 102", "Room 103", "Room 104", "Restroom"],
      "2nd Floor": ["Lab 201", "Lab 202", "Room 203", "Room 204", "Restroom"],
      "3rd Floor": ["Lab 301", "Room 302", "Room 303", "Room 304", "Restroom"],
      "Roof Deck": []
    }
  },
  {
    building: "Student Center",
    floors: {
      "1st Floor": ["SBO Office", "Utility Area (Water Storage Tank)"]
    }
  }
];
