export const buildSprintSchedule = {
  timezone: 'Asia/Kolkata',
  timezoneLabel: 'IST',
  registrationOpens: '2026-06-29T09:00:00+05:30',
  registrationCloses: '2026-07-07T11:00:00+05:30',
  ideaSubmissionStarts: '2026-07-01',
  ideaSubmissionCloses: '2026-07-07T11:00:00+05:30',
  prototypePortalOpens: '2026-07-10T08:00:00+05:30',
  prototypeDeadline: '2026-07-21T23:59:00+05:30',
  finalistAnnouncement: '2026-07-28',
  finalPresentation: '2026-07-30',
  winnerAnnouncement: '2026-07-31',
} as const;

export const buildSprintTimeline = [
  {
    phase: 'Registration opens',
    date: '29 June 2026 · 9:00 AM IST',
    detail: 'Individual builders and teams of up to three members can begin registering.',
  },
  {
    phase: 'Idea submission window',
    date: '1 July – 7 July 2026 · closes 11:00 AM IST',
    detail: 'Registered participants submit their selected track, product idea, and proposed approach.',
  },
  {
    phase: 'Registration deadline',
    date: '7 July 2026 · 11:00 AM IST',
    detail: 'Registration and idea submissions close at the same time. Late entries are not planned.',
  },
  {
    phase: 'Idea results and prototype portal',
    date: '10 July 2026 · 8:00 AM IST',
    detail: 'Selected teams are notified and receive access to the prototype submission portal.',
  },
  {
    phase: 'Prototype build window',
    date: '10 July, 8:00 AM – 21 July 2026, 11:59 PM IST',
    detail: 'Selected teams have more than ten full days to build and submit their working prototype.',
  },
  {
    phase: 'Top 12 finalists announced',
    date: '28 July 2026',
    detail: 'Twelve finalist teams are selected: four teams from each of the three Build Sprint tracks.',
  },
  {
    phase: 'Top 12 final presentations',
    date: '30 July 2026',
    detail: 'The twelve finalist teams present their products in the final evaluation round.',
  },
  {
    phase: 'Winners announced',
    date: '31 July 2026',
    detail: 'Build Sprint 2026 winners are announced after the final evaluation.',
  },
] as const;
