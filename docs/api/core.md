# VORP Core

## What is this?
VORPCore  is the master tool for all your projects. All scripts in the VORPCore Framework rely on this.

## API Docs


### Initiate Core

```lua
-- at the top of your file
local VORPcore = {}

TriggerEvent("getCore", function(core)
    VORPcore = core
end)

```

* The same Event above can be called from `client side` to be used for `the functions below`
  *  `Notifications`
  *  `CallBacks`
  *  `webhooks`

### Hide or show CORE UI

```lua
    -- from server side
    local _source = source
    TriggerClientEvent("vorp:showUi", _source, false) --hide

    -- from client side
    TriggerEvent("vorp:showUi", true) --show

```

### Notifications

* API for notifications `client` side

```lua
---------------------------------
-- at the top of your client side file
local VORPcore = {}

TriggerEvent("getCore", function(core)
    VORPcore = core 
end)

VORPcore.NotifyTip("title",4000)
VORPcore.NotifyLeft("title","subtitle","dict","icon",4000,"color")
VORPcore.NotifyRightTip("title",4000)
VORPcore.NotifyObjective("title",4000)
VORPcore.NotifyTop("title","location",4000)
VORPcore.NotifySimpleTop("title","subtitle",4000)
VORPcore.NotifyAvanced("title","dict","icon","color",4000)
VORPcore.NotifyCenter("title",4000)
VORPcore.NotifyBottomRight("title",4000)
VORPcore.NotifyFail("title","subtitle",4000)
VORPcore.NotifyDead("title","audioref","audioname",4000)
VORPcore.NotifyUpdate("title","subtitle",4000)
VORPcore.NotifyWarning("title","subtitle","audioref","audioname",4000)

```


* API for notifications `server` side

```lua
    ---------------------------------
    -- at the top of your client side
    local VORPcore = {}

    TriggerEvent("getCore", function(core)
        VORPcore = core
    end)

    local _source = source -- player source

    VORPcore.NotifyTip(_source,"title",4000)
    VORPcore.NotifyLeft(_source,"title","subtitle","dict","icon",4000,"color")
    VORPcore.NotifyRightTip(_source,"title",4000)
    VORPcore.NotifyObjective(_source,"title",4000)
    VORPcore.NotifyTop(_source,"title","location",4000)
    VORPcore.NotifySimpleTop(_source,"title","subtitle",4000)
    VORPcore.NotifyAvanced(_source,"title","dict","icon","color",4000)
    VORPcore.NotifyCenter(_source,"title",4000)
    VORPcore.NotifyBottomRight(_source,"title",4000)
    VORPcore.NotifyFail(_source,"title","subtitle",4000)
    VORPcore.NotifyDead(_source,"title","audioref","audioname",4000)
    VORPcore.NotifyUpdate(_source,"title","subtitle",4000)
    VORPcore.NotifyWarning(_source,"title","subtitle","audioref","audioname",4000)

```



### Get Max Characters
<Badge type="tip" text="Server Side Only" />

```lua
-- at the top of the server file
local VORPcore = {}

TriggerEvent("getCore", function(core)
    VORPcore = core
end)

-- this returns a number
local maxChars = VORPcore.maxCharacters 

```

### Get Users Data 
<Badge type="tip" text="Server Side Only" />

```lua
-- at the top of the server file
local VORPcore = {}

TriggerEvent("getCore", function(core)
    VORPcore = core
end)

local _source = source
-- contains functions and information from all characters
local User = VORPcore.getUser(_source)

-- Return user group (not character group)
local UserGroup = User.getGroup 

-- Return character selected by user
local Character = User.getUsedCharacter 
-- or
local Character = VORPcore.getUser(_source).getUsedCharacter

--Data you can get
Character.identifier
Character.charIdentifier
Character.group
Character.job
Character.jobGrade
Character.money
Character.gold
Character.rol
Character.xp
Character.firstname
Character.lastname
Character.status
Character.coords
Character.isdead
Character.skin
Character.comps

```

### Update/Set Character Data
<Badge type="tip" text="Server Side Only" />

* Set `functions`

```lua
-- at the top of the server file
local VORPcore = {}

TriggerEvent("getCore", function(core)
    VORPcore = core
end)

local _source = source

local Character = VORPcore.getUser(_source).getUsedCharacter

--Functions you can set using the API

Character.setJob("miner")
Character.setJobGrade(1)
Character.setGroup("admin")
Character.setMoney(1000.50)
Character.setGold(1000.20)
Character.setRol(1000)
Character.setXp(5000)
Character.setFirstname("Sadie")
Character.setLastname("Adler")
Character.updateSkin("need comps in json")
Character.updateComps("need comps in json")
Character.addCurrency(0, 1000) -- Add money 1000 | 0 = money, 1 = gold, 2 = rol
Character.removeCurrency(0, 1000) -- Remove money 1000 | 0 = money, 1 = gold, 2 = rol
Character.addXp(100)
Character.removeXp(100)

```

### Instance Players uising routing buckets
<Badge type="warning" text="Client Side Only" /> 

```lua
-- client side only
local VORPcore = {}

TriggerEvent("getCore", function(core)
    VORPcore = core
end)

-- to add a players to different instances use his server id + instance number
-- to add players to same instance use only the instanceNumber
local instanceNumber = 54123 -- any number
VORPcore.instancePlayers(tonumber(GetPlayerServerId(PlayerId()))+ instanceNumber)

-- to remove the player from instance
VORPcore.instancePlayers(0) 

```

### Whitelist
<Badge type="tip" text="Server Side Only" /> 

* get data from white list table

```lua
-- SERVER SIDE ONLY
local VORPWhitelist = {}

TriggerEvent("getWhitelistTables", function(cb)
    VORPWhitelist = cb
end)


-- userStaticID this is a static ID used to whitelist/unwhitelist or ban/unban
-- needs identifier
local getid = VORPwl.getEntry(identifier).getId() 

-- whitelisted returns true or false
-- needs identifier
local getstatus = VORPwl.getEntry(identifier).getStatus() 

--get players warnings
-- use the API core to get source data
local _source = source 
local User = VorpCore.getUser(_source)
local warnstatus = User.getPlayerwarnings() 

```

### AUTO DB updater 
<Badge type="tip" text="Server Side Only" />

* you can use this API to create tables or add columns to DB instead of an sql file or for future updates
* it will check once if they exist once ran
* `Server` side ony


```lua

-- top at server side
local VORPcore = {}

TriggerEvent("getCore", function(core)
    VORPcore = core
end)
-- example of how to create tables
-- it only does this once
local Tables = {
    {
        name = "loadout",
        script = "vorp_inventory",
        sql = [[
            CREATE TABLE IF NOT EXISTS `loadout` (
                `id` INT(11) NOT NULL AUTO_INCREMENT,
                `identifier` VARCHAR(50) NOT NULL,
                `charidentifier` INT(11) NULL,
                `name` VARCHAR(50) NULL DEFAULT NULL,
                `ammo` VARCHAR(255) NOT NULL DEFAULT '{}',
                `components` VARCHAR(255) NOT NULL DEFAULT '[]',
                `dirtlevel` DOUBLE NULL DEFAULT 0,
                `mudlevel` DOUBLE NULL DEFAULT 0,
                `conditionlevel` DOUBLE NULL DEFAULT 0,
                `rustlevel` DOUBLE NULL DEFAULT 0,
                `used` TINYINT(4) NULL DEFAULT 0,
                PRIMARY KEY (`id`),
                INDEX `id` (`id`)
            )
            COLLATE='utf8mb4_general_ci'
            ENGINE=InnoDB
            AUTO_INCREMENT=2;
        ]]
    },
    {
        name = "items",
        script = "vorp_inventory",
        sql = [[
            CREATE TABLE IF NOT EXISTS `items` (
                `item` VARCHAR(50) NOT NULL,
                `label` VARCHAR(50) NOT NULL,
                `limit` INT(11) NOT NULL DEFAULT 1,
                `can_remove` TINYINT(1) NOT NULL DEFAULT 1,
                `type` VARCHAR(50) NULL DEFAULT NULL,
                `usable` TINYINT(1) NULL DEFAULT NULL,
                PRIMARY KEY (`item`) USING BTREE
            )
            COLLATE='utf8mb4_general_ci'
            ENGINE=InnoDB
            ROW_FORMAT=DYNAMIC;
        ]]
    }
}
-- example on how to create a missing columns in Tables
local Updates = {
    {
        name = "dropped",
        script = "vorp_inventoryv",
        find = [[
            select *
            from Information_Schema.Columns
            where Table_Name = 'loadout'
            AND  Column_Name = 'dropped';
        ]],
        sql =  [[
            ALTER TABLE `loadout` ADD COLUMN `dropped` INT(11) NOT NULL DEFAULT 0;
        ]]
    },
    
    {
        name = "desc",
        script = "vorp_inventoryv",
        find = [[
            select *
            from Information_Schema.Columns
            where Table_Name = 'items'
            AND  Column_Name = 'desc';
        ]],
        sql =  [[
            ALTER TABLE `items` ADD COLUMN `desc` VARCHAR(5550) NOT NULL DEFAULT 'nice item';
        ]]
    }
}


-- DB Updater
Citizen.CreateThread(function()
   VORPcore.dbUpdateAddTables(Tables)
   VORPcore.dbUpdateAddUpdates(Updates)

end)

```
### Webhooks
* Send a message from your `client` or `server` side  to a webhook to your discord

```lua

VorpCore.AddWebhook(title, webhook, description, color, name, logo, footerlogo, avatar)

```

| Parameter | Type   | Description                                                  | Required ? |
|-----------|--------|--------------------------------------------------------------|------------|
| title     | String | title of webhhok                                             | True       |
| webhhok   | String | link of the channel webhook                                  | True       |
| description | String | description of the action logged                           | True       |
| color     | number | color of the embed                                           | false       |
| name      | string | name of the webhook                                          | false       |
| logo      | string | link of the image                                            | false      |
| footerlogo | string | link of the image                                           | false       |
| avatar     | string | link of the image                                           | false      |

### API character played hours
<Badge type="tip" text="Server Side Only" />

* this will return the character played hours that is saved in the database

```lua
local User = VorpCore.getUser(_source)
   print(User.hours)
```



### Call Backs
* you can call back from server to client using the API

```lua

-- top at client side
local VORPcore = {}

TriggerEvent("getCore", function(core)
    VORPcore = core
end)

 VORPcore.RpcCall("RPCcallbackname", function(result) -- asyncronouns 

   if result then
     -- run code
    else
      -- run code
   end

   local args = true  --can be a table string or number
 end,args) -- you can send extra arguments 



```

| Parameter | Type   | Description                                                  | Required ? |
|-----------|--------|--------------------------------------------------------------|------------|
| args      | Any    | send  paramenters                                            | false       |




* Server Side

```lua

local VORPcore = {}

TriggerEvent("getCore", function(core)
    VORPcore = core
end)

VORPcore.addRpcCallback("RPCcallbackname", function(source, cb, args)

local _source = soure

    if not args then 
        cb(false)
    end

    cb(true)

end)


```