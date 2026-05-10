export type CreditPerson = {
  name: string;
  role: string;
};

export type CreditPageData = {
  projectTitle: string;
  projectNote: string;
  people: CreditPerson[];
};

export const APP_CREDIT: CreditPageData = {
  projectTitle: 'About the Project: ISU-Cauayan Navigator',
  projectNote:
    'The Vision\n' +
    'The ISU-Cauayan Navigator is a specialized geospatial tool designed to bridge the gap between complex campus layouts and student accessibility. Our mission is to reduce "navigational friction" for freshmen and visitors by providing a high-fidelity, interactive digital map of the Isabela State University - Cauayan Campus.\n\n' +
    'HCI Philosophy\n' +
    'In accordance with the principles of HCI 1, this prototype focuses on:\n\n' +
    'Intuitive Navigation: Eliminating the learning curve by using familiar map interactions.\n\n' +
    'Visual Hierarchy: Utilizing branded color schemes and high-contrast elements to ensure clear readability.\n\n' +
    'Real-World Utility: Moving beyond static images to a functional, searchable database of buildings and departments.\n\n' +
    'Academic Context\n' +
    'This project serves as the Final Requirement for the HCI 1 (Human-Computer Interaction) course under Prof. Remiebie Andres. It demonstrates the application of user-centered design, iterative prototyping, and the integration of modern web technologies to solve community-specific challenges.\n\n' +
    'Development Stack\n' +
    'Built using a modern technical stack to ensure performance and scalability:\n\n' +
    'React & Vite: For a fast, responsive user interface.\n\n' +
    'TypeScript: To ensure code reliability and structured data handling.\n\n' +
    'Tailwind CSS: For custom, professional-grade styling.\n\n' +
    'Leaflet.js: To power the interactive geospatial mapping engine.\n\n' +
    'The Project Team\n' +
    'Manuel Babaran IV – Lead Developer & Systems Architect\n\n' +
    'Medina Jan Win Ramiro & Claire Bautista – Data Resource Coordinators\n\n' +
    'Ariana Libari & Carl James Mamuad – Content Documentation\n\n' +
    'John Mikel Tolentino, Princess Palaguito & Zyanne Pasiola – Site Surveyors\n\n' +
    'Rayver Quilang & Sasy Rosete – Quality Assurance & Testing',
  people: [
    { name: 'Manuel Babaran IV', role: 'Lead Developer & Systems Architect' },
    { name: 'Medina Jan Win Ramiro', role: 'Data Resource Coordinator' },
    { name: 'Claire Bautista', role: 'Data Resource Coordinator' },
    { name: 'Ariana Libari', role: 'Content Documentation' },
    { name: 'Carl James Mamuad', role: 'Content Documentation' },
    { name: 'John Mikel Tolentino', role: 'Site Surveyor' },
    { name: 'Princess Palaguito', role: 'Site Surveyor' },
    { name: 'Zyanne Pasiola', role: 'Site Surveyor' },
    { name: 'Rayver Quilang', role: 'Quality Assurance & Testing' },
    { name: 'Sasy Rosete', role: 'Quality Assurance & Testing' },
    { name: 'Prof. Remiebie Andres', role: 'Instructor / Adviser' }
  ]
};

