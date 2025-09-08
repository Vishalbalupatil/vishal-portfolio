export type SkillCategory = {
  name: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Automation/Frameworks',
    items: ['Selenium', 'Appium', 'Cucumber', 'TestNG', 'JUnit', 'Robot Framework', 'Cypress', 'Pytest']
  },
  {
    name: 'Languages',
    items: ['Java', 'Python', 'Go', 'JavaScript', 'TypeScript']
  },
  {
    name: 'API/Tools',
    items: ['REST Assured', 'Postman', 'SoapUI', 'Swagger', 'Mixpanel', 'Extent Reports']
  },
  {
    name: 'CI/CD & DevOps',
    items: ['Jenkins', 'CircleCI', 'Docker', 'Kubernetes', 'GitHub', 'Bitbucket']
  },
  {
    name: 'Cloud',
    items: ['AWS', 'GCP', 'Azure']
  },
  {
    name: 'Blockchain/Web3',
    items: ['Ethereum', 'Polygon', 'Hedera', 'Algorand', 'Avalanche', 'Cosmos', 'ERC-20', 'Wallets', 'DApps']
  }
]
