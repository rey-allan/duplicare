# Duplicare

## Overview

Classes on Piazza can get noisy with lots of questions being
posted on a daily basis. Unfortunately, as the number of posts grows,
students tend to get overwhelmed when encountering an issue. Instead
of searching the forums for a similar problem, they blindly create
new questions that might have already been discussed. This increases
the amount of duplicate posts making the class forum unnecessarily
cluttered.

**Duplicare** brings a solution to this problem by providing a
simple `userscript` that enhances Piazza by leveraging the power of
the existent search functionality whenever the student writes a new
post. Its main objective is to reduce the number of duplicate
questions saving both the students and the instructors time and
effort.

## Installation

This script has been tested on both Firefox and Chrome. To start
using it, follow these steps:

1. Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) for Firefox or [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) for Chrome.

1. Install **Duplicare** from [OpenUserJS](https://openuserjs.org/scripts/reyallan/Duplicare).

1. Make sure to enable the script!

## Usage

Using the script is straightforward:

* Simply visit the [Piazza](https://piazza.com) forum for your class.

* Click on the `New Post` button.

* As soon as you start typing the *Summary* for your post, **Duplicare** will automatically initiate a search on the left pane using the same words.

Hopefully this will help you find a possible solution to your problem,
by finding similar questions, and avoid creating a duplicate post.

## Troubleshooting

### Script is not working

* Make sure **Duplicare** is enabled. You can verify this by clicking on the Greasemonkey (Firefox) or Tampermonkey (Chrome) icon in your browser, and make sure the script is running.

* Refresh the page. This will force the script to be reloaded.

* If none of the solutions above worked, please create an issue!