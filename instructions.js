////////////////
// INSTRUCTIONS
///////////////
/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */

 // GENERIC TESTS/CHECKS
const GENERIC_CHECK = `
    <h3>In order to participate, please make sure that you:</h3>
    <br>
    <ul>
    <li>Run this on a Laptop or Desktop computer, <b>not</b> on a phone or a tablet!</li>
    <li>Have a <b>real keyboard</b> working.</li><li>Have a <b>mouse</b> and/or 
    <b>trackpad</b> that works.</li>
    </ul>
    <h3>Please <i>maximize</i> your browser window before you continue!</h3>
    <br>
    <p>Click below if you are ready to proceed</p>
    `;

const PRE_PRACTICE_INSTRUCTION =
    "<strong>Dear participant</strong>,<br><br>"        +

    "thank you for participating in this experiment."   +
    "<br><br>"                                          +

    "You are now going to see words on the screen, one "+
    "after the other. Your task is to indicate as "     +
    "quickly as possible for each UPPER CASE word "     +
    "wther you think it is a <i>real word or not</i>. " +
    "Try to make no mistakes.<br><br>"                  +

    "After clicking OK, please put your "               +
    "<i>index</i> fingers on the two "                  +
    "keys you've just set. "                            +

    "<ul>"                                              +
    "<li>Hit the <kbd>%correct_key%</kbd> key for "     +
    "<strong>Yes</strong>.</li>"                        +
    "<li>Hit the <kbd>%incorrect_key%</kbd> key for "   +
    "<strong>No</strong>.</li>"                         +
    "</ul>"                                             +

    "First, you can practice.<br><br>"                  +
    "<i>Click OK to start practicing.</i>"
    ;

const PREPARE_YES_KEY_PROMPT = `
    <strong>Get your index fingers in position!</strong>
    <br>
    <br>
    Hit your <kbd>%correct_key%</kbd> key (<i>'yes'</i>)
    to start.
    `;

const PRE_TEST_INSTRUCTION =
    "End of the practice part.<br><br>"                 +
    "Click OK to continue with the real task."
    ;

const DEBRIEF_MESSAGE = `
    <h1>End of the experiment</h1>
    <br>
    <br>
    <h2>Thank you for participating!</h2>
    `;

const DEBRIEF_MESSAGE_DURATION = 3000;