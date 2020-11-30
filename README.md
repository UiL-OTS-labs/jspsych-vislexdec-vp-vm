# jspsych-vislexdec-vp-vm
Template [visual lexical decision](https://en.wikipedia.org/wiki/Lexical_decision_task) experiment with _masked_ _visual prime_. 

# Connected templates

The current status of Lexical Decision Templates

### Visual Templates
1. [vislexdec](https://github.com/UiL-OTS-labs/jspsych-vislexdec)
2. [vislexdec-vp](https://github.com/UiL-OTS-labs/jspsych-vislexdec-vp)
3. [vislexdec-vp-mp](https://github.com/UiL-OTS-labs/jspsych-vislexdec-vp-vm)

### Audio and/or visual Templates
4. [audlexdec-vp-mp](https://github.com/UiL-OTS-labs/jspsych-audlexdec-vp-mp)
5. [audlexdec-vp](https://github.com/UiL-OTS-labs/jspsych-audlexdec-vp)
6. [audlexdec](https://github.com/UiL-OTS-labs/jspsych-audlexdec-vp)


# Task Description


## Short description

This is one of many 'standard' variations of a visual lexical decision task. The 'parent' of this boilerplate/template is the general visual [Lexical Decision With Visual Prime](https://github.com/UiL-OTS-labs/jspsych-vislexdec-vp/). You may want to visit there first and come back here, especially if if you need general info about how to use and set up these kinds of boilerplates.

The participant first sees a fixation cross, then a (forward) _masked_ prime is presented, followed by the second stimulus (the response word or non-word). Particpants are instructed to respond as quickly as possible to make the decision if both strings in the pair are words --or not--, using the keyboard.

- The (forward) _mask_ is a string of characters of (preferably) the same amount of characters as the prime.
- The _prime_ is a string of letters and can be a real word or a nonword.
- The _'test stimulus'_ is a string of letters and can also be a real word or a nonword.

So, for instance:

A trial in which semantic relatedness is hypothesised by test stimulus design.( The word 'snow' might prime a faster reaction time (RT) to respond to the word 'white').
```
a.    ####     <------ mask
b.    snow     <------ prime
c.    white    <------ response phase
```

## Longer description
There are many (slightly) different variations of a lexical decision task. In this version, a trial consists of subsequently presenting _two_ words or nonwords. The participant needs to make a swift decision whether the _pair_ of presented sets of letters - the test stimuli - are _both_ acutal words or not. 

The naming conventions for this pair can be slightly confusing. The general convention will be to differentiate between a 'prime' and the 'test stimulus', even though in a way, the _pair_ _is_ the test stimulus, both in what defines a single trial, and in the way to prepare the stimuli.js structure (the code).

The idea behind this _primed_ variant is that there may be semantic (or visual or grammatical) associations that influence reaction time in the last decision stage. For instance, after presenting the word 'snow' as a _prime_, there might be a speedup in the reaction time (RT) to the test stimulus if it were 'white', as opposed to --for instance-- 'potato', due to <i>semantic association</i>.

It is up to the researcher to balance the stimulus design according to the categorial speedup or slowdown effects that are hypothesised, amongst others. So-called _Latin Square Designs_ and things like _Pseudo-Randomisation_ are often needed, or have at least by tradition been used as solutions to certain problems. Think of: maximizing statistical power, keeping participants unbiased and naive with regards to the purpose of the experiment, general experiment look and feel, task elicited enticingness versus boredom, data management considerations, categorial data-reduction heuristics, etc...  

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
2. Unzip the jspsych-vislexdec-vp-main.zip at a location of your choosing.
3. Inside the folder is a file called index.html, double click it in order to open it
   in a browser.

# Getting started (the harder way, local and/or custom setup)

You need this github repository and to download the jsPsych library version 6.1
complete the following steps. When downloading and extracting folders please
keep in mind that once working on the server, filenames are case sensitive and
"jsPsych.js" and "jspsych.js" are two distinct filenames. It might work on your
machine, but it might not work on the server hosting your experiment.

You will need to adapt your own directory structure/naming convention in the 
top ```<script>``` tags as defined in index.html, if you want your own local jsPsych setup.

1. Download this repository by clicking the green code button above and Download zip.
2. Unzip the jspsych-vislexdec-vp.zip at a location of your choosing.
3. Download jsPsych-6.1.0 (-6.1.0 is the version) from the jsPsych releases website
   https://github.com/jspsych/jsPsych/releases. You might need to scroll down a little.
4. Extract the jsPsych folder into the jspsych-vislexdec-vp folder you extracted earlier.
5. Inside the folder is a file called index.html, double click it in order to open it
   in a browser.
   
