# VORP inventory documentation
extensive documentation to help build your scripts


# Exports 

<Badge type="tip" text="Server Side Only" />

## Items 

```lua
--- check item limit and inv limit in one function
---@param source integer player id
---@param item string item name
---@param amount number amount of item
---@param callback fun(canCarry:boolean)? callback function sync or async
---@return boolean
exports.vorp_inventory:canCarryItem(source, item, amount, callback) 
```
```lua
---@alias itemdata {id:number, label:string, name:string, metadata:table, group:number, type:string, count:number, limit:number,canUse:boolean}
--- gets user inventory items
---@param source integer player id
---@param callback fun(itemdata:table)? callback function sync or async
---@return table
exports.vorp_inventory:getUserInventoryItems(source, callback) 
```

```lua
---@alias itemdata {source:number, item:{metadata:table , mainid:number, description:string},id:number,label:string}
---@param item string unique item name
---@param callback fun(itemdata)
exports.vorp_inventory:registerUsableItem(item, callback) 
```
```lua
--- get item amount (syncrounous)
---@param source integer player id
---@param callback func(itemCount: number)? callback function sync leave nil or async add func
---@param item string item name
---@param metadata table item metadata
---@return number
exports.vorp_inventory:getItemCount(source, callback, item,metadata) 
```
```lua
--- get item amount by name
---@param source integer player id
---@param item string item name
---@param callback fun(item:table)? callback function sync or async
---@return table item data
exports.vorp_inventory:getItemByName(source, item, callback) 
```
```lua
--- get item containing metadata
---@param source integer player id
---@param item string item name
---@param metadata table item metadata
---@param callback fun(item:table)? callback function sync or async
---@return table item data
exports.vorp_inventory:getItemContainingMetadata(source, item, metadata, callback) 
```
```lua
--- get item matching metdata
---@param source integer player id
---@param item string item name
---@param metadata table item metadata
---@param callback fun(item:table)? callback function sync or async
---@return table item data
exports.vorp_inventory:getItemMatchingMetadata(source, item, metadata, callback) 
```
```lua
--- get DB item
---@param item string item name
---@param callback fun(item:table)? callback function async or sync leave nil
---@return table| nil item data
exports.vorp_inventory:getItemDB(item, callback) 
```

```lua
--- add item to user
---@param source integer player id
---@param item string item name
---@param amount number amount of item
---@param callback fun(boolean:boolean)? callback function sync or async
---@param metadata table item metadata
---@return boolean 
exports.vorp_inventory:addItem(source, item, amount, metadata,callback) 
```
```lua
---@alias itemdata {id:number, label:string, name:string, metadata:table, group:number, type:string, count:number, limit:number,canUse:boolean}
--- get item by main id
---@param source integer player id
---@param mainid number main id
---@param callback fun(itemdata:table)? callback function sync or async
---@return table item data
exports.vorp_inventory:getItemByMainId(source, mainid, callback) 
```
```lua
--- sun item by item id
---@param source integer player id
---@param id number item id
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:subItemID(source, id, callback) 
```
```lua
--- sub item
---@param source integer player id
---@param item string item name
---@param amount number amount of item
---@param metadata table item metadata
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:subItem(source, item, amount, metadata, callback) 
```
```lua
--- set item metadata
---@param source integer player id
---@param itemId number item id
---@param metadata table `{ description:string?, image:string?}` **description** and **image** are reserved keys if they are not defined they will be ignored, image is the image name to apply
---@param amount number amount of item
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:setItemMetadata(source, itemId, metadata, amount, callback) 
```
```lua
--- get item data
---@param source integer player id
---@param item string item name
---@param callback fun(item:table)|nil callback function sync or asyn
---@param metadata table? item metadatac
---@return table item data
exports.vorp_inventory:getItem(source, item,callback, metadata) 
```
## Weapons

```lua
--- get all user ammo
---@param player integer source
---@param cb fun(ammo: table)? async or sync callback
---@return table
exports.vorp_inventory:getUserAmmo(source)
```

```lua
--- can carry weapons
---@param source integer player id
---@param amount number amount of weapons
---@param callback fun(canCarry: boolean)? callback function sync or async
---@param weaponName string | number weapon name or hash its needed to check weight since 3.6
---@return boolean
exports.vorp_inventory:canCarryWeapons(source, amount,callback, weaponName) 
```
```lua
---@alias weapondata {id:number,name:string,propietary:string,used:boolean,desc:string,group:number,source:number,label:string,serial_number:string,custom_label:string,custom_desc:string}
--- get user inventory weapon
---@param source integer player id
---@param callback fun(weapondata:table)? callback function sync or async
---@param weaponId number weapon id
---@return table weapondata
exports.vorp_inventory:getUserWeapon(source, callback,weaponId) 
```
```lua
---@alias weapondata {id:number,name:string,propietary:string,used:boolean,desc:string,group:number,source:number,label:string,serial_number:string,custom_label:string,custom_desc:string}
--- get user inventory weapons
---@param source integer player id
---@param callback fun(weapondata:table)? callback function sync or async
---@return table weapondata
exports.vorp_inventory:getUserInventoryWeapons(source, callback) 
```
```lua
--- get weapon bullets
---@param source integer player id
---@param weaponID number weapon id
---@param callback fun(ammo:number)? callback function sync or async
---@return number weapon ammo
exports.vorp_inventory:getWeaponBullets(source,weaponID, callback) 
```
```lua
--- remove all user ammo
---@param source integer player id
exports.vorp_inventory:removeAllUserAmmo(source) 
```
```lua
--- add bullets
---@param source integer player id
---@param bulletType string bullet type
---@param amount number amount of bullets
---@param callback fun(ammo:boolean)? callback function sync or async
---@return boolean
exports.vorp_inventory:addBullets(source, bulletType, amount,callback) 
```
```lua
--- remove bullets from weapon
---@param weaponId number weapon id
---@param bulletType string bullet type
---@param amount number amount of bullets
---@param callback fun(ammo:boolean)? callback function sync or async
---@return boolean
exports.vorp_inventory:subBullets(weaponId, bulletType, amount,callback) 
```
```lua
--- get wweapon components
---@param source integer player id
---@param weaponId number weapon id
---@param callback fun(components:table)? callback function sync or async
---@return table
exports.vorp_inventory:getWeaponComponents(source, weaponId, callback) 
```
```lua
--- delete weapon
---@param source integer player id
---@param weaponId number weapon id
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:deleteWeapon(source, weaponId, callback) 
```
```lua
--- createWeapon
---@param source integer player id
---@param weaponName string weapon name
---@param ammo string amount of ammo
---@param components table weapon components
---@param comps table weapon components
---@param callback fun(boolean:boolean)? callback function sync or async
---@param serial string? custom serial number for weapon
---@param label string? custom label for weapon
---@param desc string? custom desc for weapons
---@return boolean if async
exports.vorp_inventory:createWeapon(source, weaponName, ammo, components, comps, callback,serial,label,desc) 
```

```lua
--- give weapon
---@param source integer player id
---@param weaponId number weapon id
---@param target number target id
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:giveWeapon(source, weaponId, target,callback) 
```
```lua
--- sub weapon
---@param source integer player id
---@param weaponId number weapon id
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:subWeapon(source, weaponId,callback) 
```

```lua
--- set serial number to weapon 
---@param weaponid integer weapon id
---@param serial string  weapon serial no
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean
exports.vorp_inventory:setWeaponSerialNumber(weaponid,serial,callback) 
```
```lua
--- set custom labels
---@param weaponId number  weapon id
---@param label string  weapon label
---@param cb fun(success: boolean)? async or sync callback
---@return boolean
exports.vorp_inventory:setWeaponCustomLabel(weaponId, label, cb)
```
```lua
--- set custom desc
---@param weaponId number weapon id
---@param desc string weapon desc
---@param cb fun(success: boolean)? callback function sync or async
---@return boolean
exports.vorp_inventory:setWeaponCustomDesc(weaponId, desc, cb)
```

## Inventory/customInventory

```lua
--- add permissions using charids
---@param charid number 
---@param state boolean | nil
exports.vorp_inventory:AddCharIdPermissionTakeFromCustom(id,charid,state)
```

```lua
--- add permissions using charids
---@param charid number 
---@param state boolean | nil
exports.vorp_inventory:AddCharIdPermissionMoveToCustom(id,charid,state)
```

```lua
---check if inventory is registered 
---@param id string inventory id
---@param callback fun(result:boolean)? callback function async or sync leave nil
exports.vorp_inventory:isCustomInventoryRegistered(id, callback)

```

```lua
--- register custom inventory
---@param data { id:string, name:string, limit:number, acceptWeapons:boolean, shared:boolean, ignoreItemStackLimit:boolean, whitelistItems:boolean, UsePermissions:boolean, UseBlackList:boolean, whitelistWeapons:boolean,webhook:string }
---@return methods see modules/custominventory.lua
exports.vorp_inventory:registerInventory(data)
```
```lua
--- add permissions to move item to inventory
---@param invId string inventory id
---@param jobName string job name
---@param jobgrade number job grade
exports.vorp_inventory:AddPermissionMoveToCustom(invId, jobName, jobgrade) 
```
```lua
--- add permissions to take item from inventory
---@param invId string inventory id
---@param jobName string job name
---@param jobgrade number job grade
exports.vorp_inventory:AddPermissionTakeFromCustom(invId, jobName, jobgrade) 
```
```lua
--- black list items or weapons
---@param invId string inventory id
---@param item string item name | weapon name
exports.vorp_inventory:BlackListCustomAny(invId, item) 
```
```lua
--- remove inventory from session
---@param invId string inventory id
exports.vorp_inventory:removeInventory(invId) 
```
```lua
--- update inventory slots
---@param invId string inventory id
---@param slots number inventory slots
exports.vorp_inventory:updateCustomInventorySlots(invId, slots) 
```
```lua
--- item limit
---@param invId string inventory id
---@param item string item name
---@param limit number item limit
exports.vorp_inventory:setCustomInventoryItemLimit(invId, item, limit) 
```
```lua
--- weapon limit
---@param invId string inventory id
---@param weapon string weapon name
---@param limit number weapon limit
exports.vorp_inventory:setCustomInventoryWeaponLimit(invId, weapon, limit) 
```
```lua
--- open inventory main or secondary
---@param source integer player id
---@param invId string? inventory id
exports.vorp_inventory:openInventory(source, invId) 
```
```lua
--- close inventory main or secondary
---@param source integer player id
---@param invId string? inventory id
exports.vorp_inventory:closeInventory(source, invId) 
```
```lua
---@param invid string inventory id
---@param items { name: string, amount: number, metadata: table? }[]
---@param charid number charidentifier of the owner of the storage if custom inv is not shared , if its shared can be any characteridentifer
---@param callback fun(success: boolean)? async or sync callback
exports.vorp_inventory:addItemsToCustomInventory(invid, items, charid,callback)
```
```lua
---@param invid string inventory id
---@param weapons {name: string, custom_label?: string, custom_desc?: string, serial_number?: string}[]
---@param charid number charidentifier of the owner of the storage if custom inv is not shared , if its shared can be any characteridentifer
---@param callback fun(success: boolean)? async or sync callback
exports.vorp_inventory:addWeaponsToCustomInventory(invid, weapons, charid,callback)
```
```lua
---@param invid string
---@param weaponName string
---@param callback fun(result:number)? async or sync callback
---@return integer
exports.vorp_inventory:getCustomInventoryWeaponCount(invid,weaponName,callback)
```

```lua
---@param invid string
---@param itemName string
---@param callback fun(result:number)? async or sync callback
---@return integer
exports.vorp_inventory:getCustomInventoryItemCount(invid,itemName,callback)
```

```lua
---@param invid string
---@param itemName string
---@param callback fun(result:number)? async or sync callback
---@return boolean
exports.vorp_inventory:removeItemFromCustomInventory(invid,itemName,callback)
```

```lua
---@param invid string
---@param weaponName string
---@param callback fun(result:number)? async or sync callback
---@return boolean
exports.vorp_inventory:removeWeaponFromCustomInventory(invid,weaponName,callback)
```

```lua

local data = {
  source = source, 
  target = target, 
  title = "Search inventory",
  blacklist = { -- OPTIONAL
     water = true, -- item name or weapon name
  },
  itemsLimit = { -- OPTIONAL
    weapons = { itemType = "item_weapon", limit = 1 }, -- how many weapons user is allowed to take
    items =   { itemType = "item_standard", limit = 2 }, -- how many items user is allowed to take
  },
  timeout = 60, -- OPTIONAL in seconds , if enabled when user reaches limits then a timeout is applied so player cant steal for that amount of time if removed then   once limit reached only after restart they can steal again
}
--- open player inventory
---@param data table
exports.vorp_inventory:openPlayerInventory(data)
```

## Hooks

<Badge type="tip" text="Server Side Only"/>

*  listener event of an item being used, data will be the same as `registerUsableItem`
```lua
AddEventHandler("vorp_inventory:Server:OnItemUse",function(data)
 local source = data.source
 local itemName = data.item
end)
```

## Event Listeners

<Badge type="tip" text="Server Side Only"/>

- Listen to when an item is created in player inventory

```lua
AddEventHandler("vorp_inventory:Server:OnItemCreated",function(data,source)
  print(json.encode(data),{ident = true})
end)
```
- Listen to when an item is removed from player inventory

```lua
AddEventHandler("vorp_inventory:Server:OnItemRemoved",function(data,source)
  print(json.encode(data),{ident = true})
end)
```
- Listen for inventory state hcnage (opens or closes) including custom inventories
```lua
AddEventHandler("vorp_inventory:Client:OnInvStateChange",function(boolean) end)
```
## Statebags


*  contains data from the current weapon used in the inventory or last weapon used.

<Badge type="tip" text="Client Side" />

```lua
local key = string.format("GetEquippedWeaponData_%d",weaponHash)
local data = LocalPlayer.state[key]
local serial = data.serialNumber
local id = data.weaponId
```

<Badge type="tip" text="Server Side" />

```lua
local key = string.format("GetEquippedWeaponData_%d",weaponHash)
local data = Player(source).state[key]
local serial = data.serialNumber
local id = data.weaponId
```

- check if inventory is active (open or closed) including custom inventories
```lua
LocalPlayer.state.IsInvActive
```





