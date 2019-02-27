 ## Icon Pack list

  Here we describe all our SVG fragment identifiers. 
  
 :loudspeaker: **Disclaimer:** The `svg/` folder is just to render the icons in this MD.


### How to use this fragments? 

First of all, you should add the `vtex.dreamstore-icons` to your dependencies in `manifest.json`. 

This an example that show you how to use it. 

```javascript
  import React from 'react'

  import Icon from 'vtex.dreamstore-icons'

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
