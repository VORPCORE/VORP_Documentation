# ***VORP Inventory***

## API Docs

vorp Inventory provide a custom API that allow you to interact with items as wall as creating custom inventories.

### ***Installation***
<Badge type="tip" text="Server Side Only" />

```lua
-- at the top of server file
local VORPInv = {}

VORPInv = exports.vorp_inventory:vorp_inventoryApi()

```

### ***Item API***
You can use the API `server` side to give, delete, register item utility, get quantities and even ask if the player can carry the item.

#### Add Item
<Badge type="tip" text="Server Side Only" />

```lua
-- give an item
VorpInv.addItem(source, itemName, qty, metadata)
```


| Parameter        | Type   | Description                                         | Required ? |
|------------------|--------|-----------------------------------------------------|------------|
| source           | Number | The player id in game                               | True       |
| itemName         | String | The name of the item to add                         | True       |
| qty              | Number | The quantity of item to add                         | True       |
| metadata         | Table  | An object containing all custom data of item to add | False      |

#### Sub Item
<Badge type="tip" text="Server Side Only" />

```lua
--remove an item
VorpInv.subItem(source, itemName, qty, metadata)
```

| Parameter        | Type   | Description                                            | Required ? |
|------------------|--------|--------------------------------------------------------|------------|
| source           | Number | The player id in game                                  | True       |
| itemName         | String | The name of the item to remove                         | True       |
| qty              | Number | The quantity of item to remove                         | True       |
| metadata         | Table  | An object containing all custom data of item to remove | False      |

#### Get Item
<Badge type="tip" text="Server Side Only" />

```lua
--get item player have in inventory
local item = VorpInv.getItem(source, itemName, metadata)
```

| Parameter | Type         | Description                                         | Required ? |
|-----------|--------------|-----------------------------------------------------|------------|
| source    | Number       | The player id in game                               | True       |
| itemName  | String       | The name of the item to get                         | True       |
| metadata  | Table        | An object containing all custom data of item to get | False      |

| Return   | Type                | Description                                            |
|----------|---------------------|--------------------------------------------------------|
| Return   | Table (Item) or nil | An object containing all item information              |

#### Get Item Count
<Badge type="tip" text="Server Side Only" />

```lua
-- get the count of an item player has in inventory
local itemCount = VorpInv.getItemCount(source, itemName, metadata)
```

| Parameter | Type         | Description                                            | Required ? |
|-----------|--------------|--------------------------------------------------------|------------|
| source    | Number       | The player id in game                                  | True       |
| itemName  | String       | The name of the item to get count                      | True       |
| metadata  | Table        | An object containing all custom data of item to remove | False      |

| Return   | Type   | Description                                          |
|----------|--------|------------------------------------------------------|
| Return   | Number | The total count of selected item in player inventory |

#### Can Carry Item
<Badge type="tip" text="Server Side Only" />

```lua
-- checks item limit
local canCarry = VorpInv.canCarryItem(source, itemName, amount)
```

| Parameter | Type   | Description                                                  | Required ? |
|-----------|--------|--------------------------------------------------------------|------------|
| source    | Number | The player id in game                                        | True       |
| itemName  | String | The name of the item to count                                | True       |
| amount    | Number | The amount of space needed in Item stack for the item to add | True       |

| Return   | Type    | Description                                  |
|----------|---------|----------------------------------------------|
| Return   | Boolean | True if there is enough space, False if not. |

#### Can Carry Items
<Badge type="tip" text="Server Side Only" />

```lua
-- checks inventory limit
local canCarry = VorpInv.CanCarryItems(source, amount)
```

| Parameter | Type   | Description                                                  | Required ? |
|-----------|--------|--------------------------------------------------------------|------------|
| source    | Number | The player id in game                                        | True       |
| amount    | Number | The amount of space needed in Inventory for the items to add | True       |

| Return | Type    | Description                                  |
|--------|---------|----------------------------------------------|
| Return | Boolean | True if there is enough space, False if not. |

#### Register Usable Item
<Badge type="tip" text="Server Side Only" />

```lua
local itemName = "bread"
VorpInv.RegisterUsableItem(itemName, function(data)
  print(data.source) -- player using the item
  print(data.label)  -- item label
end)

```

| Parameter | Type     | Description                                            | Required ? |
|-----------|----------|--------------------------------------------------------|------------|
| itemName  | String   | The name of the item to count                          | True       |
| data      | Function | The function that will be called                       | True       |

| Return   | Type                | Description                                          |
|----------|---------------------|------------------------------------------------------|
| data.source| number            | returns server ID                                    |
| data.label| string             | returns item Lable from DB                           |


#### Get DB Item
<Badge type="tip" text="Server Side Only" />

```lua
local item = VorpInv.getDBItem(source, itemName)
```

| Parameter | Type         | Description                 | Required ? |
|-----------|--------------|-----------------------------|------------|
| source    | Number       | The player id in game       | True       |
| itemName  | String       | The name of the item to get | True       |

| Return   | Type                | Description                                          |
|----------|---------------------|------------------------------------------------------|
| statment | true/false          | check if item exists in DB                           |


### Weapons API
You can use the API to add, delete and get weapons, ad, remove or get weapon bullets and components and even check if the player can carry the weapons.

#### Add Weapon
<Badge type="tip" text="Server Side Only" />

```lua
VorpInv.createWeapon(source, weaponName, ammo, comp)
```

| Parameter  | Type   | Description                    | Required ? |
|------------|--------|--------------------------------|------------|
| source     | Number | The server player id           | True       |
| weaponName | String | The hashname of the weapon to add  | True       |
| ammo       | Table  | An array containing start ammo | False      |
| comp       | Table  | An array containing start comp | False      |

#### Sub Weapon
<Badge type="tip" text="Server Side Only" />

```lua
-- remove weapon
VorpInv.subWeapon(source, weaponId)
```

| Parameter | Type   | Description                    | Required ? |
|-----------|--------|--------------------------------|------------|
| source    | Number | The player id in game          | True       |
| weaponId  | Number | The id of the weapon to remove DB | True       |

#### Give Weapon
<Badge type="tip" text="Server Side Only" />

```lua
--give weapon from one player to another
VorpInv.giveWeapon(source, weaponId, target)
```

| Parameter | Type   | Description                    | Required ? |
|-----------|--------|--------------------------------|------------|
| source    | Number | The player id in game          | True       |
| weaponId  | Number | The id of the weapon to remove | True       |
| target    | Number | The target player id in game   | True       |

#### Add Bullets
<Badge type="tip" text="Server Side Only" />

```lua
VorpInv.addBullets(source, weaponId, type, qty)
```

| Parameter | Type   | Description                  | Required ? |
|-----------|--------|------------------------------|------------|
| source    | Number | The player id in game        | True       |
| weaponId  | Number | The id of the weapon         | True       |
| type      | String | The bullet type to add       | True       |
| qty       | Number | The amount of bullets to add | True       |

#### Sub Bullets
<Badge type="tip" text="Server Side Only" />

```lua
VorpInv.subBullets(source, weaponId, type, qty)
```

| Parameter | Type   | Description                     | Required ? |
|-----------|--------|---------------------------------|------------|
| source    | Number | The player id in game           | True       |
| weaponId  | Number | The id of the weapon            | True       |
| type      | String | The bullet type to remove       | True       |
| qty       | Number | The amount of bullets to remove | True       |

#### Get Weapon Bullets
<Badge type="tip" text="Server Side Only" />

```lua
local WeaponBullets = VorpInv.getWeaponBullets(source, weaponId)
```

| Parameter | Type   | Description           | Required ? |
|-----------|--------|-----------------------|------------|
| source    | Number | The player id in game | True       |
| weaponId  | Number | The id of the weapon  | True       |

| Return | Type         | Description                                              |
|--------|--------------|----------------------------------------------------------|
| Return | Table or nil | An Array containing all the loaded bullets in the weapon |

#### Get Weapon Components
<Badge type="tip" text="Server Side Only" />

```lua
local weaponComps = VorpInv.getWeaponComponents(source, weaponId)
```

| Parameter | Type   | Description           | Required ? |
|-----------|--------|-----------------------|------------|
| source    | Number | The player id in game | True       |
| weaponId  | Number | The id of the weapon  | True       |

| Return | Type         | Description                                                 |
|--------|--------------|-------------------------------------------------------------|
| Return | Table or nil | An Array containing all the loaded components on the weapon |

#### Get Weapons
<Badge type="tip" text="Server Side Only" />

```lua
local weapons = VorpInv.getUserWeapons(source)
```

| Parameter | Type   | Description                     | Required ? |
|-----------|--------|---------------------------------|------------|
| source    | Number | The player id in game           | True       |

| Return | Type         | Description                                      |
|--------|--------------|--------------------------------------------------|
| Return | Table or nil | An Array containing all the weapon of the player |

#### Get Weapon
<Badge type="tip" text="Server Side Only" />

```lua
local weapon = VorpInv.getUserWeapon(source, weaponId)
```

| Parameter | Type   | Description           | Required ? |
|-----------|--------|-----------------------|------------|
| source    | Number | The player id in game | True       |
| weaponId  | Number | The id of the weapon  | True       |

| Return | Type                  | Description                                 |
|--------|-----------------------|---------------------------------------------|
| Return | Table (Weapon) or nil | An Object containing all weapon information |

#### Can Carry Weapons
<Badge type="tip" text="Server Side Only" />

```lua
VorpInv.canCarryWeapons(source, amount, function(cb) --can carry weapons
    local canCarry = cb
    if canCarry then
        --give weapon
    else
      --cant carry
    end
end)
```

| Parameter | Type               | Description                                        | Required ? |
|-----------|--------------------|----------------------------------------------------|------------|
| source    | Number             | The player id in game                              | True       |
| amount    | Number             | The amount of space needed to carry the weapons    | True       |
| cb        | Function(canCarry) | A Callback function containing a Boolean Parameter | True       |


### Inventory API
You can use the API to open or close the player Inventory, and register custom private or shared inventories.

#### Get Inventory
<Badge type="tip" text="Server Side Only" />

```lua
local inventory = VorpInv.getUserInventory(source)
print(inventory)
```

| Parameter | Type   | Description           | Required ? |
|-----------|--------|-----------------------|------------|
| source    | Number | The player id in game | True       |

| Return | Type                  | Description                                       |
|--------|-----------------------|---------------------------------------------------|
| Return | Table (Item[]) or nil | An Array containing all items in player Inventory |

#### Open Player Inventory
<Badge type="tip" text="Server Side Only" />

```lua
-- opens source inventory to source or the invid (secondary inv) to source
VorpInv.OpenInv(source,invID) 
-- to open custom inventory or play inventory
```

| Parameter | Type   | Description           | Required ? |
|-----------|--------|-----------------------|------------|
| source    | Number | The player id in game | True       |
| invID     | Number | The secondary inventory ID  | false  |

#### Close Player Inventory
<Badge type="tip" text="Server Side Only" />

```lua
-- close source inv or close (secondary inv) with its ID
VorpInv.CloseInv(source,invID)
```

| Parameter | Type   | Description           | Required ? |
|-----------|--------|-----------------------|------------|
| source    | Number | The player id in game | True       |
| invID     | Number | The secondary inventory ID  | false  |

#### Register Inventory
<Badge type="tip" text="Server Side Only" />

```lua
VorpInv.registerInventory(id, name, limit, acceptWeapons, shared,stack, listonly, usepermissions,useBlackList, ListWeapons)
```

             

| Parameter     | Type    | Description                                             | Required ? |
|---------------|---------|---------------------------------------------------------|------------|
| id            | String  | The id of the custom inventory                          | True       |
| name          | String  | The name of the custom inventory                        | True       |
| limit         | Number  | The item limit of the custom inventory                  | True       |
| acceptWeapons | Boolean | Does inventory accept weapons (Default: True)           | False      |
| shared        | Boolean | Is Inventory shared across all players (Default: False) | False      |
| stack         | Boolean | Is Inventory shared across all players (Default: False) | False      |
| listonly        | Boolean | use items list only (Default: False) | False      |
| usepermisssions        | Boolean | use permissions api  (Default: False) | False      |
| useblacklist       | Boolean | blacklist items or weapons  (Default: False) | False      |
| ListWeapons       | Boolean |use weapons from list only (Default: False) | False      |


#### Remove Inventory
<Badge type="tip" text="Server Side Only" />

```lua
VorpInv.removeInventory(id)
```

| Parameter     | Type   | Description                              | Required ? |
|---------------|--------|------------------------------------------|------------|
| id            | String | The id of the custom inventory to remove | True       |


#### Set Custom Inventory Item Limit
<Badge type="tip" text="Server Side Only" />

```lua
VorpInv.setInventoryItemLimit(id, itemName, limit)
```

| Parameter | Type   | Description                                                                                | Required ? |
|-----------|--------|--------------------------------------------------------------------------------------------|------------|
| id        | String | The id of the custom inventory                                                             | True       |
| itemName  | String | The name of the Item                                                                       | True       |
| limit     | Number | The limit for this item in the custom inventory. Set 0 to deny this item in this inventory | True       |

#### Set Custom Inventory Weapon Limit
<Badge type="tip" text="Server Side Only" />

```lua
VorpInv.setInventoryWeaponLimit(id, weaponName, limit)
```

| Parameter  | Type   | Description                                                                                    | Required ? |
|------------|--------|------------------------------------------------------------------------------------------------|------------|
| id         | String | The id of the custom inventory                                                                 | True       |
| weaponName | String | The name of the Weapon                                                                         | True       |
| limit      | Number | The limit for this weapon in the custom inventory. Set 0 to deny this weapon in this inventory | True       |

#### Set Custom Black list items or weapons 
<Badge type="tip" text="Server Side Only" />

```lua
  VORPInv.BlackListCustomAny(id, ""name) 
```


#### Set Custom permissions Move to Custom inv 
<Badge type="tip" text="Server Side Only" />

```lua
VORPInv.AddPermissionMoveToCustom(id, "jobname", "grade")
```

#### Set Custom permissions Take from Custom inv 
<Badge type="tip" text="Server Side Only" />

```lua
VORPInv.AddPermissionTakeFromCustom(id, "jobname", "grade")
```