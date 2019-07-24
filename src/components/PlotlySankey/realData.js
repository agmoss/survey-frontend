export default {

    label : ["Culture/Company", "Communication", "Bad", "Neutral", "Good"],

    sankey_sample : {"1": [{"source": 1, "value": 36, "target": 10, "question": '1'},
                        {"source": 1, "value": 5, "target": 9, "question": '1'},
                        {"source": 2, "value": 10, "target": 10, "question": '1'},
                        {"source": 3, "value": 12, "target": 9, "question": '1'},
                        {"source": 2, "value": 5, "target": 9, "question": '1'}]},


    source_map : {1: 'Culture/Company', 2: 'Communication', 3: 'Leadership', 4: 'Change',
    5: 'Management', 6: 'Transparency', 7: 'Team', 8:'People/Employees'},

    target_map : {9: 'Bad', 10: 'Neutral', 11: 'Good'}


}