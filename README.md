# jspsych-vislexdec-vp-vm
Visual [Lexical Decision](https://en.wikipedia.org/wiki/Lexical_decision_task) experiment with _Masked_ _Visual Prime_ (template) 

# Generic documentation
Please read the [generic documentation](https://github.com/UiL-OTS-labs/jspsych-uil-template-docs) for some context and scope.

# Task Description
This is one of many 'standard' variations of a visual lexical decision task.

The participant first sees a fixation cross, then a (forward) _mask_ is presented, followed by the a visual _prime_ and then the response item (decision phase). Particpants are instructed to respond as quickly as possible to make the decision if the (last) word, written in UPPER CASE, is a word or not, using the keyboard.

- The (forward) _mask_ is a string of characters of (preferably) the same amount of characters as the prime.
- The _prime_ is a string of letters and can be a real word or a nonword.
- The _'test stimulus'_ is a string of letters and can also be a real word or a nonword.

A reference that descibes this variant's method:

Jacob, G., Heyer, V., & Veríssimo, J. (2018). Aiming at the same target: A masked priming study directly comparing derivation and inflection in the second language. International Journal of Bilingualism, 22(6), 619–637. https://doi.org/10.1177/1367006916688333


Crucial trial phases (sub trial phases):
- Fixation cross
- Visual Mask
- Visual Prime
- Lexical decision (decision phase)

Only in this _last phase_, as soon as the item is being presented, the participant can respond with the keyboard.

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
    "expected_answer": 0,
    "trial_type": "html-keyboard-response",
    "trial_index": 13,
    "time_elapsed": 28717,
    "internal_node_id": "0.0-8.0-3.0",
    "subject": "t3kfvvyq",
    "list": "my_one_and_only_list",
    "correct": true,
            "integer_correct" : 1,
    "key_chosen_ascii": 76,
    "key_chosen_char": "L",
    "yes_key": "A",
    "no_key": "L"
},

```

Variable name (key) | Description          | Unit  | Type           | Comments                             | jsPsych default | Template default | Plugin name
--------------------|----------------------|-------|----------------|--------------------------------------|-----------------|------------------|------------
"rt"                | Reaction Time        | ms.   | float          | Reaction time in milliseconds        | yes             |                  |
stimulus"           | stimulus (html)      |       | string/html    |                                      | yes             |                  |
"key_press"         | Keyboard response    |       | string/object? | https://en.wikipedia.org/wiki/ASCII  | yes             |                  | html-keyboard-response
"condition"         | Condition            |       | string         | See ```stimuli.js```                 | no              | yes              |
"word"              | Decision phase item  |       | string/html    | See ```stimuli.js, index.html```     | no              | yes              |
"prime"             | Prime phase item     |       | string/html    | (...)                                | no              | yes              |
"prime_mask"        | Mask item            |       | string/html    | (...)                                | no              | yes              |
"id"                | ID/code              |       |                | (...)                                | yes             |                  |
"trial_phase"       | Trial phase          |       |                | (...)                                | no              | yes              |
"useful_data_flag"  | Filter flag          |       | boolean        |                                      | no              | yes              |
"expected_answer"   | TODO change!         |       | todo           | Now (still) named "correct_response" | no              | no/yes/willbe.   |
"trial_type"        | What plugin was used |       |                |                                      | yes             |                  | "html-keyboard-response"
"trial_index"       | jsPsych index        |       |                |                            	       | yes             |                  |
"time_elapsed".     | jsPsych time object  | ms    | int (/float?)  | For instance: 45062                  | yes             |                  |
"internal_node_id.  | jsPsych node object  |       |                | For instance:"0.0-11.0-1.4"          | yes             |                  |
"subject"           | Subject ID           |       |                | For instance: "8oo722dq"             |                 | yes              |
"list"              | Stimulus list name.  |       | string         | For instance: "my_one_and_only_list" | no              | yes              |
"correct"           | Scoring result       |       | Boolean        | 'true or false' score of response    |                 | yes              |
"integer_correct"   | Scoring result       |       | integer        | 1 of 0 for correct or incorrect      |                 | yes              |
"key_chosen_ascii"  |                      |       |                | For instance: 65                     | no              | yes              |
"key_chosen_char"   |                      |       |                | For instance: "A"                    | no              | yes              |
"yes_key"           |                      |       |                | For instance:  "A"                   | no              | yes              |
"no_key"            |                      |       |                | For instance: "L"                    | no              | yes              |



# Getting started 
People _affiliated with our lab_ can use the information [from our lab webiste](https://uilots-labs.wp.hum.uu.nl/experiments/overview/) and expand the "Online experiments using jsPsych" section for details. Please follow [this how-to](https://uilots-labs.wp.hum.uu.nl/how-to/online-experimenting/).

### Make your experiment ready for use with the data server

### Update access key
In the file `globals.js` is a variable:
```javascript
const ACCESS_KEY = '00000000-0000-0000-0000-000000000000';
```
Before uploading your experimentto the UiL-OTS data server, you will need to change this to the access_key that you obtained when your experiment was approved. For elaborate info see `globals.js`.


### Adapting stimuli
- Open the file `stimuli.js` in your plain text editor.
- There is a list, called LIST_1:

```javacript
const LIST_1 = [ // stimuli and timeline variables

```
-  This list can be adapted to your own needs, i.e, you can replace values, make the list longer (don't forget to increment the 'id' values for new items!).
- If you need to implement a more complex design, you should read the `stimuli.js` file (and its comment sections) a little better. 
- For an example of a Latin square design, please have a look [here](https://github.com/UiL-OTS-labs/jspsych-spr-mw).

