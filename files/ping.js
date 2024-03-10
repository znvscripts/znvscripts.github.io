const Discord = require("discord.js")

module.exports = {
    name: "ping", // Coloque o nome do seu comando
    description: "[Comando]",

    run: async(client, message, args) => {

        let embed = new Discord.EmbedBuilder()
        .setColor("#ffffff")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`O meu ping: \`carregando...\`.`);

        let embed2 = new Discord.EmbedBuilder()
        .setColor("#ffffff")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setDescription(`O meu ping: \`${client.ws.ping}ms\`.`);

        message.reply({ embeds: [embed] }).then(msg => {
            setTimeout( () => {
                msg.edit({ embeds: [embed2] })
            }, 3000)
        })
    }
}