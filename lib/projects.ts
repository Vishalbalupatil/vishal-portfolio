export interface Project {
  title: string
  pitch: string
  role: string
  stack: string[]
  outcome: string
  links?: { github?: string; demo?: string }
}

export const projects: Project[] = [
  {
    title: 'Chain Wallet QA Suite',
    pitch: 'Automated testing for multi-chain wallet APIs',
    role: 'Lead QA',
    stack: ['Go', 'Python', 'CI'],
    outcome: 'Enabled nightly regression across 10+ networks',
    links: { github: '#', demo: '#' }
  },
  {
    title: 'PeopleGrove UI Regression',
    pitch: 'Reusable Selenium+Cucumber framework',
    role: 'Automation Engineer',
    stack: ['Java', 'Selenium', 'Cucumber'],
    outcome: 'Cut manual regression by 60%',
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Instamojo Payments',
    pitch: 'Robot Framework tests for web and mobile',
    role: 'QA Engineer',
    stack: ['Robot', 'Python', 'Appium'],
    outcome: 'Improved release cadence for checkout flow',
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Volvo Billing QSS',
    pitch: 'Salesforce CPQ automation',
    role: 'Automation QA',
    stack: ['Java', 'Selenium', 'SoapUI'],
    outcome: 'Supported remote team as sole tester',
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Web3 Wallet Monitoring',
    pitch: 'Dashboard for on-chain health metrics',
    role: 'Lead QA',
    stack: ['React', 'TypeScript'],
    outcome: 'Realtime alerts reduced downtime',
    links: { github: '#', demo: '#' }
  },
  {
    title: 'Accessibility Checker',
    pitch: 'AXE/NVDA integration for CI',
    role: 'Automation QA',
    stack: ['Node', 'Axe', 'CI'],
    outcome: 'Ensured WCAG compliance in builds',
    links: { github: '#', demo: '#' }
  }
]
