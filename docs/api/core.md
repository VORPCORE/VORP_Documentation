## VORP CORE

- note that player and user classes are cache handled, do not use sql calls to retrieve or set any data use what we provide unless you know what you are doing.

### Get Core
```lua
-- on the top of your client or server files
local VORPcore = exports.vorp_core:GetCore()
```
### CORE UI
- SERVER
```lua
    TriggerClientEvent("vorp:showUi", _source, false) --hide
```
- CLIENT
```lua
    TriggerEvent("vorp:showUi", true) --show
```

###  Notifications

- notifications can also accept -1 as duration to always stay on screen and to clear them you need to use [UiFeedClearChannel](https://rdr3natives.github.io/?_0xDD1232B332CBB9E7)

* CLIENT

```lua
-- can also use exports or declare notification file name in fxmanifest
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
VORPcore.NotifyLeftRank("title","subtitle","dict","icon",4000,"color")
```

* SERVER

```lua
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
 VORPcore.NotifyLeftRank(_source,"title","subtitle","dict","icon",4000,"color")
```

### Get Max Characters
<Badge type="tip" text="Server Side Only" />

```lua
---@return integer amount of characters from config
local maxChars = VORPcore.maxCharacters 
```
### User Class
<Badge type="tip" text="Server Side Only" />


```lua
---contains functions and information of the source
---@param source number
---@return table | func 
local user = VORPcore.getUser(source) --[[@as User]]
```

```lua
---@param charid number
---@return table user data 
local user = VORPcore.getUserByCharId(charid) --[[@as User]]
```

```lua
---@return string user group (not character group)
local UserGroup = User.getGroup 
```
```lua
---@return number user hours if enabled
local UserHours = User.hours
```
```lua
---@return integer user source
local userSource = User.source
```
- functions 

```lua
---@param string group
user.SetGroup(group)
```
```lua
---@return number steam id
local steam = user.getIdentifier()
```
```lua
---@return table all user characters
local data = user.getUserCharacters()
```
```lua
---@return number warning
local warnstatus = user.getPlayerwarnings() 
```


### Character Class
<Badge type="tip" text="Server Side Only" />

```lua
local user = VORPcore.getUser(source) --[[@as User]]  
if not user then return end -- is player in session?
local character = user.getUsedCharacter --[[@as Character]]
```
- Getters
```lua
character.identifier
character.charIdentifier
character.group
character.job
character.jobGrade
character.jobLabel
character.money
character.gold
character.rol
character.xp
character.firstname
character.lastname
character.status
character.coords
character.isdead
character.skin
character.comps
character.compTints
character.age
character.gender
character.charDescription
character.nickname
character.invCapacity 
character.skills ---@type table
```
- Setters

```lua
character.setJob("miner",flag) -- if flag is true then event job changhe wont be triggered
character.setJobGrade(1,flag)
character.setJobLabel("Miner")
character.setGroup("admin",flag)
character.setRol(1000)
character.setXp(5000)
character.setFirstname("Sadie")
character.setLastname("Adler")
character.updateSkin("need comps in json")
character.updateComps("need comps in json")
character.updateCompTints("need comps in json")
character.addCurrency(0, 1000) -- Add money 1000 | 0 = money, 1 = gold, 2 = rol
character.removeCurrency(0, 1000) -- Remove money 1000 | 0 = money, 1 = gold, 2 = rol
character.addXp(100)
character.removeXp(100)
character.setAge(45)
character.setCharDescription("string")
character.setNickName("string")
character.setGender("string")
character.updateInvCapacity(1) -- 35 + 1 or  35 - 1 its incremental 
character.setSkills("skillName",10) -- skillanme exp
```

### Instance routing buckets
<Badge type="warning" text="Client Side Only" /> 

- add

```lua
-- to add a players to different instances use his server id + instance number
-- to add players to same instance use only the instanceNumber
local instanceNumber = 54123 -- any number
VORPcore.instancePlayers(tonumber(GetPlayerServerId(PlayerId()))+ instanceNumber)
```
- remove
```lua
VORPcore.instancePlayers(0) 
```

### Whitelist

<Badge type="tip" text="Server Side Only" /> 

- Getters

```lua
--- get whitelist data
---@param identifier string
local data = VORPcore.Whitelist.getEntry(identifier)
print(json.encode(data),{ident = true})
```
- Setters
```lua
--- whitelisted user
---@param identifier string
VORPcore.Whitelist.whitelistUser(identifier)
```

```lua
--- remove from whitelist
---@param identifer string
 VORPcore.Whitelist.unWhitelistUser(identifier)
```

### AUTO DB updater 

<Badge type="tip" text="Server Side Only" />

* you can use this API to create tables or add columns to DB instead of an sql file or for future updates
* it will check once if they exist once ran
* `Server` side ony


```lua

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

<Badge type="tip" text="Shared" />

```lua
---@param title string 
---@param webhook string webhook link
---@param description string
---@param color? number embed color
---@param name? string embed name
---@param logo? string logo image link
---@param footerlogo? string link image
---@param avatar? string link  
VORPcore.AddWebhook(title, webhook, description, color, name, logo, footerlogo, avatar)

```

### Player
- Available through core export when using thse you will benefit of the events listeners

<Badge type="tip" text="Server Side Only" /> 

- Heal player

```lua
Core.Player.Heal(source)
```
- Revive Player

```lua
Core.Player.Revive(source)
```
- Respawn player

```lua
Core.Player.Respawn(source)
```

## RPC Callbacks

### Server
<Badge type="tip" text="Server Side Only" />

---
* ServerRpcCall Export
  * TriggerAwait
  * TriggerAsync
  * Register
---
```lua
-- top of your server file if you only need the callbacks
 local ServerRPC = exports.vorp_core:ServerRpcCall() --[[@as ServerRPC]] -- for intellisense
 -- or call core objcet
 local VORPcore = exports.vorp_core:GetCore()  -- contains callbacks as well

```

* Trigger Await Callback
```lua
--- Trigger a server callback Synchronously
---@param name string callback name
---@vararg ...? any parameters tables strings numbers etc
local result =  VORPcore.Callback.TriggerAwait(name,...)
print(result)
```
* Trigger Async Callback
```lua
--- trigger a server callback asynchronously
---@param name string callback name
---@param callback fun(result:any) callback function
---@vararg ...? any  parameters tables strings numbers etc
VORPcore.Callback.TriggerAsync(name, function(result)
  print(result)
 end, ...) 
```
* Register Callback
```lua
--- Register a callback
---@param name string callback name
---@param callback fun(source:number,callback:fun(cb:any), ...?:any)
 VORPcore.Callback.Register(name, function(source,callback,...)
   callback(...)
 end) 
```
### Client

<Badge type="tip" text="Client Side Only" />

---
* ClientRpcCall Export
  * TriggerAwait
  * TriggerAsync
  * Register
--- 

```lua
-- top of your client files if you need only call back system
local ClientRPC = exports.vorp_core:ClientRpcCall() --[[@as ClientRPC]] -- for intellisense
-- or get core object
local VORPcore = exports.vorp_core:GetCore()-- contains call backs as well

```
* Trigger Await Callback
```lua

--- Trigger a client callback Asynchronously
---@param name string callback name
---@param source number player source
---@vararg ...? any can send as many parameters as you want 
local result =  VORPcore.Callback.TriggerAwait(name,source, ...) 
```
* Trigger Async Callback
```lua
--- Trigger a client callback Synchronously
---@param name string callback name
---@param source number player source
---@param callback fun(result:any) callback function
---@vararg ...? any can send as many parameters as you want 
 VORPcore.Callback.TriggerAsync(name, source, function(result)
  print(result)
 end, ...) 
```
* Register Callback
```lua
---*Register a callback
---@param name string callback name
---@param callback fun(callback:fun(result:any), ...?:any) callback function
VORPcore.Callback.Register(name, function(callback,...)
 callback(...)
end)
```

## Event Listners

- when player job and group changes these events are triggered

<Badge type="tip" text="SERVER" />

```lua
-- group changed
AddEventHandler("vorp:playerGroupChange",function(source, newgroup,oldgroup) end)
-- job changed
AddEventHandler("vorp:playerJobChange", function(source, newjob,oldjob) end)
-- job grade changed
AddEventHandler("vorp:playerJobGradeChange",function(source, newjobgrade,oldjobgrade) end) 
```

- you can also listen for the statebag changes see bellow in the statebags section

<Badge type="tip" text="SHARED" />

- player dies this event is triggered

```lua
--CLIENT
AddEventHandler("vorp_core:Client:OnPlayerDeath",function(killerserverid,causeofdeath) end)

--SERVER
RegisterNetEvent("vorp_core:Server:OnPlayerDeath",function(killerserverid,causeofdeath) end)
```
-  player is revived through vorp core this event is triggered

```lua
--CLIENT
AddEventHandler("vorp_core:Client:OnPlayerRevive")

--SERVER
RegisterNetEvent("vorp_core:Server:OnPlayerRevive")

```
- player respawns through vorp core this event is triggered

```lua
--CLIENT
AddEventHandler("vorp:PlayerForceRespawn")

--SERVER
RegisterNetEvent("vorp:PlayerForceRespawn")

```
- player is healed through vorp core export (not events) this event will trigger

```lua
--client
RegisterNetEvent("vorp_core:Client:OnPlayerHeal")

--server
AddEventHandler("vorp_core:Server:OnPlayerHeal",function(source) end)
```

## Data View

### Client
  
```lua
 -- call dataview in your fxmanifest
 client_scripts {
    '@vorp_core/client/dataview.lua'
 }

```

## State Bags

state bags is a new feature in vorp core that allows to syncronise data between clients

### Client
  * Listen for this data when you want to know that a payer has choosen a character and is In Session or Job etc
  
```lua
-- listen to this in your client scripts 

LocalPlayer.state.IsInSession -- returns true if player have choosen a character
LocalPlayer.state.Character.FirstName 
LocalPlayer.state.Character.LastName
LocalPlayer.state.Character.Job 
LocalPlayer.state.Character.JobLabel 
LocalPlayer.state.Character.Grade  
LocalPlayer.state.Character.Group 
LocalPlayer.state.Character.Age 
LocalPlayer.state.Character.Gender
LocalPlayer.state.Character.NickName
LocalPlayer.state.Character.CharDescription
LocalPlayer.state.Character.Money
LocalPlayer.state.Character.Gold
LocalPlayer.state.Character.Rol
LocalPlayer.state.Character.CharId
```

## Version

- Use vorp version check with change logs feature

```lua
--- add this in your fxmanifest

-- version must match version.file
version '0.0.1'
-- check version
vorp_checker 'yes'
-- can use color codes ^1
vorp_name '^5your resource name ^4version Check^3' 
-- path to the github repository, in here it must have a version.file file type where your change logs will be
vorp_github 'https://github.com/repository/resource_name' 

--example
<0.0.1> -- version must be the same in fxmanifest
- new version
- added feature
- removed feature
- fixed something
--
```