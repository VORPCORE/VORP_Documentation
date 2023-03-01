# VORP Crafting

## What is this?
A script for crafting items in game. Bellow are API's for this script


## API Docs

### Add Recipe

Add recipe to crafting
  
  Example Usage:
```lua

 TriggerEvent('vorp:AddRecipes', {
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
    })
```

### Remove Recipe

Remove recipe to crafting
  
  Example Usage:
```lua
    TriggerEvent('vorp:RemoveRecipes', {
         Text = "Seasoned Small Game "
    })
```

### Add Crafting Location

Add Crafting Location to crafting
  
  Example Usage:
```lua
    TriggerEvent('vorp:AddCraftLocation', {
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
    })
```

### Remove Crafting Location

Remove Crafting Location to crafting
  
  Example Usage:
```lua
    TriggerEvent('vorp:RemoveCraftLocation', {
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
    })
```