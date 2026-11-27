import type { ImageKey } from '../config/images';

export type CourseCategory = 'instrumental' | 'vocal';

export interface Course {
  slug: string;
  name: string;
  category: CourseCategory;
  image: ImageKey;
  /** One line under the H1 */
  tagline: string;
  /** Short text for course cards */
  cardBlurb: string;
  h1: string;
  seo: { title: string; description: string };
  intro: string[];
  learn: string[];
  levels: { name: string; text: string }[];
  forWhom: { title: string; text: string }[];
  method: { title: string; text: string }[];
  /** Learning modes offered. VERIFY per course with the academy. */
  modes: { online: boolean; offline: boolean };
  faqs: { q: string; a: string }[];
  related: string[];
}

export const COURSES: Course[] = [
  {
    slug: 'guitar',
    name: 'Guitar',
    category: 'instrumental',
    image: 'guitar',
    tagline: 'Acoustic and electric guitar, from your first chord to confident songs and solos.',
    cardBlurb: 'Acoustic & electric — chords, strumming, fingerstyle and lead.',
    h1: 'Guitar Classes in Kolkata & Online',
    seo: {
      title: 'Guitar Classes in Kolkata & Online Guitar Lessons | Muzicks',
      description:
        'Learn acoustic or electric guitar at Muzicks, Kolkata — in person or online. Beginner-friendly lessons in chords, strumming, fingerstyle and songs.',
    },
    intro: [
      'The guitar is the instrument most people pick up first, and for good reason: a handful of chords is enough to play real songs. Our guitar classes turn that first spark into solid technique, whether you want to strum around a campfire, play fingerstyle arrangements or take your first solo.',
      'Lessons cover both acoustic and electric guitar. You learn to read chord charts and tabs, keep steady time, and understand why the music works — so you can pick up new songs on your own between classes.',
    ],
    learn: [
      'Holding the guitar, tuning and comfortable hand position',
      'Open chords, barre chords and smooth chord changes',
      'Strumming patterns, rhythm and playing in time',
      'Fingerstyle and arpeggio patterns',
      'Scales, riffs and the basics of lead guitar',
      'Reading chord charts, tabs and simple notation',
    ],
    levels: [
      { name: 'Foundation', text: 'Posture, tuning, your first open chords and simple strumming songs.' },
      { name: 'Intermediate', text: 'Barre and power chords, fingerpicking, the pentatonic scale and rhythm variety.' },
      { name: 'Advanced', text: 'Lead techniques, improvisation, arranging songs and preparing for performance or graded exams.' },
    ],
    forWhom: [
      { title: 'Children', text: 'Short, focused lessons that build finger strength and a love of playing.' },
      { title: 'Teenagers', text: 'Learn the songs you listen to while building real technique.' },
      { title: 'Adult beginners', text: 'Start from zero at your own pace — no prior music knowledge needed.' },
      { title: 'Returning players', text: 'Fix old habits and fill the gaps in what you taught yourself.' },
    ],
    method: [
      { title: 'Songs from day one', text: 'Every technique is practised through music you enjoy, not just exercises.' },
      { title: 'Theory in context', text: 'Chords and scales are explained as you use them, so they stick.' },
      { title: 'Practice plans', text: 'Clear, short practice routines to follow between lessons.' },
    ],
    modes: { online: true, offline: true },
    faqs: [
      { q: 'Do I need my own guitar?', a: 'Yes — a guitar at home is essential for practice. If you are unsure whether to buy an acoustic or electric guitar, ask us during your enquiry and we will help you choose.' },
      { q: 'Acoustic or electric — which should I start with?', a: 'Both work. Acoustic builds finger strength; electric is lighter on the fingers and suits rock and blues. The right choice depends on the music you want to play.' },
      { q: 'How long before I can play a song?', a: 'Many beginners play a simple song within the first few weeks. Progress depends on regular practice.' },
      { q: 'Can I prepare for graded guitar exams?', a: 'Yes. Ask us about exam preparation when you enquire and we will discuss whether it suits your goals.' },
    ],
    related: ['ukulele', 'keyboard', 'western-vocals'],
  },
  {
    slug: 'keyboard',
    name: 'Keyboard',
    category: 'instrumental',
    image: 'keyboard',
    tagline: 'Keyboard and piano foundations — reading, chords, both hands and real pieces.',
    cardBlurb: 'Reading music, chords and two-handed playing.',
    h1: 'Keyboard & Piano Classes in Kolkata and Online',
    seo: {
      title: 'Keyboard Classes in Kolkata & Online Lessons | Muzicks',
      description:
        'Keyboard and piano lessons at Muzicks, Kolkata and online. Read music, play with both hands, accompany songs and understand harmony — for all ages.',
    },
    intro: [
      'The keyboard lays music out in front of you. Every note, scale and chord is visible, which makes it one of the best instruments for understanding how music is built — and a strong foundation for any other instrument or for singing.',
      'Our keyboard classes balance two skills: reading and playing pieces accurately, and using chords to accompany songs and play by ear. You will learn to coordinate both hands and develop a feel for melody and harmony.',
    ],
    learn: [
      'Finger numbers, posture and hand independence',
      'Reading treble and bass clef',
      'Major and minor scales and key signatures',
      'Chords, inversions and accompaniment patterns',
      'Playing melodies with left-hand accompaniment',
      'Rhythm, dynamics and expressive playing',
    ],
    levels: [
      { name: 'Foundation', text: 'Finding notes, five-finger patterns, simple melodies and basic rhythm.' },
      { name: 'Intermediate', text: 'Both hands together, scales, chords and accompanying songs.' },
      { name: 'Advanced', text: 'Expressive pieces, harmony, improvisation and graded exam preparation.' },
    ],
    forWhom: [
      { title: 'Young learners', text: 'A visual, structured start that builds reading skills early.' },
      { title: 'Adults', text: 'Learn to play the songs you love and understand the theory behind them.' },
      { title: 'Singers', text: 'Accompany yourself and strengthen your ear and pitch.' },
      { title: 'Songwriters', text: 'Use chords and voicings to shape your own music.' },
    ],
    method: [
      { title: 'Reading and playing by ear', text: 'We build both, so you are not stuck without sheet music.' },
      { title: 'Graded progression', text: 'New skills are introduced one at a time, building on the last.' },
      { title: 'Repertoire you choose', text: 'Pieces are selected to match your taste and level.' },
    ],
    modes: { online: true, offline: true },
    faqs: [
      { q: 'Keyboard or piano — what is the difference for lessons?', a: 'The fundamentals are the same. A keyboard with full-size, touch-sensitive keys is fine for most learners; we will tell you if your goals need an acoustic piano.' },
      { q: 'What keyboard should I buy?', a: 'Look for at least 61 full-size keys, ideally touch-sensitive. Ask us before buying and we will suggest what suits your level.' },
      { q: 'Will I learn to read sheet music?', a: 'Yes. Reading music is part of the course, alongside chords and playing by ear.' },
      { q: 'Is there an age limit?', a: 'No. We teach children and adults, adapting the pace and material to each student.' },
    ],
    related: ['western-vocals', 'guitar', 'violin'],
  },
  {
    slug: 'ukulele',
    name: 'Ukulele',
    category: 'instrumental',
    image: 'ukulele',
    tagline: 'Four strings, quick progress and a lot of joy — the friendliest way into music.',
    cardBlurb: 'Fast, fun progress for all ages.',
    h1: 'Ukulele Classes in Kolkata & Online',
    seo: {
      title: 'Ukulele Classes in Kolkata | Online Ukulele Lessons | Muzicks',
      description:
        'Learn the ukulele at Muzicks, Kolkata or online. A friendly first instrument for children and adults — chords, strumming, fingerpicking and singing along.',
    },
    intro: [
      'With four nylon strings and a small body, the ukulele is gentle on the fingers and quick to reward practice. Many students strum their first song within a few lessons, which makes it a wonderful first instrument for children and a relaxing creative outlet for adults.',
      'Our ukulele lessons go beyond a few chords. You will build rhythm, learn fingerpicking and discover how to accompany your own singing — skills that transfer directly to the guitar later on.',
    ],
    learn: [
      'Tuning (GCEA) and holding the ukulele comfortably',
      'Essential chords and quick chord changes',
      'Strumming patterns across different styles',
      'Fingerpicking melodies and simple arrangements',
      'Singing while playing',
      'Reading chord diagrams and tabs',
    ],
    levels: [
      { name: 'Foundation', text: 'Core chords, steady strumming and your first complete songs.' },
      { name: 'Intermediate', text: 'Moveable chords, syncopated strums and fingerstyle pieces.' },
      { name: 'Advanced', text: 'Chord melody arrangements, improvisation and performance.' },
    ],
    forWhom: [
      { title: 'Children', text: 'Small hands and short attention spans are no barrier.' },
      { title: 'Busy adults', text: 'A light, portable instrument you can practise anywhere.' },
      { title: 'Singers', text: 'An easy way to accompany yourself.' },
      { title: 'Future guitarists', text: 'Build chord and rhythm skills before moving to six strings.' },
    ],
    method: [
      { title: 'Play early, play often', text: 'Songs come first, so motivation stays high.' },
      { title: 'Rhythm focus', text: 'Strong timing is what makes simple chords sound great.' },
      { title: 'Sing-along sessions', text: 'Combining voice and instrument builds musical confidence.' },
    ],
    modes: { online: true, offline: true },
    faqs: [
      { q: 'Which size ukulele should I buy?', a: 'Soprano and concert sizes suit most beginners; tenor gives a fuller sound for larger hands. Ask us if you are unsure.' },
      { q: 'Is ukulele good for young children?', a: 'Yes. It is light, small and easy to press, which makes it one of the most child-friendly instruments.' },
      { q: 'Can I switch to guitar later?', a: 'Absolutely. Chord shapes, rhythm and finger skills transfer well to the guitar.' },
      { q: 'Do I need to read music?', a: 'No. We use chord diagrams and tabs, and introduce notation gradually if you wish.' },
    ],
    related: ['guitar', 'western-vocals', 'harmonica'],
  },
  {
    slug: 'flute',
    name: 'Flute',
    category: 'instrumental',
    image: 'flute',
    tagline: 'Breath, tone and melody — bansuri and the expressive world of the flute.',
    cardBlurb: 'Breath control, tone and melodic expression.',
    h1: 'Flute Classes in Kolkata & Online',
    seo: {
      title: 'Flute Classes in Kolkata | Bansuri Lessons Online | Muzicks',
      description:
        'Flute lessons at Muzicks in Kolkata and online. Build breath control, a clear tone and melodic phrasing on the bansuri — for beginners and continuing learners.',
    },
    intro: [
      'The flute is played with the breath, which makes it one of the most personal instruments to learn. A beautiful tone comes from control rather than strength, and our lessons focus on building that control patiently from the very first note.',
      'Lessons centre on the bansuri, the bamboo flute at the heart of Indian music, and include melodies from both Indian and popular repertoire. Ask us about western concert flute if that is your interest.',
    ],
    learn: [
      'Embouchure and producing a clear, steady tone',
      'Breathing technique and breath support',
      'Finger positions and half-holes',
      'Scales and sargam practice',
      'Ornamentation such as meend and murki',
      'Playing melodies with expression and phrasing',
    ],
    levels: [
      { name: 'Foundation', text: 'First sound, posture, breathing and the basic notes.' },
      { name: 'Intermediate', text: 'Full scales, sargam patterns, simple ragas and songs.' },
      { name: 'Advanced', text: 'Ornamentation, extended phrases and performance pieces.' },
    ],
    forWhom: [
      { title: 'Beginners', text: 'Patient guidance through the trickiest part — your first clear notes.' },
      { title: 'Lovers of melody', text: 'An instrument that sings, ideal for soulful music.' },
      { title: 'Classical learners', text: 'A path into raga-based music through the bansuri.' },
      { title: 'Adults seeking calm', text: 'Breath-led playing is focused and relaxing.' },
    ],
    method: [
      { title: 'Tone first', text: 'We invest early in a good sound — everything else builds on it.' },
      { title: 'Listen and imitate', text: 'Phrases are taught by ear, as in the traditional method.' },
      { title: 'Breath exercises', text: 'Short daily routines that build stamina and control.' },
    ],
    modes: { online: true, offline: true },
    faqs: [
      { q: 'Bansuri or western flute — which do you teach?', a: 'Our flute lessons focus on the bansuri. If you are interested in the western concert flute, ask us and we will tell you what we can offer.' },
      { q: 'Which bansuri should a beginner buy?', a: 'A medium-sized flute in a comfortable key is usually best. Please check with us before buying.' },
      { q: 'Why can’t I get a sound at first?', a: 'This is normal. Producing a tone takes a little practice; your teacher will guide your lip and breath position.' },
      { q: 'Can I learn flute online?', a: 'Yes. Online lessons work well for flute as long as your microphone captures your sound clearly.' },
    ],
    related: ['hindustani-classical-vocal', 'harmonica', 'violin'],
  },
  {
    slug: 'harmonica',
    name: 'Harmonica',
    category: 'instrumental',
    image: 'harmonica',
    tagline: 'A pocket-sized instrument with a big voice — blues, folk and melody.',
    cardBlurb: 'Pocket-sized, expressive and great for blues.',
    h1: 'Harmonica Classes Online & in Kolkata',
    seo: {
      title: 'Harmonica Classes | Learn Harmonica Online or in Kolkata | Muzicks',
      description:
        'Harmonica lessons at Muzicks — online or in Kolkata. Learn single notes, rhythm, bending and blues playing on the diatonic harmonica.',
    },
    intro: [
      'The harmonica fits in your pocket but can carry a whole song. It is a natural fit for blues, folk and film melodies, and because it is played with the breath, it is surprisingly expressive.',
      'Our harmonica lessons start with clean single notes and rhythm, then move on to the techniques that give the instrument its character — bending, vibrato and playing in different positions.',
    ],
    learn: [
      'Holding the harmonica and breathing correctly',
      'Clean single notes',
      'Rhythmic chording and train-style patterns',
      'Note bending',
      'Playing melodies and simple songs',
      'Blues scales and cross-harp (second position)',
    ],
    levels: [
      { name: 'Foundation', text: 'Single notes, breathing, simple melodies and rhythm patterns.' },
      { name: 'Intermediate', text: 'Bending, blues licks and second-position playing.' },
      { name: 'Advanced', text: 'Expressive techniques, improvisation and playing with accompaniment.' },
    ],
    forWhom: [
      { title: 'Blues and folk fans', text: 'Learn the sound you already love.' },
      { title: 'Guitarists', text: 'Add harmonica to your songs.' },
      { title: 'Travellers', text: 'An instrument that goes everywhere with you.' },
      { title: 'Adult beginners', text: 'Inexpensive and quick to start.' },
    ],
    method: [
      { title: 'Ear-led learning', text: 'Phrases are learned by listening, then refined.' },
      { title: 'Technique in small steps', text: 'Bending and tone are built gradually and safely.' },
      { title: 'Play-along practice', text: 'Backing tracks make practice feel like making music.' },
    ],
    modes: { online: true, offline: true },
    faqs: [
      { q: 'Which harmonica should I buy?', a: 'A 10-hole diatonic harmonica in the key of C is the usual starting point.' },
      { q: 'Is harmonica hard to learn?', a: 'Simple melodies come quickly. Techniques like bending take patience, and your teacher will guide you step by step.' },
      { q: 'Can I learn harmonica online?', a: 'Yes. Online lessons work well, especially with a decent microphone or headset.' },
      { q: 'Do I need to know music theory?', a: 'No. Useful theory is introduced as you go.' },
    ],
    related: ['guitar', 'ukulele', 'flute'],
  },
  {
    slug: 'violin',
    name: 'Violin',
    category: 'instrumental',
    image: 'violin',
    tagline: 'Posture, bowing and intonation — a careful foundation for a lifelong instrument.',
    cardBlurb: 'Bowing, intonation and expressive playing.',
    h1: 'Violin Classes in Kolkata & Online',
    seo: {
      title: 'Violin Classes in Kolkata | Online Violin Lessons | Muzicks',
      description:
        'Violin lessons at Muzicks, Kolkata and online. Build correct posture, bowing technique and intonation, and learn pieces from western and Indian repertoire.',
    },
    intro: [
      'The violin rewards careful foundations. Good posture, a relaxed bow arm and accurate intonation make the difference between struggling and sounding beautiful, so our lessons give those basics the attention they deserve.',
      'From there, students develop tone, shifting and expression through pieces suited to their taste — whether that is western classical, film music or Indian melodies.',
    ],
    learn: [
      'Posture, holding the violin and the bow',
      'Bowing technique and tone production',
      'Finger placement and intonation',
      'Scales and arpeggios',
      'Reading music for violin',
      'Vibrato and shifting at later stages',
    ],
    levels: [
      { name: 'Foundation', text: 'Holding the instrument, open strings, first finger patterns and simple tunes.' },
      { name: 'Intermediate', text: 'Scales, smoother bowing, reading pieces and developing tone.' },
      { name: 'Advanced', text: 'Shifting, vibrato, expressive repertoire and exam preparation.' },
    ],
    forWhom: [
      { title: 'Children', text: 'An early start helps with ear training and coordination.' },
      { title: 'Adults', text: 'It is never too late; adults often progress through focused practice.' },
      { title: 'Classical enthusiasts', text: 'A route into orchestral and chamber repertoire.' },
      { title: 'Fusion fans', text: 'The violin sits beautifully in Indian and film music.' },
    ],
    method: [
      { title: 'Posture first', text: 'Healthy technique prevents tension and makes progress easier.' },
      { title: 'Ear and intonation', text: 'Regular listening work so you hear when a note is in tune.' },
      { title: 'Short daily practice', text: 'Little and often is the key to violin progress.' },
    ],
    modes: { online: true, offline: true },
    faqs: [
      { q: 'What size violin do I need?', a: 'Violins come in fractional sizes for children. Adults use a full-size (4/4) violin. We can help you check the right size.' },
      { q: 'Is violin harder than other instruments?', a: 'It asks for patience at the start, especially with tone and intonation, but steady practice brings clear progress.' },
      { q: 'Can violin be learned online?', a: 'Yes, with good camera placement so the teacher can see your posture and bow arm.' },
      { q: 'Can I prepare for graded exams?', a: 'Ask us about exam preparation when you enquire.' },
    ],
    related: ['keyboard', 'flute', 'hindustani-classical-vocal'],
  },
  {
    slug: 'western-vocals',
    name: 'Western Vocals',
    category: 'vocal',
    image: 'westernVocals',
    tagline: 'Healthy technique, range and style for pop, rock, jazz and musical theatre.',
    cardBlurb: 'Pop, rock, jazz & musical theatre singing.',
    h1: 'Western Vocal Classes in Kolkata & Online',
    seo: {
      title: 'Western Vocal Classes in Kolkata | Online Singing Lessons | Muzicks',
      description:
        'Western vocal lessons at Muzicks, Kolkata and online. Build breath support, pitch, range and stage confidence for pop, rock, jazz and musical theatre.',
    },
    intro: [
      'Everyone has a voice; training teaches you to use it well. Our western vocal classes build a healthy technique first — breath support, resonance and pitch — so you can sing with more power, control and comfort.',
      'Then we work on style. Pop, rock, soul, jazz and musical theatre each ask something different of the voice, and lessons help you find the sound that suits you while performing songs with confidence.',
    ],
    learn: [
      'Breathing, posture and breath support',
      'Pitch accuracy and ear training',
      'Head voice, chest voice and smooth transitions',
      'Extending range safely',
      'Diction, dynamics and phrasing',
      'Microphone technique and performance',
    ],
    levels: [
      { name: 'Foundation', text: 'Breathing, warm-ups, pitch matching and simple songs.' },
      { name: 'Intermediate', text: 'Register blending, harmony, dynamics and stylistic choices.' },
      { name: 'Advanced', text: 'Range, agility, interpretation, recording and stage performance.' },
    ],
    forWhom: [
      { title: 'New singers', text: 'Start with the basics in a supportive, judgement-free space.' },
      { title: 'Shower singers', text: 'Turn enthusiasm into control and confidence.' },
      { title: 'Performers', text: 'Prepare for shows, competitions and auditions.' },
      { title: 'Songwriters', text: 'Sing your own songs with better tone and stamina.' },
    ],
    method: [
      { title: 'Healthy technique', text: 'No strain — sustainable singing habits from the start.' },
      { title: 'Personal repertoire', text: 'Songs chosen to suit your voice type and taste.' },
      { title: 'Recorded feedback', text: 'Listening back to yourself is one of the fastest ways to improve.' },
    ],
    modes: { online: true, offline: true },
    faqs: [
      { q: 'Can anyone learn to sing?', a: 'Yes. Pitch and tone are skills that improve with training, whatever your starting point.' },
      { q: 'What styles can I learn?', a: 'Pop, rock, soul, jazz and musical theatre are all covered within western vocal training.' },
      { q: 'Do I need to read music?', a: 'No. Useful notation and theory are introduced gradually.' },
      { q: 'Are online singing lessons effective?', a: 'Yes, with a reasonable microphone and a quiet room. Your teacher will guide your setup.' },
    ],
    related: ['bollywood-music', 'keyboard', 'guitar'],
  },
  {
    slug: 'hindustani-classical-vocal',
    name: 'Hindustani Classical Vocal',
    category: 'vocal',
    image: 'hindustani',
    tagline: 'Swara, raga and riyaz — the discipline at the heart of Indian music.',
    cardBlurb: 'Sargam, raga, taal and riyaz.',
    h1: 'Hindustani Classical Vocal Classes in Kolkata & Online',
    seo: {
      title: 'Hindustani Classical Vocal Classes in Kolkata & Online | Muzicks',
      description:
        'Learn Hindustani classical vocal music at Muzicks, Kolkata and online — swara, alankar, ragas, taal and the practice of riyaz, for beginners and continuing students.',
    },
    intro: [
      'Hindustani classical music is the foundation beneath so much of Indian music, from devotional songs to film. Training in it develops an exceptional ear, a steady voice and a deep understanding of melody.',
      'Lessons follow the traditional path: accurate swaras, alankars to build agility, then ragas, bandishes and taals. Daily riyaz is at the centre of the practice, and your teacher will help you build a routine that fits your life.',
    ],
    learn: [
      'Swara, saptak and accurate intonation',
      'Alankars and paltas for voice agility',
      'Introduction to ragas and their characteristic phrases',
      'Bandish, chota khayal and sargam geet',
      'Taal, laya and keeping rhythm',
      'Building a daily riyaz routine',
    ],
    levels: [
      { name: 'Foundation', text: 'Swara practice with the tanpura, basic alankars and simple taals.' },
      { name: 'Intermediate', text: 'Several ragas, bandishes, aalap and introductory taans.' },
      { name: 'Advanced', text: 'Elaboration, improvisation within the raga and presentation.' },
    ],
    forWhom: [
      { title: 'Children', text: 'A strong ear and voice training from an early age.' },
      { title: 'Adults', text: 'A meditative, lifelong practice that rewards consistency.' },
      { title: 'Film and light singers', text: 'Classical grounding improves control in every style.' },
      { title: 'Returning students', text: 'Revive your riyaz with structured guidance.' },
    ],
    method: [
      { title: 'Guru–shishya spirit', text: 'Learning by listening closely and repeating with care.' },
      { title: 'Riyaz at the centre', text: 'Daily practice routines built around your schedule.' },
      { title: 'Raga by raga', text: 'Each raga is learned with its mood, phrases and compositions.' },
    ],
    modes: { online: true, offline: true },
    faqs: [
      { q: 'Do I need a harmonium or tanpura?', a: 'A tanpura app or electronic tanpura is enough to start. Your teacher will advise on anything else.' },
      { q: 'How important is daily riyaz?', a: 'Very. Short, regular practice brings far better results than occasional long sessions.' },
      { q: 'Is classical training useful for film singing?', a: 'Yes. It builds pitch, breath and control that carry into every style of singing.' },
      { q: 'Can I prepare for music examinations?', a: 'Ask us about examination preparation when you enquire.' },
    ],
    related: ['bollywood-music', 'western-vocals', 'flute'],
  },
  {
    slug: 'bollywood-music',
    name: 'Bollywood Music',
    category: 'vocal',
    image: 'bollywood',
    tagline: 'Sing the songs you love, with the technique and expression they deserve.',
    cardBlurb: 'Film songs with expression and technique.',
    h1: 'Bollywood Singing Classes in Kolkata & Online',
    seo: {
      title: 'Bollywood Singing Classes in Kolkata & Online | Muzicks',
      description:
        'Bollywood and film-song singing classes at Muzicks, Kolkata and online. Learn voice control, ornamentation, emotion and performance for Hindi film music.',
    },
    intro: [
      'Bollywood songs move between styles — classical phrases, folk colour, western pop production — often within a single track. Singing them well needs flexibility, a good ear and real emotional expression.',
      'Our Bollywood music classes blend vocal technique with the specific skills film songs ask for: ornamentation, pronunciation, emotion and confident performance with a karaoke track or live accompaniment.',
    ],
    learn: [
      'Voice warm-ups, breathing and pitch',
      'Harkat, murki and meend — film-song ornamentation',
      'Hindi and Urdu pronunciation for singing',
      'Expressing emotion and storytelling in a song',
      'Singing with karaoke tracks and live accompaniment',
      'Stage and microphone confidence',
    ],
    levels: [
      { name: 'Foundation', text: 'Pitch, breath and simple, well-loved songs.' },
      { name: 'Intermediate', text: 'Ornamentation, range and songs across different eras.' },
      { name: 'Advanced', text: 'Complex songs, interpretation and performance-ready repertoire.' },
    ],
    forWhom: [
      { title: 'Film music lovers', text: 'Learn the songs you hum every day — properly.' },
      { title: 'Event performers', text: 'Prepare for functions, competitions and stage shows.' },
      { title: 'Children and teens', text: 'Fun, familiar songs that build real vocal skills.' },
      { title: 'Adults', text: 'A joyful creative outlet with structured progress.' },
    ],
    method: [
      { title: 'Song-led lessons', text: 'Technique is taught through the songs you want to sing.' },
      { title: 'Classical colour', text: 'Light classical exercises for ornaments and control.' },
      { title: 'Performance practice', text: 'Regular run-throughs to build stage confidence.' },
    ],
    modes: { online: true, offline: true },
    faqs: [
      { q: 'Do I need classical training first?', a: 'No, but light classical exercises are included because they make film songs easier to sing well.' },
      { q: 'Can I choose my own songs?', a: 'Yes. Your teacher will help pick songs that suit your voice and level.' },
      { q: 'Will I sing with music?', a: 'Yes — practice includes singing with karaoke tracks so you are ready to perform.' },
      { q: 'Is it suitable for children?', a: 'Yes. Songs are chosen to be age-appropriate and within a comfortable range.' },
    ],
    related: ['hindustani-classical-vocal', 'western-vocals', 'keyboard'],
  },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);
export const INSTRUMENTAL = COURSES.filter((c) => c.category === 'instrumental');
export const VOCAL = COURSES.filter((c) => c.category === 'vocal');
