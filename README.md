Canvas filters
--------------

This library implements a few image processing filters using the canvas element.

The filters operate on ImageData objects. The filters do not modify the
source ImageData.

Based on http://www.html5rocks.com/en/tutorials/canvas/imagefilters/

Usage:
```
import Filters from "CanvasFilters";
...
//then somewhere in code
let filters = Filters;
let newImData = filters.brightnessContrast(someBaseImageData, filterBrightness, filterContrast);
```
