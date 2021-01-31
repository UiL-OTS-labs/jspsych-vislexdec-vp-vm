# jspsych-vislexdec-vp-vm
Visual [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) experiment with _Masked_ _Visual Prime_ (template) 

# Generic documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for some context and scope.

# Task Description

## Short description

This is one of many 'standard' variations of a visual lexical decision task. The 'parent' of this boilerplate/template is the general visual [Lexical Decision With Visual Prime](https://github.com/UiL-OTS-labs/jspsych-vislexdec-vp/).

The participant first sees a fixation cross, then a (forward) _masked_ prime is presented, followed by the second stimulus (the response word or non-word). Particpants are instructed to respond as quickly as possible to make the decision if the (last) word, written in UPPER CASE is a word or not, using the keyboard.

- The (forward) _mask_ is a string of characters of (preferably) the same amount of characters as the prime.
- The _prime_ is a string of letters and can be a real word or a nonword.
- The _'test stimulus'_ is a string of letters and can also be a real word or a nonword.

A reference that descibes this variant's method:

Jacob, G., Heyer, V., & Veríssimo, J. (2018). Aiming at the same target: A masked priming study directly comparing derivation and inflection in the second language. International Journal of Bilingualism, 22(6), 619–637. https://doi.org/10.1177/1367006916688333

The essential sub trial phases for _one_ trial for this boilerplate experiment are:

1. Fixation cross presentation (fixed time, no responses are recorded) 
2. Mask presentation (fixed time, no responses are recorded)
3. Prime presentation (fixed time, no responses are recorded)
4. Test stimulus presentation (the last string of letters of the presented pair, lexical decision phase). 

Only in this _last phase_, as soon as the "test item" is being presented, the participant can respond with the keyboard.

# Output

The data of _all_ (sub) _trial phases_ are logged in the data, but the output data can be filtered after data collection in many ways.
Please read the [general primer on jsPsych's data](https://github.com/UiL-OTS-labs/jspsych-output) if you are new to jsPsych data output.

Essential output for the _'true experimental'_ purpose in this template are:

- Reaction Time (RT) of the keyboard response in the decision phase
- Correctness of the keyboard response in the decision phase

The crucial trial/sub-trial phase (decision phase) output may look similar to this:

```json
	{
		"rt": 330.00000000000364,
		"stimulus": "<p class='stimulus'>PALVE</p>",
		"key_press": 76,
		"condition": "PRACTICE",
		"word": "PALVE",
		"prime": "onion",
		"prime_mask": "#####",
		"id": 1,
		"trial_phase": "present_word",
		"useful_data_flag": true,
		"correct_response": 0,
		"trial_type": "html-keyboard-response",
		"trial_index": 13,
		"time_elapsed": 28717,
		"internal_node_id": "0.0-8.0-3.0",
		"subject": "t3kfvvyq",
		"list": "my_one_and_only_list",
		"correct": true,
		"key_chosen_ascii": 76,
		"key_chosen_char": "L",
		"yes_key": "A",
		"no_key": "L"
	},
	//(...)
```

- Some of them are native to jsPsych and have been mentioned in the primer on data output. 
- Others have been explicitly added to the data in the ```on_finish()``` method call that happens further down in the `present_word` trial definition. 
- Open ```index.html``` in your plain text editor for more details.

Here is a description of the above example, using "#" as comments on the `"key: value"` pairs:

```JSON
                                               #this is a comment

"rt": 368.0000000000073,
"stimulus": "<p class='stimulus'>crawse</p>",  # Reaction Time, in miliseconds (jsPysch default)
"key_press": 76,                               # The word or string and/or its HTML specifics (jsPsych default)
"condition": "NON_WORD",                       # ASCII code of keyboard key pressed within phase (jsPysch default)
"word": "crawse",                              # timelineVariable from 'stimuli.js' (UiL template default)
"prime": "piano",                              # timelineVariable from 'stimuli.js' (UiL template default)
"id": 2,                                       # timelineVariable from 'stimuli.js' (UiL template default)
"trial_phase": "present_word",                 # timelineVariable from 'stimuli.js' (UiL template default)
"useful_data_flag": true,                      # (UiL template default filter flag)
"correct_response": 0,                         # timelineVariable from 'stimuli.js' (UiL template default)
"trial_type": "html-keyboard-response",        # jsPysch default
"trial_index": 25,                             # jsPysch default                          
"time_elapsed": 44933,                         # jsPysch default
"internal_node_id": "0.0-11.0-2.1",            # jsPysch default
"subject": "f9pdgg60",                         # Subject ID (from index.html)(UiL template default)             
"list": "my_one_and_only_list",                # Name of the list of epxerimental stimuli (UiL template default)
"correct": true,                               # Scored response value {true or talse }(UiL template default)
"key_chosen_ascii": 76,                        # Info on key chosen in experiment trial (UiL template default)
"key_chosen_char": "L",                        # Info on key chosen in experiment trial (UiL template default)
"yes_key": "A",                                # Info on key defined for participant for choosing 'yes' (UiL template default)
"no_key": "L"                                  # Info on key defined for participant for choosing 'no' (UiL template default)
```

### Adapting stimuli
- Open the file `stimuli.js` in your plain text editor.
- Note there is a list, called LIST_1

```javacript
const LIST_1 = [//...

```
-  This list can be adapted to your own needs, i.e, you can replace values, make the list longer (don't forget to increment the 'id' values for new items!).
- If you need to implement a more complex design, you should read the `stimuli.js` file (and its comment sections) a little better. 
- For an example of a Latin square design, please have a look [here](https://github.com/UiL-OTS-labs/jspsych-spr-mw) for some inspiration. 

In short: you can add additional lists if your experiment requires this, but then you also have to edit some other values in stimuli.js in order for your experiment to work as intended.

## Prepare for the data server setup (only for people affiliated to our lab!)

### Updating access key
In the file `globals.js` is a variable:
```javascript
const ACCESS_KEY = 'zeekretkey';
```
For uploading to the UiL-OTS data server you will need to change this to the access_key that you obtained when your experiment was approved. For elaborate info see `globals.js`.

Good luck!


