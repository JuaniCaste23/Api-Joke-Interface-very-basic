const functionJoke = (api) => {
    let texto = document.getElementById("broma");
    texto.innerHTML = api.content;
    console.log(api.content);
};

const functionVotosup = (api) => {
    let votosup = document.getElementById("votosAFavor");
    votosup.innerHTML = api.upvotes;
    console.log(api.upvotes);
};

const functionVotosdown = (api) => {
    let votosdown = document.getElementById("votosEnContra");
    votosdown.innerHTML = api.downvotes;
    console.log(api.downvotes);
};

//main
var api = 
{
    "id":"77bc463996dd489aa2b6be276354ba98",
    "content":"If two vegans are having an argument, is it still considered beef?",
    "nsfw":false,
    "upvotes":3,
    "downvotes":0,
};

functionJoke(api);
functionVotosup(api);
functionVotosdown(api);