---
layout: page
title: Team
# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: VORPCore Docs
  - - meta
    - property: og:image
      content: https://avatars.githubusercontent.com/u/64416274?s=200&v=4
  - - meta
    - name: title
      content: VORPCore Docs
  - - meta
    - name: twitter:card
      content: https://avatars.githubusercontent.com/u/64416274?s=200&v=4
  - - link
    - rel: icon
      type: image/png
      href: logo.png
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const developers = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/62485293?v=4',
        name: 'Blue',
        title: 'Owner',
        links: [
            { icon: 'github', link: 'https://github.com/kamelzarandah' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/87246847?v=4',
        name: 'Outsider',
        title: 'Project Manager',
        links: [
            { icon: 'github', link: 'https://github.com/outsider31000' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/6077794?v=4',
        name: 'Local9',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/Local9' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/1690916?v=4',
        name: 'BlackPegasus',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/creativewild' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/79701428?v=4',
        name: 'Yourgen',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/YourgenAP' },
        ]
    }
]
const staff = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/101003021?v=4',
        name: 'Hobbs',
        title: 'Moderator',
        links: [
          {icon: 'github',link: "https://github.com/DerHobbs" }
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/26008458?v=4',
        name: 'Real Stoner Gamer',
        title: 'Support',
        links: [
          {icon: 'github',link: "https://github.com/RealStonerGamer"}
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/142943445?v=4',
        name: 'Castle',
        title: 'Support',
        links: [
          {icon: 'github',link: "https://github.com/edrhawk"}
        ]
    },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Developers</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="developers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Staff</template>
    <template #lead></template>
    <template #members>
      <VPTeamMembers size="medium" :members="staff" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
