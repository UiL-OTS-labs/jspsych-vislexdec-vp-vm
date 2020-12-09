// Item types
const NON_WORD = "NON_WORD";
const UNRELATED = "UNRELATED";
const RELATED = "RELATED";

const GROUPS = [
    "group1"
    // "group2",
    // "group3"
];

const PRACTICE_ITEMS = [
    {
        id: 1, 
        item_type: NON_WORD,
        word: "PALVE", 
        prime: "onion",
        pmask: "#####" 
    },
    { id: 2,
        item_type: UNRELATED,
        word: "HOT",
        prime: "stapler",
        pmask: "#######"
    }
];

const LIST_GROUP1 = [
    {
        id: 1,
        item_type: NON_WORD,
        word: "SLIRQUE",
        prime: "eyes",
        pmask: "####"
    },
    {
        id: 2,
        item_type: NON_WORD,
        word: "CRAWSE",
        prime: "piano",
        pmask: "#####"
    },
    {
        id: 3,
        item_type: NON_WORD,
        word: "THWURP",
        prime: "rabbit",
        pmask: "######"
    },
    {
        id: 4,
        item_type: NON_WORD,
        word: "CLEM",
        prime: "flower",
        pmask: "######"
    },
    {
        id: 5,
        item_type: RELATED,
        word: "WHITE",
        prime: "snow",
        pmask: "####" 
    },
    {
        id: 6,
        item_type: RELATED,
        word: "TRAVEL",
        prime: "suitcase",
        pmask: "########"
    },
    {
        id: 7,
        item_type: UNRELATED,
        word: "LETTER",
        prime: "garden",
        pmask: "######"
    },
    {
        id: 8,
        item_type: UNRELATED,
        word: "CLOWN",
        prime: "forest",
        pmask: "######" 
    }
];

// Add a second list of stimuli when required.
// const LIST_GROUP2 = [
// ...
// ]

const TEST_ITEMS = [
    {group_name: GROUPS[0], table: LIST_GROUP1}
    // Add the second group here, put a comma on the end of the line above here.
    //{group_name: GROUPS[1], table: LIST_GROUP2}
];

/**
 * Get the list of practice items
 *
 * Returns an object with a group and a table, the group will always indicate
 * "practice" since it are the practice items
 *
 * @returns {object} object with group and table fields
 */
function getPracticeItems() {
    return {group_name : "practice", table : PRACTICE_ITEMS};
}

/**
 * This function will pick a random group from the TEST_ITEMS array.
 *
 * Returns an object with a group and a table, the group will always indicate
 * which list has been chosen for the participant.
 *
 * @returns {object} object with group and table fields
 */
function pickRandomGroup() {
    let range = function (n) {
        let empty_array = [];
        let i;
        for (i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_groups = TEST_ITEMS.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_groups), 1)
    var retgroup = TEST_ITEMS[shuffled_range[0]];
    return retgroup
}
