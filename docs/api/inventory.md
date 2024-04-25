# VORP inventory documentation
vorp Inventory provide a custom API that allow you to interact with items as well as creating custom inventories.

# Exports 

<Badge type="tip" text="Server Side Only" />

*  exports are better to use and faster and we recommend from now on to use them
*  no need to call exports on the top of your files
*  just simply call the export when needed

## Items exports

```lua
--- check item limit and inv limit in one function
---@param source number player id
---@param item string item name
---@param amount number amount of item
---@param callback fun(canCarry:boolean)? callback function sync or async
---@return boolean
exports.vorp_inventory:canCarryItem(source, item, amount, callback) 
```
```lua
---@alias itemdata {id:number, label:string, name:string, metadata:table, group:number, type:string, count:number, limit:number,canUse:boolean}
--- gets user inventory items
---@param source number player id
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
---@param source number player id
---@param callback func(itemCount: number)? callback function sync leave nil or async add func
---@param item string item name
---@param metadata table item metadata
---@return number
exports.vorp_inventory:getItemCount(source, callback, item,metadata) 
```
```lua
--- get item amount by name
---@param source number player id
---@param item string item name
---@param callback fun(item:table)? callback function sync or async
---@return table item data
exports.vorp_inventory:getItemByName(source, item, callback) 
```
```lua
--- get item containing metadata
---@param source number player id
---@param item string item name
---@param metadata table item metadata
---@param callback fun(item:table)? callback function sync or async
---@return table item data
exports.vorp_inventory:getItemContainingMetadata(source, item, metadata, callback) 
```
```lua
--- get item matching metdata
---@param source number player id
---@param slot number slot id
---@param metadata table item metadata
---@param callback fun(item:table)? callback function sync or async
---@return table item data
exports.vorp_inventory:getItemMatchingMetadata(source, slot, metadata, callback) 
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
---@param source number player id
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
---@param source number player id
---@param mainid number main id
---@param callback fun(itemdata:table)? callback function sync or async
---@return table item data
exports.vorp_inventory:getItemByMainId(source, mainid, callback) 
```
```lua
--- sun item by item id
---@param source number player id
---@param id number item id
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:subItemID(source, id, callback) 
```
```lua
--- sub item
---@param source number player id
---@param item string item name
---@param amount number amount of item
---@param metadata table item metadata
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:subItem(source, item, amount, metadata, callback) 
```
```lua
--- set item metadata
---@param source number player id
---@param itemId number item id
---@param metadata table{ metadata:table, description:string?} if description not defined it will use default description
---@param amount number amount of item
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:setItemMetadata(source, itemId, metadata, amount, callback) 
```
```lua
--- get item data
---@param source number player id
---@param item string item name
---@param callback fun(item:table)|nil callback function sync or asyn
---@param metadata table? item metadatac
---@return table item data
exports.vorp_inventory:getItem(source, item,callback, metadata) 
```
## Weapon exports
```lua
--- can carry weapons
---@param source number player id
---@param amount number amount of weapons
---@param callback fun(canCarry: boolean)? callback function sync or async
---@param weaponName string | number? weapon name or hash
---@return boolean
exports.vorp_inventory:canCarryWeapons(source, amount,callback, weaponName) 
```
```lua
---@alias weapondata {id:number,name:string,propietary:string,used:boolean,desc:string,group:number,source:number,label:string,serial_number:string,custom_label:string,custom_desc:string}
--- get user inventory weapon
---@param source number player id
---@param callback fun(weapondata:table)? callback function sync or async
---@param weaponId number weapon id
---@return table weapondata
exports.vorp_inventory:getUserWeapon(source, callback,weaponId) 
```
```lua
---@alias weapondata {id:number,name:string,propietary:string,used:boolean,desc:string,group:number,source:number,label:string,serial_number:string,custom_label:string,custom_desc:string}
--- get user inventory weapons
---@param source number player id
---@param callback fun(weapondata:table)? callback function sync or async
---@return table weapondata
exports.vorp_inventory:getUserInventoryWeapons(source, callback) 
```
```lua
--- get weapon bullets
---@param source number player id
---@param weaponID number weapon id
---@param callback fun(ammo:number)? callback function sync or async
---@return number weapon ammo
exports.vorp_inventory:getWeaponBullets(source,weaponID, callback) 
```
```lua
--- remove all user ammo
---@param source number player id
exports.vorp_inventory:removeAllUserAmmo(source) 
```
```lua
--- add bullets
---@param source number player id
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
---@param source number player id
---@param weaponId number weapon id
---@param callback fun(components:table)? callback function sync or async
---@return table
exports.vorp_inventory:getWeaponComponents(source, weaponId, callback) 
```
```lua
--- delete weapon
---@param source number player id
---@param weaponId number weapon id
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:deleteWeapon(source, weaponId, callback) 
```
```lua
--- createWeapon
---@param source number player id
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
---@param source number player id
---@param weaponId number weapon id
---@param target number target id
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:giveWeapon(source, weaponId, target,callback) 
```
```lua
--- sub weapon
---@param source number player id
---@param weaponId number weapon id
---@param callback fun(boolean:boolean)? callback function sync or async
---@return boolean if async
exports.vorp_inventory:subWeapon(source, weaponId,callback) 
```
## Inventory exports

```lua
---check if inventory is registered 
---@param id string inventory id
---@param callback fun(result:boolean)? callback function async or sync leave nil
exports.vorp_inventory:isCustomInventoryRegistered(id, callback)

```

```lua
--- register custom inventory
---@param data { id:string, name:string, limit:number, acceptWeapons:boolean, shared:boolean, ignoreItemStackLimit:boolean, whitelistItems:boolean, UsePermissions:boolean, UseBlackList:boolean, whitelistWeapons:boolean }
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
exports.vorp_inventory:blackListCustomAny(invId, item) 
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
---@param source number player id
---@param invId string? inventory id
exports.vorp_inventory:openInventory(source, invId) 
```
```lua
--- close inventory main or secondary
---@param source number player id
---@param invId string? inventory id
exports.vorp_inventory:closeInventory(source, invId) 
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

## Listeners

<Badge type="tip" text="Server Side Only"/>

- Listen to when an item is created in player inventory

```lua
AddEventHandler("vorp_inventory:Server:OnItemCreated",function(data)
 local source = data.source
  print(json.encode(data),{ident = true})
end)
```
- Listen to when an item is removed from player inventory

```lua
AddEventHandler("vorp_inventory:Server:OnItemRemoved",function(data)
 local source = data.source
  print(json.encode(data),{ident = true})
end)
```
## Statebags


*  contains data from the current weapon used in the inventory or last weapon used.

<Badge type="tip" text="Client Side" />

```lua
local key = string.format("GetEquippedWeaponData_%d",weaponHash)
local data = LocalPlayer.state[key]
local serial = serialNumber
local id = weaponId
```

<Badge type="tip" text="Server Side" />

```lua
local key = string.format("GetEquippedWeaponData_%d",weaponHash)
local data = Player(source).state[key]
local serial = serialNumber
local id = weaponId
```


## API DEPRECATED

```lua
--- this fexport got deprecated due to the switch to weight
---@param source number player id
---@param amount number amount of item
---@param callback fun(canCarry:boolean)? callback function sync or async
---@return boolean
exports.vorp_inventory:canCarryItems(source, amount, callback) 
```





