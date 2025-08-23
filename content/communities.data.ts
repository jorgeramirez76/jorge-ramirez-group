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
    slug: 'summit-nj',
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
