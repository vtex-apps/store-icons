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

### Icons API
Any icon can receive the following props:

size: Desired size (default is 16).
isActive: Whaever the icon is active
activeClassName: The className it should have if active
mutedClassName: The className it should have if not active

#### Modifiers

#### Type
```js
<Icon type="solid | line | outline" />
```

#### Orientation
```js
<Icon orientation="up | right | down | left" />
```

#### State
```js
<Icon state="on | off" />
```

### List of Icons

#### High Priority Actions
- [IconArrowBack](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconArrowBack.js)
- [IconAssistantSales](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconAssistantSales.js)
- [IconProfile](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconProfile.js)
- [IconCart](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconCart.js)
- [IconSearch](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconSearch.js)
- [IconDelete](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconDelete.js)
- [IconMenu](https://github.com/vtex-apps/dreamstore-icons/blob/feature/docs/react/IconMenu.js)

#### Mild Priority Actions
IconEyesight (--on --off -solid -outline)
IconMinus (-outline -solid -line)
IconPlus (-outline -solid -plus)
IconSingleItem
IconList
IconGallery

#### Informational

#### Navigation
IconCaret (--down --up --left --rigt)

#### Status Indicators
IconClose (-solid -outline)

## Testing

To test your code you should run on your workspace:

```sh
vtex link
```