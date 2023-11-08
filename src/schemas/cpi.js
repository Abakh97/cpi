const cpiSchema = {
  title: "Care Predictor Index Survey",
  description:
    "Please fill out the following survey to determine your Care Predictor Index",
  completedHtml: "Thank you so much for completing the Care Predictor Index",

  pages: [
    {
      name: "NamePronoun",
      title: "What is your first and last name?",
      elements: [
        {
          type: "text",
          name: "fname",
          title: "First Name",
          isRequired: false
        },
        {
          type: "text",
          name: "lname",
          title: "Last Name",
          isRequired: false
        },
        {
          type: "radiogroup",
          name: "pronouns",
          title: "What are your preferred pronouns?",
          isRequired: false,
          choices: [
            "She/Her/Hers",
            "He/Him/His",
            "They/Them/Theirs",
            "I perfer not to say"
          ]
        }
      ]
    },
    {
      name: "CPIP1",
      title:
        "How confident are you that you could use these general skills effectively with most clients over the next week?",
      description:
        "The following questionnaire consists of three parts. Each part asks about your beliefs about your ability to perform various counselor behaviors or to deal with particular issues in counseling. We are looking for your honest, candid responses that reflect your beliefs about your current capabilities, rather than how you would like to be seen or how you might look in the future. There are no right or wrong answers to the following questions. Please indicate how confident you are in your ability to use each of the following helping skills effectively, over the next week, in counseling most clients. ",
      elements: [
        {
          type: "rating",
          name: " Attending",
          title: "Attending (orient yourself physically toward the client).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: " Lisenting",
          title:
            "Listening (capture and understand the messages that clients communicate).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: " Restatements",
          title:
            "Restatements (repeat or rephrase what the client has said, in a way that is succinct, concrete, and clear).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: " Open Questions",
          title:
            "Open questions (ask questions that help clients to clarify or explore their thoughts or feelings).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: " Reflections",
          title:
            "Reflection of feelings (repeat or rephrase the client’s statements with an emphasis on his or her feelings).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "Self-Disclosure Exploration",
          title:
            "Self-disclosure for exploration (reveal personal information about your history, credentials, or feelings).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "Intentional Silence",
          title:
            "Intentional silence (use silence to allow clients to get in touch with their thoughts or feelings).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: " Challenges",
          title:
            "Challenges (point out discrepancies, contradictions, defenses, or irrational beliefs of which the client is unaware or that he or she is unwilling or unable to change).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "Interpretations",
          title:
            "Interpretations (make statements that go beyond what the client has overtly stated and that give the client a new way of seeing his or her behavior, thoughts, or feelings).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "Self-Disclosure Insight",
          title:
            "Self-disclosures for insight (disclose past experiences in which you gained some personal insight).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: " Immediacy",
          title:
            "Immediacy (disclose immediate feelings you have about the client, the therapeutic relationship, or yourself in relation to the client).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "Imformation Giving",
          title:
            "Information giving (teach or provide the client with data, opinions, facts, resources, or answers to questions).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "Direct Guidance",
          title:
            "Direct guidance (give the client suggestions, directives, or advice that imply actions for the client to take).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "Role-Play",
          title:
            "Role-play and behavior rehearsal (assist the client to role-play or rehearse behaviors in session).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: " Homework",
          title:
            "Homework (develop and prescribe therapeutic assignments for clients to try out between sessions).",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        }
      ]
    },
    {
      name: "CPIP2",
      elements: [
        {
          type: "rating",
          name: "Keep sessions on track and focused.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name:
            "Respond with the best helping skill, depending on what your client needs at a given moment.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name:
            "Help your client to explore his or her thoughts, feelings, and actions.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name:
            "Help your client to talk about his or her concerns at a deep level.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "Know what to do or say next after your client talks.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "Help your client to set realistic counseling goals.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name:
            "Help your client to understand his or her thoughts, feelings, and actions.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name:
            "Build a clear conceptualization of your client and his or her counseling issues.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name:
            "Remain aware of your intentions (i.e., the purposes of your interventions) during sessions.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name:
            "Help your client to decide what actions to take regarding his or her problems.",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        }
      ]
    },
    {
      name: "CPIP3",
      elements: [
        {
          type: "rating",
          name: ". . . is clinically depressed",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: ". . . has been sexually abused",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: ". . . is suicidal",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name:
            ". . . has experienced a recent traumatic life event (e.g., physical or psychological injury or abuse)",
          isRequired: true,
          rateCount: 9,
          rateMax: 9,
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: ". . . is extremely anxious",
          isRequired: true
        },
        {
          type: "rating",
          name: ". . . shows signs of severely disturbed thinking",
          isRequired: true
        },
        {
          type: "rating",
          name: ". . . you find sexually attractive",
          isRequired: true
        },
        {
          type: "rating",
          name:
            ". . . is dealing with issues that you personally find difficult to handle",
          isRequired: true
        },
        {
          type: "rating",
          name:
            ". . . has core values or beliefs that conflict with your own (e.g., regarding religion, gender roles)",
          isRequired: true
        },
        {
          type: "rating",
          name:
            ". . . differs from you in a major way or ways (e.g., race, ethnicity, gender, age, social class)",
          isRequired: true
        },
        {
          type: "rating",
          name: ". . . is not “psychologically minded” or introspective",
          isRequired: true
        },
        {
          type: "rating",
          name: ". . . is sexually attracted to you",
          isRequired: true
        },
        {
          type: "rating",
          name:
            ". . . you have negative reactions toward (e.g., boredom, annoyance)",
          isRequired: true
        },
        {
          type: "rating",
          name: ". . . is at an impasse in therapy",
          isRequired: true
        },
        {
          type: "rating",
          name:
            ". . . wants more from you than you are willing to give (e.g., in terms of frequency of contacts or problem-solving prescriptions)",
          isRequired: true
        },
        {
          type: "rating",
          name: ". . . demonstrates manipulative behaviors in session",
          isRequired: true
        }
      ]
    },
    {
      name: "CPIP3",
      elements: [
        {
          type: "rating",
          name: "I find it relatively easy to get close to others",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I’m not very comfortable having to depend on other people",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I’m comfortable having others depend on me",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I rarely worry about being abandoned by others",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I don’t like people getting too close to me",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I’m somewhat uncomfortable being too close to others",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I find it difficult to trust others completely",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I’m nervous whenever anyone gets too close to me",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name:
            "Others often want me to be more intimate than I feel comfortable being",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "Others often are reluctant to get as close as I would like",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I often worry that my partner(s) don’t really love me",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I rarely worry about my partner(s) leaving me",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name:
            "I often want to merge completely with others, and this desire sometimes scares them away",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name:
            "I’m confident others would never hurt me by suddenly ending our relationship",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "I usually want more closeness and intimacy than others do",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name: "The thought of being left by others rarely enters my mind",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        },
        {
          type: "rating",
          name:
            "I’m confident that my partner(s) love me just as much as I love them",
          isRequired: true,
          autogenerate: false,
          minRateDescription: "I strongly disagree",
          maxRateDescription: "I strongly agree",
          rateCount: 5
        }
      ]
    },
    {
      name: "CPIP4",
      elements: [
        {
          type: "rating",
          name: "Rarely worry.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Often eat too much.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Usually like to spend my free time with people.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Take Charge.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am always busy.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Radiate Joy.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Do not like poetry.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Distrust people.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name:
            "Tell other people what they want to hear so that they will do what I want them to do.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Anticipate the needs of others.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Believe that I am better than others.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Sympathize with the homeless.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Keep things tidy.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am a highly disciplined person.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Jump into things without thinking.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Admire a really clever scam.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Like to own things that impress people.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Try to be with someone else when I'm feeling badly.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Feel others’ emotions.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Talk a lot.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Try to avoid speaking in public.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am usually active and full of energy.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am patient with people who annoy me.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am easily annoyed.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Push myself very hard to succeed.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Do not like art.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        }
      ]
    },
    {
      name: "CPIP5",
      elements: [
        {
          type: "rating",
          name: "Love to hear about other countries and cultures.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am considered to be kind of eccentric.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Worry about what people think of me.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am very shy in social situations.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Don't have much energy.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Have frequent mood swings.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Hold a grudge.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Like to act on a whim.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name:
            "Have felt the presence of another person when he or she was not really there.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name:
            "Seem to derive less enjoyment from interacting with people than others do.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Love to be the center of attention.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Don't let others cut in front of me in line.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Insist that others do things my way.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am a firm believer in thinking things through.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Dislike changes.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Read a large variety of books.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Love excitement.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Would rather spend money than save it.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Enjoy being reckless.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Have never cared much about what others thought of me.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name:
            "Usually get right to work on something that needs to be done as soon as I think of it.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Often have the feeling that others laugh or talk about me.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Try to forgive and forget.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Feel little concern for others.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Do things out of revenge.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        }
      ]
    },
    {
      name: "CPIP5",
      elements: [
        {
          type: "rating",
          name: "Was a better than average student when I was in school.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Felt close to my parents when I was a child.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Feel a sense of worthlessness or hopelessness.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am interested in science.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Believe that most questions have one right answer.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Tend to feel happy and irritable at the same time.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Believe it is always better to be safe than sorry.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Rarely get irritated.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Wanted to run away from home when I was a child.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Often enjoy telling jokes or behaving in a humorous manner.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Make enemies.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am fascinated by how machines work.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Disliked math in school.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Have a rich vocabulary.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Like to read.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Don't care about dressing nicely.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Worry about things.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am easily intimidated.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Love large parties.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Seldom daydream.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Crave the experience of great art.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Feel sympathy for those who are worse off than myself.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Use my charm to get attention.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Avoid activities that are physically dangerous.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Immediately feel sad when hearing of an unhappy event.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        }
      ]
    },
    {
      name: "CPIP6",
      elements: [
        {
          type: "rating",
          name:
            "Can make myself work on a difficult task even when I don't feel like trying.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Pay too little attention to details.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Do not like to visit museums.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Have no special urge to do something original.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Have difficulty showing affection.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Find it easy to manipulate others.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Cannot imagine lying or cheating.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Talk to a lot of different people at parties.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Dislike having authority over others.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Often forget to put things back in their proper place.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Act without consulting others.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Like to visit new places.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Have time for play and relaxation.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am open to new experiences.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Don't care what others think.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am not sure where my life is going.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Would like to have more power than other people.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am skilled in handling social situations.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Try to avoid complex people.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "See myself as a good leader.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Avoid crowds.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am not good at telling jokes.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Don't use harsh language.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am able to fix electrical-wiring problems.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Enjoy games of strategy.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        }
      ]
    },
    {
      name: "CPIP7",
      elements: [
        {
          type: "rating",
          name: "Was a slow learner in school.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Often stop to analyze how I'm feeling.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Get deeply immersed in music.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Like to solve complex problems.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am concerned about others.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Like to tidy up.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Don't feel the need to be close to others.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Love my enemies.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Have an imagination that stretches beyond that of my friends.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Find it difficult to organize tasks and activities.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Like being the authority who has everyone's attention.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Have attacked someone physically.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Like to stand out in a crowd.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name:
            "Get upset if others change the way that I have arranged things.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Want things to proceed according to plan.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am often in a bad mood.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Want to be the very best.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Feel used by other people.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am able to control my cravings.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Know what to say to make people feel good.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Get so involved with things that I forget the time.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Am often bored.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Demand attention.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Want everything to be 'just right.'",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        },
        {
          type: "rating",
          name: "Have difficulty showing affection.",
          isRequired: true,
          autogenerate: false,
          rateCount: 5,
          rateValues: [
            "Very Inaccurate",
            "Moderately Inaccurate",
            "Neither Accurate Nor Inaccurate",
            "Moderately Accurate",
            "Very Accurate"
          ]
        }
      ]
    },
    {
      name: "CPIP8",
      elements: []
    },
    {
      name: "CPIP9",
      elements: []
    },
    {
      name: "CPIP10",
      elements: []
    }
  ]
};

export default cpiSchema;
