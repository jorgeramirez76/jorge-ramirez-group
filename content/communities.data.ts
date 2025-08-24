export type County = {
  slug: string;
  name: string;
};

export type Town = {
  slug: string;
  name: string;
  county: string; // county slug
  summary: string;
  description: string; // six sentences
  schools: string;
  commute: string;
};

export const COUNTIES: County[] = [
  { slug: 'union-county', name: 'Union County' },
  { slug: 'morris-county', name: 'Morris County' },
  { slug: 'essex-county', name: 'Essex County' },
  { slug: 'hudson-county', name: 'Hudson County' },
  { slug: 'middlesex-county', name: 'Middlesex County' }
];

export const TOWNS: Town[] = [
  {
    slug: 'berkeley-heights',
    name: 'Berkeley Heights',
    county: 'union-county',
    summary:
      'Scenic suburban township with excellent schools and direct Midtown Direct rail service.',
    description:
      'Berkeley Heights sits at the edge of the Watchung Mountains, offering residents rolling hills, wooded trails, and a close-knit suburban community. The town is well known for its family-friendly neighborhoods, parks, and community programs. Residents enjoy hiking and outdoor activities at Watchung Reservation while also benefiting from modern amenities and proximity to major highways. Housing includes colonials, split-levels, ranches, and luxury new construction. The township has a lively civic life, including summer concerts, athletic leagues, and community volunteerism. Downtown Berkeley Heights has a growing dining scene and convenient shopping along Springfield Avenue.',
    schools:
      'Berkeley Heights Public Schools are highly rated; Governor Livingston High School ranks among New Jersey\'s top and the district offers strong arts and STEM programs.',
    commute:
      'NJ Transit\'s Gladstone Branch provides peak-hour direct service from Berkeley Heights Station to New York Penn Station in about 50 to 60 minutes, and NJ Transit buses run along Route 78.'
  },
  {
    slug: 'clark',
    name: 'Clark',
    county: 'union-county',
    summary:
      'Suburban township with strong community pride, retail, and highway convenience.',
    description:
      'Clark is a centrally located township with a suburban atmosphere, known for Oak Ridge Park and convenient shopping centers. Its neighborhoods are quiet, family-oriented, and include a mix of older Cape Cods, colonials, and newer homes. Community pride runs high, with parades, school activities, and township-sponsored events bringing residents together. The township\'s location near the Garden State Parkway makes it a commuter-friendly community with quick access to NYC, Newark, and the Jersey Shore.',
    schools:
      'Clark Public Schools feature neighborhood elementary schools and Arthur L. Johnson High School, which offers strong sports programs and AP courses.',
    commute:
      'NJ Transit\'s #112 bus runs from Central Avenue to Port Authority in about 50 to 70 minutes, and nearby Rahway or Linden stations offer trains to Newark Penn Station in 15 to 25 minutes for NYC connections.'
  },
  {
    slug: 'cranford',
    name: 'Cranford',
    county: 'union-county',
    summary:
      'Charming river town with a lively downtown, great schools, and Raritan Valley Line service.',
    description:
      'Cranford is considered one of Union County\'s most desirable towns, blending historic character with modern convenience. Its downtown is lively, filled with boutiques, cafés, and restaurants, and surrounded by leafy residential streets. Cranford is often praised for its community events, including festivals and a seasonal farmers\' market. The Rahway River and Nomahegan Park provide natural beauty and recreational opportunities. The housing market is diverse, with historic Victorian homes, 20th-century colonials, and modern new builds. Its walkability and access to transit make it particularly popular with NYC professionals.',
    schools:
      'Cranford Public Schools hold a strong academic reputation with project-based learning and active parent organizations.',
    commute:
      'Raritan Valley Line trains from Cranford Station reach New York Penn Station with a Newark transfer in about 55 to 70 minutes, and commuter buses run to Port Authority.'
  },
  {
    slug: 'elizabeth',
    name: 'Elizabeth',
    county: 'union-county',
    summary:
      'Urban hub with diverse neighborhoods, shopping, and major transit links.',
    description:
      'Elizabeth, the county seat of Union County, is one of New Jersey\'s oldest and most diverse cities. Its neighborhoods range from historic districts with Victorian homes to modern apartment complexes. Elizabeth is home to The Mills at Jersey Gardens, one of the state\'s largest outlet malls, and provides quick access to Newark Airport and Port Newark. The city has undergone significant redevelopment, offering a mix of affordable housing and new construction. Residents appreciate the cultural diversity, vibrant food scene, and convenient public transit options.',
    schools:
      'Elizabeth Public Schools, one of the state\'s largest districts, offer magnet academies, arts and technology programs, and bilingual options.',
    commute:
      'NJ Transit\'s Northeast Corridor and North Jersey Coast Line trains from Elizabeth Station reach New York Penn Station in about 30 to 40 minutes, with numerous buses also running to Port Authority.'
  },
  {
    slug: 'fanwood',
    name: 'Fanwood',
    county: 'union-county',
    summary:
      'Charming small town with tree-lined streets, Victorian homes, and RVL train service.',
    description:
      'Fanwood is a picturesque town noted for its historic Victorian homes, leafy streets, and small but vibrant downtown area. It is often described as a hidden gem of Union County, offering a peaceful residential environment with close proximity to New York City. Residents enjoy community events, local shops, and the Fanwood Nature Center. The housing market includes well-preserved historic homes as well as updated single-family residences. Fanwood is closely tied to neighboring Scotch Plains for schools and recreation.',
    schools:
      'Scotch Plains–Fanwood Public Schools share a strong reputation, with high graduation rates and broad extracurricular offerings.',
    commute:
      'Raritan Valley Line trains from Fanwood Station reach New York Penn Station with a Newark transfer in about 55 to 70 minutes, and off-peak one-seat rides are occasionally available.'
  },
  {
    slug: 'garwood',
    name: 'Garwood',
    county: 'union-county',
    summary:
      'Small borough with walkability, cozy neighborhoods, and easy access to Cranford and Westfield.',
    description:
      'Garwood is a one-square-mile borough nestled between Westfield and Cranford. Despite its small size, it offers residents a friendly, walkable community with access to shopping, restaurants, and recreational amenities. Housing is primarily single-family homes, duplexes, and small apartment buildings. Its location gives residents the ability to enjoy the larger downtowns of neighboring towns while maintaining a quieter residential environment.',
    schools:
      'Garwood Public Schools provide K–8 education locally, while high school students attend Arthur L. Johnson High School in Clark and benefit from small class sizes.',
    commute:
      'Raritan Valley Line trains from Garwood Station reach New York Penn Station with a Newark transfer in about 55 to 70 minutes.'
  },
  {
    slug: 'hillside',
    name: 'Hillside',
    county: 'union-county',
    summary:
      'Diverse township with urban-suburban mix and strong commuter access to Newark and NYC.',
    description:
      'Hillside sits just outside Newark, offering a diverse community with quick access to major highways and public transit. Housing is varied, including capes, colonials, multi-family homes, and new developments. The township has a strong cultural identity, with a variety of community organizations and small businesses serving residents. Its location near Newark Liberty International Airport and Routes 22 and I-78 make Hillside a convenient choice for commuters working in Newark, Jersey City, or Manhattan.',
    schools:
      'Hillside Public Schools offer dedicated faculty, AP courses, arts programs, and active student organizations.',
    commute:
      'Multiple NJ Transit buses connect Hillside to Port Authority in about 40 to 55 minutes, and quick buses reach Newark Penn Station in 10 to 20 minutes for train connections to New York.'
  },
  {
    slug: 'summit',
    name: 'Summit',
    county: 'union-county',
    summary: 'Classic luxury suburb with vibrant downtown and direct Midtown Direct trains.',
    description:
      'Summit is a hilltop suburb with a walkable downtown anchored by boutiques and cafés. Tree-lined streets showcase a mix of restored Victorians and modern builds. Residents enjoy abundant parks like the Reeves-Reed Arboretum. Community events foster small-town camaraderie throughout the year. Proximity to major employers keeps demand high. Its historic station links directly to Manhattan, sustaining Summit\'s commuter appeal.',
    schools:
      'Summit Public Schools are widely recognized for high academic performance, extensive AP options, and strong arts and athletics.',
    commute:
      'Midtown Direct trains from Summit Station reach New York Penn Station in roughly 35 to 45 minutes, and express buses and nearby Route 24 offer additional commuting options.'
  },
  {
    slug: 'morristown-nj',
    name: 'Morristown',
    county: 'morris-county',
    summary: 'Historic county seat with lively nightlife, green spaces, and direct rail.',
    description:
      'Morristown blends Revolutionary War history with a modern arts and dining scene. The Green serves as a communal park surrounded by shops and restaurants. Neighborhoods range from stately homes to newer townhouses. Year-round festivals and performances keep the downtown lively. Access to major highways appeals to regional commuters. Direct Midtown Direct trains make New York trips straightforward.',
    schools:
      'Morristown is served by the Morris School District, offering diverse programs and International Baccalaureate options.',
    commute:
      'Midtown Direct service on the Morris & Essex Line connects Morristown Station to Penn Station in about 50 to 60 minutes, and commuters can also use buses or drive via I-287 and Route 24.'
  },
  {
    slug: 'montclair-nj',
    name: 'Montclair',
    county: 'essex-county',
    summary: 'Arts-and-culture hub with multiple rail stations and eclectic housing.',
    description:
      'Montclair mixes urban energy with suburban comfort. Art museums and theaters draw visitors from across the region. Distinct neighborhoods feature everything from grand mansions to cozy apartments. Its downtowns are dotted with cafes, boutiques, and weekend markets. Abundant parks and reservation trails encourage outdoor recreation. Several rail stations provide easy access to Manhattan.',
    schools:
      'Montclair Public Schools operate a magnet system that balances academics, arts, and diversity.',
    commute:
      'NJ Transit\'s Montclair-Boonton Line offers Midtown Direct trains from Bay Street, Walnut Street, and Upper Montclair stations, typically reaching Penn Station in 35 to 55 minutes, while express buses provide alternate routes.'
  },
  {
    slug: 'hoboken-nj',
    name: 'Hoboken',
    county: 'hudson-county',
    summary: 'Compact waterfront city known for nightlife, brownstones, and PATH access.',
    description:
      'Hoboken sits on the Hudson River with sweeping Manhattan views. Historic brownstones share blocks with modern high-rises. The mile-square city buzzes with bars, restaurants, and waterfront parks. Its small footprint makes daily errands easily walkable. Annual festivals and street fairs add to the community vibe. Fast transit links keep it a favorite for New York professionals.',
    schools:
      'Hoboken Public Schools and a range of charters offer STEM and arts-focused curricula.',
    commute:
      'PATH trains from Hoboken Terminal reach World Trade Center in about 10 minutes and 33rd Street in roughly 15 minutes, and NY Waterway ferries and buses broaden commute options.'
  },
  {
    slug: 'new-brunswick-nj',
    name: 'New Brunswick',
    county: 'middlesex-county',
    summary: 'University city with cultural venues, rail hub, and redevelopment.',
    description:
      'New Brunswick combines college-town energy with an evolving downtown. Rutgers University anchors the city\'s academic and cultural life. The State Theatre and George Street Playhouse offer year-round performances. New residential towers have revitalized the skyline. Neighborhood parks and the Raritan River provide outdoor escapes. Its central location makes regional travel easy.',
    schools:
      'New Brunswick Public Schools partner with Rutgers to provide magnet and dual-enrollment opportunities.',
    commute:
      'NJ Transit\'s Northeast Corridor trains from New Brunswick Station reach Penn Station in about 45 to 60 minutes, while bus lines and nearby Route 18 connect to greater New York and New Jersey.'
  }
];
