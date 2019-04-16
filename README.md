# Store Icons

[![Build Status](https://travis-ci.org/vtex-apps/store-icons.svg?branch=master)](https://travis-ci.org/vtex-apps/store-icons)

## Description

All Store icons components.

**Disclaimer:** Don't fork this project, use, contribute, or open issue with your feature request.

## Release schedule

| Release | Status              | Initial Release | Maintenance LTS Start | End-of-life | Store Compatibility |
| :-----: | :-----------------: | :-------------: | :-------------------: | :---------: | :-----------------: |
| [0.x]   | **Current Release** | 2019-01-30      | -----------           | ----------  | 2.x                 |

## Table of Contents

- [Store Icons](#store-icons)
  - [Description](#description)
  - [Release schedule](#release-schedule)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Concept](#concept)
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
       "vtex.store-icons": "0.x"
   }
   ```

2. Import and use it into your code, for example:
   ```js
   ...
   import { IconMenu } from 'vtex.store-icons'
   ...
   const YourComponent = props => (
       ...
       <IconMenu />
       ...
   )
   ```

## Concept

This project is based on [SVG fragment identifiers](https://css-tricks.com/svg-fragment-identifiers-work/). All store icons are served by Render SDK, and with HTML tag `<use>` we can render a fragment from our icon pack. If you want to know the complete list of fragment SVG's, [see here](https://github.com/vtex-apps/store-icons/blob/master/ICONPACK.md)

### Icons API

Any icon can receive the following props:

- **size**: Desired size (default is 16).
- **isActive**: Whenever the icon is active
- **activeClassName**: The className it should have if active
- **mutedClassName**: The className it should have if not active
- **...props**: It is important to notice that any other `<svg>` prop passed will work with an icon as well.

Some components support modifiers. These are props that define the icon type, orientation, state or shape.

- **type**: possible values are _filled_, _line_, _outline_
- **orientation**: possible values are _up_, _down_, _left_, _right_
- **state**: possible values are _on_, _off_
- **shape**: possible values are _square_, _rounded_, _circle_

## Icons List

### Brand

|                                          Component                                           | Type | Orientation | State |            Shape            |
| :------------------------------------------------------------------------------------------: | :--: | :---------: | :---: | :-------------------------: |
| [IconSocial](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconSocial.js) |  🚫  |     🚫      |  🚫   | square \| rounded \| circle |

### High Priority Actions
| Component                                                                                                    | Type  | Orientation | State | Shape |
| :----------------------------------------------------------------------------------------------------------: | :---: | :---------: | :---: | :---: |
| [IconArrowBack](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconArrowBack.js)           | 🚫    | 🚫          | 🚫    | 🚫    |
| [IconAssistantSales](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconAssistantSales.js) | 🚫    | 🚫          | 🚫    | 🚫    |
| [IconProfile](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconProfile.js)               | 🚫    | 🚫          | 🚫    | 🚫    |
| [IconCart](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconCart.js)                     | 🚫    | 🚫          | 🚫    | 🚫    |
| [IconSearch](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconSearch.js)                 | 🚫    | 🚫          | 🚫    | 🚫    |
| [IconDelete](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconDelete.js)                 | 🚫    | 🚫          | 🚫    | 🚫    |
| [IconMenu](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconMenu.js)                     | 🚫    | 🚫          | 🚫    | 🚫    |
| [IconLocationMarker](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconLocationMarker.js) | 🚫    | 🚫          | 🚫    | 🚫    |

### Middle Priority Actions

| Component                                                                                            | Type                      | Orientation | State     | Shape |
| :--------------------------------------------------------------------------------------------------: | :-----------------------: | :---------: | :-------: | :---: |
| [IconEyesight](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconEyesight.js)     | filled \| outline         | 🚫          | on \| off | 🚫    |
| [IconMinus](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconMinus.js)           | filled \| outline \| line | 🚫          | 🚫        | 🚫    |
| [IconPlus](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconPlus.js)             | filled \| outline \| line | 🚫          | 🚫        | 🚫    |
| [IconSingleItem](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconSingleItem.js) | 🚫                        | 🚫          | 🚫        | 🚫    |
| [IconList](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconList.js)             | 🚫                        | 🚫          | 🚫        | 🚫    |
| [IconGallery](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconGallery.js)       | 🚫                        | 🚫          | 🚫        | 🚫    |
| [IconRemove](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconRemove.js)         | 🚫                        | 🚫          | 🚫        | 🚫    |
| [IconSwap](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconSwap.js)             | 🚫                        | 🚫          | 🚫        | 🚫    |

### Informational

| Component | Type | Orientation | State | Shape |
| :-------: | :--: | :---------: | :---: | :---: |
|           |      |             |

### Navigation

|                                         Component                                          | Type |         Orientation         | State | Shape |     Thin      |
| :----------------------------------------------------------------------------------------: | :--: | :-------------------------: | :---: | :---: | :-----------: |
| [IconCaret](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconCaret.js) |  🚫  | up \| down \| left \| right |  🚫   |  🚫   | true \| false |

### Status Indicators

| Component                                                                                  | Type                      | Orientation | State | Shape |
| :----------------------------------------------------------------------------------------: | :-----------------------: | :---------: | :---: | :---: |
| [IconClose](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconClose.js) | filled \| outline         | 🚫          | 🚫    | 🚫    |
| [IconCheck](https://github.com/vtex-apps/store-icons/blob/feature/docs/react/IconCheck.js) | filled \| outline \| line | 🚫          | 🚫    | 🚫    |

## Testing

To test your code, you should run on your workspace:

```sh
vtex link
```
