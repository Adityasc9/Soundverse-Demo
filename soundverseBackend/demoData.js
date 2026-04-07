const DAY_MS = 24 * 60 * 60 * 1000;

function createSeededRandom(seed) {
  let state = seed >>> 0;

  return function random() {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeId(namespace, index) {
  const prefix = namespace.toString(16).padStart(6, '0');
  const suffix = index.toString(16).padStart(18, '0');
  return `${prefix}${suffix}`.slice(0, 24);
}

function pick(random, items) {
  return items[Math.floor(random() * items.length)];
}

function maybe(random, chance) {
  return random() < chance;
}

function randomInt(random, min, max) {
  return Math.floor(random() * (max - min + 1)) + min;
}

function sampleMany(random, items, count) {
  const pool = [...items];
  const selected = [];

  while (pool.length > 0 && selected.length < count) {
    const index = Math.floor(random() * pool.length);
    selected.push(pool.splice(index, 1)[0]);
  }

  return selected;
}

function weightedPick(random, items) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  const threshold = random() * totalWeight;
  let running = 0;

  for (const item of items) {
    running += item.weight;
    if (threshold <= running) {
      return item.value;
    }
  }

  return items[items.length - 1].value;
}

function createPrompt(random) {
  const genre = pick(random, [
    'lo-fi',
    'edm',
    'rock',
    'hip hop',
    'rap',
    'r&b',
    'jazz',
    'country',
    'classical',
    'metal',
    'funk',
    'soul',
    'indie',
    'techno',
    'house',
    'trance',
    'orchestral',
    'synthwave',
    'meditation',
  ]);
  const vibe = pick(random, [
    'happy',
    'sad',
    'chill',
    'energetic',
    'dark',
    'calm',
    'epic',
    'study',
    'cinematic',
    'dreamy',
    'hopeful',
    'mysterious',
    'uplifting',
    'serene',
    'peaceful',
    'euphoric',
  ]);
  const instrument = pick(random, [
    'piano',
    'guitar',
    'synthesizer',
    'drum',
    'violin',
    'cello',
    'trumpet',
    'flute',
    'vocal',
    'bass',
    'strings',
    'brass',
    'woodwind',
    'percussion',
    'organ',
    'choir',
    'pad',
    'bell',
    'marimba',
  ]);
  const scene = pick(random, [
    'for a product launch',
    'for a short film',
    'for a podcast intro',
    'for creator content',
    'for a travel reel',
    'for a gameplay montage',
    'for a vocal topline',
    'for a documentary teaser',
    'for a meditation session',
    'for a brand campaign',
  ]);

  return `${vibe} ${genre} ${instrument} soundtrack ${scene}`.trim();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function createDemoData() {
  const random = createSeededRandom(20260407);
  const now = new Date('2026-04-07T12:00:00.000Z');
  const startWindow = new Date(now.getTime() - 180 * DAY_MS);

  const identities = [
    { value: 'Music Producer', weight: 32 },
    { value: 'Singer/ Songwriter', weight: 20 },
    { value: 'Film Maker', weight: 18 },
    { value: 'Influencer', weight: 16 },
    { value: 'Other', weight: 14 },
  ];
  const proficiencies = [
    { value: 'I’m an expert', weight: 14 },
    { value: 'I’m an advanced creator', weight: 28 },
    { value: 'I have some experience', weight: 34 },
    { value: 'I’m beginning my journey', weight: 24 },
  ];
  const contentTypes = [
    { value: 'Full Songs', weight: 28 },
    { value: 'Sound Effects', weight: 18 },
    { value: 'Instrumental Tracks', weight: 26 },
    { value: 'Vocals', weight: 14 },
    { value: 'Podcasts/ Audio Narratives', weight: 10 },
    { value: 'Other', weight: 4 },
  ];
  const activitiesCatalog = [
    'ai_magic_tool_used',
    'audio_exported',
    'processing_complete',
    'processing_start',
    'project_created',
    'sign_in',
    'sign_out',
    'studio_closed',
    'studio_opened',
  ];
  const firstNames = [
    'Ava',
    'Noah',
    'Mia',
    'Ethan',
    'Sofia',
    'Liam',
    'Priya',
    'Leo',
    'Aria',
    'Mason',
    'Nina',
    'Jay',
    'Zara',
    'Kai',
    'Maya',
    'Theo',
    'Amara',
    'Ivy',
    'Rohan',
    'Elena',
    'Aiden',
    'Mila',
    'Anika',
    'Jonah',
  ];
  const lastNames = [
    'Carter',
    'Patel',
    'Kim',
    'Lopez',
    'Nguyen',
    'Bennett',
    'Hughes',
    'Brooks',
    'Rivera',
    'Simmons',
    'Wright',
    'Parker',
    'Diaz',
    'Shah',
    'Foster',
    'Bell',
  ];

  const audioTypes = [
    {
      _id: '65545e7a85c7a3c48460ac03',
      isStem: false,
      stemType: null,
      audioType: 'soundverse_default',
    },
    {
      _id: '65545e7a85c7a3c48460ac04',
      isStem: false,
      stemType: null,
      audioType: 'arrangement_view_exported_mp3',
    },
    {
      _id: '65545e7a85c7a3c48460ac05',
      isStem: false,
      stemType: null,
      audioType: 'arrangement_view_exported_wav',
    },
    {
      _id: '65545e7a85c7a3c48460ac06',
      isStem: false,
      stemType: null,
      audioType: 'instrumental_track',
    },
    {
      _id: '65545e7a85c7a3c48460ac07',
      isStem: false,
      stemType: null,
      audioType: 'vocal_track',
    },
    {
      _id: '65545e7a85c7a3c48460ac08',
      isStem: true,
      stemType: 'drums',
      audioType: 'stem_separated',
    },
    {
      _id: '65545e7a85c7a3c48460ac09',
      isStem: true,
      stemType: 'bass',
      audioType: 'stem_separated',
    },
  ];

  const users = Array.from({ length: 360 }, (_, index) => {
    const firstName = pick(random, firstNames);
    const lastName = pick(random, lastNames);
    const createdAt = new Date(
      startWindow.getTime() - randomInt(random, 20, 240) * DAY_MS,
    );
    const identity = weightedPick(random, identities);
    const shouldHaveDesc = maybe(random, 0.92);
    const isPaid = maybe(random, 0.46);
    const cancelled = isPaid && maybe(random, 0.08);

    return {
      _id: makeId(1, index + 1),
      name: `${firstName} ${lastName}`,
      email: `${firstName}.${lastName}.${index + 1}@example.com`.toLowerCase(),
      createdAt,
      updatedAt: new Date(
        createdAt.getTime() + randomInt(random, 5, 160) * DAY_MS,
      ),
      stripeCheckoutSession: isPaid
        ? {
            id: `cs_demo_${index + 1}`,
            amount_total: pick(random, [1900, 2900, 4900, 9900]),
            currency: 'usd',
            customer: `cus_demo_${index + 1}`,
            payment_status: 'paid',
          }
        : null,
      desc: shouldHaveDesc
        ? {
            identity,
            proficiency: weightedPick(random, proficiencies),
            content: weightedPick(random, contentTypes),
          }
        : null,
      renewTokens: isPaid
        ? new Date(now.getTime() + randomInt(random, 7, 35) * DAY_MS)
        : null,
      cancelled: cancelled
        ? new Date(now.getTime() - randomInt(random, 1, 45) * DAY_MS)
        : null,
      appsumo_user: maybe(random, 0.07),
      additionalTokens: maybe(random, 0.3)
        ? pick(random, [10, 25, 50, 100])
        : 0,
    };
  });

  const userIds = users.map((user) => user._id);
  const prompts = [];
  const audios = [];
  const activities = [];
  const engagementRows = [];

  for (let dayOffset = 0; dayOffset < 180; dayOffset += 1) {
    const dayDate = new Date(startWindow.getTime() + dayOffset * DAY_MS);
    const seasonalLift =
      Math.sin(dayOffset / 8) * 8 +
      Math.cos(dayOffset / 18) * 10 +
      dayOffset * 0.08;
    const activeUserCount = clamp(
      Math.round(18 + seasonalLift * 0.45 + randomInt(random, -4, 8)),
      8,
      34,
    );
    const todayUsers = sampleMany(random, userIds, activeUserCount);

    for (const userId of todayUsers) {
      const sessionCount = randomInt(random, 1, 3);
      let totalEngagement = 0;

      for (
        let sessionIndex = 0;
        sessionIndex < sessionCount;
        sessionIndex += 1
      ) {
        const sessionMinutes = randomInt(random, 6, 42);
        const sessionSeconds = sessionMinutes * 60 + randomInt(random, 0, 59);
        totalEngagement += sessionSeconds;
      }

      engagementRows.push([
        userId,
        dayDate.toISOString().split('T')[0],
        'USER_ID',
        totalEngagement,
        pick(random, ['US', 'CA', 'GB', 'AU', 'IN']),
      ]);

      const eventCount = randomInt(random, 2, 4);
      const eventTimes = [];
      for (let eventIndex = 0; eventIndex < eventCount; eventIndex += 1) {
        const timestamp = new Date(
          dayDate.getTime() + randomInt(random, 0, DAY_MS - 1),
        );
        eventTimes.push(timestamp);
      }
      eventTimes.sort((a, b) => a - b);

      for (const timestamp of eventTimes) {
        const activityName = weightedPick(random, [
          { value: 'studio_opened', weight: 18 },
          { value: 'arranger_opened', weight: 14 },
          { value: 'project_created', weight: 12 },
          { value: 'processing_start', weight: 12 },
          { value: 'processing_complete', weight: 12 },
          { value: 'audio_exported', weight: 10 },
          { value: 'ai_magic_tool_used', weight: 10 },
          { value: 'sign_in', weight: 5 },
          { value: 'sign_out', weight: 3 },
          { value: 'arranger_closed', weight: 2 },
          { value: 'studio_closed', weight: 2 },
        ]);

        activities.push({
          _id: makeId(2, activities.length + 1),
          userId,
          activity: activityName,
          value: `${randomInt(random, 1, 100)}`,
          page: pick(random, [
            'studio',
            'discover',
            'arranger',
            'export',
            'dashboard',
          ]),
          createdAt: timestamp,
          updatedAt: timestamp,
        });
      }

      if (maybe(random, 0.16)) {
        const promptCount = randomInt(random, 1, 2);

        for (let promptIndex = 0; promptIndex < promptCount; promptIndex += 1) {
          const promptCreatedAt = new Date(
            dayDate.getTime() + randomInt(random, 0, DAY_MS - 1),
          );
          const promptText = createPrompt(random);

          prompts.push({
            _id: makeId(3, prompts.length + 1),
            userId,
            activity: 'message_created',
            value: promptText,
            page: 'studio',
            createdAt: promptCreatedAt,
            updatedAt: promptCreatedAt,
            author: 'user',
            prompt: promptText,
            aiReply: 'Generated audio variations and arrangement ideas.',
            audioData: [],
            isThread: maybe(random, 0.15),
            threadMessages: [],
          });

          const audioCount = randomInt(random, 1, 2);
          for (let audioIndex = 0; audioIndex < audioCount; audioIndex += 1) {
            const chosenType = pick(random, audioTypes);
            const audioCreatedAt = new Date(
              promptCreatedAt.getTime() + randomInt(random, 2, 40) * 1000,
            );

            audios.push({
              _id: makeId(4, audios.length + 1),
              audioUrl: `https://demo.soundverse.local/audio/${audios.length + 1}.mp3`,
              isLoopable: maybe(random, 0.42),
              duration: randomInt(random, 18, 240),
              isLiked: maybe(random, 0.28),
              muted: false,
              bpm: randomInt(random, 70, 162),
              createdAt: audioCreatedAt,
              updatedAt: audioCreatedAt,
              __v: 0,
              likeCount: randomInt(random, 0, 45),
              isThread: false,
              threadMessages: [],
              audioType: maybe(random, 0.06) ? undefined : chosenType._id,
              messageId: makeId(5, audios.length + 1),
              isPublic: maybe(random, 0.62),
              isRestricted: maybe(random, 0.08),
            });
          }
        }
      }
    }
  }

  while (prompts.length < 1800) {
    const user = pick(random, users);
    const createdAt = new Date(
      startWindow.getTime() + randomInt(random, 0, 180) * DAY_MS,
    );
    prompts.push({
      _id: makeId(3, prompts.length + 1),
      userId: user._id,
      activity: 'message_created',
      value: createPrompt(random),
      page: 'studio',
      createdAt,
      updatedAt: createdAt,
      author: 'user',
      prompt: createPrompt(random),
      aiReply: 'Generated layered textures and arrangement ideas.',
      audioData: [],
      isThread: false,
      threadMessages: [],
    });
  }

  while (audios.length < 2400) {
    const createdAt = new Date(
      startWindow.getTime() + randomInt(random, 0, 180) * DAY_MS,
    );
    const chosenType = pick(random, audioTypes);
    audios.push({
      _id: makeId(4, audios.length + 1),
      audioUrl: `https://demo.soundverse.local/audio/${audios.length + 1}.mp3`,
      isLoopable: maybe(random, 0.4),
      duration: randomInt(random, 18, 240),
      isLiked: maybe(random, 0.3),
      muted: false,
      bpm: randomInt(random, 72, 160),
      createdAt,
      updatedAt: createdAt,
      __v: 0,
      likeCount: randomInt(random, 0, 45),
      isThread: false,
      threadMessages: [],
      audioType: maybe(random, 0.06) ? undefined : chosenType._id,
      messageId: makeId(5, audios.length + 1),
      isPublic: maybe(random, 0.62),
      isRestricted: maybe(random, 0.08),
    });
  }

  const totalDurationSeconds = audios.reduce(
    (sum, audio) => sum + Number(audio.duration || 0),
    0,
  );

  return {
    generatedAt: now.toISOString(),
    activitiesCatalog,
    users,
    prompts,
    audios,
    audioTypes,
    activities: activities.sort((a, b) => a.createdAt - b.createdAt),
    engagementRows: engagementRows.sort((a, b) => a[1].localeCompare(b[1])),
    totalDuration: {
      total: `${totalDurationSeconds} seconds`,
    },
  };
}

function createActiveUsersReport(startDate, endDate) {
  const reportRandom = createSeededRandom(72614513);
  const start = new Date(`${startDate}T00:00:00.000Z`);
  const end = new Date(`${endDate}T00:00:00.000Z`);
  const rows = [];

  for (
    let cursor = new Date(start);
    cursor.getTime() <= end.getTime();
    cursor = new Date(cursor.getTime() + DAY_MS)
  ) {
    const dayIndex = Math.round((cursor.getTime() - start.getTime()) / DAY_MS);
    const weekly = Math.sin(dayIndex / 3.2) * 10;
    const monthly = Math.cos(dayIndex / 9.5) * 16;
    const trend = dayIndex * 0.45;
    const noise = randomInt(reportRandom, -6, 8);
    const dau = clamp(
      Math.round(48 + weekly + monthly + trend + noise),
      18,
      170,
    );
    const wau = clamp(
      Math.round(dau * 2.3 + 24 + randomInt(reportRandom, -8, 12)),
      dau + 10,
      280,
    );
    const mau = clamp(
      Math.round(wau * 1.45 + 30 + randomInt(reportRandom, -10, 14)),
      wau + 14,
      360,
    );

    rows.push({
      dimensionValues: [
        {
          value: cursor.toISOString().slice(0, 10).replace(/-/g, ''),
        },
      ],
      metricValues: [
        { value: String(dau) },
        { value: String(wau) },
        { value: String(mau) },
      ],
    });
  }

  return { rows };
}

const demoData = createDemoData();

module.exports = {
  demoData,
  createActiveUsersReport,
};
