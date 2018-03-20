const express = require('express');
const router = express.Router();


const sportsQuestionKeys = [
    "Former Australian captain Mark Taylor has had several nicknames over his playing career. Which of the following was NOT one of them",
    "Which was the 1st non Test playing country to beat India in an international match?",
    "Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?",
    "Who was the first Indian to win the World Amateur Billiards title?",
    "Who is the first Indian woman to win an Asian Games gold in 400m run?"
];

const sportsQuestionData = new Map();

sportsQuestionData.set(sportsQuestionKeys[0], ['Tubby', 'Stodge', 'Helium Bat', 'Stumpy']);
sportsQuestionData.set(sportsQuestionKeys[1], ['Canada', 'Sri Lanka', 'Zimbabwe', 'East Africa']);
sportsQuestionData.set(sportsQuestionKeys[2], ['Two', 'Three', 'Four', 'Eight']);
sportsQuestionData.set(sportsQuestionKeys[3], ['Geet Sethi', 'Wilson Jones', 'Michael Ferreira', 'Manoj Kothari']);
sportsQuestionData.set(sportsQuestionKeys[4], ['M.L.Valsamma', 'P.T.Usha', 'Kamaljit Sandhu', 'K.Malleshwari']);

const sportsAnswerData = new Map();

sportsAnswerData.set(sportsQuestionKeys[0], sportsQuestionData.get(sportsQuestionKeys[0])[3]);
sportsAnswerData.set(sportsQuestionKeys[1], sportsQuestionData.get(sportsQuestionKeys[1])[1]);
sportsAnswerData.set(sportsQuestionKeys[2], sportsQuestionData.get(sportsQuestionKeys[2])[2]);
sportsAnswerData.set(sportsQuestionKeys[3], sportsQuestionData.get(sportsQuestionKeys[3])[1]);
sportsAnswerData.set(sportsQuestionKeys[4], sportsQuestionData.get(sportsQuestionKeys[4])[2]);

const moviesQuestionKeys = [
    "Which actor plays the main male hero in this action movie The Body (2001)?",
    "Which war or conflict is central to the story of the movie Dances with Wolves (1990)?",
    "What is the name of the James Bond's ally at the CIA (played by Jeffrey Wright) in Casino Royale (2006) and Quantum of Solace (2008)?",
    "Which actor is the father of actor Alexander Skarsgard?",
    "The tagline \"Dinner is served\" is from which Disney or Pixar movie?"
];

const moviesQuestionData = new Map();

moviesQuestionData.set(moviesQuestionKeys[0], ['Matt Damon', 'Antonio Banderas', 'Jason Statham', 'Arnold Schwarzeneggar']);
moviesQuestionData.set(moviesQuestionKeys[1], ['Texas War of Independence', 'American Civil War', 'World War 1', 'Spanish-American War']);
moviesQuestionData.set(moviesQuestionKeys[2], ['Felix Leither', 'Bill Tanner', 'Jack Wade', 'Gareth Mallory']);
moviesQuestionData.set(moviesQuestionKeys[3], ['Stellan Skarsgard', 'Lars Skarsgard', 'Derek Skarsgard', 'Michael Skarsgard']);
moviesQuestionData.set(moviesQuestionKeys[4], ['Finding Nemo', 'Ratatouille', 'The Incredibles', 'Cars']);

const moviesAnswerData = new Map();

moviesAnswerData.set(moviesQuestionKeys[0], moviesQuestionData.get(moviesQuestionKeys[0])[1]);
moviesAnswerData.set(moviesQuestionKeys[1], moviesQuestionData.get(moviesQuestionKeys[1])[1]);
moviesAnswerData.set(moviesQuestionKeys[2], moviesQuestionData.get(moviesQuestionKeys[2])[0]);
moviesAnswerData.set(moviesQuestionKeys[3], moviesQuestionData.get(moviesQuestionKeys[3])[0]);
moviesAnswerData.set(moviesQuestionKeys[4], moviesQuestionData.get(moviesQuestionKeys[4])[1]);

const historyQuestionKeys = [
    'The Battle of Plassey was fought in which of the following year?',
    'The territory of Porus who offered strong resistance to Alexander was situated between which River?',
    'Tripitakas are sacred books which of the following religion?',
    'The system of competitive examination for civil service was accepted in principle in which year?',
    'Through which one of the following, the king exercised his control over villages in the Vijayanagar Empire?'
];

const historyQuestionData = new Map();

historyQuestionData.set(historyQuestionKeys[0], ['1757', '1782', '1748', '1764']);
historyQuestionData.set(historyQuestionKeys[1], ['Sutlej and Beas', 'Jhelum and Chenab', 'Ravi and Chenab', 'Ganga and Yamuna']);
historyQuestionData.set(historyQuestionKeys[2], ['Buddhists', 'Hindus', 'Jains', 'None of the above']);
historyQuestionData.set(historyQuestionKeys[3], ['1833', '1853', '1858', '1882']);
historyQuestionData.set(historyQuestionKeys[4], ['Dannayaka', 'Sumanta', 'Nayaka', 'Mahanayakacharya']);


const historyAnswerData = new Map();

historyAnswerData.set(historyQuestionKeys[0], historyQuestionData.get(historyQuestionKeys[0])[0]);
historyAnswerData.set(historyQuestionKeys[1], historyQuestionData.get(historyQuestionKeys[1])[1]);
historyAnswerData.set(historyQuestionKeys[2], historyQuestionData.get(historyQuestionKeys[2])[0]);
historyAnswerData.set(historyQuestionKeys[3], historyQuestionData.get(historyQuestionKeys[3])[1]);
historyAnswerData.set(historyQuestionKeys[4], historyQuestionData.get(historyQuestionKeys[4])[3]);

const geographyQuestionKeys = [
    'The Homolographic projection has the correct representation of',
    'The latitudinal differences in pressure delineate a number of major pressure zones, which correspond with',
    'The hazards of radiation belts include',
    'The great Victoria Desert is located in',
    'The intersecting lines drawn on maps and globes are'
];

const geographyQuestionData = new Map();

geographyQuestionData.set(geographyQuestionKeys[0], ['shape', 'area', 'baring', 'distance']);
geographyQuestionData.set(geographyQuestionKeys[1], ['zones of climate', 'zones of oceans', 'zones of land', 'zones of cyclonic depressions']);
geographyQuestionData.set(geographyQuestionKeys[2], ['deterioration of electronic circuits', 'damage of solar cells of spacecraft', 'adverse effect on living organisms', 'All of the above']);
geographyQuestionData.set(geographyQuestionKeys[3], ['Canada', 'West Africa', 'Australia', 'North America']);
geographyQuestionData.set(geographyQuestionKeys[4], ['latitudes', 'longitudes', 'geographic grids', 'None of the above']);

const geographyAnswerData = new Map();

geographyAnswerData.set(geographyQuestionKeys[0], geographyQuestionData.get(geographyQuestionKeys[0])[1]);
geographyAnswerData.set(geographyQuestionKeys[1], geographyQuestionData.get(geographyQuestionKeys[1])[0]);
geographyAnswerData.set(geographyQuestionKeys[2], geographyQuestionData.get(geographyQuestionKeys[2])[3]);
geographyAnswerData.set(geographyQuestionKeys[3], geographyQuestionData.get(geographyQuestionKeys[3])[2]);
geographyAnswerData.set(geographyQuestionKeys[4], geographyQuestionData.get(geographyQuestionKeys[4])[2]);


const quizData = new Map();
quizData.set("sports", sportsQuestionKeys);
quizData.set("movies", moviesQuestionKeys);
quizData.set('history', historyQuestionKeys);
quizData.set('geography', geographyQuestionKeys);


router.get('/sports', function(req, res){
    
    const sports =  {
        questions: []
    }
    const qkeys = quizData.get("sports");
    for(let i = 0; i < qkeys.length; i++) {
        sports.questions[i] = {question: qkeys[i], options: sportsQuestionData.get(qkeys[i]), answer: sportsAnswerData.get(qkeys[i])};  
    }
    res.send(JSON.stringify(sports));
});

router.get('/movies', function(req, res) {
    const movies =  {
        questions: []
    }
    const qkeys = quizData.get("movies");
    for(let i = 0; i < qkeys.length; i++) {
        movies.questions[i] = {question: qkeys[i], options: moviesQuestionData.get(qkeys[i]), answer: moviesAnswerData.get(qkeys[i])};          
    }
    
    
    res.send(JSON.stringify(movies));
});

router.get('/history', function(req, res){
    
    const history =  {
        questions: []
    }
    const qkeys = quizData.get("history");
    for(let i = 0; i < qkeys.length; i++) {
        history.questions[i] = {question: qkeys[i], options: historyQuestionData.get(qkeys[i]), answer: historyAnswerData.get(qkeys[i])};          
    }
    res.send(JSON.stringify(history));
});

router.get('/geography', function(req, res) {

    const geography =  {
        questions: []
    }
    const qkeys = quizData.get("geography");
    for(let i = 0; i < qkeys.length; i++) {
        geography.questions[i] = {question: qkeys[i], options: geographyQuestionData.get(qkeys[i]), answer: geographyAnswerData.get(qkeys[i])};          
    }
    
    res.send(JSON.stringify(geography));
});


module.exports = router;