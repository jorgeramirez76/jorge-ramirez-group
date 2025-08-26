export interface TrainLine {
  id: string;
  name: string;
  color: string;
  towns: string[];
}

export const trainLines: TrainLine[] = [
  {
    id: 'nec',
    name: 'Northeast Corridor Line',
    color: '#E31937',
    towns: ['Trenton', 'Princeton Junction', 'New Brunswick', 'Metuchen', 'Rahway', 'Elizabeth', 'Newark']
  },
  {
    id: 'raritan',
    name: 'Raritan Valley Line',
    color: '#A05E2D',
    towns: ['High Bridge', 'Raritan', 'Somerville', 'Bound Brook', 'Dunellen', 'Plainfield', 'Westfield', 'Cranford', 'Union', 'Newark']
  },
  {
    id: 'morris',
    name: 'Morris & Essex Lines',
    color: '#006848',
    towns: ['Newark', 'East Orange', 'South Orange', 'Maplewood', 'Millburn', 'Summit', 'Chatham', 'Madison', 'Morristown', 'Denville']
  },
  {
    id: 'gladstone',
    name: 'Gladstone Branch',
    color: '#00A76C',
    towns: ['Summit', 'New Providence', 'Berkeley Heights', 'Basking Ridge', 'Bernardsville', 'Far Hills', 'Gladstone']
  },
  {
    id: 'montclair',
    name: 'Montclair-Boonton Line',
    color: '#F58220',
    towns: ['Montclair', 'Glen Ridge', 'Bloomfield', 'Clifton', 'Little Falls', 'Wayne', 'Lincoln Park', 'Towaco', 'Boonton', 'Denville']
  },
  {
    id: 'coast',
    name: 'North Jersey Coast Line',
    color: '#0072CE',
    towns: ['Bay Head', 'Point Pleasant Beach', 'Belmar', 'Long Branch', 'Red Bank', 'Middletown', 'Hazlet', 'Woodbridge', 'Rahway', 'Newark']
  },
  {
    id: 'main',
    name: 'Main/Bergen County Line',
    color: '#00806A',
    towns: ['Suffern', 'Mahwah', 'Ramsey', 'Allendale', 'Ho-Ho-Kus', 'Ridgewood', 'Glen Rock', 'Fair Lawn', 'Paterson', 'Secaucus']
  },
  {
    id: 'pascack',
    name: 'Pascack Valley Line',
    color: '#822980',
    towns: ['Spring Valley', 'Montvale', 'Park Ridge', 'Woodcliff Lake', 'Hillsdale', 'Westwood', 'Emerson', 'Oradell', 'River Edge', 'Secaucus']
  }
];
