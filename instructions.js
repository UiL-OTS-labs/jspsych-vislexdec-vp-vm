/*
 * In this file the instructions are defined that are used throughout
 * the experiment.
 * Make sure when editing this file, the file is stored with
 * utf8 text encoding.
 */

/*
 * HTML string that shows the instruction before the practice
 * The goal of this instruction is that the participant knows 
 * what to do in the task.
 * The strings are concatenated together by adding (+) them
 * together.
 */

const PRE_PRACTICE_INSTRUCTION =
    "<strong>Dear participant</strong>,<BR><BR>"        +

    "thank you for participating in this experiment."   +
    "<BR><BR>"                                          +

    "You are now going to see words on the screen, one "+
    "after the other. The words come in pairs. "        +
    "Your task is to indicate for each pair as quickly "+
    "as possible whether you think the word written "   +
    "in CAPITALS is word is a "                         +
    "<i>real word or not</i>. "                         +
    "Try to make no mistakes.<BR><BR>"                  +

    "After clicking OK, please put your "               +
    "<i>index</i> fingers on the two "                  + 
    "keys you've just set. Try keep them in those "     +
    "positions during the <i>entire experiment</i>!<BR>"+

    "<ul>"                                              + 
    "<li>Hit the <kbd>%correct_key%</kbd> key for "     + 
    "<strong>Yes</strong>. "                            + 
    "<sub><i>(Use this 'Yes' key to proceed throughout "+ 
    "the experiment)</i>.</sub></li>"                   +
    "<li>Hit the <kbd>%incorrect_key%</kbd> key for "   +
    "<strong>No</strong>.</li>"                         + 
    "</ul>"                                             +

    "First, you can practice.<BR><BR>"                  +
    "<i>Click OK to start practicing.</i>"
    ;

const PREPARE_YES_KEY_PROMPT = `
    <strong>Get your index fingers in position!</strong>
    <BR><BR>
    Hit your <kbd>%correct_key%</kbd> key (<i>'yes'</i>) 
    to start. 
    `;

const PRE_TEST_INSTRUCTION = 
    "End of the practice part.<BR><BR>"                 +
    "If you have any questions at this moment, please " +
    " ask yourself now.<BR><BR>"                        +
    "If not, click OK to continue with the real task."
    ;
