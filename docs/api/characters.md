# VORP Characters

## What is this?
This is a character creation and management script for VORPCore

## API Docs

### Character Selected Event
> This code will trigger when a player has selected a character and joined the server with that character.

<Badge type="warning" text="Client Side Only" /> 

```lua
RegisterNetEvent("vorp:SelectedCharacter", function(charid)
   -- The code to trigger when a character has been selected
end)
```
<Badge type="warning" text="Server Side Only" /> 

```lua
AddEventHandler("vorp:SelectedCharacter",function(source,character)
  local group = character.Group
end)

```

### New Character Created Event
> This code will trigger when a player has created a new character for the server.
Example Usage Case: Someone might use this to create/select a first spawn location for a character.

<Badge type="warning" text="Client Side Only" /> 

```lua
AddEventHandler("vorp:initNewCharacter", function()
    -- The code to trigger when a character has been created
end)
```

###  Get Characters Clothes and Skin (Server)
> This code gives you, the players, clothes and skin from the server side.

<Badge type="tip" text="Server Side Only" />

```lua

TriggerEvent("vorpcharacter:getPlayerComps", _source, function(data)
    local json_skin = data.skins
	local json_cloths = data.cloths
end)
```

### Get Characters Clothes and Skin (Client)
> This gives you the players clothes and skin from the client side. It comes from the client cache.

<Badge type="warning" text="Client Side Only" /> 

```lua

TriggerEvent("vorpcharacter:getPlayerComps", _source, function(skin, cloths)
    local beard = skin.Beard -- Beard is in the database 
	local hat = cloths.Hat -- Hat is in the database
end)
```

### Set a Character component (Server)
> This sets one component of the player skin and saves it in the database. This comes from the server side.

<Badge type="tip" text="Server Side Only" />

```lua

local _source = source
local CompHash = "component hash"
TriggerEvent("vorpcharacter:setPlayerSkinChange", _source, "Beard", CompHash)
```

### Get Players Clothes and Skin (Client)
> This sets one component of the player clothes and saves it in the database. This comes from the client side.

<Badge type="warning" text="Client Side Only" /> 

```lua
local _source = source
local CompHash = "component hash"

TriggerServerEvent("vorpcharacter:setPlayerSkinChange", "Hat", CompHash)
```

### Refresh Character Skin (Client)
>This refreshes the player skin that is saved in the client cache

<Badge type="warning" text="Client Side Only" /> 

```lua
TriggerEvent("vorpcharacter:refreshPlayerSkin")
```

### Refresh Character Skin (Server)
>This refreshes the player skin from the database. This comes from the client side.

<Badge type="tip" text="Server Side Only" />

```lua
TriggerServerEvent("vorpcharacter:getPlayerSkin")
```


### Get list of Character components
>You can get a list of components with all the clothes from vorp_character using this callback event.

```lua
TriggerEvent("vorpcharacter:getSkinComps", "hats_male", function(components)
    for index,value in pairs(components) do
        print(tostring(v))
    end
end)
```

It returns a list with the components
Parameters:

- `hats_male` returns the male hats list

- `hats_female` returns the female hats list

- `eyewear_male` returns the male eyewear list

- `eyewear_female` returns the female eyewear list

- `neckwear_male` returns the male neckwear list

- `neckwear_female` returns the female neckwear list

- `neckties_male` returns the male neckties list

- `neckties_female` returns the female neckties list

- `shirts_male` returns the male shirts list

- `shirts_female` returns the female shirts list

- `suspenders_male` returns the male suspenders list

- `suspenders_female` returns the female suspenders list

- `vests_male` returns the male vests list

- `vests_female` returns the female vests list

- `coats_male` returns the male coats list

- `coats_female` returns the female coats list

- `ponchos_male` returns the male ponchos list

- `ponchos_female` returns the female ponchos list

- `cloaks_male` returns the male cloaks list

- `cloaks_female` returns the female cloaks list

- `gloves_male` returns the male gloves list

- `gloves_female` returns the female gloves list

- `rings_rh_male` returns the right hand male rings list

- `rings_rh_female` returns the right hand female rings list

- `rings_lh_male` returns the left hand male rings list

- `rings_lh_female` returns the left hand female rings list

- `bracelets_male` returns the male bracetels list

- `bracelets_female` returns the female bracelets list

- `gunbelts_male` returns the male gunbelts list

- `gunbelts_female` returns the female gunblets list

- `belts_male` returns the male belts list

- `belts_female` returns the female belts list

- `buckles_male` returns the male buckles list

- `buckles_female` returns the female buckles list

- `holsters_s_male` returns the secondary male holsters list

- `holsters_s_female` returns the secondary female holsters list

- `pants_male` returns the male pants list

- `pants_female` returns the female pants list

- `skirts_female` returns the skirts list

- `boots_male` returns the male boots list

- `boots_female` returns the female boots list

- `chaps_male` returns the male chaps list

- `chaps_female` returns the female chaps list

- `spurs_male` returns the male spurs list

- `spurs_female` returns the female spurs list

- `hair_male` returns the male hair list

- `hair_female` returns the female hair list

- `beard_male` returns the beards list

- `teeth_male` returns the male teeth list

- `teeth_female` returns the female teeth list
