# VORP Crafting

- from other scripts you can trigger these events

### Add Recipe

Add recipe to crafting 

<Badge type="tip" text="CLIENT SIDE"/>
  
  Example Usage:
```lua
 local param = false -- if true will send to all players if false only the source updates
 TriggerClientEvent('vorp:AddRecipes', {
        Text = "Seasoned Small Game ",
        SubText = "InvMax = 10",
        Desc = "Recipe: 1 x SGM, 1 x Salt",
        Items = {
            {
                name = "consumable_game",
                count = 1
            },
            {
                name = "salt",
                count = 1
            }
        },
        Reward ={
            {
                name = "cookedsmallgame",
                count = 2
            }
        },
        Type = "item", -- indicate if it is 'weapon' or 'item'
        Job = 0,
        Location = 0,
        UseCurrencyMode = false,
        CurrencyType = 0,
        Category = "food",
        Animation = 'knifecooking'
    },param)
```

### Remove Recipe

Remove recipe to crafting
  
  Example Usage:
```lua
local param = false -- if true will send to all players if false only the source gets updated on the client side
    TriggerClientEvent('vorp:RemoveRecipes', {
        Text = "Seasoned Small Game "
    },param)
```

### Add Crafting Location

Add Crafting Location to crafting
  
  Example Usage:
```lua
    local param = false --  if true will send to all players if false only the source gets updated on the client side
    TriggerClientEvent('vorp:AddCraftLocation', {
        name = 'Blackwater Crafting Station',
        id = 'blackwater',
        Job = 0
        x = -872.222, 
        y = -1390.924, 
        z = 43.573,
        Blip = {
            enable = true,
            Hash = 1754365229
        },
        Categories = 0
    },param)
```

### Remove Crafting Location

Remove Crafting Location to crafting
  
  Example Usage:
```lua
  local param = false --  if true will send to all players if false only the source gets updated on the client side
    TriggerClientEvent('vorp:RemoveCraftLocation', {
        name = 'Blackwater Crafting Station',
        id = 'blackwater',
        Job = 0
        x = -872.222, 
        y = -1390.924, 
        z = 43.573,
        Blip = {
            enable = true,
            Hash = 1754365229
        },
        Categories = 0
    },param)
```