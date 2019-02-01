# Dreamstore Icons

## Description

All the icons that Dreamstore apps use.

## Release schedule

| Release  | Status              | Initial Release | Maintenance LTS Start | End-of-life | Dreamstore Compatibility
| :--:     | :---:               |  :---:          | :---:                 | :---:       | :---: 
| [0.x]    | **Current Release** |  2019-01-30     | -----------           | ----------  | 2.x

## Table of Contents
- [Usage](#usage)
- [Concepts](#concepts)
    - [Icons API](#icons-api)
- [Icons List](#icons-list)
    - [Brand](#brand)
    - [High Priority Actions](#high-priority-actions)
    - [Middle Priority Actions](#middle-priority-actions)
    - [Informational](#informational)
    - [Navigation](#navigation)
    - [Status Indicators](#status-indicators)
- [Testing](#testing)

## Usage

To use an icon of this project follows the steps below:

1. Add into the dependencies of your `manifest.json` and use it like an npm module.
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

### Icons API

Any icon can receive the following props:
- **size**: Desired size (default is 16).
- **isActive**: Whenever the icon is active
- **activeClassName**: The className it should have if active
- **mutedClassName**: The className it should have if not active
- **...props**: It is important to notice that any other ```<svg>``` prop passed will work with an icon as well.

Some components support modifiers. These are props that define the icon type, orientation, state or shape.
- **type**: possible values are *solid*, *line*, *outline*
- **orientation**: possible values are *up*, *down*, *left*, *right*
- **state**: possible values are *on*, *off*
- **shape**: possible values are *square*, *rounded*, *circle*

## Icons List
### Brand
| Component | Type | Orientation | State | Shape
| :---:     |:---:  | :---:       | :---: | :---:
| [IconSocial](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconSocial.js) | 🚫 | 🚫 | 🚫 |  square \| rounded \| circle

### High Priority Actions
| Component | Type | Orientation | State | Shape
| :---:     |:---: | :---:       | :---: | :---:   
| [IconArrowBack](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconArrowBack.js) | 🚫 | 🚫 | 🚫 | 🚫 
| [IconAssistantSales](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconAssistantSales.js) | 🚫 | 🚫 | 🚫| 🚫 
| [IconProfile](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconProfile.js) | 🚫 | 🚫 | 🚫 | 🚫 
| [IconCart](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconCart.js) | 🚫 | 🚫 | 🚫 | 🚫 
| [IconSearch](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconSearch.js) | 🚫 | 🚫 | 🚫 | 🚫 
| [IconDelete](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconDelete.js) | 🚫 | 🚫 | 🚫 | 🚫 
| [IconMenu](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconMenu.js) | 🚫 | 🚫 | 🚫 | 🚫 

### Middle Priority Actions
| Component | Type | Orientation | State | Shape
| :---:     |:---: | :---:       | :---: | :---:     
| [IconEyesight](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconEyesight.js) | solid \| outline |  🚫 | on \| off | 🚫 
| [IconMinus](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconMinus.js) | solid \| outline \| line | 🚫 | 🚫| 🚫 
| [IconPlus](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconPlus.js) | solid \| outline \| line | 🚫 | 🚫| 🚫 
| [IconSingleItem](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconSingleItem.js) | 🚫 | 🚫 | 🚫 | 🚫 
| [IconList](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconList.js) | 🚫 | 🚫 | 🚫 | 🚫 
| [IconGallery](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconGallery.js) | 🚫 | 🚫 | 🚫 | 🚫 
| [IconRemove](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconRemove.js) | 🚫 | 🚫 | 🚫 | 🚫 
| [IconSwap](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconSwap.js) | 🚫 | 🚫 | 🚫 | 🚫 

### Informational
| Component | Type | Orientation | State | Shape
| :---:     |:---: | :---:       | :---: | :---:      
|           |      |             |

#### Navigation
| Component | Type | Orientation | State | Shape
| :---:     |:---: | :---:       | :---: | :---:  
| [IconCaret](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconCaret.js) | 🚫 | up \| down \| left \| right | 🚫| 🚫 


### Status Indicators
| Component | Type | Orientation | State | Shape
| :---:     |:---: | :---:       | :---: | :---:     
| [IconClose](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconClose.js) | solid \| outline | 🚫 | 🚫 | 🚫 

## Testing

To test your code, you should run on your workspace:

```sh
vtex link
```
