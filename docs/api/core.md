## VORP CORE

```lua
-- on the top of your client or server files
local VORPcore = exports.vorp_core:GetCore() -- NEW includes  new callback system
```
### CORE UI

```lua
    -- from server side
    TriggerClientEvent("vorp:showUi", _source, false) --hide

    -- from client side
    TriggerEvent("vorp:showUi", true) --show

```

###  Notifications

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
-- this returns a number from vorp core config
local maxChars = VORPcore.maxCharacters 

```
### Get User Data
<Badge type="tip" text="Server Side Only" />

```lua
---contains functions and information from source
---@param source number
---@return table | func 
function VORPcore.getUser(source) end
```
```lua
---@param charid number
---@return table user data 
function VORPcore.getUserByCharId(charid) end
```

```lua
local User = VORPcore.getUser(source) 
local UserGroup = User.getGroup --Returns user group (not character group)
local UserHours = User.hours
local userSource = User.source
local userCharacter = User.getUsedCharacter -- returns character data

-- functions
User.SetGroup(group)
User.getIdentifier()
User.getUserCharacters()
```


### Character Data 
<Badge type="tip" text="Server Side Only" />

```lua
-- contains functions and information from source
local Character = VORPcore.getUser(source).getUsedCharacter 

--Data you can get
Character.identifier
Character.charIdentifier
Character.group
Character.job
Character.jobGrade
Character.jobLabel
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
Character.compTints
Character.age
Character.gender
Character.charDescription
Character.nickname

```

### Character functions
<Badge type="tip" text="Server Side Only" />

* Set `functions`

```lua

local Character = VORPcore.getUser(_source).getUsedCharacter

Character.setJob("miner")
Character.setJobGrade(1)
Character.setJobLabel("Miner")
Character.setGroup("admin")
Character.setRol(1000)
Character.setXp(5000)
Character.setFirstname("Sadie")
Character.setLastname("Adler")
Character.updateSkin("need comps in json")
Character.updateComps("need comps in json")
Character.updateCompTints("need comps in json")
Character.addCurrency(0, 1000) -- Add money 1000 | 0 = money, 1 = gold, 2 = rol
Character.removeCurrency(0, 1000) -- Remove money 1000 | 0 = money, 1 = gold, 2 = rol
Character.addXp(100)
Character.removeXp(100)
Character.setAge(45)
Character.setCharDescription("string")
Character.setNickName("string")
Character.setGender("string")

```

### Instance Players uising routing buckets
<Badge type="warning" text="Client Side Only" /> 

```lua
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
local User = VORPcore.getUser(_source)
local warnstatus = User.getPlayerwarnings() 

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
* Send a message from your `client` or `server` side  to a webhook to your discord

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

### Server
```lua
-- group changed
AddEventHandler("vorp:playerGroupChange",function(source, group)
end)
-- job changed
AddEventHandler("vorp:playerJobChange", function(source, job) 
end)
-- job grade changed
AddEventHandler("vorp:playerJobGradeChange",function(source, jobgrade)
end) 

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

LocalPlayer.state.IsInSession -- returns a boolean if player have choosen a character
LocalPlayer.state.Character.FirstName 
LocalPlayer.state.Character.LastName
LocalPlayer.state.Character.Job 
LocalPlayer.state.Character.JobLabel 
LocalPlayer.state.Character.Grade  
LocalPlayer.state.Character.Group 
LocalPlayer.state.Character.Age 
LocalPlayer.state.Character.Gender
LocalPlayer.state.Character.CharDescription
LocalPlayer.state.Character.Money
LocalPlayer.state.Character.Gold
```

## Deprecated

:::warning
this will be removed from the docs use the above from now on as its the only supported callbacks they will still work ofc.
:::

```lua
-- at the top of your server file or client 
local VORPcore = {} -- core object

TriggerEvent("getCore", function(core)
    VORPcore = core
end)

```

* CLIENT
```lua
 --- Trigger Rpc callback
 ---@param name string callback name
 ---@param callback fun(result:any) result 
 ---@param args? any extra arguments
 VORPcore.RpcCall(name,function(result) -- asynchronous 
   print(result)
 end,args) -- you can send extra arguments 
```
* SERVER
```lua
---@param name string callback name
---@param callback fun(source:number, cb: fun(any), args:any)
VORPcore.addRpcCallback("RPCcallbackname", function(source, cb, args) 
  return cb(any) 
end)
```
