const Questions = [{
    "id": 1036,
    "question": "Which command will you use to check your Ansible version?",
    "description": null,
    "answers": {
        "answer_a": "ansible-ctl --version",
        "answer_b": "ansible --version",
        "answer_c": "ansible v",
        "answer_d": "ansiblectl v",
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{"name": "DevOps"}],
    "category": "DevOps",
    "difficulty": "Easy"
}, {
    "id": 37,
    "question": "The command uname -a will:",
    "description": null,
    "answers": {
        "answer_a": "display only the system hostname",
        "answer_b": "display the IP address of the first Ethernet adapter",
        "answer_c": "display all available information about your system",
        "answer_d": "display all users on the system.",
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "true",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": "answer_c",
    "explanation": null,
    "tip": null,
    "tags": [{"name": "Linux"}],
    "category": "Linux",
    "difficulty": "Medium"
}, {
    "id": 849,
    "question": "How to remove the docker container with container id mentioned in the command.",
    "description": null,
    "answers": {
        "answer_a": "$ docker rm -rf 9b6343d3b5a0",
        "answer_b": "$ docker -rm rf 9b6343d3b5a0",
        "answer_c": "$ docker rm 9b6343d3b5a0",
        "answer_d": null,
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "true",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{"name": "Docker"}],
    "category": "Docker",
    "difficulty": "Easy"
}, {
    "id": 760,
    "question": "Which of the following function is used to read the content of a file?",
    "description": null,
    "answers": {
        "answer_a": "fopen()",
        "answer_b": "fread()",
        "answer_c": "filesize()",
        "answer_d": "file_exist()",
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "true",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": null,
    "explanation": "Once a file is opened using fopen() function it can be read with a function called fread(). This function requires two arguments. These must be the file pointer and the length of the file expressed in bytes.",
    "tip": null,
    "tags": [{"name": "PHP"}],
    "category": "Code",
    "difficulty": "Easy"
}, {
    "id": 437,
    "question": "What is called if a value shouldn't be greater than 100?",
    "description": null,
    "answers": {
        "answer_a": "Integrity constraint",
        "answer_b": "Feasible constraint",
        "answer_c": "Over-defined constraint",
        "answer_d": "Referential constraint",
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{"name": "MySQL"}],
    "category": "SQL",
    "difficulty": "Medium"
}, {
    "id": 968,
    "question": "Which description best fits a DaemonSet?",
    "description": null,
    "answers": {
        "answer_a": "A way to run a copy of a pod on all or some nodes",
        "answer_b": "A method to manage clusters of pods",
        "answer_c": "A channel through which to pass information between two or more nodes",
        "answer_d": "A system to connect nodes and pods",
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": null,
    "explanation": null,
    "tip": null,
    "tags": [{"name": "Kubernetes"}],
    "category": "DevOps",
    "difficulty": "Hard"
}, {
    "id": 745,
    "question": "How to show the metrics for a given node in Kubernetes?",
    "description": null,
    "answers": {
        "answer_a": "kubectl ps node my-node",
        "answer_b": "kubectl resources node my-node",
        "answer_c": "kubectl top node my-node",
        "answer_d": "kubectl uptime node my-node",
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "true",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{"name": "Kubernetes"}],
    "category": "Linux",
    "difficulty": "Easy"
}, {
    "id": 42,
    "question": "Which of the answers listed below refers to a Linux command that allows for assuming the identity of a different system user and executing commands with security privileges of that user account?",
    "description": null,
    "answers": {
        "answer_a": "sync",
        "answer_b": "id",
        "answer_c": "usermod",
        "answer_d": "su",
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "false",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "true",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": "answer_d",
    "explanation": null,
    "tip": null,
    "tags": [{"name": "Linux"}],
    "category": "Linux",
    "difficulty": "Medium"
}, {
    "id": 497,
    "question": "Which of the following attribute is used to group elements?",
    "description": null,
    "answers": {
        "answer_a": "item",
        "answer_b": "itemgroup",
        "answer_c": "itemcheck",
        "answer_d": "itemprop",
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{"name": "HTML"}],
    "category": "Code",
    "difficulty": "Easy"
}, {
    "id": 418,
    "question": "MySQL comes with a standard client libraries for:",
    "description": null,
    "answers": {
        "answer_a": "C Only",
        "answer_b": "PHP And C",
        "answer_c": "Perl,  Java And C",
        "answer_d": "Java Only",
        "answer_e": null,
        "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
        "answer_a_correct": "true",
        "answer_b_correct": "false",
        "answer_c_correct": "false",
        "answer_d_correct": "false",
        "answer_e_correct": "false",
        "answer_f_correct": "false"
    },
    "correct_answer": "answer_a",
    "explanation": null,
    "tip": null,
    "tags": [{"name": "MySQL"}],
    "category": "SQL",
    "difficulty": "Medium"
}]