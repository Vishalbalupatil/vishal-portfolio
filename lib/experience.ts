export interface Experience {
  company: string
  role: string
  period: string
  bullets: string[]
  metrics?: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Ginco Technologies',
    role: 'Lead QA Engineer',
    period: 'Aug 2023 – Present',
    bullets: [
      'Mentored QA team and established strategy with CI integration',
      'Built API testing frameworks in Go, Java, and Python',
      'Drove defect triage improving release quality across multiple chains'
    ],
    metrics: ['↓ flakiness 40%', '↑ coverage 35%']
  },
  {
    company: 'PeopleGrove',
    role: 'Automation QA Engineer',
    period: 'Apr 2021 – Aug 2023',
    bullets: [
      'Maintained Java/Selenium/Cucumber framework',
      'Implemented device cloud execution and accessibility checks'
    ]
  },
  {
    company: 'Instamojo',
    role: 'QA Engineer',
    period: 'Mar 2020 – Apr 2021',
    bullets: [
      'Built Robot Framework UI/API automation from scratch',
      'Specialised in payments, payouts, taxes with Mixpanel checks'
    ]
  },
  {
    company: 'Innowave GDU',
    role: 'Automation/Salesforce QA',
    period: 'Dec 2018 – Feb 2021',
    bullets: [
      'Developed Java/Selenium framework and SOAP UI tests',
      'Solo tester for Volvo Billing QSS 2.0 (Salesforce CPQ)'
    ]
  }
]
