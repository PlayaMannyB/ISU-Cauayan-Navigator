export type CampusFloors = Record<string, string[]>;

export interface CampusBuilding {
  building: string;
  floors: CampusFloors;
}

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
