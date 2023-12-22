const Discord = require("discord.js")
//const fetch = require("node-fetch")
const cron = require("cron");
//const keepAlive = require("./server")
//const Database = require("@replit/database")
const { REST, Routes } = require("@discordjs/rest");
const { SlashCommandBuilder } = require("@discordjs/builders")

const { Client, Intents, Collection, Interaction } = require("discord.js");
const CLIENT_ID = '';
const token = "";

// code taken partially from https://github.com/discordjs/guide/tree/main/code-samples/creating-your-bot/command-handling

const rest = new REST().setToken(token);

//const db = new Database()
//const client = new Discord.Client()
const path = require('path');

const MonkeyFolder = "/MonkeyImages/";
const fs = require("fs");
const directoryPath = path.join(MonkeyFolder);

const resolve = require('path').resolve;

const FullPath = resolve('.') + MonkeyFolder;

var seedrandom = require('seedrandom');
var prng = seedrandom()

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(prng() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

async function lordfoogposter(){
    await client.channels.cache.get('').send({ files: ["./lordfoog/lordfoog.mp4"] })
    console.log("sent lordfoog in channel")
}

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.once("ready", () => {
  var lordfoogposterjob = new cron.CronJob('4/5 12 * * *', lordfoogposter);
  console.log("created cronjob for lordfoogposterjob as ' 0 12 2 * * '");
  lordfoogposterjob.start();
})

const MonkeyFriday = ["!friday", "!FMF", "!fmf"];
const MonkeyWords = ["!monkey", "!monki", "!monke", "!ape", "!gorilla", "!monkei", "!chimp"]
const FrogWords = ["!frog", "!pepo"]

const FlinkerMirror = "<:FlinkerMirror:625448790932979725>"
const monkePog = "<:monkePog:818852117409955882>"
const monke = "<:monke:726507355029897216>"
const monkeggenosse = "<:monkeggenosse:802488703897436160>"
const monkesalute = "<:monkesalute:802487166869176330>"

client.on("messageCreate", msg => {
  if (MonkeyFriday.includes(msg.content)) {
    fmfFunction(msg)  
  }
})

client.on("messageCreate", msg => {
  if (MonkeyWords.includes(msg.content.substr(0, msg.content.indexOf(' '))) || MonkeyWords.includes(msg.content)) {
   monkeyFunction(msg)    
  }
})

client.on("messageCreate", msg => {
  if (msg.content == "!refresh") {
    let start = performance.now();
    refreshMonkeyList();
    var ImageNumber = getRandomInt(0, MonkeyImagesList.length);
    var chosenfile = MonkeyImagesList[ImageNumber];
    let end = performance.now();
    msg.reply({ content: `Updated monkey images, here a random one for u (Took: ${end - start}ms) :heart: `, files: ["./MonkeyImages/" + chosenfile] })
  }
})

function refreshMonkeyList() {
  MonkeyImagesList = [];
  MonkeyImagesList = fs.readdirSync(FullPath);
  console.log("Refreshed Monkeys")
}

const fmfCommand = new SlashCommandBuilder().setName("fmf").setDescription("Its funky monkey friday");

async function fmfFunction(msg, reply = false) {
  if (reply) await msg.reply({ content: "cock", ephemeral: true })

  await msg.channel.send(`${FlinkerMirror} ${monkePog} ${monke} ${monkeggenosse} ${monkePog} ${monkesalute} ${monkePog} ${monkeggenosse} ${monke} ${monkePog} ${FlinkerMirror} ${monkePog} ${monke} ${monkeggenosse} ${monkePog} ${monkesalute} ${monkePog} ${monkeggenosse} ${monke} ${monkePog} ${FlinkerMirror}`)
  await msg.channel.send(`${monkePog} ${monkePog} ${monkePog} ${monkePog} ${monkePog} ITS FUNKY MONKEY FRIDAY ${monkePog} ${monkePog} ${monkePog} ${monkePog} ${monkePog}`)
  await msg.channel.send("https://cdn.discordapp.com/attachments/555708248519344159/822418848216121424/cooling_off.webm https://cdn.discordapp.com/attachments/555708248519344159/835065295089303572/image0-9.jpg https://cdn.discordapp.com/attachments/555708248519344159/817324459933302784/fonky_monky_friday_1.mp4 https://cdn.discordapp.com/attachments/555708248519344159/817324659149635605/funky-monkey-friday-4k-remaster.mp4 https://cdn.discordapp.com/attachments/722811898919125083/912898503213199421/MonkeTime.mov")
  await msg.channel.send("https://cdn.discordapp.com/attachments/555708248519344159/822419168677593098/RsXgyHyG-Q_7L4fc.mp4 https://cdn.discordapp.com/attachments/555708248519344159/824927029815279616/chillin.webm . https://tenor.com/view/monkey-gif-18612587 https://tenor.com/view/monke-monkey-friday-gif-20298992")
  await msg.channel.send(`${FlinkerMirror} ${monkePog} ${monke} ${monkeggenosse} ${monkePog} ${monkesalute} ${monkePog} ${monkeggenosse} ${monke} ${monkePog} ${FlinkerMirror} ${monkePog} ${monke} ${monkeggenosse} ${monkePog} ${monkesalute} ${monkePog} ${monkeggenosse} ${monke} ${monkePog} ${FlinkerMirror}`)
}

// maybe - This is all Lithium's stuff 
// Build the command
const monkeyCommand = new SlashCommandBuilder()
  .setName("monke")
  .setDescription("Get a random monkey image or video")

// Make the callback to be used
async function monkeyFunction(msg, reply = false) {

  var ImageNumber = getRandomInt(0, MonkeyImagesList.length);
  var ChimpEvent = getRandomInt(0,100)
  
  if (ChimpEvent == 69) {
    msg.channel.send(`${monkePog} ${monkePog} ${monkePog} ${monkePog} ${monkePog} RANDOM CHIMP EVENT ${monkePog} ${monkePog} ${monkePog} ${monkePog} ${monkePog}`);
    let imgs = []
    for (let step = 0; step < 10; step++) {
      ChimpImage = getRandomInt(0, MonkeyImagesList.length);

      // check if the image name is monke1 or monke2
      while (MonkeyImagesList[ChimpImage] == "monke1.png" || MonkeyImagesList[ChimpImage] == "monke2.png") {
        ChimpImage = getRandomInt(0, MonkeyImagesList.length);
      }

      imgs.push("./MonkeyImages/" + MonkeyImagesList[ChimpImage])
    }
    if (reply) await msg.reply({ files: imgs })
    else await msg.channel.send({files: imgs })
    return;
  }

  imgs = []
  var chosenfile = MonkeyImagesList[ImageNumber];
  if (chosenfile == "monke1.png" || chosenfile == "monke2.png") {
    imgs = ["./MonkeyImages/" + "monke1.png", "./MonkeyImages/" + "monke2.png"] 
    await  msg.reply({ files: ["./MonkeyImages/" + "monke1.png", "./MonkeyImages/" + "monke2.png"] })
  } else {
    imgs = ["./MonkeyImages/" + chosenfile]
  }

  if (reply) await msg.reply({ files: imgs })
  else await msg.channel.send({files: imgs }) 

}

// Make the command a pair
const MonkeyCommandPair = {
  data: monkeyCommand,
  execute: monkeyFunction
}

const fmfCommandPair = {
  data: fmfCommand,
  execute: fmfFunction
}

let commandsToUse = [];


// Prepare all commands we want to register
commandsToUse.push(monkeyCommand.toJSON())
commandsToUse.push(fmfCommand.toJSON())

// Register Slash Commands to the whole application
rest.put(
  // The body needs an array of toJSON()'ed commands
  Routes.applicationCommands(CLIENT_ID),
  { body: commandsToUse },
).then((e) => {
  console.log("Added commands!"); console.log(e)
}
)
  .catch(e => console.error(e));

// make the client
// Add a simple map to the client. client.commands.get("name") will return the function we set
client.commands = new Collection();
client.commands.set(MonkeyCommandPair.data.name, MonkeyCommandPair.execute);
client.commands.set(fmfCommandPair.data.name, fmfCommandPair.execute);

client.once("ready", () => console.log("Ready to rumble!"));

client.on("interactionCreate", async interaction => {
  // if its not a command use, ignore
  if (!interaction.isCommand()) return;

  // get the command based on the slash-command used. e.g. /monkey will result in 'monkey'
  const command = client.commands.get(interaction.commandName);
  // if we dont have that command, return
  if (!command) return;

  // client.commands.get() returns the .execute function of the pair.
  try {
    await command(interaction, true);
  }
  catch (e) {
    console.log(e);
    await interaction.reply({ content: `An error occurred while executing that command:\n${e}`, ephemeral: true });
  }
})

// Get this from https://discord.com/developers/applications/me => OAuth2 => URL Generator
const INVITE_LINK = "";

console.log(`Invite link: ${INVITE_LINK}`)

refreshMonkeyList()
client.login(token)
