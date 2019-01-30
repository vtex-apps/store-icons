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

### Styles
#### Solid
#### Outline
#### Line

### Modifiers
#### Orientation
#### State

### Types

#### High Priority Actions
IconArrowBack
IconAssistantSales
IconProfile
IconCart
IconSearch
IconDelete
IconMenu

#### Mild Priority Actions
IconEyesight (--on --off -solid -outline)
IconMinus (-outline -solid -line)
IconPlus (-outline -solid -plus)
IconSingleItem
IconList
IconGallery

#### Informational
Tooltip (-outline -solid)
Warning (-outline -solid)
Help (-outline -solid)

#### Navigation
IconCaret (--down --up --left --rigt)

#### Status Indicators
IconClose (-solid -outline)

## Testing

To test your code you should run on your workspace:

```sh
vtex link
```