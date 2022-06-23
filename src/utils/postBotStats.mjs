import fetch from 'node-fetch'

export default async settings => {	
	const sites = {
		'blist': {
			"domain":"blist.xyz",
			"path":"api/v2/bot/{clientid}/stats/",
			"method":"patch",
			"data":{
				'server_count': settings.guilds ?? 0,
				'shard_count': settings.shardCount ?? 0
			}
		},
		'botsfordiscord': {
			"domain":"discords.com",
			"path":"api/bot/{clientid}",
			"method":"post",
			"data":{
				'server_count': settings.guilds ?? 0,
			}
		},
		'discordbotlist': {
			"domain":"discordbotlist.com",
			"path":"api/v1/bots/{clientid}/stats",
			"method":"post",
			"data":{
				'guilds': settings.guilds ?? 0,
				'users': settings.dbUsers ?? 0
			}
		},
		'discordbotsgg': {
			"domain":"discord.bots.gg",
			"path":"api/v1/bots/{clientid}/stats",
			"method":"post",
			"data":{
				'guildCount': settings.guilds ?? 0,
				'shardCount': settings.shardCount ?? 0
			}
		},
		'discordextremelist': {
			"domain":"api.discordextremelist.xyz",
			"path":"v2/bot/{clientid}/stats",
			"method":"post",
			"data":{
				'guildCount': settings.guilds ?? 0,
				'shard_count': settings.shardCount ?? 0
			}
		},
		'discordlabs': {
			"domain":"bots.discordlabs.org",
			"path":"v2/bot/{clientid}/stats",
			"method":"post",
			"data":{
				'server_count': settings.guilds ?? 0,
				'shard_count': settings.shardCount ?? 0
			}
		},
		'infinitybotlist': {
			"domain":"api.infinitybotlist.com",
			"path":"bots/stats",
			"method":"post",
			"data":{
				'servers': settings.guilds ?? 0,
				'shards': settings.shardCount ?? 0
			}
		},
		'topgg': {
			"domain":"top.gg",
			"path":"api/bots/{clientid}/stats",
			"method":"post",
			"data":{
				'server_count': settings.guilds ?? 0,
				'shard_count': settings.shardCount ?? 0,
			}
		},
		"voidbots":{
			"domain": "api.voidbots.net",
			"path": "bot/stats/{clientid}",
			"method":"post",
			"data":{
				"server_count": settings.guilds ?? 0,
				"shard_count": settings.shardCount ?? 0
			}
		},
		"discords":{
			"domain": "discords.com",
			"path": "/bots/api/bot/{clientid}",
			"method":"post",
			"data":{
				"server_count":settings.guilds ?? 0
			}
		},
		'statcord': {
			"domain":"api.statcord.com",
			"path":"v3/stats",
			"method":"post",
			"data":{
				"servers": settings.guilds ?? 0,
				"users": settings.dbUsers, 
				"id": settings.clientId,
				"key": settings.tokens.statcord,
				"memactive": settings.totalRam * 1000000,
				"memload": settings.memload,
				"cpuload": settings.load,
				"commands": settings.commands,
				"popular": settings.popular, 
				"bandwidth": "0", 
				"active": [],
			}
		}
	};

	Object.keys(sites).map(async list => {
		if (!settings.tokens[list]) return;

		const req = await fetch(`https://${sites[list].domain}/${sites[list].path.replace("{clientid}", settings.clientId)}`, {
			method: sites[list].method,
			body: JSON.stringify(sites[list].data),
			headers: {
				"Content-Type": "application/json",
				'Content-Length': sites[list].data.length,
				'Authorization': settings.tokens[list],
				"auth": settings.tokens[list]
			}
		}).catch(()=>{console.log(`error posting to ${sites[list].domain}`)})

		if (req.status === 200 || req.status === 204) return console.log(`[${sites[list].domain}] Post success!`)
		console.log(`[${sites[list].domain}] An error occured: ${req.status}`)
	})
}
