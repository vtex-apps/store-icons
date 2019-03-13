 ## Icon Pack list

  Here we describe all our SVG fragment identifiers. 
  
 :loudspeaker: **Disclaimer:** The `svg/` folder is just to render the icons in this MD. And this doc is to know how things work under the hoods. 


### How to use this fragments? 

First of all, you should add the `vtex.store-icons` to your dependencies in `manifest.json`. 

This an example that show you how to use it. 

```javascript
  import React from 'react'

  import Icon from 'vtex.store-icons'

  const IconSearch = ({ ...props }) => {
    return <Icon id="hpa-search" {...props} />
  }

  IconSearch.propTypes =  {
    /** Icon size, aspect ratio 1:1 */
    size: PropTypes.number,
    /** Icon viewBox. Default 0, 0, 16, 16 */
    viewBox: PropTypes.string,
    /** Define if will be used a active or muted className */
    isActive: PropTypes.bool,
    /** Active color class */
    activeClassName: PropTypes.string,
    /** Muted color class */
    mutedClassName: PropTypes.string,
  }
  export default IconSearch

 ```


 
### SVG Prefixes 

We use a series of prefixes to help us understand what an specific icon means. 

* bnd - Brand;
* hpa - High Priority Actions;
* mpa - Midle Priority Actions;
* sti - Status Indicator; 
* nav - Navigation
  

### SVG Fragments

| Icon                                    | ID                         |
| --------------------------------------- | -------------------------- |
| ![](svg/bnd-logo.svg)  | bnd-logo | 
| ![](svg/hpa-arrow-from-bottom.svg)  | hpa-arrow-from-bottom | 
| ![](svg/hpa-arrow-to-bottom.svg)  | hpa-arrow-to-bottom | 
| ![](svg/hpa-arrow-back.svg)  | hpa-arrow-back | 
| ![](svg/hpa-calendar.svg)  | hpa-calendar | 
| ![](svg/hpa-cart.svg)  | hpa-cart | 
| ![](svg/hpa-delete.svg)  | hpa-delete | 
| ![](svg/hpa-play.svg)  | hpa-play | 
| ![](svg/hpa-profile.svg)  | hpa-profile | 
| ![](svg/hpa-save.svg)  | hpa-save | 
| ![](svg/hpa-search.svg)  | hpa-search | 
| ![](svg/hpa-hamburguer-menu.svg)  | hpa-hamburguer-menu | 
| ![](svg/hpa-telemarketing.svg)  | hpa-telemarketing | 
| ![](svg/mpa-filter-settings.svg)  | mpa-filter-settings | 
| ![](svg/mpa-single-item.svg)  | mpa-single-item | 
| ![](svg/mpa-gallery.svg)  | mpa-gallery | 
| ![](svg/mpa-list-items.svg)  | mpa-list-items | 
| ![](svg/mpa-heart.svg)  | mpa-heart | 
| ![](svg/mpa-clone--outline.svg)  | mpa-clone--outline | 
| ![](svg/mpa-clone--filled.svg)  | mpa-clone--filled | 
| ![](svg/mpa-edit--outline.svg)  | mpa-edit--outline | 
| ![](svg/mpa-edit--filled.svg)  | mpa-edit--filled | 
| ![](svg/mpa-external-link--line.svg)  | mpa-external-link--line | 
| ![](svg/mpa-external-link--outline.svg)  | mpa-external-link--outline | 
| ![](svg/mpa-eyesight--outline--off.svg)  | mpa-eyesight--outline--off | 
| ![](svg/mpa-eyesight--filled--off.svg)  | mpa-eyesight--filled--off | 
| ![](svg/mpa-eyesight--outline--on.svg)  | mpa-eyesight--outline--on | 
| ![](svg/mpa-eyesight--filled--on.svg)  | mpa-eyesight--filled--on | 
| ![](svg/mpa-filter--outline.svg)  | mpa-filter--outline | 
| ![](svg/mpa-filter--filled.svg)  | mpa-filter--filled | 
| ![](svg/mpa-minus--line.svg)  | mpa-minus--line | 
| ![](svg/mpa-minus--outline.svg)  | mpa-minus--outline | 
| ![](svg/mpa-minus--filled.svg)  | mpa-minus--filled | 
| ![](svg/mpa-plus--line.svg)  | mpa-plus--line | 
| ![](svg/mpa-plus--outline.svg)  | mpa-plus--outline | 
| ![](svg/mpa-plus--filled.svg)  | mpa-plus--filled | 
| ![](svg/mpa-remove.svg)  | mpa-remove | 
| ![](svg/mpa-swap.svg)  | mpa-swap | 
| ![](svg/mpa-arrows.svg)  | mpa-arrows | 
| ![](svg/mpa-bag.svg)  | mpa-bag | 
| ![](svg/mpa-bars.svg)  | mpa-bars | 
| ![](svg/mpa-cog.svg)  | mpa-cog | 
| ![](svg/mpa-columns.svg)  | mpa-columns | 
| ![](svg/mpa-credit-card.svg)  | mpa-credit-card | 
| ![](svg/mpa-elypsis.svg)  | mpa-elypsis | 
| ![](svg/mpa-exchange.svg)  | mpa-exchange | 
| ![](svg/mpa-export.svg)  | mpa-export | 
| ![](svg/mpa-link.svg)  | mpa-link | 
| ![](svg/mpa-settings.svg)  | mpa-settings | 
| ![](svg/mpa-store.svg)  | mpa-store | 
| ![](svg/mpa-angle--down.svg)  | mpa-angle--down | 
| ![](svg/mpa-angle--up.svg)  | mpa-angle--up | 
| ![](svg/inf-help--outline.svg)  | inf-help--outline | 
| ![](svg/inf-help--filled.svg)  | inf-help--filled | 
| ![](svg/inf-tooltip--outline.svg)  | inf-tooltip--outline | 
| ![](svg/inf-tooltip--filled.svg)  | inf-tooltip--filled | 
| ![](svg/inf-warning--outline.svg)  | inf-warning--outline | 
| ![](svg/inf-warning--filled.svg)  | inf-warning--filled | 
| ![](svg/nav-caret--down.svg)  | nav-caret--down | 
| ![](svg/nav-caret--left.svg)  | nav-caret--left | 
| ![](svg/nav-caret--right.svg)  | nav-caret--right | 
| ![](svg/nav-caret--up.svg)  | nav-caret--up | 
| ![](svg/nav-thin-caret--left.svg)  | nav-thin-caret--left |
| ![](svg/nav-thin-caret--right.svg)  | nav-thin-caret--right |
| ![](svg/nav-arrow--left.svg)  | nav-arrow--left | 
| ![](svg/nav-arrow--right.svg)  | nav-arrow--right | 
| ![](svg/nav-home.svg)  | nav-home | 
| ![](svg/nav-plus.svg)  | nav-plus | 
| ![](svg/nav-minus.svg)  | nav-minus | 
| ![](svg/sti-loading.svg)  | sti-loading | 
| ![](svg/sti-check--line.svg)  | sti-check--line | 
| ![](svg/sti-check--outline.svg)  | sti-check--outline | 
| ![](svg/sti-check--filled.svg)  | sti-check--filled | 
| ![](svg/sti-close--line.svg)  | sti-close--line | 
| ![](svg/sti-close--outline.svg)  | sti-close--outline | 
| ![](svg/sti-close--filled.svg)  | sti-close--filled | 
| ![](svg/sti-clock.svg)  | sti-clock | 
| ![](svg/sti-equals.svg)  | sti-equals | 
| ![](svg/sti-discount.svg)  | sti-discount | 
