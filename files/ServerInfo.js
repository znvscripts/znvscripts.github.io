const Discord = require("discord.js")
const config = require("./../../config.json")

module.exports = {
    name: 'serverinfo',
    description: "[Comando]",
    cooldown: 3000,
    type: 1,
    run: async (client, interaction) => {

        let membros = interaction.guild.memberCount;
        let cargos = interaction.guild.roles.cache.size;
        let canais = interaction.guild.channels.cache.size;
        let servidor = interaction.guild;

        let chats = interaction.guild.channels.cache.filter(a => a.type === "GUILD_TEXT").size;
        let calls = interaction.guild.channels.cache.filter(a => a.type === "GUILD_VOICE").size;

        let emojis = interaction.guild.emojis.cache.size;
        let dono_id = interaction.guild.ownerId;
        let dono = interaction.guild.members.cache.get(dono_id);
        let impulsos = interaction.guild.premiumSubscriptionCount;
        let data = interaction.guild.createdAt.toLocaleDateString("pt-br");

        let embed = new Discord.EmbedBuilder()
        .setColor("#000000")
        .setTitle(`${interaction.guild.name}`)
        .setThumbnail(`${interaction.guild.iconURL({ dynamic: true })}`)
        .addFields(
            {
                name: `📌 Principais:`,
                value: `Dono: ${dono}\nMembros: \`${membros + 1}\`\nImpulsos: \`${impulsos}\`\nID: \`${servidor.id}\``,
                inline: false
            },
            {
                name: `💬 Canais:`,
                value: `Geral: \`${canais}\`\nChats: \`${chats}\`\nCalls: \`${calls}\``,
                inline: true
            },
            {
                name: `💼 Cargos:`,
                value: `\`${cargos}\``,
                inline: true
            },
            {
                name: `😎 Emojis:`,
                value: `\`${emojis}\``,
                inline: true
            },
            {
                name: `📅 Data de criação:`,
                value: `\`${data}\``,
                inline: false
            },
        );

        interaction.reply({ embeds: [embed] })

        }}