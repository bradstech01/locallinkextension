# locallinkextension
Chrome extension for opening links to local files using the file:// (hopefully one day for Firefox as well). 

# Notes
Firefox recently released an update that bumped them forward to what they call "Firefox Quantum". One big change that came along with firefox quantum was that they completely overhauled how they handle web extensions to hopefully create a solution that would work across browsers (so now they support all chrome API, and have their own browser namespace that they want google to adopt). This broke a lot of extensions, including the original local links extension for firefox.

Someone had ported/reworked that original local links extension for chrome, so I took the code from the LocalLinks extension for Chrome with the hopes of getting a working model for Firefox (better yet, a single codebase for both). I replaced the outdated API from when it was originally made which should have been all this needed to get working, but even with updates in place so that the API would work in both browsers, Firefox these days treats the File:// URI as protected. That means this still won't work in Firefox until they provide some way to access those file:// links. 

For what it's worth, this version does still work in chrome - so if you're interested in a copy of this extension that doesn't inject an outdated version of jquery into every page you visit, feel free to download/clone this repo and sideload it. I have no plans to distribute this via chrome extension store as the current locallinks extension does the same thing. If firefox ever adds support for File:// URLs (or if I find a way around it), I may release this on the mozilla extension store. 
