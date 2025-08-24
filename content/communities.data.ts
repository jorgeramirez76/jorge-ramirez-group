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
    slug: 'jersey-city-nj',
    name: 'Jersey City',
    county: 'hudson-county',
    summary: 'Vibrant waterfront city with PATH trains, ferries, and diverse neighborhoods.',
    description:
      'Jersey City stretches along the Hudson with a skyline rivaling Manhattan. Downtown and Journal Square have seen rapid redevelopment and an influx of restaurants and art spaces. Historic brownstones line neighborhoods like Hamilton Park while high-rises tower near the waterfront. Liberty State Park and numerous smaller parks offer green relief. The city\'s diversity fuels a broad food scene and community festivals. Residents enjoy proximity to New York without losing local flavor.',
    schools:
      'Jersey City Public Schools and an array of charter schools provide bilingual, STEM, and arts-focused options.',
    commute:
      'PATH trains from multiple stations reach the World Trade Center in about 10 minutes and Midtown in roughly 20; ferries and buses add more NYC connections.'
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
  }
];
