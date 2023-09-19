# VORP inventory documentation
vorp Inventory provide a custom API that allow you to interact with items as well as creating custom inventories.

# Exports 

<Badge type="tip" text="Server Side Only" />

*  exports are better to use and faster and we recommend from now on to use them
*  no need to call exports on the top of your files
*  just simply call the export when needed

## Items exports
```lua
--- checks inventory limit
---@param source number player id
---@param amount number amount of item
---@param callback fun(canCarry:boolean)? callback function sync or async
---@return boolean
exports.vorp_inventory:canCarryItems(source, amount, callback) 
```
```lua
--- check item limit
---@param source number player id
---@param item string item name
---@param amount number amount of item
---@param callback fun(canCarry:boolean)? callback function sync or async
---@return boolean
exports.vorp_inventory:canCarryItem(source, item, amount, callback) 
```
```lua
--- gets user inventory items
---@param source number player id
---@param callback fun(canCarry:boolean)? callback function sync or async
---@return table
exports.vorp_inventory:getUserInventoryItems(source, callback) 
```
```lua
---@param item string item name
---@param callback fun(item:Item)
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
exports.vorp_inventory:addItem(source, item, amount, callback,metadata) 
```
```lua
--- get item by main id
---@param source number player id
---@param mainid number main id
---@param callback fun(item:table)? callback function sync or async
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
---@param metadata table item metadata
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
---@param weaponName string weapon name
---@return boolean
exports.vorp_inventory:canCarryWeapons(source, amount,callback, weaponName) 
```
```lua
--- get user inventory weapon
---@param source number player id
---@param callback fun(weapon:Weapon <table>)? callback function sync or async
---@param weaponId number weapon id
---@return table weapon data
exports.vorp_inventory:getUserWeapon(source, callback,weaponId) 
```
```lua
--- get user inventory weapons
---@param source number player id
---@param callback fun(weapons:Weapon <table>)? callback function sync or async
---@return table user weapons
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
---@return boolean if async
exports.vorp_inventory:createWeapon(source, weaponName, ammo, components, comps, callback) 
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
--- register custom inventory
---@param data { id:string, name:string, limit:number, acceptWeapons:boolean, shared:boolean, ignoreItemStackLimit:boolean, whitelistItems:table, UsePermissions:boolean, UseBlackList:boolean, whitelistWeapons:table }
exports.vorp_inventory:registerInventory(data)
 ```
```lua
--- add permissions to move item to inventory
---@param invId string inventory id
---@param jobName string job name
---@param jobgrade number job grade
exports.vorp_inventory:addPermissionMoveToCustom(invId, jobName, jobgrade) 
```
```lua
--- add permissions to take item from inventory
---@param invId string inventory id
---@param jobName string job name
---@param jobgrade number job grade
exports.vorp_inventory:addPermissionTakeFromCustom(invId, jobName, jobgrade) 
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

## API  <<**OLD WAY DONT USE**>>

:::warning
include a set of functions to use `we do not recomend to use this` and the support for it is stopped, use the exports above it will removed fro mthe docs soon.
:::

```lua
--- at the top of a server file this object will contain a set of functions thatcan be called
local VORPInv = exports.vorp_inventory:vorp_inventoryApi()

```
You can use the API `server` side to give, delete, register item utility, get quantities and even ask if the player can carry the item.

### Items

```lua
--- give an item
---@param source number player id
---@param itemName string item name
---@param qty number amount
---@param metadata table | nil item object
VorpInv.addItem(source, itemName, qty, metadata)
```

```lua
--- remove an item
---@param source,itemName string item name
---@param qty number item amount
---@param metadata table| nil item object
VorpInv.subItem(source, itemName, qty, metadata)
```


```lua
--- get item player have in inventory
---@param source number player id
---@param itemName string item name
---@param metadata table | nil item objet
---@return table
local item = VorpInv.getItem(source, itemName, metadata)
```

```lua
--- get the count of an item player has in inventory
---@param source player id
---@param itemName item name
---@param metadata table | nil item object
---@return number
local itemCount = VorpInv.getItemCount(source, itemName, metadata)
```

```lua
--- checks item limit
---@param source player id
---@param itemName item name
---@param amount number
---@return boolean
local canCarry = VorpInv.canCarryItem(source, itemName, amount)
```

```lua
--- checks inventory limit
---@param source player id
---@param amount number
---@return boolean
local canCarry = VorpInv.CanCarryItems(source, amount)
```

```lua
--- register a usable item
---@param itemName string
---@param callback fun(data:table) 
VorpInv.RegisterUsableItem(itemName, function(data)
  print(data.source) 
  print(data.label)  
  print(data.id)
  print(data.item)
  print(data.item.metadata)
  print(data.item.mainid)
end)

```


```lua
---@param get an item From DB
---@param itemName item name
---@return item table | nil
local item = VorpInv.getDBItem(source, itemName)
```

### Weapons 


```lua
--- create weapon will register a weapon
---@param source number player id
---@param weaponName string weapon anem
---@param ammo string | nil ammo type
---@param comp table| nil components
VorpInv.createWeapon(source, weaponName, ammo, comp)
```

```lua
-- remove weapon
---@param source number player id
---@param weaponId number weapon id
VorpInv.subWeapon(source, weaponId)
```

```lua
--give weapon from one player to another
---@param source number player id
---@param weaponId number weappon id
---@param target number player id
VorpInv.giveWeapon(source, weaponId, target)
```

```lua
--- add bullets to weapon
---@param source number player id
---@param weaponId number weapon id
---@param bulletType string ammo type
---@param qty number quantity of bullets
VorpInv.addBullets(source, weaponId, bulletType, qty)
```


```lua
--- subBullets
---@param source number player id
---@param weaponId number weapon id
---@param bulletType string ammo type
---@param qty number quantity of bullets
VorpInv.subBullets(source, weaponId, bulletType, qty)
```


```lua
--- get amount of bullets
---@param source number player id
---@param weaponId number weapon id
---@return bullets number
local bullets = VorpInv.getWeaponBullets(source, weaponId)
```


```lua
--- get weapon components
---@param source number player id
---@param weaponId number weapon id
---@return weaponComps table
local weaponComps = VorpInv.getWeaponComponents(source, weaponId)
```


```lua
--- get all user weapons
---@param source number player id
---@return weapons table
local weapons = VorpInv.getUserWeapons(source)
```


```lua
--- get user weapon by id
---@param source number player id
---@param weaponId number weapon id
---@return weapon table
local weapon = VorpInv.getUserWeapon(source, weaponId)
```


```lua
--- can carry weapons
---@param source number player id
---@param amount number amount of weapons
---@param fun(result:boolean) 
---@param weaponHash string weapon name to check
VorpInv.canCarryWeapons(source, amount, function(result) --can carry weapons
    print(result)
end,weaponhash) -- new parameter 
```

### Inventory API



```lua
--- get user inventory items
---@param source number player id
---@return table | nil
local inventory = VorpInv.getUserInventory(source)
```


```lua
-- opens source inventory not others inventories
---@param source number player id
---@param invID string inventory to open
VorpInv.OpenInv(source,invID) 
```


```lua
-- close inventory
---@param source number player id
---@param invID string inventory to open
VorpInv.CloseInv(source,invID)
```


```lua
--- register custom inventory
---@param invId string inventory id
---@param name string inventory name
---@param slots number inventory slots
---@param acceptWeapons boolean accept weapons
---@param shared boolean shared
---@param ignoreStack boolean ignore stack
---@param whitelistItems boolean whitelist items
---@param usePermisions boolean use permissions
---@param useBlacklist boolean use blacklist
---@param whitelistWeapons boolean whitelist weapons
VorpInv.registerInventory(invId, name, slots, acceptWeapons, shared, ignoreStack, whitelistItems, usepermissions,useBlackList, whitelistWeapons)
```

```lua
--- remove inventory from session
---@param invId string inventory id
VorpInv.removeInventory(id)
```


```lua
---@param invId string inventory id
---@param id string inventory id
---@param itemName string item name
---@param limit number item limt
VorpInv.setInventoryItemLimit(id, itemName, limit)
```


```lua
---@param id string inventory id
---@param weaponName string weapon name
---@param limit number limit of weapon to be able to store
VorpInv.setInventoryWeaponLimit(id, weaponName, limit)
```



```lua
  -- black list items or weapons 
  ---@param string id
  ---@param name string
  VORPInv.BlackListCustomAny(id, name) 
```


```lua
--- add permissions to allow moving items or weapons 
---@param id string 
---@param jobname string
---@param grade number
VORPInv.AddPermissionMoveToCustom(id, jobname, grade)
```

```lua
--- add permissions to allow taking items or weapons
---@param id string 
---@param jobname string
---@param grade number
VORPInv.AddPermissionTakeFromCustom(id, jobname, grade)
```


```lua
--- update custom inventory slots
---@param invId string inv id
---@param slots number slots to set
VORPiNV.updateCustomInventorySlots(invId,slots)
```





