---
title: Spurious (Spatial) Correlations
subtitle: "\"Science\""
author: Jon
layout: post
# date: 2018-04-14T00:00:00+05:00
cover-photo: /assets/posts/spurious-spatial-correlations/cover_2x1.png
cover-photo-alt: Cover Photo Test Text
---

I was a bit out of place in my Intro to GIS course during college. Our professor
gave a term assignment where we were to choose a spatial data set and perform some kind of
analysis upon it. The problem I ran into was that I had no spatial data on hand, 
and no practical application to simulate.

Finding data to work with wasn't a big deal. It turns out that there is an absolute 
*wealth* of information online that is both spatial and free. The problem of what to do with the data
remained, though. It was at this point that I found Tyler Vigen's [Spurious Correlations](http://www.tylervigen.com),
a website that draws correlations between (hopefully) unrelated data sets, such as the divorce rate in Maine
and margarine sales per capita over time. I thought it would be funny to do the same with spatial data for Maine.

These are my results.

## Eagles and K-Cups

With the exception of Washington County, eagles seem to make their homes in areas where household K-Cup ownership is at or higher than the national average.

<span class="image center"><img src="{{ '/assets/posts/spurious-spatial-correlations/EaglesAndKCups.png' | relative_url }}" alt="" /></span>

## Schools and Aquifers

589 of Maine’s 795 schools are within 3 km of an aquifer. This means that if you are at a school, there is a 74% chance that you are within walking distance of a significant source of groundwater.

<span class="image center"><img src="{{ '/assets/posts/spurious-spatial-correlations/SchoolsAndAquifers.png' | relative_url }}" alt="" /></span>

## U.S. Cellular Coverage and Oil Spill Hotspots

US Cellular offers great coverage in areas where hazardous oil spills occur the most.

<span class="image center"><img src="{{ '/assets/posts/spurious-spatial-correlations/OilSpillsAndUSCellularCoverage.png' | relative_url }}" alt="" /></span>

## Cemeteries and Broadband Coverage

3875 of Maine's 3929 cemeteries are located exactly within broadband coverage areas (98.63%).

<span class="image center"><img src="{{ '/assets/posts/spurious-spatial-correlations/CemeteriesAndBroadband.png' | relative_url }}" alt="" /></span>

## Red Cross Facilities and Bedrock Formation Eras

In what I can only consider to be a deliberate move, Red Cross has built their facilities in Maine on top of bedrock formed before the Devonian era. This means that if you got into a time machine and went back to the period at which the bedrock was formed beneath any Red Cross facility, you would not find sharks, ferns, trees, insects, or land vertebrates.

<span class="image center"><img src="{{ '/assets/posts/spurious-spatial-correlations/RedCrossAndBedrock.png' | relative_url }}" alt="" /></span>

**Disclaimer:** 

These datasets are in no way scientifically rigorous.

## Sources
- <a href="http://www.maine.gov/dep/gis/datamaps/">Maine Department of Environmental Protection</a>
- <a href="http://www.maine.gov/megis/catalog/">Maine Office of GIS</a>
- <a href="https://usm.maine.edu/gis/digital-atlas">University of Southern Maine's Digital Atlas</a>
- ESRI Online Catalog

<!--
                                __.--'~~~~~`--.
             ..       __.    .-~               ~-.
             ((\     /   `}.~                     `.
              \\\  .{     }               /     \   \
          (\   \\~~       }              |       }   \
           \`.-~ -@~     }  ,-,.         |       )    \
           (___     ) _}  (    :        |    / /      `._
            `----._-~.     _\ \ |_       \   / /-.__     `._
                   ~~----~~  \ \| ~~--~~~(  + /     ~-._    ~-._
                             /  /         \  \          ~--.,___~_-_.
                          __/  /          _\  )
                        .<___.'         .<___/
-->