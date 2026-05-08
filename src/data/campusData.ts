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
  },
  {
    building: "New College of Business Management Building",
    floors: {
      "1st Floor": ["CBAO Office", "RGO Office", "Food Innovation Center", "Storage Room"],
      "2nd Floor": ["Restroom", "Biology Laboratory", "Biology and Microbiology Lab", "Room 201 (Science Lecture RM 1)", "Room 202", "Room 204", "Room 206", "Room 211 (Physics Laboratory)", "Main Lab Room", "Chemistry and Physico-Chemical Lab", "Science Lecture RM 2", "BSAIS Simulation Room", "CBM Faculty", "Crime Lab Room", "Speech Laboratory", "I-Control Room"],
      "3rd Floor": ["Restroom", "Room 301", "Room 302", "Room 303", "Room 304", "Room 305", "Room 306", "Room 307", "Room 308", "Room 309", "Room 310", "Room 311", "Room 312", "Room 313", "Room 314", "Room 315", "Room 316", "Room 317"],
      "4th Floor": ["Restroom", "Room 401", "Room 402", "Room 403", "Room 404", "Room 405", "Room 406", "Room 407", "Room 408", "Room 409", "Room 410", "Room 411", "Room 412", "Room 413", "Room 414", "Room 415", "Room 416", "Room 417"],
      "5th Floor": ["Room 501", "Room 502", "Amphitheater"]
    }
  },
  {
    building: "Old Building - College of Education",
    floors: {
      "1st Floor": ["Room 101-A", "Room 101-B", "Room OB103", "Room OB104", "Restroom"],
      "2nd Floor": ["Room OB201", "Room 202", "Room 203", "Room 204"]
    }
  },
  {
    building: "Old Building - College of Business Management",
    floors: {
      "1st Floor": ["Room 101", "Room 102", "Room 103", "Room 104", "Room 105", "Room 106", "Room 107", "Room 108", "SBO Office"]
    }
  },
  {
    building: "Bachelor of Science in Industrial Technology Faculty",
    floors: {
      "Ground Floor": ["Faculty Lounge", "Office", "Site"]
    }
  }
];

