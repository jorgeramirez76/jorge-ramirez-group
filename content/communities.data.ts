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
    slug: 'kenilworth',
    name: 'Kenilworth',
    county: 'union-county',
    summary: 'Tidy neighborhoods with easy access to commerce and parks.',
    description:
      'Kenilworth\'s compact grid makes daily errands simple and quick. Shops and restaurants line the Boulevard, giving residents convenient local options. Small parks and playgrounds sit within walking distance of most homes. Housing ranges from capes and colonials to newer infill construction. Community events and parades foster a close-knit civic pride. Its central location near Route 22 and the Garden State Parkway keeps regional travel straightforward.',
    schools:
      'Kenilworth Public Schools offer a small-town environment with active athletics and extracurriculars.',
    commute:
      'Many commuters drive or bike to Roselle Park or Union stations on the Raritan Valley Line for trains to Newark and New York in about 55 to 75 minutes, and NJ Transit buses run along local corridors.'
  },
  {
    slug: 'linden',
    name: 'Linden',
    county: 'union-county',
    summary: 'Northeast Corridor rail, diverse housing, and major retail corridors.',
    description:
      'Linden balances suburban blocks with industry and shopping along Routes 1 and 27. Redevelopment around the train station has added apartments and storefronts. Neighborhoods offer capes, colonials, and multi-family options. Residents enjoy parks, recreation programs, and community events. Major highways and Newark Airport lie minutes away. The city\'s multicultural dining scene reflects its varied population.',
    schools:
      'Linden Public Schools provide magnet and academy programs with expanding STEM and arts offerings.',
    commute:
      'Direct Northeast Corridor trains from Linden Station reach New York Penn Station in roughly 35 to 45 minutes, and commuter buses serve Port Authority and nearby job centers.'
  },
  {
    slug: 'mountainside',
    name: 'Mountainside',
    county: 'union-county',
    summary: 'Leafy enclave near Watchung Reservation with big-lot homes.',
    description:
      'Mountainside is prized for privacy and green space along the Watchung ridgeline. Many homes sit on oversized lots surrounded by mature trees. The community shares parks, pools, and summer events with neighboring towns. Shoppers head to nearby Westfield and Springfield for boutiques and dining. Residents appreciate quick drives to Route 22 and I-78. Nature lovers explore miles of trails in Watchung Reservation right at the town\'s edge.',
    schools:
      'Mountainside School District serves K–8 locally, with high school students attending Governor Livingston High in Berkeley Heights.',
    commute:
      'Residents typically drive to Summit or Westfield stations for trains to New York in about 55 to 75 minutes, and NJ Transit buses run along Route 22 toward Port Authority.'
  },
  {
    slug: 'new-providence',
    name: 'New Providence',
    county: 'union-county',
    summary: 'Sought-after suburb with Gladstone Branch rail and a polished downtown.',
    description:
      'New Providence features quiet streets lined with well-kept homes. A revitalized town center offers cafés, shops, and community gathering spots. Parks and upgraded recreation fields encourage outdoor activity. Residents celebrate seasonal festivals and concerts on the commons. Housing ranges from capes to luxury new builds, keeping demand high. Its location by the Passaic River provides a serene backdrop.',
    schools:
      'New Providence School District earns top marks for academics, music, and STEM programs.',
    commute:
      'Gladstone Branch trains from New Providence Station offer peak-hour direct service to New York Penn Station in about 50 to 70 minutes, with additional service to Hoboken.'
  },
  {
    slug: 'plainfield',
    name: 'Plainfield',
    county: 'union-county',
    summary: 'Architectural gems, arts revival, and RVL rail (two stations).',
    description:
      'Plainfield boasts grand Victorians and early twentieth-century homes in its historic districts. Downtown revitalization has brought new restaurants, galleries, and streetscape improvements. The city hosts cultural festivals celebrating its diverse population. Two Raritan Valley Line stations—Netherwood and Plainfield—serve commuters. Residential options include apartments, multi-family houses, and restored single-family residences. Proximity to highways adds driving convenience.',
    schools:
      'Plainfield Public Schools offer magnet and academy programs alongside active arts and athletics.',
    commute:
      'Raritan Valley Line trains from Netherwood or Plainfield stations reach New York Penn with a Newark transfer in about 65 to 85 minutes.'
  },
  {
    slug: 'rahway',
    name: 'Rahway',
    county: 'union-county',
    summary: 'Arts-centered downtown with direct NEC/NJCL rail to NYC.',
    description:
      'Rahway\'s walkable core features the Union County Performing Arts Center and a growing dining scene. Modern apartments rise near the busy rail hub. Leafy neighborhoods surround downtown, mixing historic and contemporary homes. Community art projects and festivals enliven public spaces. Major employers throughout the region are easily reachable via rail or highway. The Rahway River Park offers expansive recreational space.',
    schools:
      'Rahway Public Schools emphasize performing arts and expanding elective programs.',
    commute:
      'Direct Northeast Corridor and North Jersey Coast Line trains from Rahway Station reach New York Penn Station in approximately 35 to 45 minutes.'
  },
  {
    slug: 'roselle',
    name: 'Roselle',
    county: 'union-county',
    summary: 'Neighborhood streets with quick access to Elizabeth, Linden, and major routes.',
    description:
      'Roselle provides central access in Union County. Its residential blocks feature single-family homes and two-families. Local shopping and eateries sit along St. Georges Avenue and Raritan Road. Residents enjoy community parks and recreation programs. The borough\'s diverse population supports cultural organizations and events. Regional job centers in Elizabeth and Newark are minutes away.',
    schools:
      'Roselle Public Schools partner with community groups and offer growing extracurricular options.',
    commute:
      'Many commuters drive to nearby Elizabeth or Linden stations for trains to New York in about 55 to 75 minutes, while NJ Transit buses run directly to Port Authority and Newark.'
  },
  {
    slug: 'roselle-park',
    name: 'Roselle Park',
    county: 'union-county',
    summary: 'Compact borough with RVL station and growing dining scene.',
    description:
      'Roselle Park blends convenience and community in a one-square-mile footprint. Renovated homes and new restaurants cluster near the train station. Tree-lined residential blocks foster a small-town feel. Annual festivals and farmers markets bring neighbors together. Nearby shopping in Cranford and Union expands local options. The borough\'s location near the Garden State Parkway appeals to commuters.',
    schools:
      'Roselle Park Public Schools offer neighborhood schools with active arts and athletics programs.',
    commute:
      'Raritan Valley Line trains from Roselle Park Station reach New York Penn via Newark in roughly 55 to 70 minutes.'
  },
  {
    slug: 'scotch-plains',
    name: 'Scotch Plains',
    county: 'union-county',
    summary: 'Suburban township with parks, SPF schools, and RVL access via Fanwood.',
    description:
      'Scotch Plains stretches from bustling downtown streets to quiet neighborhoods near the Watchung Reservation. Community life centers on parks, golf courses, and recreation leagues. Housing spans historic farmhouses, mid-century ranches, and new construction. The township shares a strong school district with neighboring Fanwood. Local events and concerts reinforce a friendly, civic-minded culture. Shopping and dining options line Park Avenue and Route 22.',
    schools:
      'Scotch Plains–Fanwood Public Schools are known for highly regarded music programs and broad extracurricular offerings.',
    commute:
      'Residents often use Fanwood or Westfield stations on the Raritan Valley Line for trains to New York in about 60 to 75 minutes, and NJ Transit buses serve Midtown as well.'
  },
  {
    slug: 'springfield',
    name: 'Springfield',
    county: 'union-county',
    summary: 'Central location near Short Hills/Millburn/Summit with strong commuter access.',
    description:
      'Springfield\'s neighborhoods fan out from historic Morris Avenue. The town offers a mix of post-war homes and newer developments. Residents enjoy day-to-day conveniences and access to nearby regional malls. Parks and the Baltusrol Golf Club provide ample green space. Seasonal town events foster civic pride. Its location near major highways positions it well for commuters.',
    schools:
      'Springfield Public Schools maintain a close-knit environment and benefit from nearby county magnet programs.',
    commute:
      'Commuters typically drive to Short Hills, Millburn, or Summit stations for direct trains to New York in about 50 to 70 minutes, while buses run along Morris Avenue to Port Authority.'
  },
  {
    slug: 'union',
    name: 'Union',
    county: 'union-county',
    summary: 'Large township with Kean University, shopping, and RVL station.',
    description:
      'Union offers diverse housing from mid-century ranches to new townhomes. Morris Avenue and Route 22 provide extensive retail and dining choices. Kean University adds cultural events and youthful energy. Neighborhood parks and a busy community center support recreation. Annual parades and festivals showcase township pride. Its central county location keeps regional destinations within easy reach.',
    schools:
      'Union Public School District delivers comprehensive academics with clubs and athletics across grade levels.',
    commute:
      'Raritan Valley Line trains from Union Station reach New York Penn via Newark in about 50 to 65 minutes, and multiple NJ Transit bus routes serve Newark and Manhattan.'
  },
  {
    slug: 'westfield',
    name: 'Westfield',
    county: 'union-county',
    summary: 'Elegant downtown, classic homes, and RVL rail (transfer to NYC).',
    description:
      'Westfield blends upscale shopping and dining with postcard streets of colonials and tudors. A restored train station anchors the walkable downtown. Families gather at parks and attend longstanding community events. Housing ranges from historic mansions to newer luxury builds. Strong civic organizations support local arts and sports. Proximity to major highways aids regional travel.',
    schools:
      'Westfield Public Schools enjoy a high academic reputation with extensive extracurricular activities.',
    commute:
      'Raritan Valley Line trains from Westfield Station connect to New York Penn via Newark in roughly 55 to 70 minutes.'
  },
  {
    slug: 'winfield',
    name: 'Winfield',
    county: 'union-county',
    summary: 'Small community with quick access to Linden/Rahway corridors.',
    description:
      'Winfield is one of New Jersey\'s smallest municipalities, tucked along the Rahway River. The town\'s quiet streets feature modest single-family homes. Residents share amenities with neighboring Linden and Clark. Community events revolve around the local park and firehouse. Shopping, dining, and major transit are minutes away. The tight-knit populace prides itself on volunteerism.',
    schools:
      'Winfield Township School District provides a small-scale K–8 environment, with high school students attending Arthur L. Johnson High School in Clark.',
    commute:
      'Commuters rely on nearby Linden or Rahway stations for direct trains to New York in 40 to 60 minutes and can access express buses from surrounding corridors.'
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
