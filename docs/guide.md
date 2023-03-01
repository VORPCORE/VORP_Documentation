---
layout: doc
title: Get Started
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

# **GETTING STARTED!!**
## REQUIRMENTS TO RUN A VORP SERVER

### Install the following

- RDR2 or RDO both works for RedM
- login to steam
- login to rockstars launcher *all the time*


:::tip
**RDO** its cheaper!
:::

### Download the following


- [`MariaDB`](https://mariadb.org/download) For **connecting** to the databse

- [`HEIDI SQL`](https://www.heidisql.com/download.php) to **manage** the databse *mysql is not supported*


:::warning
**MARAIA DB** is what we support
:::


## **HOSTING YOUR SERVER**

- choose a **Windows VPS** to host your server. 
- [`GOOGLE IT`](https://www.google.com/search?q=vps+hosting&rlz=1C1CHBF_enUS820US820&sxsrf=ALiCzsbw4IXfBkhZI3siiolIbxWZaEdH_w%3A1654624249367&ei=-Y-fYsyCFsWD8gKjl5DQDw&ved=0ahUKEwiM4_rU85v4AhXFgVwKHaMLBPoQ4dUDCA4&uact=5&oq=vps+hosting&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6CggAEOQCELADGAE6EgguEMcBENEDEMgDELADEEMYAjoHCAAQsQMQQzoLCC4QgAQQxwEQrwE6CgguEMcBENEDEENKBAhBGABKBAhGGAFQjwNYlw1g1w5oAXABeACAAV-IAc8EkgEBOJgBAKABAcgBE8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz) *if intrested to have your vps service here contact us*

:::warning
we support only **WINDOWS** linux is not supported
:::

## INSTALLATION

- A **premade server** can be found bellow.
- [`download`](https://github.com/VORPCORE/vorp_pre-made) 

##### CONFIGURATION & PERMISSIONS



Edit the **server.cfg** found at 📁``server/server.cfg``

* if you dont edit this your server will not work
```lua
 sv_licenseKey ""
 steam_webApiKey ""
 sv_hostname "my server" 
 sv_projectDesc "my project"
 sv_maxclients 48 --with onesync on 

```


##### Permissions & TX Admin
---


- install MariadDB for your databse or `xampp`

- install and run   **HeidiSQL** the SQL file  `MariaDB.sql` found in the directory of the [`premade`](https://github.com/VORPCORE/vorp_pre-made) server

- create where it says **New** any name you want

![image](./public/guide/database.jpg)

![image](./public/guide/database_a.jpg)


- then run the file
- **ignore the warnings!**


- start `FXServer.exe` and it will open a web browser to install **TX admin** follow the options. and your server should start


![image](./public/guide/fxserver.jpg)



![image](./public/guide/database_b.jpg)


- done your server is installed



:::tip
 NOTE: some of the plug-ins from the [`premade`](https://github.com/VORPCORE/vorp_pre-made) are not updated make sure to check [`VORP GitHub`](https://github.com/VORPCORE) to update them.
:::

---

## DISCLAIMER

- VORP does not guarantee any support or that any script will work


