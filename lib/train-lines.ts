export interface TrainLine {
  id: string;
  name: string;
  color: string;
  path: string;
  towns: string[];
}

export const trainLines: TrainLine[] = [
  {
    id: 'raritan',
    name: 'Raritan Valley Line',
    color: '#E3252C',
    path: 'M150 800 C 400 600, 800 600, 1200 400',
    towns: ['Newark', 'Union', 'Roselle Park', 'Cranford', 'Garwood', 'Westfield', 'Fanwood', 'Plainfield']
  },
  {
    id: 'morris',
    name: 'Morris & Essex Line',
    color: '#006848',
    path: 'M150 700 C 450 500, 900 500, 1350 350',
    towns: ['Newark', 'East Orange', 'South Orange', 'Maplewood', 'Millburn', 'Summit', 'New Providence', 'Berkeley Heights']
  },
  {
    id: 'gladstone',
    name: 'Gladstone Branch',
    color: '#0057B8',
    path: 'M150 600 C 500 450, 950 450, 1450 300',
    towns: ['Summit', 'Chatham', 'Madison', 'Morristown', 'Morris Plains', 'Denville', 'Dover']
  }
];
