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
    summary:
      'Tight-knit borough with a small-town feel, walkable downtown, and Raritan Valley Line train station.',
    description:
      'Roselle Park is a compact suburban borough known for its walkable neighborhoods, friendly community, and accessibility. The downtown features restaurants, shops, and easy access to both Elizabeth and Cranford amenities. Housing includes capes, colonials, and multi-family residences, offering a mix of affordability and charm. The borough\'s small size makes it highly walkable and easy to navigate. Local events, parades, and youth sports programs showcase strong community spirit. Residents appreciate fast connections to surrounding towns and regional transit corridors.',
    schools:
      'Roselle Park Public Schools feature Roselle Park High School with AP courses, athletics, and arts programs, and strong neighborhood elementary schools that foster community cohesion (GreatSchools).',
    commute:
      'NJ Transit\'s Raritan Valley Line from Roselle Park Station reaches New York Penn with a Newark transfer in about 55 to 70 minutes, and the same line brings riders to Newark Penn in roughly 22 to 32 minutes.'
  },
  {
    slug: 'scotch-plains',
    name: 'Scotch Plains',
    county: 'union-county',
    summary:
      'Large suburban township with a variety of neighborhoods, excellent schools, and strong community pride.',
    description:
      'Scotch Plains is a family-oriented township featuring a blend of suburban neighborhoods, expansive parks, and cultural diversity. It is home to part of the Watchung Reservation, offering abundant outdoor recreation. Housing ranges from affordable starter homes to luxury estates. The township supports a robust sports and recreation program and an active civic life. Its downtown is modest but complemented by nearby Fanwood and Westfield commercial districts. Community pride runs deep, with events and organizations bringing residents together year-round.',
    schools:
      'Scotch Plains–Fanwood Public Schools share a district with neighboring Fanwood and are consistently ranked among Union County\'s strongest, highlighted by AP offerings and rich extracurricular, arts, and athletics programs (Niche).',
    commute:
      'NJ Transit\'s Raritan Valley Line from nearby Fanwood Station reaches New York Penn with a Newark transfer in about 55 to 70 minutes, offering off-peak one-seat rides, and trains to Newark Penn take roughly 25 to 35 minutes.'
  },
  {
    slug: 'springfield',
    name: 'Springfield',
    county: 'union-county',
    summary:
      'Suburban township with historic landmarks, strong schools, and convenient transit access.',
    description:
      'Springfield is a suburban township steeped in Revolutionary War history, with the Battle of Springfield commemorated annually. Today, it is known for its quiet neighborhoods, excellent schools, and proximity to shopping along Morris Avenue and Route 22. Residents enjoy parks, golf courses, and nearby Short Hills Mall. Housing options include Cape Cods, split-levels, colonials, and modern new construction, attracting a broad demographic of residents. Its central location offers quick access to major highways and neighboring commuter towns. Community events and organizations cultivate strong local pride.',
    schools:
      'Springfield Public Schools emphasize personalized learning and community engagement; Jonathan Dayton High School provides AP courses, athletics, and extracurricular clubs (GreatSchools).',
    commute:
      'Many residents drive to Millburn or Short Hills stations on the Midtown Direct Morris & Essex Line for 40 to 50 minute rides to New York, or take NJ Transit buses from downtown to Port Authority in about 50 to 65 minutes; quick buses reach Newark Penn in roughly 20 to 30 minutes.'
  },
  {
    slug: 'union',
    name: 'Union',
    county: 'union-county',
    summary:
      'Large township with Kean University, retail centers, and Midtown Direct rail service.',
    description:
      'Union is a diverse township offering a mix of suburban neighborhoods, vibrant retail centers, and cultural amenities. Home to Kean University, the township has a lively academic influence along with attractions like Liberty Hall Museum. Residents enjoy proximity to shopping along Route 22 and Morris Avenue. Housing ranges from affordable starter homes to larger colonials, appealing to commuters and families alike. Parks and community programs provide recreation throughout the year. Its location near major highways keeps regional travel convenient.',
    schools:
      'Union Public Schools offer AP courses, vocational programs, and extracurriculars at Union High School, serving a large and diverse student population with partnerships with Kean University (GreatSchools).',
    commute:
      'NJ Transit\'s Raritan Valley Line from Union Station reaches New York Penn with a Newark transfer in about 50 to 65 minutes with occasional off-peak one-seat rides, and buses via Morris Avenue connect to Port Authority; trains to Newark Penn take roughly 25 to 35 minutes.'
  },
  {
    slug: 'westfield',
    name: 'Westfield',
    county: 'union-county',
    summary:
      'Charming and upscale town with an iconic downtown, strong schools, and RVL train service.',
    description:
      'Westfield is one of Union County\'s most prestigious communities, famed for its vibrant downtown filled with shops, fine dining, and cultural events. The town features a wide array of housing, from stately colonials and Victorians to modern luxury homes. Residents enjoy Tamaques Park, Mindowaskin Park, and a strong sense of community. Its nationally recognized school district and proximity to New York City make Westfield a perennial favorite among professionals and families. Historic sites and seasonal festivals enhance the town\'s charm. Local civic groups and volunteer organizations keep residents engaged.',
    schools:
      'Westfield Public Schools include multiple Blue Ribbon schools, and Westfield High School offers extensive AP courses, athletics, and arts programs supported by strong community involvement (Niche, GreatSchools).',
    commute:
      'Raritan Valley Line trains from Westfield Station reach New York Penn via Newark in about 55 to 70 minutes with off-peak one-seat rides, and trains to Newark Penn take roughly 25 to 35 minutes.'
  },
  {
    slug: 'winfield',
    name: 'Winfield',
    county: 'union-county',
    summary:
      'Tiny township with close-knit community and affordable housing.',
    description:
      'Winfield is the smallest municipality in Union County, known for its cooperative-style housing and tight-knit community. Established during World War II as worker housing, it retains a unique layout and community governance. Residents enjoy a quiet lifestyle with easy access to neighboring Linden and Clark for shopping and services. The township\'s affordable housing and community-centered environment make it distinct within Union County. Local parks and the Rahway River provide small-town recreation. Community events and shared responsibilities foster strong neighborly connections.',
    schools:
      'Winfield Township School District serves grades K–8 locally, with high school students attending David Brearley High School in Kenilworth; small class sizes offer individualized attention (GreatSchools).',
    commute:
      'Residents typically use NJ Transit buses from neighboring Linden or Clark to reach New York in about 50 to 70 minutes, and similar routes connect to Newark in roughly 20 to 30 minutes.'
  },
  {
    slug: 'boonton-nj',
    name: 'Boonton',
    county: 'morris-county',
    summary: 'Historic town with lively Main Street, Victorian homes, and reservoir views.',
    description:
      'Boonton is a small, historic town with roots in the 1800s iron industry. Its lively Main Street is lined with restaurants, antique shops, and cafés. Many homes showcase charming Victorian architecture alongside newer developments. The town hosts an active arts scene and community events near Grace Lord Park. Scenic views of the Boonton Reservoir provide outdoor escapes. Residents appreciate its walkable downtown and commuter access while enjoying small-town character.',
    schools:
      'Boonton Public Schools serve local students and offer AP, STEM, and career programs at Boonton High School (GreatSchools).',
    commute:
      'Montclair-Boonton Line trains from Boonton Station reach Hoboken with transfers to Midtown in about 70 to 85 minutes, and Lakeland buses run to NYC in roughly 60 to 80 minutes.'
  },
  {
    slug: 'boonton-township-nj',
    name: 'Boonton Township',
    county: 'morris-county',
    summary: 'Quiet township with rural charm, spacious homes, and natural beauty.',
    description:
      'Boonton Township offers a rural-suburban setting of rolling hills and open land. Spacious homes on large lots and equestrian properties dot the landscape. Residents enjoy proximity to Tourne County Park and the Jersey City Reservoir. The township attracts those seeking privacy and tranquility with highway convenience. Local programs and seasonal events foster a neighborly atmosphere. Despite its serene feel, everyday shopping and dining are a short drive away.',
    schools:
      'Rockaway Valley School serves PreK–8, and students attend high-performing Mountain Lakes High School for grades 9–12 (GreatSchools).',
    commute:
      'Nearby Mountain Lakes and Denville stations offer Montclair-Boonton Line service to Hoboken/New York in about 65 to 85 minutes, and Lakeland buses reach Port Authority in roughly 55 to 75 minutes.'
  },
  {
    slug: 'butler-nj',
    name: 'Butler',
    county: 'morris-county',
    summary: 'Historic borough with small-town character and affordable housing options.',
    description:
      'Butler is a historic borough once known for its manufacturing hub. Downtown buildings house local shops, eateries, and small businesses. Housing ranges from older single-family homes to condos and townhouses. Nearby parks and recreation provide outdoor opportunities for residents. Community events and local pride create a welcoming small-town feel. Easy access to Route 23 makes commuting convenient.',
    schools:
      'Butler Public Schools serve grades K–12 with AP offerings and a close-knit atmosphere at Butler High School (GreatSchools).',
    commute:
      'NJ Transit buses along Route 23 reach Port Authority in about 60 to 80 minutes, and buses also connect to Newark in roughly 40 to 55 minutes.'
  },
  {
    slug: 'chatham-borough-nj',
    name: 'Chatham Borough',
    county: 'morris-county',
    summary: 'Quaint borough with walkable downtown, top schools, and direct trains.',
    description:
      'Chatham Borough is known for its historic downtown and small-town charm. Boutique shops and cafés line tree-shaded streets near the station. Neighborhoods feature a mix of historic colonials and modern luxury homes. Local parks and civic pride support an active community calendar. Proximity to highways keeps regional travel straightforward. Its direct rail service makes it a top choice for NYC professionals.',
    schools:
      'The School District of the Chathams ranks among New Jersey’s best, offering AP, STEM, and arts programs at Chatham High School (Niche).',
    commute:
      'Midtown Direct trains from Chatham Station reach New York Penn Station in about 45 to 55 minutes with frequent service.'
  },
  {
    slug: 'chatham-township-nj',
    name: 'Chatham Township',
    county: 'morris-county',
    summary: 'Upscale township with estate-style homes, open space, and top schools.',
    description:
      'Chatham Township surrounds the borough with a more spacious suburban feel. Large lots and estate-style homes sit amid preserved green space. The Great Swamp National Wildlife Refuge offers extensive hiking trails. Neighborhoods are quiet yet minutes from shopping in Short Hills and Madison. The township’s prestige stems from its peaceful streets and strong schools. Commuters use nearby Chatham or Madison stations for direct trains to the city.',
    schools:
      'Students share the acclaimed School District of the Chathams, known for high AP participation and strong athletics (Niche).',
    commute:
      'Residents drive to Chatham or Madison stations for Midtown Direct trains reaching New York in roughly 45 to 60 minutes.'
  },
  {
    slug: 'chester-borough-nj',
    name: 'Chester Borough',
    county: 'morris-county',
    summary: 'Quaint borough with antique shops, historic character, and rural surroundings.',
    description:
      'Chester Borough is a quaint town surrounded by rolling countryside. Historic Main Street hosts antique shops, boutiques, and cafés. Residential streets feature colonials, capes, and unique historic homes. Seasonal festivals and markets draw visitors and bolster local pride. Parks and preserved land provide ample outdoor recreation. The borough maintains its character while remaining close to major routes.',
    schools:
      'Chester School District serves K–8, and students attend top-performing West Morris Mendham High School for grades 9–12 (GreatSchools).',
    commute:
      'Commuters drive to Morristown or Dover stations for M&E Line trains taking about 75 to 90 minutes to NYC, or use Lakeland buses in roughly 65 to 80 minutes.'
  },
  {
    slug: 'chester-township-nj',
    name: 'Chester Township',
    county: 'morris-county',
    summary: 'Expansive rural township with preserved land, farms, and upscale homes.',
    description:
      'Chester Township offers expansive rural scenery with preserved farmland. Large estates and equestrian properties line winding roads. Hacklebarney State Park and Black River County Park provide outdoor escapes. Residents enjoy privacy yet remain within reach of nearby shops and dining. Community events celebrate the township’s agricultural heritage. Its country setting appeals to those seeking luxury homes amid nature.',
    schools:
      'Students share Chester School District for K–8 and attend West Morris Mendham High School, noted for academics and athletics (GreatSchools).',
    commute:
      'Lakeland buses via Route 206 reach Port Authority in about 65 to 85 minutes, and Morristown or Dover stations offer train access in roughly 55 to 70 minutes.'
  },
  {
    slug: 'denville-nj',
    name: 'Denville',
    county: 'morris-county',
    summary: "Known as the 'Hub of Morris County,' with lakes, parks, and strong community.",
    description:
      "Denville is dubbed the 'Hub of Morris County' for its central location. Lakeside neighborhoods provide waterfront living and recreation. Downtown Denville features a lively mix of restaurants, shops, and cafés. Housing ranges from charming capes to lakefront estates. Active civic groups host parades and community events year-round. Major highways keep travel across North Jersey convenient.",
    schools:
      'Denville Township School District serves K–8 with technology integration, and high schoolers attend Morris Knolls in the Morris Hills Regional District (GreatSchools).',
    commute:
      'Denville Station offers Montclair-Boonton and M&E Line trains to Hoboken/New York in about 70 to 90 minutes, and Lakeland buses provide Midtown service in roughly 65 to 80 minutes.'
  },
  {
    slug: 'dover-nj',
    name: 'Dover',
    county: 'morris-county',
    summary: 'Historic town with cultural diversity, walkable downtown, and major rail hub.',
    description:
      'Dover is a historic rail and iron town with cultural diversity. Its walkable downtown hosts restaurants, shops, and community services. Housing options include historic homes, multi-family properties, and affordable rentals. Parks and local organizations support a strong sense of community. Residents enjoy festivals and cultural events reflecting the town’s heritage. As a major rail hub, Dover offers strong connectivity across the region.',
    schools:
      'Dover Public Schools feature AP courses, bilingual programs, and extensive extracurricular opportunities (GreatSchools).',
    commute:
      'NJ Transit’s M&E and Montclair-Boonton lines from Dover Station reach Hoboken with Midtown transfers in about 65 to 85 minutes and provide direct service to Newark in roughly 45 to 60 minutes.'
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
    slug: 'hoboken',
    name: 'Hoboken',
    county: 'hudson-county',
    summary:
      'Ultra-walkable brownstone city with waterfront parks, dining, and direct PATH/ferry to Manhattan.',
    description:
      'Hoboken pairs historic brownstones and tree-lined streets with a modern waterfront lined by parks, piers, and skyline views. Washington Street anchors a lively dining and retail scene, while the south waterfront and 14th Street corridor add upscale residences and restaurants. Residents love the car-optional lifestyle—nearly everything from groceries and gyms to cafés and daycare sits a short walk away. Housing runs from prewar walk-ups and classic rowhomes to luxury doorman condos with amenities. The city is known for active community programming and riverfront jogging and biking paths. Hoboken\'s vibrant nightlife and year-round festivals keep the mile-square city lively.',
    schools:
      'Hoboken Public Schools offer AP courses and themed K–8 schools, while popular charters and private options expand choice.',
    commute:
      'PATH trains from Hoboken Terminal reach 33rd Street or the World Trade Center in roughly 10–18 minutes, and NY Waterway ferries make the Manhattan trip in about 8–15 minutes.'
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
  },
  {
    slug: 'parsippany-nj',
    name: 'Parsippany-Troy Hills',
    county: 'morris-county',
    summary: 'Large township with corporate campuses, varied neighborhoods, and commuter options.',
    description:
      'Parsippany-Troy Hills sprawls across northern Morris County with multiple business parks and lakes. Neighborhoods range from postwar capes to modern developments on winding streets. Community events and recreation programs give the large township a small-town touch. Residents enjoy parks like Lake Parsippany and Troy Meadows wetlands. Extensive shopping corridors line Route 46 and Route 10. Quick highway access keeps commutes flexible.',
    schools:
      'Parsippany-Troy Hills School District is known for strong academics, extracurricular clubs, and respected high schools.',
    commute:
      'Drivers reach NYC via Interstates 80 and 287 or NJ Transit buses; nearby Morris Plains or Mount Tabor stations offer trains that reach Penn Station in roughly 60 to 75 minutes.'
  },
  {
    slug: 'east-hanover-nj',
    name: 'East Hanover',
    county: 'morris-county',
    summary:
      'Family-oriented township with strong schools, retail centers, and highway access.',
    description:
      'East Hanover is a suburban township well known for its family-friendly neighborhoods, excellent services, and convenient location. Corporate campuses and shopping centers line Route 10, while residential areas feature colonials, capes, and split-levels on well-kept lots. The township appeals to commuters seeking quick access to Interstates 280, 80, and 287. Lurker Park, town pools, and extensive youth sports programs anchor local recreation. Seasonal events and civic groups foster a strong community spirit. Residents enjoy a balance of quiet suburban streets and nearby employment centers.',
    schools:
      'East Hanover Township School District provides K–8 at Frank J. Smith and Central Schools, with high schoolers attending Hanover Park High School; the district is noted for strong academics and extracurriculars (GreatSchools).',
    commute:
      'Lakeland commuter buses along Route 10 reach Port Authority in about 50 to 70 minutes, and NJ Transit buses provide Newark service in roughly 25 to 40 minutes.'
  },
  {
    slug: 'florham-park-nj',
    name: 'Florham Park',
    county: 'morris-county',
    summary:
      'Upscale township with strong schools, corporate campuses, and Jets training center.',
    description:
      'Florham Park is an affluent township combining suburban charm with corporate presence. It hosts the New York Jets Training Facility, Fairleigh Dickinson University, and several Fortune 500 offices. Neighborhoods feature spacious homes on large lots alongside newer luxury developments. Local events, recreation programs, and active organizations preserve a small-town vibe. Residents appreciate convenient access to Route 24 and major employment hubs. Parks and open spaces offer plenty of outdoor enjoyment.',
    schools:
      'Florham Park School District runs Briarwood, Brooklake, and Ridgedale Schools for K–8, and students attend Hanover Park High School for grades 9–12, with academics and community involvement highly regarded (GreatSchools).',
    commute:
      'Morris & Essex Line trains from nearby Madison or Convent Station provide direct service to New York Penn in about 45 to 60 minutes, and Lakeland buses along Route 24 and Columbia Turnpike reach Port Authority in roughly 55 to 70 minutes.'
  },
  {
    slug: 'hanover-township-nj',
    name: 'Hanover Township',
    county: 'morris-county',
    summary:
      'Convenient township with residential neighborhoods and major employment centers.',
    description:
      'Hanover Township encompasses Whippany and Cedar Knolls with a balance of quiet streets and corporate campuses. Housing ranges from modest single-family homes to upscale neighborhoods with easy highway access. The township has a strong recreational culture with parks, youth leagues, and the Whippany Railway Museum. Commuters value quick connections to Routes 10, 24, and 287. Local events and clubs help maintain a small-town feel despite nearby employment centers. Everyday shopping and dining remain close at hand.',
    schools:
      'Hanover Township Public Schools serve PreK–8 at Bee Meadow, Salem Drive, and Memorial Schools, while high schoolers attend Whippany Park High in the Hanover Park Regional District, noted for its STEM focus (GreatSchools).',
    commute:
      'Morris & Essex Line trains from Morris Plains or Morristown stations reach New York in about 55 to 70 minutes, and Lakeland buses from Whippany run to Port Authority in roughly 60 to 75 minutes.'
  },
  {
    slug: 'harding-nj',
    name: 'Harding Township',
    county: 'morris-county',
    summary:
      'Exclusive township with estate homes, preserved land, and country club living.',
    description:
      'Harding Township is known for estate homes, equestrian properties, and expanses of preserved land. Strict zoning maintains its rural, country character despite proximity to Morristown. The New Jersey Audubon Society\'s Scherman Hoffman Sanctuary offers scenic trails and wildlife. Residents value the township\'s low-density, country club lifestyle. Scenic byways and historic landmarks enhance its exclusive appeal. Luxury estates on multi-acre lots provide privacy and prestige.',
    schools:
      'Harding Township School serves grades K–8, and students attend top-rated Madison High School for grades 9–12, with the small district offering personalized education (GreatSchools).',
    commute:
      'Nearby Morristown and Madison stations on the Midtown Direct line provide trains to New York Penn in about 55 to 70 minutes and service to Newark in roughly 30 to 40 minutes.'
  },
  {
    slug: 'jefferson-township-nj',
    name: 'Jefferson Township',
    county: 'morris-county',
    summary:
      'Lakeside township with scenic beauty, outdoor recreation, and diverse neighborhoods.',
    description:
      'Jefferson Township, the county\'s largest by area, encompasses multiple lake communities including Lake Hopatcong. Residents enjoy boating, fishing, and hiking across state parks and campgrounds. Housing ranges from lakefront cottages and condos to modern suburban subdivisions. Community festivals, summer concerts, and holiday parades foster local pride. Local businesses support daily needs without leaving town. Access to major highways keeps regional commuting manageable.',
    schools:
      'Jefferson Township Public Schools feature AP courses, technology integration, and strong support for athletics and music programs (GreatSchools).',
    commute:
      'Lakeland buses from the Lake Hopatcong area provide service to Port Authority in about 65 to 85 minutes and run to Newark in roughly 45 to 65 minutes.'
  },
  {
    slug: 'kinnelon-nj',
    name: 'Kinnelon',
    county: 'morris-county',
    summary:
      'Affluent township with scenic hills, gated communities, and top-ranked schools.',
    description:
      'Kinnelon sits in the Ramapo Mountains with luxury developments, large estates, and preserved open space. The Smoke Rise community offers gated lake access and private amenities. Hiking trails, equestrian centers, and scenic landscapes make the township a peaceful retreat. Local lakes and parks provide recreation year-round. Despite its seclusion, major highways and bus routes keep commuters connected. The township is highly regarded for its family-friendly environment.',
    schools:
      'Kinnelon Public Schools consistently rank among New Jersey\'s best, emphasizing AP, honors, and STEM opportunities (Niche).',
    commute:
      'Lakeland commuter buses via Route 23 reach Port Authority in about 55 to 75 minutes and offer service to Newark in roughly 35 to 50 minutes.'
  },
  {
    slug: 'lincoln-park-nj',
    name: 'Lincoln Park',
    county: 'morris-county',
    summary:
      'Commuter-friendly borough with affordable homes and Montclair-Boonton Line station.',
    description:
      'Lincoln Park blends residential neighborhoods, condos, and townhomes, making it one of Morris County\'s more affordable commuter towns. The community stays active with local parks, recreation programs, and a growing dining scene. Neighborhoods range from older capes to newer townhouses. Residents value the small-town feel with urban access nearby. Its rail station provides direct connections to Hoboken and Midtown via transfer. The borough\'s location near Route 23 and I-80 adds commuting convenience.',
    schools:
      'Lincoln Park Public Schools educate K–8 students before they attend Boonton High School, with small class sizes and strong community support (GreatSchools).',
    commute:
      'Montclair-Boonton Line trains from Lincoln Park Station reach Hoboken with Midtown transfers in about 60 to 75 minutes, and Lakeland buses via Route 23 arrive at Port Authority in roughly 55 to 70 minutes.'
  },
  {
    slug: 'long-hill-nj',
    name: 'Long Hill Township',
    county: 'morris-county',
    summary:
      'Scenic township with small-town feel, top schools, and Gladstone Branch rail service.',
    description:
      'Long Hill Township spans the communities of Gillette, Millington, and Stirling along the Passaic River. Natural beauty from the Great Swamp National Wildlife Refuge meets suburban convenience. Residents enjoy parks, hiking trails, and family-friendly neighborhoods with a small-town vibe. Local events and volunteer groups sustain a tight-knit atmosphere. Proximity to major highways ensures easy travel across the region. The township is popular for its strong schools, upscale homes, and rail access.',
    schools:
      'Long Hill Township School District provides PreK–8 education before students attend Watchung Hills Regional High School, with consistently strong state performance (GreatSchools).',
    commute:
      'Gladstone Branch trains from Gillette, Millington, or Stirling stations offer Midtown Direct service to New York Penn in about 55 to 65 minutes and reach Newark Broad Street in roughly 35 to 45 minutes.'
  },
  {
    slug: 'madison-nj',
    name: 'Madison',
    county: 'morris-county',
    summary:
      'Historic borough with lively downtown, top schools, and direct Midtown trains.',
    description:
      'Madison, known as the \'Rose City,\' combines a rich history with a thriving downtown. Drew University and Fairleigh Dickinson University contribute cultural life and youthful energy. The downtown is walkable with restaurants, coffee shops, and boutiques. Housing ranges from historic colonials and Victorians to modern luxury homes. Community events and preserved landmarks reinforce its historic character. Direct Midtown trains make it a prime location for commuters.',
    schools:
      'Madison Public Schools earn high marks for academics, arts, and athletics, with Madison High School recognized for strong AP participation (Niche).',
    commute:
      'Midtown Direct trains on the Morris & Essex Line run from Madison Station to New York Penn in about 50 to 60 minutes, and Newark is about 30 to 40 minutes away.'
  },
  {
    slug: 'mendham-borough-nj',
    name: 'Mendham Borough',
    county: 'morris-county',
    summary: 'Quaint historic borough with top schools and a charming downtown.',
    description:
      'Mendham Borough is a picturesque community often called the hole in the doughnut because it is surrounded by Mendham Township. Its historic Main Street features boutique shops, cafes, and a classic small-town feel. Housing ranges from early American colonials to updated luxury homes on quiet streets. The borough maintains a strong sense of tradition with annual parades, fairs, and civic events. Parks and nearby preserves offer plentiful outdoor recreation. Residents value the excellent schools, tight-knit atmosphere, and scenic character.',
    schools:
      'Mendham Borough School District serves K–8 at Hilltop and Mountain View, and high schoolers attend highly ranked West Morris Mendham High School.',
    commute:
      'Nearby Morristown or Bernardsville stations on the M&E and Gladstone lines reach New York in about 65 to 80 minutes and Newark in roughly 40 to 55 minutes.'
  },
  {
    slug: 'mendham-township-nj',
    name: 'Mendham Township',
    county: 'morris-county',
    summary: 'Affluent township with rolling hills, large estates, and preserved land.',
    description:
      'Mendham Township surrounds the borough and is known for rolling hills and preserved land. Estate-style homes sit on multi-acre lots amid meadows and woodlands. Strict zoning maintains a rural character despite proximity to Morristown. Residents hike and ride horses in Schiff Nature Preserve and India Brook Park. Community groups host seasonal events that reinforce the township\'s tight-knit feel. Its prestige and quiet ambiance attract families seeking space and top-ranked schools.',
    schools:
      'Mendham Township School District runs highly rated elementary and middle schools, with students attending West Morris Mendham High School.',
    commute:
      'Trains to New York depart from nearby Morristown, Bernardsville, or Gladstone stations in about 65 to 85 minutes, and service to Newark takes roughly 40 to 55 minutes.'
  },
  {
    slug: 'mine-hill-nj',
    name: 'Mine Hill',
    county: 'morris-county',
    summary: 'Small township with suburban feel and convenient highway access.',
    description:
      'Mine Hill is a small residential township with a friendly suburban feel. Single-family homes span capes, ranches, and colonials along quiet streets. Residents enjoy local parks, playgrounds, and youth sports leagues. Its location near Routes 46, 10, and 80 offers easy shopping and job access. Community activities at Canfield Avenue School help bring neighbors together. Affordable housing and convenient highways make Mine Hill a practical choice for commuters.',
    schools:
      'Mine Hill Township School District educates K–6 at Canfield Avenue School, and older students attend Dover High School.',
    commute:
      'Nearby Dover Station on the Morris & Essex Line reaches Midtown with transfers in about 65 to 80 minutes and Newark in roughly 45 to 60 minutes.'
  },
  {
    slug: 'montville-nj',
    name: 'Montville',
    county: 'morris-county',
    summary: 'Affluent township with strong schools, suburban neighborhoods, and open space.',
    description:
      'Montville is an affluent township known for upscale neighborhoods and preserved open space. Luxury homes and townhome communities line winding, tree-filled roads. Residents hike Pyramid Mountain and explore community parks and trails. The township balances rural charm with easy access to Interstates 80 and 287. Local events and farmer\'s markets cultivate a friendly, family-oriented vibe. High-ranking schools and a strong quality of life keep Montville in high demand.',
    schools:
      'Montville Township Public Schools feature top-ranked Montville High and a district-wide focus on STEM, arts, and AP courses.',
    commute:
      'Towaco Station on the Montclair-Boonton Line offers trains to Hoboken with Midtown transfers in about 65 to 75 minutes and to Newark in 45 to 55 minutes, while Lakeland buses reach Port Authority in roughly 50 to 70 minutes.'
  },
  {
    slug: 'morris-township-nj',
    name: 'Morris Township',
    county: 'morris-county',
    summary: 'Expansive township surrounding Morristown with diverse housing and strong schools.',
    description:
      'Morris Township wraps around Morristown with a mix of suburban and semi-rural neighborhoods. Homes range from historic farmhouses to modern subdivisions and luxury estates. Patriot\'s Path and Fosterfields Living Historical Farm give residents ample outdoor space. The township benefits from Morristown\'s vibrant downtown and cultural attractions. Community programs and civic groups support an active, family-friendly atmosphere. Its size and diversity appeal to both young professionals and long-time residents.',
    schools:
      'The Morris School District serves the township and neighboring Morristown, highlighted by Morristown High School\'s AP, IB, and arts offerings.',
    commute:
      'Residents use Morristown Station on the Midtown Direct line for 55 to 65 minute trips to Penn Station and about 30 to 40 minutes to Newark.'
  },
  {
    slug: 'mount-arlington-nj',
    name: 'Mount Arlington',
    county: 'morris-county',
    summary: 'Lake Hopatcong community with strong recreation and rail access.',
    description:
      'Mount Arlington nestles along the shores of Lake Hopatcong, New Jersey\'s largest lake. The borough features lakefront cottages, condos, and suburban homes. Boating, fishing, and waterfront parks define its recreational lifestyle. Seasonal visitors mix with year-round residents who enjoy the scenic setting. Community events and marinas foster a friendly small-town feel. Direct rail and highway connections keep Mount Arlington convenient for commuters.',
    schools:
      'Mount Arlington School District runs local K–8 schools, and students attend Roxbury High School for grades 9–12.',
    commute:
      'Montclair-Boonton Line trains from Mount Arlington Station reach Hoboken with Midtown transfers in about 75 to 90 minutes and Newark in roughly 55 to 65 minutes.'
  },
  {
    slug: 'mount-olive-nj',
    name: 'Mount Olive',
    county: 'morris-county',
    summary: 'Large township with diverse neighborhoods, shopping, and transit options.',
    description:
      'Mount Olive encompasses the communities of Budd Lake and Flanders in western Morris County. Housing ranges from starter homes and condos to expansive luxury properties. Budd Lake and Turkey Brook Park provide boating, sports fields, and hiking trails. Retail centers along Route 46 offer shopping and dining for residents. The township hosts festivals and recreation programs that unite its large population. Commuters appreciate access to I-80 and NJ Transit service from nearby stations.',
    schools:
      'Mount Olive Township School District boasts a highly rated high school with extensive AP and arts programs and integrated STEM across grades.',
    commute:
      'Netcong and Mount Olive stations on the Montclair-Boonton Line offer trains to Hoboken with Midtown transfers in about 75 to 90 minutes and to Newark in roughly 55 to 70 minutes, while Lakeland buses provide service to Port Authority in about 65 to 85 minutes.'
  },
  {
    slug: 'mountain-lakes-nj',
    name: 'Mountain Lakes',
    county: 'morris-county',
    summary: 'Prestigious lake community with Tudor-style homes and natural beauty.',
    description:
      'Mountain Lakes is a prestigious community noted for its signature Tudor-style architecture. Several spring-fed lakes weave through the borough, creating scenic vistas and recreation. A strong civic association organizes clubs, beach activities, and neighborhood events. The housing stock includes grand early twentieth-century homes and select modern builds. Residents prize the quiet ambiance and proximity to parks and regional highways. Top-rated schools and an engaged community make Mountain Lakes highly desirable.',
    schools:
      'Mountain Lakes School District, including top-ranked Mountain Lakes High School, offers rigorous AP, STEM, and arts opportunities.',
    commute:
      'Montclair-Boonton Line trains from Mountain Lakes Station reach Hoboken with Midtown transfers in about 65 to 80 minutes and Newark in roughly 50 to 65 minutes.'
  },
  {
    slug: 'pequannock-township-nj',
    name: 'Pequannock Township',
    county: 'morris-county',
    summary: 'Family-friendly township with suburban neighborhoods, parks, and strong community.',
    description:
      'Pequannock Township combines the neighborhoods of Pequannock and Pompton Plains. A strong sense of community and active recreation programs define the township. Highways like Route 23 and I-287 keep regional travel convenient. Housing ranges from affordable single-family homes to upscale developments. Pompton Plains serves as the commercial hub with shopping centers, restaurants, and community facilities. Quiet residential streets and parks give Pequannock a relaxed suburban feel.',
    schools:
      'Pequannock Township School District is recognized for solid academic performance and active parental involvement, with AP, honors, and athletics at Pequannock Township High School (GreatSchools).',
    commute:
      'Lakeland commuter buses along Route 23 reach Port Authority in about 50 to 70 minutes and also serve Newark in roughly 35 to 50 minutes.'
  },
  {
    slug: 'randolph-nj',
    name: 'Randolph',
    county: 'morris-county',
    summary: 'Large suburban township with top schools, parks, and family amenities.',
    description:
      'Randolph is a family-oriented township known for its excellent school district and spacious neighborhoods. Freedom Park, Randolph Trails, and numerous athletic complexes provide abundant recreation. Housing ranges from colonials and split-levels to larger estates on wooded lots. Community events and youth programs foster a strong sense of hometown pride. Residents enjoy convenient access to Routes 10, 46, and 80 for commuting. Its combination of amenities and open space keeps Randolph highly desirable.',
    schools:
      'Randolph Township Schools place Randolph High among New Jersey\'s top performers and offer extensive AP courses and extracurriculars (Niche).',
    commute:
      'Nearby Dover and Morris Plains stations on the Morris & Essex Line reach New York in about 65 to 80 minutes, while Lakeland buses make the trip in roughly 60 to 75 minutes and trains reach Newark in about 45 to 60 minutes.'
  },
  {
    slug: 'riverdale-nj',
    name: 'Riverdale',
    county: 'morris-county',
    summary: 'Small suburban borough with easy access to highways and shopping.',
    description:
      'Riverdale sits in northern Morris County with quick access to Route 23, I-287, and I-80. Condos, townhomes, and single-family houses make it popular with first-time buyers. The borough\'s small size fosters a close-knit community atmosphere. Local parks and recreation programs provide outdoor space for residents. Nearby shopping centers in Wayne and Parsippany add convenience. Its location balances suburban calm with commuter access.',
    schools:
      'Riverdale School District serves K–8 locally, and high school students attend Pompton Lakes High School with a small, personalized setting (GreatSchools).',
    commute:
      'Lakeland buses via Route 23 reach Port Authority in about 50 to 65 minutes and provide Newark service in roughly 35 to 50 minutes.'
  },
  {
    slug: 'rockaway-borough-nj',
    name: 'Rockaway Borough',
    county: 'morris-county',
    summary: 'Small historic borough with Main Street charm and suburban living.',
    description:
      'Rockaway Borough blends historic charm with suburban neighborhoods. Its downtown Main Street features local shops and restaurants. Residential areas include older capes, colonials, and newer homes. Adjacent Rockaway Township offers additional shopping and recreation, including Rockaway Townsquare Mall. Community programs and parks support a strong small-town identity. The borough provides a quiet lifestyle with convenient highway access.',
    schools:
      'Rockaway Borough School District educates K–8 at Lincoln and Thomas Jefferson Schools, with high schoolers attending Morris Hills in the regional district (GreatSchools).',
    commute:
      'Dover Station on the Morris & Essex Line offers trains to Midtown and Newark in about 65 to 80 and 45 to 55 minutes respectively, and Lakeland buses reach Port Authority in roughly 60 to 75 minutes.'
  },
  {
    slug: 'rockaway-township-nj',
    name: 'Rockaway Township',
    county: 'morris-county',
    summary: 'Large township with diverse neighborhoods, parks, and shopping centers.',
    description:
      'Rockaway Township is Morris County\'s most populous municipality, offering varied neighborhoods and abundant amenities. The township hosts Rockaway Townsquare Mall, Splitrock Reservoir, and Farny State Park. Housing ranges from condos and townhomes to expansive single-family developments. Recreation spans from hiking and boating to sports leagues and community events. Proximity to major highways keeps commuting manageable. Residents enjoy both suburban convenience and natural escapes.',
    schools:
      'Rockaway Township Public Schools operate multiple K–8 schools, with high school students attending Morris Hills or Morris Knolls in the regional district, emphasizing technology integration (GreatSchools).',
    commute:
      'Denville and Dover stations provide Montclair-Boonton and M&E Line service to New York in about 70 to 85 minutes and to Newark in roughly 50 to 65 minutes, while Lakeland buses along Route 80 run to Port Authority in about 60 to 80 minutes.'
  },
  {
    slug: 'roxbury-nj',
    name: 'Roxbury Township',
    county: 'morris-county',
    summary: 'Township with lake communities, shopping, and strong schools.',
    description:
      'Roxbury Township encompasses the communities of Succasunna, Kenvil, and Landing. Lake Hopatcong and Horseshoe Lake Park offer boating, trails, and sports fields. Housing spans lake cottages, suburban developments, and larger homes. Retail corridors along Routes 10 and 46 provide ample shopping and dining. Active recreation programs and community events draw families together. Its location along major highways maintains commuter convenience.',
    schools:
      'Roxbury Township Public Schools highlight AP and STEM programs at Roxbury High and robust extracurricular and music offerings (GreatSchools).',
    commute:
      'Montclair-Boonton Line trains from nearby Mount Arlington or Netcong reach Hoboken with Midtown transfers in about 75 to 90 minutes and Newark in roughly 55 to 70 minutes, while Lakeland buses via Route 10 take about 65 to 85 minutes to Port Authority.'
  },
  {
    slug: 'victory-gardens-nj',
    name: 'Victory Gardens',
    county: 'morris-county',
    summary: 'Small urban borough with affordable housing and diverse community.',
    description:
      'Victory Gardens is Morris County\'s smallest municipality by area. Built as war-worker housing during World War II, it has evolved into a tight-knit, diverse community. Housing consists of duplexes, small single-family homes, and apartments. Its location next to Dover gives residents access to broader shopping, dining, and transit options. Local parks and community programs support neighborhood engagement. Affordable homes make it an accessible choice within the county.',
    schools:
      'Students attend Dover Public Schools, which offer AP and bilingual programs and emphasize diversity and inclusion (GreatSchools).',
    commute:
      'Dover Station on the M&E Line provides trains to Midtown in about 65 to 80 minutes and to Newark in roughly 45 to 60 minutes.'
  },
  {
    slug: 'washington-township-nj',
    name: 'Washington Township',
    county: 'morris-county',
    summary: 'Expansive rural-suburban township with farms, open space, and top schools.',
    description:
      'Washington Township occupies the county\'s western edge with preserved farmland and scenic roads. The communities of Long Valley and Schooley\'s Mountain offer small-town centers and equestrian estates. Housing ranges from historic farmhouses and colonials to new luxury developments. Outdoor recreation includes hiking at Schooley\'s Mountain Park and fishing in the South Branch of the Raritan River. Community festivals and farmers markets highlight its rural charm. Strong schools and quality of life draw families seeking space.',
    schools:
      'Washington Township School District serves local K–8 students, and high schoolers attend West Morris Central, noted for academic and extracurricular excellence (GreatSchools).',
    commute:
      'Lakeland buses via Routes 46 and 80 reach Port Authority in about 75 to 95 minutes and Newark in roughly 55 to 75 minutes.'
  },
  {
    slug: 'wharton-nj',
    name: 'Wharton',
    county: 'morris-county',
    summary: 'Historic borough with affordable homes, parks, and highway convenience.',
    description:
      'Wharton grew around 19th-century iron mining and retains a small-town feel. The borough offers affordable housing ranging from older homes to modest new builds. Hugh Force Park and other local green spaces provide recreation. Its location near Routes 15, 46, and I-80 keeps regional travel straightforward. Community events and programs maintain local pride. Residents benefit from proximity to Dover and Rockaway for expanded amenities.',
    schools:
      'Wharton Borough School District educates K–8 at Marie V. Duffy and MacKinnon Schools, with high school students attending Morris Hills (GreatSchools).',
    commute:
      'Dover Station on the M&E Line offers trains to New York in about 65 to 80 minutes and to Newark in roughly 45 to 60 minutes, while Lakeland buses via Route 80 reach Port Authority in around 65 to 80 minutes.'
  },
  {
    slug: 'maplewood-nj',
    name: 'Maplewood',
    county: 'essex-county',
    summary: 'Beloved village with Midtown Direct trains and an artsy, inclusive vibe.',
    description:
      'Maplewood pairs tree-lined streets with a lively downtown known as Maplewood Village. Festivals, parades, and community theatre keep the town buzzing year-round. Homes range from classic colonials to Tudor-style houses and newer condos. The South Mountain Reservation provides hiking and expansive views. Residents value the town\'s commitment to diversity and the arts. Easy train access makes it a popular choice for Brooklyn and Manhattan transplants.',
    schools:
      'South Orange–Maplewood School District features magnet-style elementary schools, strong music programs, and a well-regarded high school.',
    commute:
      'Midtown Direct trains from Maplewood Station reach New York Penn Station in about 30 to 40 minutes, and express buses provide alternatives.'
  },
  {
    slug: 'millburn',
    name: 'Millburn',
    county: 'essex-county',
    summary: 'Prestigious commuter town with top-ranked schools, luxury homes, and Midtown Direct trains.',
    description:
      'Millburn is one of New Jersey\'s most sought-after communities, known for its nationally ranked schools, luxury housing, and cultural amenities. Its downtown offers upscale shopping, restaurants, and the Paper Mill Playhouse, a renowned regional theater. Millburn is also home to the Short Hills Mall, a premier luxury shopping destination. Housing includes historic colonials, sprawling estates, and high-end new construction. Parks and green spaces like South Mountain Reservation provide ample outdoor recreation. Direct Midtown trains and proximity to Newark Airport make Millburn highly desirable for NYC professionals.',
    schools:
      'Millburn Township Public Schools consistently rank among New Jersey\'s best, with Millburn High School noted for AP, honors, and STEM excellence (Niche).',
    commute:
      'Morris & Essex Line Midtown Direct trains from Millburn or Short Hills stations reach New York Penn Station in about 35 to 45 minutes, and the M&E Line connects to Newark in roughly 20 to 25 minutes.'
  },
  {
    slug: 'montclair',
    name: 'Montclair',
    county: 'essex-county',
    summary: 'Trendy township with vibrant arts, diverse neighborhoods, and Midtown train service.',
    description:
      'Montclair is one of New Jersey\'s most vibrant and culturally diverse suburbs, famous for its arts scene, historic homes, and bustling downtown districts. Bloomfield Avenue is lined with restaurants, theaters, and shops. The Montclair Art Museum and Wellmont Theater are major cultural anchors. Housing includes Victorian mansions, Tudors, colonials, and modern condos. Residents enjoy outdoor activities in the many parks and the nearby Eagle Rock Reservation. Montclair is especially popular with NYC transplants seeking diversity, walkability, and direct train service.',
    schools:
      'Montclair Public Schools operate a magnet system with specialized programs and Montclair High School offers AP, STEM, and strong performing arts (Niche).',
    commute:
      'Montclair-Boonton Line trains from Bay Street, Walnut Street, and Upper Montclair stations typically reach New York Penn Station in 35 to 45 minutes via Secaucus, and trains to Newark Broad Street take about 15 to 20 minutes.'
  },
  {
    slug: 'north-caldwell',
    name: 'North Caldwell',
    county: 'essex-county',
    summary: 'Upscale borough with luxury homes, top schools, and suburban tranquility.',
    description:
      'North Caldwell is an affluent residential borough in western Essex County. It is primarily suburban, with large luxury homes, manicured lawns, and quiet streets. The borough consistently ranks among the best places to live in New Jersey for safety, schools, and overall quality of life. Recreation centers around small parks, sports fields, and nearby nature reservations. Community events and civic groups help foster strong neighborhood ties. Its small-town atmosphere and proximity to highways like I-280 and Route 46 make it convenient while maintaining exclusivity.',
    schools:
      'The North Caldwell School District serves PreK–6 students locally before they attend West Essex High School, a highly rated regional school.',
    commute:
      'Lakeland commuter buses via Route 46 reach Port Authority in about 40 to 55 minutes, and NJ Transit buses connect to Newark in roughly 20 to 30 minutes for rail transfers to NYC.'
  },
  {
    slug: 'nutley',
    name: 'Nutley',
    county: 'essex-county',
    summary: 'Family-friendly township with strong schools, parks, and proximity to NYC.',
    description:
      'Nutley is a desirable suburban community known for its tree-lined streets, strong schools, and family-oriented atmosphere. It features extensive parkland along the Third River and a lively downtown with shops and eateries. Housing includes colonials, capes, multifamily residences, and newer condos and townhomes. The township hosts seasonal events and community programs that strengthen local ties. Health-care and corporate campuses in neighboring towns provide nearby employment. Its location along Route 3 and near the New Jersey Turnpike provides excellent commuter access to both NYC and Newark.',
    schools:
      'Nutley Public Schools emphasize community engagement and offer AP and extracurricular programs at Nutley High School (GreatSchools).',
    commute:
      'NJ Transit buses along Route 3 reach Port Authority in about 35 to 50 minutes, and quick buses connect to Newark Penn Station in roughly 15 to 25 minutes.'
  },
  {
    slug: 'orange',
    name: 'Orange',
    county: 'essex-county',
    summary: 'Historic urban-suburban city with direct Midtown train service.',
    description:
      'Orange is a diverse city in eastern Essex County with a mix of historic homes, apartment buildings, and new developments. Its neighborhoods vary widely, with some areas undergoing significant revitalization. Orange offers strong public transit links, with NJ Transit stations providing Midtown Direct access. Local arts organizations and cultural festivals reflect the community\'s rich heritage. Residents benefit from easy access to shopping and jobs in nearby Newark and the rest of Essex County. The city\'s cultural diversity and affordability compared to neighboring towns make it attractive for commuters and new residents.',
    schools:
      'Orange Public Schools include Orange High School with AP, STEM, and magnet programs serving a large, diverse student body.',
    commute:
      'Morris & Essex Midtown Direct trains from Orange Station reach New York Penn Station in about 25 to 35 minutes, and the same line connects to Newark Broad Street in roughly 10 to 15 minutes.'
  },
  {
    slug: 'roseland',
    name: 'Roseland',
    county: 'essex-county',
    summary: 'Small upscale borough with suburban tranquility and strong schools.',
    description:
      'Roseland is a quiet, affluent borough in western Essex County. It offers a suburban feel with spacious homes, excellent schools, and easy access to I-280 and Route 46. The borough has seen growth in luxury housing and corporate campuses while retaining a community-focused atmosphere. Parks, recreation programs, and nearby South Mountain Reservation give residents room to unwind. Local clubs and volunteer groups create strong neighborhood connections. Residents enjoy proximity to shopping in Livingston and West Caldwell while keeping a tranquil home setting.',
    schools:
      'Lester C. Noecker School serves K–6 locally before students move to the highly rated West Essex regional middle and high schools.',
    commute:
      'Lakeland and NJ Transit buses provide service to Port Authority in about 40 to 60 minutes, and buses to Newark Penn Station take roughly 20 to 30 minutes.'
  },
  {
    slug: 'south-orange',
    name: 'South Orange',
    county: 'essex-county',
    summary: 'Vibrant and diverse village with a lively downtown, Seton Hall University, and direct Midtown trains.',
    description:
      'South Orange is a culturally rich village known for its diverse community, thriving downtown, and historic housing stock. Tree-lined streets feature Victorians, Tudors, and colonials. Seton Hall University and the South Orange Performing Arts Center anchor its cultural scene. Neighborhood associations and local events contribute to a strong sense of community. Many parks and the South Mountain Reservation offer ample outdoor recreation. South Orange is one of Essex County\'s most popular commuter towns thanks to direct Midtown train service and vibrant lifestyle.',
    schools:
      'South Orange–Maplewood School District serves the village, with Columbia High School offering AP, STEM, and arts programs (Niche).',
    commute:
      'Morris & Essex Line Midtown Direct trains from South Orange Station reach New York Penn Station in about 30 to 40 minutes, and trains to Newark Broad Street take roughly 10 to 15 minutes.'
  },
  {
    slug: 'verona',
    name: 'Verona',
    county: 'essex-county',
    summary: 'Charming township with Verona Park, strong schools, and a family-oriented lifestyle.',
    description:
      'Verona is a suburban community known for Verona Park, one of Essex County\'s most scenic destinations with a lake, walking trails, and a boathouse. Housing includes Tudors, colonials, split-levels, and new construction. Its small-town feel is balanced by proximity to Montclair\'s cultural amenities and regional highways. Local recreation programs and community events keep residents engaged year-round. Businesses along Bloomfield Avenue provide shopping and dining close to home. It has strong schools and an active recreation program, making it popular with families.',
    schools:
      'Verona Public Schools feature well-rated programs and Verona High School offers AP, STEM, and strong music and arts opportunities (GreatSchools).',
    commute:
      'NJ Transit buses along Bloomfield Avenue reach Port Authority in about 40 to 55 minutes, and quick buses connect to Newark in roughly 20 to 30 minutes for rail transfers.'
  },
  {
    slug: 'west-caldwell',
    name: 'West Caldwell',
    county: 'essex-county',
    summary: 'Residential township with strong schools and suburban convenience.',
    description:
      'West Caldwell is a primarily residential township offering suburban living with excellent schools and strong municipal services. Housing includes colonials, ranches, and newer subdivisions. Parks and community facilities support youth sports and seasonal events. Its location near Routes 46 and 80 keeps regional travel convenient. Shopping and dining in nearby Caldwell and North Caldwell add to local amenities. The township\'s quiet neighborhoods make it especially popular with families.',
    schools:
      'Caldwell–West Caldwell School District serves the area, with James Caldwell High School known for solid academics and extracurriculars.',
    commute:
      'NJ Transit buses via Bloomfield Avenue reach Port Authority in about 45 to 60 minutes, and buses to Newark typically take 25 to 35 minutes.'
  },
  {
    slug: 'west-orange',
    name: 'West Orange',
    county: 'essex-county',
    summary: 'Diverse township with historic sites, suburban neighborhoods, and NYC skyline views.',
    description:
      'West Orange is a diverse and expansive township famous as the home of Thomas Edison. It features Turtle Back Zoo, South Mountain Reservation, and Eagle Rock Reservation with sweeping NYC skyline views. Housing is diverse, including apartments, single-family homes, and luxury estates. West Orange also hosts golf courses, country clubs, and a growing dining scene. Community events and local arts initiatives highlight the township\'s cultural mix. Its combination of suburban convenience, amenities, and diversity make it a popular Essex County choice.',
    schools:
      'West Orange Public Schools offer AP and vocational programs at West Orange High School and emphasize inclusivity and student success (GreatSchools).',
    commute:
      'NJ Transit buses via I-280 and Route 10 run frequently to Port Authority in about 40 to 60 minutes, and buses reach Newark Penn Station in roughly 20 to 30 minutes for trains into Manhattan.'
  },
  {
    slug: 'jersey-city',
    name: 'Jersey City',
    county: 'hudson-county',
    summary:
      'NYC-adjacent metropolis with booming neighborhoods, waterfront towers, and PATH/HBLR/ferry access.',
    description:
      'Jersey City blends historic brownstone districts like Paulus Hook, Van Vorst Park, and Hamilton Park with modern high-rises rising in the Waterfront and Journal Square. Grove Street and Newark Avenue form a pedestrian-friendly restaurant and nightlife spine, while the Heights and Bergen-Lafayette add fast-growing residential scenes and parks. Liberty State Park offers sweeping harbor views, trails, and ferries to Ellis Island and the Statue of Liberty. Housing spans prewar walk-ups, renovated townhomes, luxury rentals and condos with amenities, and single-family pockets. The city\'s size supports multiple retail corridors, art galleries, food halls, and year-round community events. Its waterfront skyline rivaling Manhattan reflects the city\'s rapid growth.',
    schools:
      'Jersey City Public Schools feature magnets like McNair Academic with top outcomes, wide AP and honors selections, and a large charter and private network for added choice.',
    commute:
      'PATH trains from Exchange Place, Grove Street, Journal Square, and Newport reach the World Trade Center or 33rd Street in about 5–25 minutes, and NY Waterway ferries offer additional Midtown and Downtown routes.'
  },
  {
    slug: 'weehawken',
    name: 'Weehawken',
    county: 'hudson-county',
    summary:
      'Bluff-top and waterfront living with postcard Manhattan views and premier ferry access.',
    description:
      'Weehawken stretches from the Hudson River waterfront up the Palisades, yielding dramatic skyline vistas. Port Imperial is a modern waterfront district of luxury condos, rentals, a riverfront promenade, and restaurants, while the upland Heights area features single-family homes and classic apartment houses. Parks like Hamilton Park and Weehawken Waterfront Park offer fields, a track, pool, and playgrounds. The township is prized for fast cross-Hudson commutes, modern housing stock on the waterfront, and calmer streets compared to neighboring urban centers. Residents enjoy community events and easy access to nearby Hoboken and Jersey City. The combination of scenic views and transportation options keeps demand strong.',
    schools:
      'Weehawken School District serves K–12 with AP courses and strong arts programs in a small, close-knit environment.',
    commute:
      'NY Waterway ferries from Port Imperial reach Midtown or the World Trade Center in about 8–12 minutes, and NJ Transit buses on Boulevard East arrive at Port Authority in roughly 20–35 minutes.'
  },
  {
    slug: 'west-new-york',
    name: 'West New York',
    county: 'hudson-county',
    summary:
      'Densely populated “Boulevard East” town with big views and quick bus/ferry access.',
    description:
      'West New York packs a lively, walkable urban grid atop the Palisades and along the Hudson waterfront. Boulevard East provides sweeping skyline views and a green promenade, while Bergenline Avenue is a retail and dining corridor with strong Latin American influences. Housing includes mid-rise co-ops and condos, prewar walk-ups, and newer waterfront towers. Residents value the convenience, cultural vibrancy, and abundant transit to Manhattan and Jersey City. Local parks, community events, and waterfront paths provide outdoor space in the dense environment. The town\'s mix of affordability and accessibility keeps it a popular Hudson County choice.',
    schools:
      'The West New York School District operates neighborhood PreK–8 schools and Memorial High School, offering AP/honors courses and extracurriculars.',
    commute:
      'NJ Transit buses and jitneys along Boulevard East and Bergenline Avenue reach Port Authority in about 20–35 minutes, and nearby Port Imperial ferries cross to Midtown or Downtown in roughly 12–18 minutes.'
  },
  {
    slug: 'union-city',
    name: 'Union City',
    county: 'hudson-county',
    summary:
      'Ultra-dense, transit-rich city on the Palisades with fast bus runs to Midtown.',
    description:
      'Union City sits west of Hoboken atop the Palisades, featuring an energetic streetscape along Bergenline Avenue and a deep arts and culinary culture. Housing is primarily multifamily—prewar brick buildings, newer condos, and small single-family pockets—keeping entry costs lower than waterfront towns. Washington Park and Firefighters Memorial Park add recreation, sports fields, and public pools. The city\'s strong Latino heritage drives festivals, restaurants, and community organizations. Frequent bus service and proximity to Hoboken and Journal Square make car-free commuting easy. Union City\'s density and cultural vibrancy create a lively urban atmosphere.',
    schools:
      'Union City School District runs themed academies and Union City High School with AP, CTE, and performing arts options, plus robust ESL and bilingual programs.',
    commute:
      'NJ Transit buses and jitneys via Bergenline and Kennedy Boulevard reach Port Authority in about 15–30 minutes, and nearby PATH stations in Hoboken or Journal Square provide rapid service to Manhattan and Newark.'
  },
  {
    slug: 'bayonne',
    name: 'Bayonne',
    county: 'hudson-county',
    summary:
      'Peninsula city with neighborhood feel, parks, and HBLR to Jersey City and Hoboken.',
    description:
      'Bayonne offers a more suburban, neighborhood vibe within Hudson County, with tree-lined blocks and classic one- and two-family homes. The Peninsula at Bayonne Harbor has sparked waterfront redevelopment with new mid-rises, markets, and promenades. Broadway serves as the main shopping and dining corridor, reflecting the city\'s diverse community. Veterans Stadium, 16th Street Park, and Stephen R. Gregg Park provide ample green and waterfront space. Residents appreciate local events and the tear-drop memorial honoring 9/11 victims. Its balance of affordability and transit access draws commuters seeking space near the city.',
    schools:
      'The Bayonne Board of Education operates neighborhood K–8 schools and Bayonne High School, which features AP, CTE, and arts programs.',
    commute:
      'Hudson-Bergen Light Rail from 8th, 22nd, and 34th Street stations connects to PATH trains for Manhattan in about 45–60 minutes, and NJ Transit buses reach Journal Square or Port Authority in roughly 45–65 minutes.'
  },
  {
    slug: 'north-bergen',
    name: 'North Bergen',
    county: 'hudson-county',
    summary:
      'Diverse township with Palisades views, parks, and strong bus access to NYC.',
    description:
      'North Bergen stretches from the Palisades cliffs to the Meadowlands with residential blocks, commercial corridors, and industry. Boulevard East offers sweeping Manhattan views and James J. Braddock Park brings 167 acres of lakes and trails. Housing ranges from mid-rise co-ops and garden apartments to newer riverfront developments. The township is one of Hudson County\'s most diverse, with vibrant Latin American culture and active small businesses. Its hillside location yields dramatic skyline vistas and local eateries reflect a mix of flavors. Residents enjoy quick trips to nearby Jersey City and Manhattan.',
    schools:
      'North Bergen School District runs neighborhood K–8 schools and North Bergen High with AP and CTE programs plus active sports and clubs.',
    commute:
      'NJ Transit buses and jitneys along Boulevard East and Bergenline Avenue reach Port Authority in roughly 20–40 minutes, and buses to Journal Square connect to PATH for Newark in about 35–55 minutes.'
  },
  {
    slug: 'guttenberg',
    name: 'Guttenberg',
    county: 'hudson-county',
    summary:
      'Tiny Hudson town atop the Palisades with dense housing and quick NYC buses.',
    description:
      'Guttenberg spans just four blocks yet packs mid-rises, multifamily houses, and the landmark Galaxy Towers overlooking Manhattan. Boulevard East provides parks, walking paths, and postcard skyline views. The township maintains its own services despite its size, fostering close community ties. Housing remains relatively affordable compared to neighboring Weehawken and West New York. Residents can easily reach nearby shopping and dining corridors. Its compact footprint makes daily errands and commuting simple.',
    schools:
      'Anna L. Klein School serves PreK–8, and high schoolers attend North Bergen High, giving the district an intimate, community feel.',
    commute:
      'NJ Transit buses and private jitneys via Boulevard East reach Port Authority in about 20–35 minutes, and buses to Journal Square link with PATH trains to Newark.'
  },
  {
    slug: 'secaucus',
    name: 'Secaucus',
    county: 'hudson-county',
    summary:
      'Meadowlands suburb with NJ Transit hub, outlet shopping, and riverfront housing.',
    description:
      'Secaucus mixes suburban neighborhoods with one of NJ Transit\'s busiest rail hubs at Secaucus Junction. Office parks and the Secaucus Outlets draw shoppers and commuters from across the region. Residential areas include single-family homes, townhouses, and new condos along the Hackensack River. Recreation centers, parks, and Meadowlands trails add outdoor options. Major highways like the Turnpike and Route 3 keep travel convenient. Entertainment venues tied to the Meadowlands sports complex sit minutes away.',
    schools:
      'Secaucus Public Schools offer technology integration, AP courses, and growing enrollment at community-based campuses.',
    commute:
      'Multiple NJ Transit lines from Secaucus Junction reach New York Penn Station in about 10–15 minutes, and buses via Route 3/495 arrive at Port Authority in roughly 25–40 minutes.'
  },
  {
    slug: 'kearny',
    name: 'Kearny',
    county: 'hudson-county',
    summary:
      'Working-class town with Scottish roots, riverfront parks, and NJ Transit service.',
    description:
      'Kearny retains a strong community identity rooted in its Scottish heritage. Neighborhoods offer two- and three-family homes, apartments, and newer single-family builds. Riverfront parks and retail along Kearny Avenue provide local amenities. Housing is generally more affordable than in waterfront Hudson towns. Its location between Newark and Jersey City makes commuting convenient while preserving a small-city feel. Sports fields and local festivals reinforce civic pride.',
    schools:
      'Kearny School District features multiple neighborhood elementary schools and Kearny High with AP, honors, and performing arts programs.',
    commute:
      'NJ Transit buses run directly to Port Authority in about 30–45 minutes, and nearby Secaucus Junction offers rail to New York Penn Station in roughly 25–35 minutes.'
  },
  {
    slug: 'harrison',
    name: 'Harrison',
    county: 'hudson-county',
    summary:
      'Redeveloped riverfront city with PATH service, Red Bull Arena, and new high-rises.',
    description:
      'Harrison has transformed its industrial waterfront into luxury apartments, retail, and entertainment anchored by Red Bull Arena. Its compact size keeps the city walkable with new restaurants and shops catering to young professionals. Housing options include high-rise rentals, townhomes, and older multifamily houses. Community events and waterfront promenades add vibrancy. Proximity to Newark and Jersey City broadens employment choices. The town\'s growth continues with ongoing transit-oriented development.',
    schools:
      'Harrison Public Schools operate a small district where Harrison High offers AP, CTE, and bilingual programs supported by strong community involvement.',
    commute:
      'PATH trains from Harrison Station reach the World Trade Center in about 18–22 minutes and Newark Penn Station in 5–7 minutes.'
  },
  {
    slug: 'east-newark',
    name: 'East Newark',
    county: 'hudson-county',
    summary:
      'Tiny borough with affordable housing and easy walk to Harrison PATH.',
    description:
      'East Newark borders Harrison and Newark\'s Ironbound, consisting mainly of two- and three-family homes. Its small grid is highly walkable with neighborhood shops close at hand. Housing costs rank among the most affordable in Hudson County. Residents rely on nearby Harrison for larger retail, dining, and entertainment. Community events and local parks support a tight-knit atmosphere. Its location offers quick access to regional transit and highways.',
    schools:
      'East Newark School District runs a single K–8 school, and students attend Harrison High School for grades 9–12.',
    commute:
      'A short walk to Harrison Station gives residents PATH service to the World Trade Center in roughly 20–25 minutes and to Newark Penn Station in about 5–7 minutes.'
  },
  {
    slug: 'edison-nj',
    name: 'Edison',
    county: 'middlesex-county',
    summary: 'Sprawling suburb with major transit hubs, shopping, and diverse housing.',
    description:
      'Edison sits at the crossroads of central New Jersey with sprawling neighborhoods and retail corridors. The township hosts corporate offices alongside quiet residential areas. Roosevelt Park and the nearby Raritan River give residents outdoor escapes. Ethnic restaurants and cultural centers reflect a vibrant community. New developments and established subdivisions provide a mix of housing options. Rutgers University and major employers sit just minutes away.',
    schools:
      'Edison Township Public Schools earn praise for STEM initiatives, Advanced Placement offerings, and competitive clubs.',
    commute:
      'Northeast Corridor trains from Edison Station reach New York Penn Station in about 45 to 60 minutes, and commuters can also use park-and-ride buses or the New Jersey Turnpike.'
  },
  {
    slug: 'carteret',
    name: 'Carteret',
    county: 'middlesex-county',
    summary:
      'Industrial-riverfront borough with new waterfront redevelopment and strong highway access.',
    description:
      'Carteret is a borough on the Arthur Kill waterfront, historically industrial but now seeing new residential and cultural redevelopment. Its location near the New Jersey Turnpike, Routes 1&9, and the Goethals Bridge makes it highly accessible. Housing ranges from older single-family homes and duplexes to newer townhomes and apartments. Carteret Park and a growing waterfront walkway provide green space and views. A performing arts center and community events highlight the town\'s civic pride. Redevelopment aims to balance industry with improved quality of life.',
    schools:
      'Carteret Public Schools offer AP, CTE, and STEM programs across multiple elementary and middle schools.',
    commute:
      'NJ Transit buses reach Port Authority in about 40 to 60 minutes, and nearby Rahway or Woodbridge stations provide trains to New York in roughly 45 to 65 minutes.'
  },
  {
    slug: 'cranbury',
    name: 'Cranbury',
    county: 'middlesex-county',
    summary:
      'Historic rural-suburban township with colonial charm and preserved farmland.',
    description:
      'Cranbury maintains a historic small-town core lined with 18th- and 19th-century buildings. Large swaths of preserved farmland keep its rural character despite proximity to Route 130 and the Turnpike. Housing ranges from historic homes to newer subdivisions and large estates. Community events and open space give the township a close-knit feel. Residents appreciate the quiet streets and access to nearby corporate campuses. Its regional school arrangement with Princeton adds to its appeal.',
    schools:
      'Cranbury School serves K–8 locally, and high school students attend top-ranked Princeton High School.',
    commute:
      'Residents drive to Princeton Junction for Northeast Corridor trains reaching New York in about 65 to 80 minutes and Newark in roughly 45 to 60 minutes.'
  },
  {
    slug: 'east-brunswick',
    name: 'East Brunswick',
    county: 'middlesex-county',
    summary:
      'Large suburban township with top-rated schools, diverse housing, and major highways.',
    description:
      'East Brunswick is a major Middlesex suburb with extensive shopping along Route 18 and strong highway access. The township offers housing from affordable condos to large colonials and custom homes. Recreation includes the Brunswick Square Mall and Crystal Springs Family Waterpark. Township programs and cultural events foster a strong community identity. Parks and open space balance the busy commercial corridors. Its schools and municipal services are highly regarded.',
    schools:
      'East Brunswick Public Schools consistently rank among New Jersey\'s best, with East Brunswick High School noted for STEM, arts, and AP programs.',
    commute:
      'Suburban Transit and Coach USA buses from Route 18 park-and-rides reach Manhattan in about 40 to 55 minutes, while nearby NEC stations offer rail service in roughly an hour.'
  },
  {
    slug: 'helmetta',
    name: 'Helmetta',
    county: 'middlesex-county',
    summary:
      'Tiny borough with small-town feel and historic snuff mill heritage.',
    description:
      'Helmetta is a tiny borough known for the historic General Cigar Company snuff mill. Compact neighborhoods feature small single-family homes, townhomes, and newer condos. Residents enjoy a quiet lifestyle with easy access to East Brunswick and Monroe for shopping and services. Local parks and community events reinforce the borough\'s close-knit atmosphere. Light traffic and walkable streets keep daily life simple. Affordability attracts first-time buyers seeking a small-town feel.',
    schools:
      'Helmetta students attend Spotswood schools, including Spotswood High School, in a small district setting.',
    commute:
      'Commuters typically use Coach USA buses from East Brunswick park-and-rides, reaching Manhattan in about 55 to 75 minutes and Newark in roughly 40 to 60 minutes.'
  },
  {
    slug: 'highland-park',
    name: 'Highland Park',
    county: 'middlesex-county',
    summary:
      'Walkable borough across from New Brunswick, with strong community and schools.',
    description:
      'Highland Park sits across the Raritan River from New Brunswick with a walkable downtown and diverse population. Raritan Avenue hosts cafés, shops, and restaurants that give the borough a lively main street. Housing ranges from classic colonials and capes to multifamily buildings. Residents benefit from proximity to Rutgers University and Johnson Park. Community groups and civic events reinforce a strong local identity. Its location offers easy access to regional highways and transit.',
    schools:
      'Highland Park Public Schools provide AP and arts programs in a small, inclusive district.',
    commute:
      'Residents use nearby New Brunswick Station for direct trains to New York in about 50 to 65 minutes and to Newark in approximately 25 to 35 minutes; express buses via East Brunswick provide another option.'
  },
  {
    slug: 'jamesburg',
    name: 'Jamesburg',
    county: 'middlesex-county',
    summary:
      'Compact borough with suburban lifestyle and Monroe Township amenities nearby.',
    description:
      'Jamesburg is a small borough surrounded by Monroe Township with a walkable downtown. Local shops and restaurants line the main streets, and nearby Thompson Park offers ample recreation. Housing remains relatively affordable, including capes, colonials, and multifamily dwellings. Community events and a small-town atmosphere appeal to residents. Access to the New Jersey Turnpike keeps regional travel convenient. The borough provides a quiet alternative to larger suburbs.',
    schools:
      'Jamesburg Public Schools serve K–8 locally, and high school students attend Monroe Township High School.',
    commute:
      'Suburban Transit buses from nearby park-and-ride lots reach New York in about 60 to 80 minutes, with connections through East Brunswick or New Brunswick getting to Newark in roughly 45 to 65 minutes.'
  },
  {
    slug: 'metuchen',
    name: 'Metuchen',
    county: 'middlesex-county',
    summary:
      'Charming walkable borough with direct NEC trains and vibrant downtown.',
    description:
      'Metuchen is a popular commuter town known for its historic downtown and tree-lined neighborhoods. Main Street features cafés, restaurants, and shops that draw visitors from around the region. Housing includes colonials, Tudors, and new construction on quiet suburban blocks. Community events and local arts groups foster civic pride. Residents appreciate access to major highways and nearby shopping centers. Direct rail service makes commuting straightforward.',
    schools:
      'Metuchen School District is well regarded, with Metuchen High School offering AP, arts, and STEM programs.',
    commute:
      'Northeast Corridor trains from Metuchen Station run directly to New York Penn in about 40 to 50 minutes and to Newark Penn in roughly 20 to 25 minutes.'
  },
  {
    slug: 'middlesex',
    name: 'Middlesex',
    county: 'middlesex-county',
    summary:
      'Borough on the Raritan Valley Line with suburban neighborhoods and local parks.',
    description:
      'Middlesex Borough sits along the Raritan River with suburban neighborhoods and local parks. The community offers modest capes, split-levels, and ranches with easy access to retail corridors. Mountainview Park and Victor Crowell Park support an active recreation scene. Community events and youth sports contribute to its small-town vibe. Major highways nearby enhance commuting flexibility. The borough provides a quiet base close to regional employment centers.',
    schools:
      'Middlesex Borough Public Schools offer AP courses and extracurricular programs at Middlesex High School.',
    commute:
      'Raritan Valley Line trains from Middlesex Station reach New York Penn with a Newark transfer in about 70 to 85 minutes, and Newark Penn in roughly 40 to 55 minutes.'
  },
  {
    slug: 'milltown',
    name: 'Milltown',
    county: 'middlesex-county',
    summary:
      'Small borough with historic charm, Mill Pond, and suburban neighborhoods.',
    description:
      'Milltown centers around its historic Main Street and scenic Mill Pond. The borough offers a suburban lifestyle with parks, neighborhood schools, and a mix of housing styles. Seasonal festivals and a close-knit community highlight local pride. Housing includes older colonials, ranches, and newer construction. Its proximity to Route 1 and Route 18 provides quick access to shopping and employment centers. Nearby New Brunswick and East Brunswick expand recreational options.',
    schools:
      'Milltown Public Schools serve K–8 locally, while high schoolers attend Spotswood High School.',
    commute:
      'Suburban Transit buses from the Route 18 park-and-ride reach Manhattan in about 55 to 75 minutes, and trains from nearby New Brunswick Station reach New York in about 60 to 80 minutes and Newark in 30 to 40 minutes.'
  },
  {
    slug: 'monroe-township',
    name: 'Monroe Township',
    county: 'middlesex-county',
    summary:
      'Large suburban-rural township with retirement communities, open space, and golf courses.',
    description:
      "Monroe Township spans southern Middlesex County with a blend of suburban subdivisions and preserved farmland. The township hosts one of New Jersey's largest concentrations of adult retirement communities. Golf courses, parks, and Forsgate Country Club offer recreation for residents of all ages. New single-family neighborhoods and townhome developments continue to attract families. Despite growth, Monroe retains pockets of semi-rural character and open space. Its location near the New Jersey Turnpike (Exit 8A) provides convenient highway access.",
    schools:
      'Monroe Township School District serves a growing population with AP, STEM, and performing arts programs (GreatSchools).',
    commute:
      'Coach USA/Suburban Transit express buses from Applegarth Road and Turnpike park-and-rides reach Port Authority in about 60 to 80 minutes, and express buses to Newark Penn take roughly 40 to 55 minutes.'
  },
  {
    slug: 'north-brunswick',
    name: 'North Brunswick',
    county: 'middlesex-county',
    summary:
      'Large suburban township with diverse housing, major retail, and growing development.',
    description:
      'North Brunswick features a mix of residential neighborhoods and Route 1 commercial corridors. MainStreetNB is bringing new transit-oriented development near a planned rail station. Housing choices range from condos and townhomes to established single-family sections. Large retail centers and local parks provide everyday convenience. The community is notably diverse and continues to attract new residents. Its location between Princeton and New Brunswick keeps commuting options flexible.',
    schools:
      'North Brunswick Township Schools emphasize inclusivity, AP and STEM programs, and strong extracurricular participation (GreatSchools).',
    commute:
      'Suburban Transit express buses along Routes 130 and 1 reach Manhattan in about 55 to 70 minutes, while trains via New Brunswick or Jersey Avenue stations reach Newark in roughly 25 to 40 minutes and New York in about 60 to 80 minutes.'
  },
  {
    slug: 'old-bridge',
    name: 'Old Bridge',
    county: 'middlesex-county',
    summary:
      'Expansive township with suburban neighborhoods, waterfront parks, and Route 9 retail.',
    description:
      'Old Bridge spans from the Raritan Bay waterfront inland to suburban neighborhoods. Route 9 acts as the township\'s shopping and commuting spine. Housing ranges from traditional subdivisions and condos to adult communities near the shore. Residents enjoy recreation at Cheesequake State Park and Laurence Harbor. The community mixes longtime residents with newcomers seeking space and affordability. Its large size and diverse amenities support a wide demographic.',
    schools:
      'Old Bridge Township Public Schools serve a large, diverse population, with Old Bridge High School offering AP, STEM, and career programs (GreatSchools).',
    commute:
      'NJ Transit and Academy express buses along Route 9 reach Port Authority in about 55 to 75 minutes, and buses to Newark Penn typically take 40 to 60 minutes.'
  },
  {
    slug: 'perth-amboy',
    name: 'Perth Amboy',
    county: 'middlesex-county',
    summary:
      'Historic waterfront city with diverse housing, cultural amenities, and NJCL rail.',
    description:
      'Perth Amboy is a historic port city along the Raritan Bay. A revitalized waterfront and marinas highlight its maritime heritage. Smith Street\'s shops and restaurants reflect the city\'s cultural diversity. Housing includes multifamily homes, historic colonials, and new condos. Civic pride shines through festivals and community events. Affordability and transit access draw both longtime families and new residents.',
    schools:
      'Perth Amboy Public Schools support a large multilingual population and offer AP, bilingual, and CTE programs (GreatSchools).',
    commute:
      'North Jersey Coast Line trains from Perth Amboy Station reach New York Penn in about 55 to 70 minutes and Newark Penn in roughly 35 to 45 minutes.'
  },
  {
    slug: 'piscataway',
    name: 'Piscataway',
    county: 'middlesex-county',
    summary:
      'Large township with Rutgers campus, suburban neighborhoods, and Raritan River parks.',
    description:
      "Piscataway hosts residential neighborhoods alongside Rutgers University's Busch and Livingston campuses. Corporate parks and research facilities line its highway corridors. Johnson Park along the Raritan River offers trails, a zoo, and sports fields. Housing ranges from split-levels and ranches to new townhome developments. The township's diversity and community programs keep civic life active. University ties bring cultural events and innovation.",
    schools:
      'Piscataway Township Schools provide AP, STEM, and magnet programs with strong athletics and arts (GreatSchools).',
    commute:
      'Residents use nearby Edison or New Brunswick stations for trains to New York in about 50 to 65 minutes and to Newark in roughly 25 to 35 minutes; Coach USA buses along Route 18 offer another option.'
  },
  {
    slug: 'sayreville',
    name: 'Sayreville',
    county: 'middlesex-county',
    summary:
      'Suburban-riverfront township with Raritan Bay access, Route 9 shopping, and cultural diversity.',
    description:
      'Sayreville stretches from the Raritan River to Route 9 retail corridors. Waterfront parks and marinas showcase its riverfront setting. Suburban neighborhoods feature ranches, capes, and new subdivisions. The Starland Ballroom anchors a regional concert scene. Community festivals celebrate the township\'s cultural diversity. Easy access to the Garden State Parkway and Route 9 supports commuting.',
    schools:
      'Sayreville Public Schools serve a diverse student body, and Sayreville War Memorial High School offers AP, STEM, and athletics (GreatSchools).',
    commute:
      'Academy and NJ Transit buses via Route 9 reach Port Authority in about 55 to 75 minutes, and express buses to Newark typically take 40 to 55 minutes.'
  },
  {
    slug: 'south-amboy',
    name: 'South Amboy',
    county: 'middlesex-county',
    summary:
      'Bayfront city with NJCL rail service, ferry access, and waterfront redevelopment.',
    description:
      'South Amboy sits on Raritan Bay with a rich maritime history. The city is redeveloping its waterfront with new housing and a planned ferry terminal. Traditional multi-family homes line its grid of walkable streets. Small shops and eateries cluster near the station. Residents enjoy affordability paired with strong transit options. Its bayfront location provides scenic views and recreation.',
    schools:
      'South Amboy Public Schools offer AP and career programs in a small, community-oriented district (GreatSchools).',
    commute:
      'North Jersey Coast Line trains from South Amboy Station reach New York Penn in about 50 to 65 minutes and Newark Penn in roughly 30 to 40 minutes, and a developing ferry service promises 35 to 50 minute rides to Manhattan.'
  },
  {
    slug: 'south-plainfield',
    name: 'South Plainfield',
    county: 'middlesex-county',
    summary:
      'Suburban township with strong schools, shopping centers, and community parks.',
    description:
      'South Plainfield offers middle-class neighborhoods and excellent municipal services. Hadley Road and Park Avenue host numerous shopping centers. Spring Lake Park and community fields support active recreation. Housing styles include ranches, split-levels, and newer colonials. Civic groups and youth programs foster community pride. Its central location provides easy access to major highways and employment hubs.',
    schools:
      'South Plainfield Public Schools offer AP, CTE, and extracurricular programs in a community-focused environment (GreatSchools).',
    commute:
      'Commuters use nearby Edison or Metuchen stations for trains to New York in about 55 to 70 minutes and to Newark in roughly 25 to 35 minutes; Coach USA buses from the Route 22 corridor provide alternatives.'
  },
  {
    slug: 'south-river',
    name: 'South River',
    county: 'middlesex-county',
    summary:
      'Diverse small borough with strong cultural heritage and affordable housing.',
    description:
      'South River is a compact borough with a rich Portuguese and Eastern European heritage. The downtown features local shops, churches, and restaurants reflecting its diversity. Housing ranges from capes and colonials to multifamily dwellings. Annual festivals and parades reinforce community spirit. Residents value the borough\'s affordability and small-town scale. Proximity to East Brunswick provides additional shopping and services.',
    schools:
      'South River Public Schools offer AP courses, strong athletics, and a supportive community environment (GreatSchools).',
    commute:
      'Suburban Transit and Academy buses along Routes 18 and 9 reach Port Authority in about 55 to 75 minutes, while express buses to Newark take roughly 40 to 55 minutes.'
  },
  {
    slug: 'spotswood',
    name: 'Spotswood',
    county: 'middlesex-county',
    summary:
      'Small suburban borough with strong schools and community feel.',
    description:
      'Spotswood delivers a family-oriented lifestyle with quiet neighborhoods and local parks. The borough\'s small downtown offers everyday conveniences and dining. Housing includes ranches, split-levels, and newer colonials on tree-lined streets. Recreation programs and community events keep residents connected. Its location along Route 18 places regional shopping minutes away. Strong schools and civic pride define the community.',
    schools:
      'Spotswood Public Schools serve students from Spotswood, Helmetta, and Milltown with AP, athletics, and extracurriculars (GreatSchools).',
    commute:
      'Suburban Transit buses from the Route 18 park-and-ride reach Manhattan in about 55 to 75 minutes, and buses via East Brunswick connect to Newark Penn in roughly 40 to 55 minutes.'
  },
  {
    slug: 'woodbridge',
    name: 'Woodbridge',
    county: 'middlesex-county',
    summary:
      'Large, diverse township with multiple neighborhoods, shopping, and direct NEC/NJCL trains.',
    description:
      'Woodbridge Township encompasses multiple distinct sections from Iselin to Colonia. Major shopping centers like Woodbridge Center Mall anchor its retail scene. Neighborhoods range from postwar capes to modern townhomes and luxury apartments. Recreational facilities and cultural events draw from a diverse population. Strategic positioning near the Turnpike and Parkway makes it a commuter powerhouse. Multiple rail stations offer direct service to both New York and Newark.',
    schools:
      'Woodbridge Township School District operates 25 schools with AP, STEM, and career programs at its three high schools (Niche).',
    commute:
      'Northeast Corridor and North Jersey Coast Line trains from Metropark, Avenel, and Woodbridge stations reach New York Penn in about 35 to 50 minutes and Newark Penn in roughly 20 to 30 minutes; Suburban Transit and NJ Transit buses provide additional options.'
  }
];
