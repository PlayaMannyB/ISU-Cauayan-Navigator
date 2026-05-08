import { campusData } from './campusData';

const roadStyle = {
  color: "#4a4a4a",   
  weight: 10,         
  opacity: 1,
  lineJoin: "round" as const,
  lineCap: "round" as const
};

export const CAMPUS_GEOJSON: any = {
  type: 'FeatureCollection',
  features: [
    {
    type: 'Feature',
    properties: { name: 'Campus' },
    geometry: {
      type: 'LineString',
      coordinates: [
      [121.76602360314433, 16.940226949301177],
      [121.76465707876167, 16.94051063525619],
      [121.76313866880798, 16.935870971923464],
      [121.76451775690947, 16.935569905801685],
      [121.76606549207202, 16.940196874557984],
      [121.76598031495917, 16.940249676212602]]

    }
  },
  {
    type: 'Feature',
    id: 1,
    properties: {
      name: 'New College of Business Management Building',
      category: 'Academic',
      rooms: ['Room 101', 'Room 102', "Dean's Office", 'Faculty Room']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76452391038555, 16.9363392482435],
      [121.7642959386639, 16.93572464585249],
      [121.76448936921548, 16.935673098464193],
      [121.76471043270283, 16.936289022747218],
      [121.76452391038555, 16.9363392482435]]]


    }
  },
  {
    type: 'Feature',
    id: 2,
    properties: {
      name: 'BIRDC',
      category: 'Research',
      rooms: ['Main Hall', 'Lab A']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.7645841176676, 16.936460167615238],
      [121.76455487235961, 16.936356942500737],
      [121.76466277746255, 16.93632221254316],
      [121.764699081983, 16.9364215787933],
      [121.7645841176676, 16.936460167615238]]]


    }
  },
  {
    type: 'Feature',
    id: 3,
    properties: {
      name: 'Clinic',
      category: 'Health',
      rooms: ['Reception', 'Treatment Room','Dentist Room']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76414126210238, 16.936672225675522],
      [121.76411046287643, 16.936577387398543],
      [121.76429300781535, 16.93652657535604],
      [121.76432196487667, 16.93663048606524],
      [121.76414126210238, 16.936672225675522]]]


    }
  },
  {
    type: 'Feature',
    id: 4,
    properties: {
      name: 'Administration Building',
      category: 'Administrative',
      rooms: ["President's Office", 'Registrar', 'Cashier', 'HR Office','Guidance Office','Accounting Office','SIAS Office']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76394359399177, 16.936683867223422],
      [121.7638584532217, 16.93639453247387],
      [121.76407129154848, 16.93633993476479],
      [121.76406136667242, 16.936290205241875],
      [121.76414179377531, 16.936267653588217],
      [121.76415280795334, 16.936313689778814],
      [121.7643490338528, 16.936267367736804],
      [121.76443838831568, 16.93659611848696],
      [121.76433417187036, 16.936623015001487],
      [121.76426697398352, 16.936391554814847],
      [121.76399405354039, 16.93645625235709],
      [121.76405187943584, 16.936654480363742],
      [121.76394359399177, 16.936683867223422]]]


    }
  },
  {
    type: 'Feature',
    id: 5,
    properties: {
      name: 'Library',
      category: 'Academic',
      rooms: ['Main Reading Hall', 'Reference Section', 'E-Library']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76360364048799, 16.937099006280448],
      [121.76355506631796, 16.936877926030192],
      [121.76373202565429, 16.936844541519633],
      [121.7637845334632, 16.93705745122766],
      [121.76360364048799, 16.937099006280448]]]


    }
  },
  {
    type: 'Feature',
    id: 6,
    properties: {
      name: 'College of Arts and Sciences / College of Law',
      category: 'Academic',
      rooms: ['Room 201', 'Room 202', 'Law Library', 'Faculty Room']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.7637009095954, 16.937520089017326],
      [121.76361790602448, 16.937148802635576],
      [121.76374399037508, 16.93712258080413],
      [121.76382801893033, 16.93749900297928],
      [121.7637009095954, 16.937520089017326]]]


    }
  },
  {
    type: 'Feature',
    id: 7,
    properties: {
      name: 'College of Computing Studies, Information and Communication Technology / Ramon Magsasay',
      category: 'Academic',
      rooms: ['Room 301', 'Room 302', 'Computer Lab']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76391487438264, 16.937995258981147],
      [121.7637928641143, 16.937528897205794],
      [121.76390989994667, 16.93750752181316],
      [121.76401401817299, 16.937984603535014],
      [121.76391487438264, 16.937995258981147]]]


    }
  },
  {
    type: 'Feature',
    id: 8,
    properties: {
      name: 'College of Computing Studies, Information and Communication Technology SBO Office',
      category: 'Office',
      rooms: ['SBO Lounge']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76391570045854, 16.938158716576424],
      [121.76387904307057, 16.938060511647578],
      [121.76392382107201, 16.938040677869154],
      [121.76394973467171, 16.93815016948794],
      [121.76391570045854, 16.938158716576424]]]


    }
  },
  {
    type: 'Feature',
    id: 9,
    properties: {
      name: 'College of Computing Studies, Information and Communication Technology',
      category: 'Academic',
      rooms: [
      'Room 301',
      'Room 302',
      'Room 303',
      'Server Room',
      "Dean's Office"]

    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76406886963917, 16.938486624472958],
      [121.76395938714268, 16.938035736166697],
      [121.76406115495212, 16.938012487146977],
      [121.76416728184552, 16.9384709816931],
      [121.76406886963917, 16.938486624472958]]]


    }
  },
  {
    type: 'Feature',
    id: 10,
    properties: {
      name: 'Bachelor of Science in Industrial Technology Faculty',
      category: 'Academic',
      rooms: ['Faculty Lounge', 'Office']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76414774098782, 16.938657173922138],
      [121.76407989286758, 16.938493509774347],
      [121.76421409691017, 16.938451738522858],
      [121.76426068286736, 16.938621875055873],
      [121.76414774098782, 16.938657173922138]]]


    }
  },
  {
    type: 'Feature',
    id: 11,
    properties: {
      name: 'Bachelor of Science in Industrial Technology Room A',
      category: 'Academic',
      rooms: ['Workshop A']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76420761799659, 16.938856973353737],
      [121.76416800490239, 16.938664066840403],
      [121.76427220479474, 16.938639713002345],
      [121.7643096704428, 16.938833011747164],
      [121.76420761799659, 16.938856973353737]]]


    }
  },
  {
    type: 'Feature',
    id: 12,
    properties: {
      name: 'Bachelor of Science in Industrial Technology Room B',
      category: 'Academic',
      rooms: ['Workshop B']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76431017294351, 16.938897718151097],
      [121.76438983732015, 16.939117280180497],
      [121.76429194099717, 16.939146983605184],
      [121.76422392018031, 16.938930024583016],
      [121.76431017294351, 16.938897718151097]]]


    }
  },
  {
    type: 'Feature',
    id: 13,
    properties: {
      name: 'Bamboo Room',
      category: 'Academic',
      rooms: ['Open Studio']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76431597025282, 16.939320498349232],
      [121.76426319290056, 16.939155145062287],
      [121.76440277389389, 16.939123740337294],
      [121.76447002409253, 16.93926871464336],
      [121.76431597025282, 16.939320498349232]]]


    }
  },
  {
    type: 'Feature',
    id: 14,
    properties: {
      name: 'Bachelor of Science in Industrial Technology Workshop',
      category: 'Academic',
      rooms: ['Main Workshop']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76442924679014, 16.939591927259826],
      [121.7643360610956, 16.939330565523917],
      [121.76447381583154, 16.939282105646697],
      [121.76457041988147, 16.93954774851825],
      [121.76442924679014, 16.939591927259826]]]


    }
  },
  {
    type: 'Feature',
    id: 15,
    properties: {
      name: 'College of Agriculture',
      category: 'Academic',
      rooms: ['Room 401', 'Greenhouse Lab', 'Faculty']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76475520438163, 16.94044126523518],
      [121.76459086073834, 16.939913294325052],
      [121.76469286972463, 16.939884852907298],
      [121.76486257704715, 16.940420428683012],
      [121.76475520438163, 16.94044126523518]]]


    }
  },
  {
    type: 'Feature',
    id: 16,
    properties: {
      name: 'Oval Ground',
      category: 'Recreation',
      rooms: ['Track Field']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.7642514472953, 16.938360282791194],
      [121.76393761145289, 16.93694610489672],
      [121.76453437829099, 16.936829555343422],
      [121.76486418292279, 16.938244595490588],
      [121.7642514472953, 16.938360282791194]]]


    }
  },
  {
    type: 'Feature',
    id: 17,
    properties: {
      name: 'College of Education (Annex)',
      category: 'Academic',
      rooms: ['Room 101-A', 'Room 101-B', 'Room 103', 'Room OB104', 'Restroom', 'Room OB201', 'Room 202', 'Room 203', 'Room 204']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76467960885003, 16.93680931681152],
      [121.7645845527976, 16.93647383749135],
      [121.76471785611767, 16.93643772951276],
      [121.76481525384185, 16.93677614159563],
      [121.76467960885003, 16.93680931681152]]]


    }
  },
  {
    type: 'Feature',
    id: 18,
    properties: {
      name: 'College of Business Management Building',
      category: 'Academic',
      rooms: ['Room 101', 'Room 102', "Dean's Office", 'Faculty Room']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76473046394585, 16.93741428782012],
      [121.76463060941592, 16.936985225119216],
      [121.76494010542939, 16.936923596392546],
      [121.76504371815838, 16.937353673597016],
      [121.76473046394585, 16.93741428782012]]]


    }
  },
  {
    type: 'Feature',
    id: 19,
    properties: {
      name: 'College of Education',
      category: 'Academic',
      rooms: ['Room 601', 'Room 602', 'Demo Classroom']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76484250979985, 16.93779989668468],
      [121.76473983376553, 16.937454687376544],
      [121.76492900558907, 16.937404830239828],
      [121.7650206566571, 16.937757155501686],
      [121.76484250979985, 16.93779989668468]]]


    }
  },
  {
    type: 'Feature',
    id: 20,
    properties: {
      name: 'Canteen',
      category: 'Food',
      rooms: ['Main Hall', 'Table Area']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76491435763256, 16.93811073033045],
      [121.76485529936372, 16.93786975947549],
      [121.76522930854748, 16.937765785011194],
      [121.76530096666204, 16.938014944655322],
      [121.76491435763256, 16.93811073033045]]]


    }
  },
  {
    type: 'Feature',
    id: 21,
    properties: {
      name: 'Gymnasium',
      category: 'Recreation',
      rooms: ['Court', 'Bleachers', 'Locker Room']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.7643451860186, 16.938705510313653],
      [121.76426681554602, 16.938434614369157],
      [121.76488457011789, 16.9383310886773],
      [121.76494462068587, 16.938591380235195],
      [121.7643451860186, 16.938705510313653]]]


    }
  },
  {
    type: 'Feature',
    id: 22,
    properties: {
      name: 'Bachelor of Science in Industrial Technology Room C',
      category: 'Academic',
      rooms: ['Workshop C']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76496147023818, 16.938358894983196],
      [121.76491075809759, 16.938169750113175],
      [121.76507454140761, 16.938146037099145],
      [121.76510775812, 16.93833682728129],
      [121.76496147023818, 16.938358894983196]]]


    }
  },
  {
    type: 'Feature',
    id: 23,
    properties: {
      name: 'Hostel',
      category: 'Residence',
      rooms: ['Dorm A', 'Dorm B', 'Common Area']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76503479261959, 16.938525042016735],
      [121.76499693615403, 16.93837734991253],
      [121.76523911073025, 16.938325102789705],
      [121.76527685153411, 16.93846021852113],
      [121.76503479261959, 16.938525042016735]]]


    }
  },
  {
    type: 'Feature',
    id: 24,
    properties: {
      name: 'College of Criminal Justice Education (Block 1)',
      category: 'Academic',
      rooms: ['Room 101', 'Room 102', 'Room 103', 'Room 104', 'Room 105', 'Room 106', 'Room 107', 'Room 108', 'Room 109', 'Room 110', 'Room 111', 'Room 112']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76514188025345, 16.938743691539756],
      [121.76507315168561, 16.938567281146064],
      [121.7651985492518, 16.93852376454855],
      [121.7652451743304, 16.93872139037188],
      [121.76514188025345, 16.938743691539756]]]


    }
  },
  {
    type: 'Feature',
    id: 25,
    properties: {
      name: 'College of Criminal Justice Education (Block 2)',
      category: 'Academic',
      rooms: ['Room 702']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76524422899678, 16.93869865844134],
      [121.7652115386984, 16.93854086108864],
      [121.76529910294852, 16.938523723233175],
      [121.7653564906181, 16.938679300366346],
      [121.76524422899678, 16.93869865844134]]]


    }
  },
  {
    type: 'Feature',
    id: 26,
    properties: {
      name: 'NSTP Office',
      category: 'Office',
      rooms: ["Coordinator's Office"]
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.7653584861502, 16.938713292785664],
      [121.76529910294852, 16.938523723233175],
      [121.7654750503221, 16.938475555192582],
      [121.76552903603306, 16.938650077369445],
      [121.7653584861502, 16.938713292785664]]]


    }
  },
  {
    type: 'Feature',
    id: 27,
    properties: {
      name: 'College of Criminal Justice Education (Block 3)',
      category: 'Academic',
      rooms: ['Room 703']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76521250372701, 16.939300210033323],
      [121.76508162842765, 16.93878242037559],
      [121.76520423318198, 16.938766899399525],
      [121.76531904246752, 16.939276171106954],
      [121.76521250372701, 16.939300210033323]]]


    }
  },
  {
    type: 'Feature',
    id: 28,
    properties: {
      name: 'College of Criminal Justice Education (Block 4)',
      category: 'Academic',
      rooms: ['Room 704', 'Forensics Lab']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.7653603841058, 16.939848832691396],
      [121.76522429742806, 16.939337136075338],
      [121.76530973668883, 16.939316609128127],
      [121.76545125744468, 16.939819437362132],
      [121.7653603841058, 16.939848832691396]]]


    }
  },
  {
    type: 'Feature',
    id: 29,
    properties: {
      name: 'Chapel',
      category: 'Spiritual',
      rooms: ['Prayer Hall']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76366091086408, 16.936058029772667],
      [121.76365490763652, 16.935993660766854],
      [121.76372876420766, 16.935990355028494],
      [121.76374035633762, 16.936052248484927],
      [121.76366091086408, 16.936058029772667]]]


    }
  },
  {
    type: 'Feature',
    id: 30,
    properties: {
      name: 'Guard Resting Area',
      category: 'Service',
      rooms: ['Guard Booth']
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76371310430932, 16.93597284814021],
      [121.76368893372234, 16.935908887639314],
      [121.76375013837293, 16.93589552695927],
      [121.76376358465478, 16.93596290095425],
      [121.76371310430932, 16.93597284814021]]]


    }
  },
  {
    type: 'Feature',
    id: 32,
    properties: {
      name: 'Parking Area',
      category: 'Service',
      rooms: []
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76497041028523, 16.93874545885275],
      [121.76503151652099, 16.93895448056186],
      [121.76444267455554, 16.939089104591346],
      [121.76435749615803, 16.938865912069815],
      [121.76497041028523, 16.93874545885275]]]


    }
  },
  {
    type: 'Feature',
    id: 33,
    properties: {
      name: 'Entrance',
      category: 'Access',
      rooms: []
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76387544536607, 16.93569651311587],
      [121.76405703516974, 16.935652119361748],
      [121.76408528247435, 16.935833554638364],
      [121.7639238693132, 16.935877948349656],
      [121.76387544536607, 16.93569651311587]]]


    }
  },
  {
    type: 'Feature',
    id: 34,
    properties: {
      name: 'Guard House',
      category: 'Security',
      rooms: []
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
      [
      [121.76338754634293, 16.9360293988629],
      [121.76332750627381, 16.935835239503447],
      [121.76362878101668, 16.935775122502946],
      [121.76368364552314, 16.935958588890472],
      [121.76338754634293, 16.9360293988629]]]


    }
  },
{
      "type": 'Feature',
      "id": 35,
      "properties": {
        "name": "Main Campus Road",
        "type": "road" // Adding a 'type' lets you style all roads at once
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [121.7640267116733, 16.935646972053746],
          [121.76407679872722, 16.935907170304617],
           [
            121.76413470231614,
            16.93591896535429
          ],
          [
            121.76419485332951,
            16.935935113387345
          ],
          [
            121.76424911262012,
            16.93595966828238
          ],
          [
            121.76429170639557,
            16.93597852603638
          ],
          [
            121.7643487502898,
            16.93603221549712
          ],
          [
            121.76437892950491,
            16.93608055763852
          ],
          [
            121.76440576923761,
            16.936175252118076
          ],
          [
            121.76444625637345,
            16.936353020859656
          ],
          [
            121.76451607136744,
            16.93666060147102
          ],
          [
            121.76457618286503,
            16.936921113116185
          ],
          [
            121.76464095389724,
            16.937201428029113
          ],
          [
            121.76470303366528,
            16.937466441618497
          ],
          [
            121.76501512302804,
            16.938791387566752
          ],
          [
            121.76521181868628,
            16.939748222477846
          ],
          [
            121.765291056774,
            16.940043378283406
          ],
          [
            121.76528492166415,
            16.940127388015725
          ],
          [
            121.76492975757145,
            16.940228126731483
          ],
          [
            121.76482949404226,
            16.940182906049273
          ],
          [
            121.76463115860139,
            16.939607224349984
          ],
          [
            121.76456216132448,
            16.939404242701585
          ],
          [
            121.76436451571266,
            16.938953143855855
          ],
          [
            121.76500775453661,
            16.938783693052386
          ],
          [
            121.76436479409699,
            16.938951878975004
          ],
          [
            121.76427937237662,
            16.938583855241546
          ],
          [
            121.7641686736564,
            16.9380784510264
          ],
          [
            121.76401032412639,
            16.93735801440478
          ],
          [
            121.76390007107977,
            16.936866231892424
          ],
          [
            121.76376436210302,
            16.936234874655383
          ],
          [
            121.76376218075922,
            16.936154070439514
          ],
          [
            121.76381528790643,
            16.93602765909246
          ],
          [
            121.76396678116748,
            16.935920550495297
          ],
          [
            121.7640161028184,
            16.935914438971636
          ],
          [
            121.76409306388643,
            16.93623429757865
          ],
          [
            121.76401581974397,
            16.93591342657514
          ],
          [
            121.76396043140687,
            16.9359221752821
          ],
          [121.76389552041525, 16.93566974680307]
        ]
      }
    }
]
  
};

// Flat list for search/autocomplete
export interface BuildingEntry {
  id: number;
  name: string;
  category: string;
  rooms: string[];
}

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((v) => typeof v === 'string');

export const BUILDINGS_LIST: BuildingEntry[] = CAMPUS_GEOJSON.features
  .filter((f: any) => f.geometry.type === 'Polygon' && typeof f.id === 'number')
  .map((f: any) => ({
    id: f.id,
    name: String(f.properties?.name ?? ''),
    category: String(f.properties?.category ?? 'General'),
    rooms: isStringArray(f.properties?.rooms) ? f.properties.rooms : []
  }));

// Flat list of every searchable room with its building
export interface RoomEntry {
  buildingId: number;
  buildingName: string;
  room: string;
  category: string;
}

const normalizeName = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

// Map campus building names to GeoJSON feature ids
const CAMPUS_DATA_BUILDING_ID: Record<string, number> = {
  [normalizeName('Library')]: 5,
  [normalizeName('Ramon Magsaysay')]: 7,
  [normalizeName('College of Computing Studies, Information and Communication Technology')]: 9,
  [normalizeName('Student Center')]: 8,
  [normalizeName('New College of Business Management Building')]: 1, 
  [normalizeName('Old Building - College of Education')]: 19, 
  [normalizeName('Old Building - College of Business Management')]: 18,
  [normalizeName('Bachelor of Science in Industrial Technology Faculty')]: 10
};

const getCampusDataBuildingId = (campusName: string): number | undefined =>
  CAMPUS_DATA_BUILDING_ID[normalizeName(campusName)];

const mergeCampusRooms = (building: BuildingEntry): BuildingEntry => {
  const campusEntry = campusData.find(
    (entry) => getCampusDataBuildingId(entry.building) === building.id
  );
  if (!campusEntry) return building;
  return {
    ...building,
    rooms: Object.values(campusEntry.floors).flat()
  };
};

const syntheticCampusBuildings: BuildingEntry[] = campusData.flatMap((entry, index) => {
  const existingId = getCampusDataBuildingId(entry.building);
  if (existingId) return [];
  return [
    {
      id: 1000 + index,
      name: entry.building,
      category: 'Academic',
      rooms: Object.values(entry.floors).flat()
    }
  ];
});

export const SEARCH_BUILDINGS_LIST: BuildingEntry[] = [
  ...BUILDINGS_LIST.map(mergeCampusRooms),
  ...syntheticCampusBuildings
];

export const ROOMS_LIST: RoomEntry[] = SEARCH_BUILDINGS_LIST.flatMap((b) =>
  b.rooms.map((room) => ({
    buildingId: b.id,
    buildingName: b.name,
    room,
    category: b.category
  }))
).filter(
  (entry, index, list) =>
    index ===
      list.findIndex(
        (other) => other.buildingId === entry.buildingId && other.room === entry.room
      )
);


