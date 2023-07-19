# VORP MENU

###  Create a menu using an API 

#### Client side

```lua
-- on the top of your client side
local VORPMenu = {} -- local 

TriggerEvent("vorp_menu:getData",function(cb)
 VORPMenu = cb
end)
```

* API

```lua
-- close all menus before opening another 
---@type function
VORPMenu.CloseAll()

```

* Create Menu

```lua
-- function or event
function OpenMenu(any,any)

 VORPMenu.CloseAll()

   -- * table * --
    MenuElements = {
        -- * elements * --
        -- by default you need to set these 3

        { 
            label = "name",
            value = "value",
            desc = "description"
        }
        -------------------------

        -- to use slider set in this format 
        {
            label = "name",
            value = 0, 
            desc = "description",
            type = "slider",
            min = 0,
            max = 10,
            hop = 1
        }
        -------------------------

        -- you can add extra definded arguments 
        { 
            label = "name",
            value = "value",
            desc = "description",
            itemHeight = "4vh" -- this will allow to change the height of only this element
        }
        -------------------------

        -- alternatively you can add extra non definded arguments to use as you need
        { 
            label = "name",
            value = "value",
            desc = "description",
            ---@param any <table,string,number>
            info = any
            info2 = {
                this = "string",
                that = 111,
                etc = table,
                extra  = Convert -- function
            }
        }
        -------------------------
    }
 
 -- * open menu * --

    VORPMenu.Open("default",GetCurrentResourceName(),"vorp_menu",

    {
        title = "menu title",
        subtext = "menu sub text",
        align = "align", -- top-right , top-center , top-left
        elements = MenuElements, -- elements needed
        lastmenu = "function name", -- if you wish to go back to the previous menu , or remove
        itemHeight = "4vh", -- set all elements to this height if they are not definded in the element
    },


        function(data, menu)
            -- to go back to lastmenu if any
            if (data.current == "backup") then
              -- params last function need 
               return  _G[trigger.data](any,any)
            end

              -- get any of the params you definded in the elements
            if data.current.value == "value" then
              -- do code 
            end

            if data.current.info == "param" then
               -- do code
              return  menu.close()

              -- modify elements or create
            end

        end,function(data,menu)
        -- if theres no previous menu close menu on backspace press
            menu.close()
        end)

    end)

end

```

* Update a value from an element 

```lua
-- if you know the index  you can change values on the go
---@param index number
---@param value string
---@param newValue string
menu.setElement(index, value, newValue)
menu.refresh() -- refresh the menu so changes are added

```

* Find an index or value from all elements made

```lua

for index , value in pairs(menu.data.elements)
    if value.value == "value" then
        menu.setElement(index, value, newValue)
        menu.refresh()
        break
    end
end

```

* Set new elements by removing old

```lua
-- this will remove all other elements and add only this one
replaceElements = {
    {
        label = "label",
        value = "open",
        desc = "description"
    }
    --ad more
}
menu.setElements(replaceElements)
menu.refresh()
```

*  add a new element to the table already made 

```lua
-- this will add a new element without removing old elements
menu.addNewElement({
    label = "label",
    value = "open",
    desc = "description"
})
menu.refresh()
```

*  remove an element by index 

```lua
 -- remove a single element by its index 
 ---@param index number 
 ---@param loop boolean you can use this when you loop through several elements and remove all indexes 
local loop = true
for index,value in pairs(menu.data.elements) then
    -- if you have several elements that you need to removed called open leave `loop` true or set false
    if value.value = "open" then
        menu.removeElementByIndex(index,loop) 
        if not loop then break end
    end
end
menu.refresh()
```

* remove an element by its value 

```lua
 -- remove a single element by its index 
 ---@param index number 
 ---@param loop boolean you can use this when you loop through several elements and remove all indexes 
local loop = true
for index,value in pairs(menu.data.elements) then
    -- if you have several elements that you need to remove called open leave `loop` true or set false
    if value.value = "open" then
        menu.removeElementByValue(value.value,loop) 
        if not loop then break end
    end
end
menu.refresh()
```

## More will be added in time to these document