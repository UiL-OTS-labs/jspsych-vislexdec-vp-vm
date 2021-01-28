# jspsych-vislexdec-vp-vm
Visual [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) experiment with _Masked_ _Visual Prime_ (template) 

# Generic documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for some context and scope.

# Task Description

## Short description

This is one of many 'standard' variations of a visual lexical decision task. The 'parent' of this boilerplate/template is the general visual [Lexical Decision With Visual Prime](https://github.com/UiL-OTS-labs/jspsych-vislexdec-vp/).

The participant first sees a fixation cross, then a (forward) _masked_ prime is presented, followed by the second stimulus (the response word or non-word). Particpants are instructed to respond as quickly as possible to make the decision if both strings in the pair are words --or not--, using the keyboard.
instructed to respond as quickly as possible to make the decision if both strings in the pair are words --or not--, using the keyboard.

- The (forward) _mask_ is a string of characters of (preferably) the same amount of characters as the prime.
- The _prime_ is a string of letters and can be a real word or a nonword.
- The _'test stimulus'_ is a string of letters and can also be a real word or a nonword.

A reference that descibes this variant's method:

Jacob, G., Heyer, V., & Veríssimo, J. (2018). Aiming at the same target: A masked priming study directly comparing derivation and inflection in the second language. International Journal of Bilingualism, 22(6), 619–637. https://doi.org/10.1177/1367006916688333

## Longer description
There are many (slightly) different variations of a lexical decision task. In this version, a trial consists of subsequently presenting _two_ words or nonwords. The participant needs to make a swift decision whether the _pair_ of presented sets of letters - the test stimuli - are _both_ acutal words or not. 

The naming conventions for this pair can be slightly confusing. The general convention will be to differentiate between a 'prime' and the 'test stimulus', even though in a way, the _pair_ _is_ the test stimulus, both in what defines a single trial, and in the way to prepare the stimuli.js structure (the code).

The essential sub trial phases for _one_ trial for this boilerplate experiment are:

1. Fixation cross presentation (fixed time, no responses are recorded) 
2. Mask presentation (fixed time, no responses are recorded)
3. Prime presentation (fixed time, no responses are recorded)
4. Test stimulus presentation (the last string of letters of the presented pair, lexical decision phase). 

Only in this _last phase_, as soon as the "test item" is being presented, the participant can respond with the keyboard.

The reaction time, response and correctness of the response are usually the important variables for analysis. By default, the data of all sub trial phases are logged in the data, but the output data can quite easily be filtered after data collection.

# Getting started (the easy way, working internet connection required)
For now, the easiest way to test these templates, is:

1. Download this repository by clicking the green code button above and Download zip.
2. Unzip the jspsych-vislexdec-vp-mp-main.zip at a location of your choosing.
3. Inside the folder is a file called index.html, double click it in order to open it
   in a browser.

