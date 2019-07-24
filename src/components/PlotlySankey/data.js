export default {

    label : ["Culture/Company", "Communication", "Bad", "Neutral", "Good"],
    color: ["blue", "blue", "blue", "blue", "blue"],
    link: {
        source: [1,1,2,2,2],
        // target: [-0,-1,-0,-0.5,-1],
        target: [3,4,3,5,4],
        value:  [36,5,10,12,5]
    }


    // sankey_sample : {"1": [{"source": 1, "value": 36, "target": -0, "question": '1'},
    // {"source": 1, "value": 5, "target": -1, "question": '1'},
    // {"source": 2, "value": 10, "target": -0, "question": '1'},
    // {"source": 2, "value": 12, "target": -0.5, "question": '1'},
    // {"source": 2, "value": 5, "target": -1, "question": '1'}]},



//     sankey_sample : {"1": [{"source": 1, "value": 36, "target": 10, "question": '1'},
//                             {"source": 1, "value": 5, "target": 11, "question": '1'},
//                             {"source": 2, "value": 10, "target": 10, "question": '1'},
//                             {"source": 2, "value": 12, "target": 10.5, "question": '1'},
//                             {"source": 2, "value": 5, "target": 10, "question": '1'}]},



// source_map : {1: 'Culture/Company', 2: 'Communication', 3: 'Leadership', 4: 'Change',
// 5: 'Management', 6: 'Transparency', 7: 'Team', 8:'People/Employees'},

// target_map : {0: 'Bad', 0.5: 'Neutral', 1: 'Good'}


}
  