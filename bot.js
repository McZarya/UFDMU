const Discord = require('discord.js');

const config = require('./config.json');
const client = new Discord.Client();

const cmdsArray = [
    "ping - Pings The Bot To Test Connectivity",
    "Avatar - Gets a specified users profile picture",
    "Changelog - Post's The most recent changes to the bot",
    "GitHub - Sends a link to the bots GitHub"
];

const changelog = [
    "Made the bot very bare bones just so its working well I make it",
    ""
]

client.once('ready', () => { // Shit to be spammed in console upon launch
    console.log('====================================================================================================')
    console.log('Ultra Femboy Discord Mod UwU V0.0.0')
    console.log('Developed By McZarya.')
    console.log('====================================================================================================')
    console.log('Searching For My Little Kitten')
    console.log('====================================================================================================')

    client.user.setStatus('dnd')
    client.user.setPresence({
        game: {
            name: 'To My Kitten In VC',
            type: "Listening"  // Playing, Listening, Watching, STREAMING
            // url: "URL Here" <- link for stream when using the 'STREAMING' status
        }
    })
});

client.on('message', message => { // Command List Start
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.trim().split(/ +/g);
    const command = args[0].slice(config.prefix.length).toLowerCase();
//===============================================================================================================
if(command == "help"){
    message.reply("Anything for my kitten");
    const embed = new Discord.RichEmbed()
    .addField("Commands", cmdsArray)
    .addField("Further Support", "Thanks for using this bot, If you need Further help DM McZarya#0001");
    message.channel.send({embed: embed});
}
//===============================================================================================================
if(command == "ping"){ // Check The Bots Connectivity
message.reply("🏓 Pong!");
}

//===============================================================================================================
if(command == "github"){ // Sends a link to the bots GitHub repository 
message.reply(/*"you can find the bots GitHub repository at: "*/ "Hang Tight, The bot will be uploaded soon!");
}

//===============================================================================================================
if (command == 'avatar') {
const user = message.mentions.users.first() || message.author;
const avatarEmbed = new Discord.RichEmbed()
    .setColor(0x333333)
    .setAuthor(user.username)
    .setImage(user.avatarURL);
message.channel.send(avatarEmbed);
}

//===============================================================================================================
if(command == "changelog"){
message.reply("Here is the most recent update.");
const embed = new Discord.RichEmbed()
.addField("Change Log", changelog)
.addField("Sanity Lost", "0");
message.channel.send({embed: embed}); 
}

//===============================================================================================================
}); // Command List End

client.login(config.token)