// All homepage copy lives here so it can be edited without touching layout code.

export type TrackId = 'guitar' | 'vocals';

export interface Course {
  id: TrackId;
  title: string;
  kicker: string;
  summary: string;
  styles: string[];
  outcomes: string[];
}

export const COURSES: Course[] = [
  {
    id: 'guitar',
    title: 'Guitar',
    kicker: 'Acoustic & electric',
    summary:
      'From your first clean chord to confident solos. Build technique, rhythm and fretboard knowledge with songs you actually want to play.',
    styles: ['Acoustic', 'Electric', 'Fingerstyle', 'Rock & Pop', 'Blues'],
    outcomes: [
      'Chords, strumming patterns and smooth changes',
      'Reading tabs, chord charts and basic notation',
      'Scales, riffs and lead playing',
      'Playing full songs with a backing track',
    ],
  },
  {
    id: 'vocals',
    title: 'Western Vocals',
    kicker: 'Pop, rock, jazz & musical theatre',
    summary:
      'Find your voice and learn to use it well. Breath control, pitch, range and style, coached live so you hear the difference every week.',
    styles: ['Pop', 'Rock', 'Jazz', 'Musical Theatre', 'Acoustic'],
    outcomes: [
      'Breathing, posture and healthy vocal technique',
      'Pitch accuracy, ear training and harmony',
      'Extending range and building tone',
      'Performing songs with expression and confidence',
    ],
  },
];

export interface Level {
  name: string;
  duration: string;
  focus: string[];
}

export const LEARNING_PATH: Record<TrackId, Level[]> = {
  guitar: [
    {
      name: 'Beginner',
      duration: 'Foundations',
      focus: ['Holding the guitar & tuning', 'Open chords and first strumming patterns', 'Your first three full songs'],
    },
    {
      name: 'Intermediate',
      duration: 'Building fluency',
      focus: ['Barre chords and power chords', 'Pentatonic and major scales', 'Fingerpicking and riffs'],
    },
    {
      name: 'Advanced',
      duration: 'Finding your sound',
      focus: ['Lead techniques: bends, slides, vibrato', 'Improvising over progressions', 'Arranging and performing songs'],
    },
  ],
  vocals: [
    {
      name: 'Beginner',
      duration: 'Foundations',
      focus: ['Breathing and posture', 'Warm-ups and pitch matching', 'Singing simple songs in tune'],
    },
    {
      name: 'Intermediate',
      duration: 'Building control',
      focus: ['Head voice, chest voice and blending', 'Ear training and harmonies', 'Dynamics and phrasing'],
    },
    {
      name: 'Advanced',
      duration: 'Finding your style',
      focus: ['Extending range safely', 'Stylistic techniques for your genre', 'Stage presence and recording'],
    },
  ],
};

export const STEPS = [
  { title: 'Book a free trial', text: 'Tell us your instrument, level and goals. Pick a time that suits you.' },
  { title: 'Meet your mentor', text: 'A short live session to hear you play or sing and plan your first month.' },
  { title: 'Learn live, 1-on-1', text: 'Weekly online lessons that follow a structured level-by-level curriculum.' },
  { title: 'Practise & perform', text: 'Guided practice between classes, progress check-ins and student showcases.' },
];

export const FEATURES = [
  { title: 'Live 1-on-1 lessons', text: 'Real-time feedback from a mentor who focuses only on you.' },
  { title: 'Learn from home', text: 'Online classes on a laptop, tablet or phone — no commute.' },
  { title: 'Flexible scheduling', text: 'Choose lesson times that fit around school, college or work.' },
  { title: 'Structured levels', text: 'A clear path from beginner to advanced, so you always know what’s next.' },
  { title: 'Practice that sticks', text: 'Weekly practice plans, backing tracks and exercises between lessons.' },
  { title: 'Perform & celebrate', text: 'Progress check-ins and showcases to play or sing for an audience.' },
];

export const FAQS = [
  {
    q: 'I have never played or sung before. Can I join?',
    a: 'Yes. Most students start as complete beginners. Your mentor starts from the basics and moves at your pace.',
  },
  {
    q: 'What age groups do you teach?',
    a: 'Children, teens and adults. Lessons are adapted to the student’s age, goals and attention span.',
  },
  {
    q: 'How do online lessons work?',
    a: 'Classes are live video calls. You just need a stable internet connection, your instrument (for guitar) and a quiet space.',
  },
  {
    q: 'Do I need my own guitar?',
    a: 'Yes, you will need an acoustic or electric guitar to practise. Not sure what to buy? Ask during your free trial.',
  },
  {
    q: 'How long is each class and how often?',
    a: 'Most students take one lesson a week. Your mentor will suggest a schedule after the trial based on your goals.',
  },
  {
    q: 'What happens in the free trial class?',
    a: 'You meet a mentor, try a short lesson, and get a plan for your level. There is no obligation to continue.',
  },
];
