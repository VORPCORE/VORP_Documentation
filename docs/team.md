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
        title: 'Core Developer',
        links: [
            { icon: 'github', link: 'https://github.com/Local9' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/10902965?v=4',
        name: 'Bytesizd',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/AndrewR3K' },
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
        avatar: 'https://cdn.discordapp.com/avatars/263296570588397579/258a8647af87e59ff4992b8c48b92162?size=1024',
        name: 'Hobbs',
        title: 'Moderator',
        links: []
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/603391306672111626/fcc52165597822da0047d199b5980f17?size=1024',
        name: 'NoTrHaN',
        title: 'Moderator',
        links: []
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/173378385043652608/d725921a367afc8a21e1f2568b20953d?size=1024',
        name: 'Marish',
        title: 'Support',
        links: []
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/389590964030668812/3ec3d25745311a98da2ee713365ac905?size=1024',
        name: 'Jannings',
        title: 'Support',
        links: []
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/837186684458106903/a_502141984e75916e0a49026d38706c40?size=1024',
        name: 'BigSmoke',
        title: 'Support',
        links: []
    }
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
