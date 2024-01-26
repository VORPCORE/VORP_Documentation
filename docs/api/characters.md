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

local CompHash = "component hash"
TriggerEvent("vorpcharacter:setPlayerSkinChange", _source, "Beard", CompHash)
```

### Get Players Clothes and Skin (Client)
> This sets one component of the player clothes and saves it in the database. This comes from the client side.

<Badge type="warning" text="Client Side Only" /> 

```lua
local CompHash = "component hash"

TriggerServerEvent("vorpcharacter:setPlayerSkinChange", "Hat", CompHash)
```

### Refresh Character Skin (Client)
>This refreshes the player skin that is saved in the client cache

<Badge type="warning" text="Client Side Only" /> 

```lua
ExecuteCommand("rc")
```

### StateBags

*  Bandana state you can use this in ohter script to check if player is wearing a bandana on his face using characters bandana commands

```lua
---@return boolean
LocalPlayer.state.IsBandanaOn 
```
* Get player is in character shops usefull to disable HUDs

```lua
---@return boolean
LocalPlayer.state.PlayerIsInCharacterShops 
```