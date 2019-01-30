# Dreamstore Icons

## Description

All the icons that Dreamstore apps use.

## Release schedule

| Release  | Status              | Initial Release | Maintenance LTS Start | End-of-life | Dreamstore Compatibility
| :--:     | :---:               |  :---:          | :---:                 | :---:       | :---: 
| [x.x]    | **Maintenance LTS** |  YYYY-mm-DD     | YYYY-mm-DD            | Month YYYY  | x.x

## Table of Contents
- [Usage](#usage)
- [Testing](#testing)

## Usage

To use any icon of this project follow the steps below:

1. Add into the dependencies of your `manifest.json` and use it like a npm module.
    ```json
    "dependencies": {
        "vtex.dreamstore-icons": "0.x"
    }
    ```

2. Import and use it into your code, for example: 
    ```js
    ...
    import { IconMenu } from 'vtex.dreamstore-icons'
    ...
    const YourComponent = props => (
        ...
        <IconMenu />
        ...
    )
    ```

## Concepts

### Types

#### High Priority Actions
ArrowToBottom
ArromFromBottom
Profile
Save
Delete
Play
Search
Cart
Calendar

#### Mild Priority Actions
Columns
Bars
Minus (-outline -solid -line)
Store
Eyesight (--on --off -solid -outline)
Bag
Angle (--up --down)
Exchange
Gallery
Export
CreditCard
Elypsis
Arrows
Settings
Edit (-outline -solid)
Clone (outline -solid)
Cog
Link
Filter (-outline -solid)
ExternalLink (-outline -solid)
SingleItem
List
Plus (-outline -solid -plus)

#### Informational
Tooltip (-outline -solid)
Warning (-outline -solid)
Help (-outline -solid)

#### Navigation
Angle (--down --up --left --rigt)
Arrow (--right --left)

#### Status Indicators
Close (-solid -outline)
Clock
Discount
Check (-solid -outline -line)

### Styles
#### Solid
#### Outline
#### Line

### Modifiers
#### Orientation
#### State

## Testing

To test your code you should run on your workspace:

```sh
vtex link
```