# Features
- Export commands
- Save banners

# Fixes
- **Standardise names**

- Fix issue where overlay pattern selector clips off screen.
- rework to make UI responsive
- Fix stack viewer if scrolls off screen


# Name Defs:

Banner
- bool isShield
- DesignElement[] design
- DesignElement base

DesignElement
- string patternId
- int colorId
- Pattern pattern (computed based on patternId)
- Color color (computed based on colorId)
- bool isBackground

