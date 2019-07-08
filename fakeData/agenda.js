import members from './members'

const agenda = {
    date: '2019-06-26',
    startTime: '12:00',
    club: {
        name: 'Top O\' the Rock Toastmasters Club',
        id: 2155,
    },
    meetingRoles: {
        toastmaster: 13,
        generalEvaluator: 8,
        speakers: [7, 15, 9],
        evaluators: [5, 4, 3],
        topicsmaster: 1,
        timer: 2,
        grammarian: 11,
        ahCounter: 14,
        voteCounter: 10,
        lexicologist: 6,
    },
    sections: [
        {
            lead: members[16],
            title: 'Call to Order',
            actions: [
                {
                    text: 'Call meeting to order, Lead Pledge of Allegiance and Mission Statement',
                    duration: 2,
                    type: 'misc',
                },
                {
                    text: 'Welcome members, introduce guests',
                    duration: 3,
                    type: 'misc',
                },
                {
                    text: 'Introduce Toastmaster',
                    duration: 1,
                    role: members[13],
                    type: 'misc',
                },
            ],
        },
        {
            lead: members[13],
            title: 'Toastmaster of the Day',
            actions: [
                {
                    text: 'Opening Remarks',
                    duration: 1,
                    type: 'misc',
                },
                {
                    text: 'Introduces Lexicologist',
                    role: members[6],
                    duration: 1,
                    type: 'introLex',
                },
                {
                    text: 'Introduces Timekeeper',
                    role: members[2],
                    duration: 1,
                    type: 'introTime',
                },
                {
                    text: 'Introduces Vote Counter',
                    role: members[10],
                    duration: 1,
                    type: 'introVote',
                },
                {
                    text: 'Announces speakers',
                    role: [members[7], members[15], members[9]],
                    duration: 1,
                    type: 'introSpeak',
                },
                {
                    text: 'Introduces General Evaluator',
                    role: members[8],
                    duration: 1,
                    type: 'introGE',
                },
            ],
        },
        {
            lead: members[8],
            title: 'Introducation of Evaluation Team',
            actions: [
                {
                    text: 'Introduces Evaluators',
                    role: [members[5], members[4], members[3]],
                    duration: 2,
                    type: 'introEval',
                },
                {
                    text: 'Introduces Grammarian',
                    role: members[11],
                    duration: 2,
                    type: 'introGram',
                },
                {
                    text: 'Introduces Ah-Counter',
                    role: members[14],
                    duration: 1,
                    type: 'introAh',
                },

            ],
        },
        {
            lead: members[13],
            title: 'Speeches',
            actions: [
                {
                    duration: 21,
                    speeches: [
                        {
                            speaker: members[7],
                            pathway: 'Presentation Mastery',
                            level: 2,
                            project: 'Understanding Your Communication Style',
                            minTime: '5',
                            maxTime: '7',
                            title: 'What Language are you Speaking?'
                        },
                        {
                            speaker: members[15],
                            pathway: 'Presentation Mastery',
                            level: 1,
                            project: 'Researching and Presenting',
                            minTime: '5',
                            maxTime: '7',
                            title: 'The Great Fire of 1901'
                        },
                        {
                            speaker: members[9],
                            pathway: 'Leadership Development',
                            level: 2,
                            project: 'Managing Time',
                            minTime: '5',
                            maxTime: '7',
                            title: 'Life on the Farm'
                        },
                    ],
                },
                {
                    text: 'Timer Report',
                    role: members[2],
                    duration: 2,
                    type: 'timeReport',
                },
                {
                    text: 'Vote for Best Speaker',
                    role: members[10],
                    duration: 2,
                    type: 'voteSpeaker',
                },
            ],
        },
        {
            lead: members[1],
            title: 'Table Topics',
            actions: [
                {
                    text: 'Introduces Table Topics',
                    duration: 1,
                    type: 'introTable',
                },
                {
                    text: 'Table Topics (1-2 minutes each)',
                    duration: 8,
                    type: 'tableTopics',
                },
                {
                    text: 'Timer Report',
                    role: members[2],
                    duration: 2,
                    type: 'timeReport',
                },
                {
                    text: 'Vote for Best Table Topics Speaker',
                    role: members[10],
                    duration: 2,
                    type: 'voteCounter',
                },
                {
                    text: 'Relinquish control to General Evaluator',
                    role: members[8],
                    duration: 2,
                    type: 'voteCounter',
                },
            ],
        },
        {
            lead: members[8],
            title: 'General Evaluator',
            actions: [
                {
                    text: 'Timer Report',
                    role: members[2],
                    duration: 1,
                    type: 'timeReport',
                },
                {
                    text: 'Cast vote for Best Evaluator',
                    role: members[10],
                    duration: 1,
                    type: 'voteEvaluator',
                },
                {
                    text: 'Ask for Grammarian Report',
                    role: members[11],
                    duration: 2,
                    type: 'timeReport',
                },
                {
                    text: 'Ask for Ah-Counter Report',
                    role: members[14],
                    duration: 2,
                    type: 'timeReport',
                },
                {
                    text: 'GE to conduct review of meeting (2-3 minutes)',
                    duration: 3,
                    type: 'timeReport',
                },
            ],
        },
        {
            lead: members[13],
            title: 'Awards',
            actions: [
                {
                    text: 'Present Awards',
                    duration: 2,
                    type: 'timeReport',
                },
                {
                    text: 'Final Comments',
                    duration: 2,
                    type: 'timeReport',
                },
            ],
        },
        {
            lead: members[16],
            title: 'Closing remarks',
            actions: [
                {
                    text: 'Guest comments',
                    duration: 2,
                    type: 'timeReport',
                },
                {
                    text: 'Final remarks',
                    duration: 2,
                    type: 'timeReport',
                },
            ],
        },
    ],
    nextMeetingRoles: {
        toastmaster: members[8],
        generalEvaluator: members[12],
        evaluators: [members[7], members[15], members[9]],
        speakers: [members[5], members[4], members[3]],
        timer: members[1],
        topicsmaster: members[2],
        ahCounter: members[11],
        grammarian: members[14],
        lexicologist: members[10],
        voteCounter: members[6],
    },
}

export default agenda