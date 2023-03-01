# VORP Metabolism

## What is this?
A script that allow for the tracking of hunger/thirst

## API Docs

### Change Value

Change metabolism value
  
  Example Usage:
```lua
--Client side
 TriggerEvent('vorpmetabolism:changeValue', 'Metabolism', 9000)
```

### Set Value

Set metabolism value
  
  Example Usage:
```lua
--Client side
 TriggerEvent('vorpmetabolism:setValue', 'Metabolism', 10000)
```


### Set Value

Set metabolism value
  
  Example Usage:
```lua
--Client side
 TriggerEvent('vorpmetabolism:setValue', 'Metabolism', 10000)
```

### Get Value

Get metabolism value

  Example Usage:
```lua
--Client side
 TriggerEvent('vorpmetabolism:getValue', 'Metabolism', function(value)
    print('metabolism value', value)
 end)
```

### Set Hud Visibility

Hide or show metabolism hud

  Example Usage:
```lua
--Client side
 TriggerEvent('vorpmetabolism:setHud', false)
```
