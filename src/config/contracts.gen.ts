import { DojoProvider, DojoCall } from "@dojoengine/core";
import { Account, AccountInterface, BigNumberish, CairoOption, CairoCustomEnum, ByteArray } from "starknet";
import * as models from "./models.gen";

export function setupWorld(provider: DojoProvider) {

	const build_actions_addArea_calldata = (bounds: models.Bounds, owner: string, color: BigNumberish, app: string): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "add_area",
			calldata: [bounds, owner, color, app],
		};
	};

	const actions_addArea = async (snAccount: Account | AccountInterface, bounds: models.Bounds, owner: string, color: BigNumberish, app: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_addArea_calldata(bounds, owner, color, app),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_actions_canUpdatePixel_calldata = (forPlayer: string, forSystem: string, pixel: models.Pixel, pixelUpdate: models.PixelUpdate, areaIdHint: CairoOption<BigNumberish>, allowModify: boolean): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "can_update_pixel",
			calldata: [forPlayer, forSystem, pixel, pixelUpdate, areaIdHint, allowModify],
		};
	};

	const actions_canUpdatePixel = async (snAccount: Account | AccountInterface, forPlayer: string, forSystem: string, pixel: models.Pixel, pixelUpdate: models.PixelUpdate, areaIdHint: CairoOption<BigNumberish>, allowModify: boolean) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_canUpdatePixel_calldata(forPlayer, forSystem, pixel, pixelUpdate, areaIdHint, allowModify),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_actions_findAreaByPosition_calldata = (position: models.Position): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "find_area_by_position",
			calldata: [position],
		};
	};

	const actions_findAreaByPosition = async (snAccount: Account | AccountInterface, position: models.Position) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_findAreaByPosition_calldata(position),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_actions_findAreasInsideBounds_calldata = (bounds: models.Bounds): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "find_areas_inside_bounds",
			calldata: [bounds],
		};
	};

	const actions_findAreasInsideBounds = async (snAccount: Account | AccountInterface, bounds: models.Bounds) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_findAreasInsideBounds_calldata(bounds),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_actions_newApp_calldata = (system: string, name: BigNumberish, icon: BigNumberish): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "new_app",
			calldata: [system, name, icon],
		};
	};

	const actions_newApp = async (snAccount: Account | AccountInterface, system: string, name: BigNumberish, icon: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_newApp_calldata(system, name, icon),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_actions_notification_calldata = (position: models.Position, color: BigNumberish, from: CairoOption<BigNumberish>, to: CairoOption<BigNumberish>, text: BigNumberish): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "notification",
			calldata: [position, color, from, to, text],
		};
	};

	const actions_notification = async (snAccount: Account | AccountInterface, position: models.Position, color: BigNumberish, from: CairoOption<BigNumberish>, to: CairoOption<BigNumberish>, text: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_notification_calldata(position, color, from, to, text),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_actions_processQueue_calldata = (id: BigNumberish, timestamp: BigNumberish, calledSystem: string, selector: BigNumberish, calldata: Array<BigNumberish>): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "process_queue",
			calldata: [id, timestamp, calledSystem, selector, calldata],
		};
	};

	const actions_processQueue = async (snAccount: Account | AccountInterface, id: BigNumberish, timestamp: BigNumberish, calledSystem: string, selector: BigNumberish, calldata: Array<BigNumberish>) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_processQueue_calldata(id, timestamp, calledSystem, selector, calldata),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_actions_removeArea_calldata = (areaId: BigNumberish): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "remove_area",
			calldata: [areaId],
		};
	};

	const actions_removeArea = async (snAccount: Account | AccountInterface, areaId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_removeArea_calldata(areaId),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_actions_scheduleQueue_calldata = (timestamp: BigNumberish, calledSystem: string, selector: BigNumberish, calldata: Array<BigNumberish>): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "schedule_queue",
			calldata: [timestamp, calledSystem, selector, calldata],
		};
	};

	const actions_scheduleQueue = async (snAccount: Account | AccountInterface, timestamp: BigNumberish, calledSystem: string, selector: BigNumberish, calldata: Array<BigNumberish>) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_scheduleQueue_calldata(timestamp, calledSystem, selector, calldata),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_actions_updatePixel_calldata = (forPlayer: string, forSystem: string, pixelUpdate: models.PixelUpdate, areaId: CairoOption<BigNumberish>, allowModify: boolean): DojoCall => {
		return {
			contractName: "actions",
			entrypoint: "update_pixel",
			calldata: [forPlayer, forSystem, pixelUpdate, areaId, allowModify],
		};
	};

	const actions_updatePixel = async (snAccount: Account | AccountInterface, forPlayer: string, forSystem: string, pixelUpdate: models.PixelUpdate, areaId: CairoOption<BigNumberish>, allowModify: boolean) => {
		try {
			return await provider.execute(
				snAccount,
				build_actions_updatePixel_calldata(forPlayer, forSystem, pixelUpdate, areaId, allowModify),
				"pixelaw",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_addMember_calldata = (gameId: BigNumberish, guildId: BigNumberish, newMember: string): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "add_member",
			calldata: [gameId, guildId, newMember],
		};
	};

	const guild_actions_addMember = async (snAccount: Account | AccountInterface, gameId: BigNumberish, guildId: BigNumberish, newMember: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_addMember_calldata(gameId, guildId, newMember),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_createGuild_calldata = (gameId: BigNumberish, guildName: BigNumberish): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "create_guild",
			calldata: [gameId, guildName],
		};
	};

	const guild_actions_createGuild = async (snAccount: Account | AccountInterface, gameId: BigNumberish, guildName: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_createGuild_calldata(gameId, guildName),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_getGuildContractAddress_calldata = (): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "get_guild_contract_address",
			calldata: [],
		};
	};

	const guild_actions_getGuildContractAddress = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_getGuildContractAddress_calldata(),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_getGuildContractName_calldata = (gameId: BigNumberish, guildId: BigNumberish): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "get_guild_contract_name",
			calldata: [gameId, guildId],
		};
	};

	const guild_actions_getGuildContractName = async (snAccount: Account | AccountInterface, gameId: BigNumberish, guildId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_getGuildContractName_calldata(gameId, guildId),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_getGuildPoints_calldata = (gameId: BigNumberish, guildId: BigNumberish): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "get_guild_points",
			calldata: [gameId, guildId],
		};
	};

	const guild_actions_getGuildPoints = async (snAccount: Account | AccountInterface, gameId: BigNumberish, guildId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_getGuildPoints_calldata(gameId, guildId),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_getPlayerCommit_calldata = (playerAddress: string): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "get_player_commit",
			calldata: [playerAddress],
		};
	};

	const guild_actions_getPlayerCommit = async (snAccount: Account | AccountInterface, playerAddress: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_getPlayerCommit_calldata(playerAddress),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_getPlayerOwns_calldata = (playerAddress: string): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "get_player_owns",
			calldata: [playerAddress],
		};
	};

	const guild_actions_getPlayerOwns = async (snAccount: Account | AccountInterface, playerAddress: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_getPlayerOwns_calldata(playerAddress),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_isMember_calldata = (gameId: BigNumberish, guildId: BigNumberish, member: string): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "is_member",
			calldata: [gameId, guildId, member],
		};
	};

	const guild_actions_isMember = async (snAccount: Account | AccountInterface, gameId: BigNumberish, guildId: BigNumberish, member: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_isMember_calldata(gameId, guildId, member),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_joinGuild_calldata = (gameId: BigNumberish, guildId: BigNumberish): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "join_guild",
			calldata: [gameId, guildId],
		};
	};

	const guild_actions_joinGuild = async (snAccount: Account | AccountInterface, gameId: BigNumberish, guildId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_joinGuild_calldata(gameId, guildId),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_guild_actions_removeMember_calldata = (gameId: BigNumberish, guildId: BigNumberish, member: string): DojoCall => {
		return {
			contractName: "guild_actions",
			entrypoint: "remove_member",
			calldata: [gameId, guildId, member],
		};
	};

	const guild_actions_removeMember = async (snAccount: Account | AccountInterface, gameId: BigNumberish, guildId: BigNumberish, member: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_guild_actions_removeMember_calldata(gameId, guildId, member),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_propose_actions_activateProposal_calldata = (gameId: BigNumberish, index: BigNumberish, clearData: Array<Position>): DojoCall => {
		return {
			contractName: "propose_actions",
			entrypoint: "activate_proposal",
			calldata: [gameId, index, clearData],
		};
	};

	const propose_actions_activateProposal = async (snAccount: Account | AccountInterface, gameId: BigNumberish, index: BigNumberish, clearData: Array<Position>) => {
		try {
			return await provider.execute(
				snAccount,
				build_propose_actions_activateProposal_calldata(gameId, index, clearData),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_propose_actions_addNewColor_calldata = (gameId: BigNumberish, index: BigNumberish, game: models.Game, proposal: models.Proposal): DojoCall => {
		return {
			contractName: "propose_actions",
			entrypoint: "add_new_color",
			calldata: [gameId, index, game, proposal],
		};
	};

	const propose_actions_addNewColor = async (snAccount: Account | AccountInterface, gameId: BigNumberish, index: BigNumberish, game: models.Game, proposal: models.Proposal) => {
		try {
			return await provider.execute(
				snAccount,
				build_propose_actions_addNewColor_calldata(gameId, index, game, proposal),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_propose_actions_createProposal_calldata = (gameId: BigNumberish, proposalType: BigNumberish, targetArgs1: BigNumberish, targetArgs2: BigNumberish): DojoCall => {
		return {
			contractName: "propose_actions",
			entrypoint: "create_proposal",
			calldata: [gameId, proposalType, targetArgs1, targetArgs2],
		};
	};

	const propose_actions_createProposal = async (snAccount: Account | AccountInterface, gameId: BigNumberish, proposalType: BigNumberish, targetArgs1: BigNumberish, targetArgs2: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_propose_actions_createProposal_calldata(gameId, proposalType, targetArgs1, targetArgs2),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_propose_actions_resetToWhite_calldata = (gameId: BigNumberish, index: BigNumberish, game: models.Game, proposal: models.Proposal, clearData: Array<Position>): DojoCall => {
		return {
			contractName: "propose_actions",
			entrypoint: "reset_to_white",
			calldata: [gameId, index, game, proposal, clearData],
		};
	};

	const propose_actions_resetToWhite = async (snAccount: Account | AccountInterface, gameId: BigNumberish, index: BigNumberish, game: models.Game, proposal: models.Proposal, clearData: Array<Position>) => {
		try {
			return await provider.execute(
				snAccount,
				build_propose_actions_resetToWhite_calldata(gameId, index, game, proposal, clearData),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_pwar_actions_createGame_calldata = (origin: models.Position): DojoCall => {
		return {
			contractName: "pwar_actions",
			entrypoint: "create_game",
			calldata: [origin],
		};
	};

	const pwar_actions_createGame = async (snAccount: Account | AccountInterface, origin: models.Position) => {
		try {
			return await provider.execute(
				snAccount,
				build_pwar_actions_createGame_calldata(origin),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_pwar_actions_createGameGuilds_calldata = (gameId: BigNumberish, guildDispatcher: models.IGuildDispatcher): DojoCall => {
		return {
			contractName: "pwar_actions",
			entrypoint: "create_game_guilds",
			calldata: [gameId, guildDispatcher],
		};
	};

	const pwar_actions_createGameGuilds = async (snAccount: Account | AccountInterface, gameId: BigNumberish, guildDispatcher: models.IGuildDispatcher) => {
		try {
			return await provider.execute(
				snAccount,
				build_pwar_actions_createGameGuilds_calldata(gameId, guildDispatcher),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_pwar_actions_endGame_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "pwar_actions",
			entrypoint: "end_game",
			calldata: [gameId],
		};
	};

	const pwar_actions_endGame = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_pwar_actions_endGame_calldata(gameId),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_pwar_actions_getGameId_calldata = (position: models.Position): DojoCall => {
		return {
			contractName: "pwar_actions",
			entrypoint: "get_game_id",
			calldata: [position],
		};
	};

	const pwar_actions_getGameId = async (position: models.Position) => {
		try {
			return await provider.call("pwar", build_pwar_actions_getGameId_calldata(position));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_pwar_actions_interact_calldata = (defaultParams: models.DefaultParameters): DojoCall => {
		return {
			contractName: "pwar_actions",
			entrypoint: "interact",
			calldata: [defaultParams],
		};
	};

	const pwar_actions_interact = async (snAccount: Account | AccountInterface, defaultParams: models.DefaultParameters) => {
		try {
			return await provider.execute(
				snAccount,
				build_pwar_actions_interact_calldata(defaultParams),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_pwar_actions_placePixel_calldata = (app: string, defaultParams: models.DefaultParameters): DojoCall => {
		return {
			contractName: "pwar_actions",
			entrypoint: "place_pixel",
			calldata: [app, defaultParams],
		};
	};

	const pwar_actions_placePixel = async (snAccount: Account | AccountInterface, app: string, defaultParams: models.DefaultParameters) => {
		try {
			return await provider.execute(
				snAccount,
				build_pwar_actions_placePixel_calldata(app, defaultParams),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_voting_actions_vote_calldata = (gameId: BigNumberish, index: BigNumberish, usePx: BigNumberish, isInFavor: boolean): DojoCall => {
		return {
			contractName: "voting_actions",
			entrypoint: "vote",
			calldata: [gameId, index, usePx, isInFavor],
		};
	};

	const voting_actions_vote = async (snAccount: Account | AccountInterface, gameId: BigNumberish, index: BigNumberish, usePx: BigNumberish, isInFavor: boolean) => {
		try {
			return await provider.execute(
				snAccount,
				build_voting_actions_vote_calldata(gameId, index, usePx, isInFavor),
				"pwar",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};



	return {
		actions: {
			addArea: actions_addArea,
			buildAddAreaCalldata: build_actions_addArea_calldata,
			canUpdatePixel: actions_canUpdatePixel,
			buildCanUpdatePixelCalldata: build_actions_canUpdatePixel_calldata,
			findAreaByPosition: actions_findAreaByPosition,
			buildFindAreaByPositionCalldata: build_actions_findAreaByPosition_calldata,
			findAreasInsideBounds: actions_findAreasInsideBounds,
			buildFindAreasInsideBoundsCalldata: build_actions_findAreasInsideBounds_calldata,
			newApp: actions_newApp,
			buildNewAppCalldata: build_actions_newApp_calldata,
			notification: actions_notification,
			buildNotificationCalldata: build_actions_notification_calldata,
			processQueue: actions_processQueue,
			buildProcessQueueCalldata: build_actions_processQueue_calldata,
			removeArea: actions_removeArea,
			buildRemoveAreaCalldata: build_actions_removeArea_calldata,
			scheduleQueue: actions_scheduleQueue,
			buildScheduleQueueCalldata: build_actions_scheduleQueue_calldata,
			updatePixel: actions_updatePixel,
			buildUpdatePixelCalldata: build_actions_updatePixel_calldata,
		},
		guild_actions: {
			addMember: guild_actions_addMember,
			buildAddMemberCalldata: build_guild_actions_addMember_calldata,
			createGuild: guild_actions_createGuild,
			buildCreateGuildCalldata: build_guild_actions_createGuild_calldata,
			getGuildContractAddress: guild_actions_getGuildContractAddress,
			buildGetGuildContractAddressCalldata: build_guild_actions_getGuildContractAddress_calldata,
			getGuildContractName: guild_actions_getGuildContractName,
			buildGetGuildContractNameCalldata: build_guild_actions_getGuildContractName_calldata,
			getGuildPoints: guild_actions_getGuildPoints,
			buildGetGuildPointsCalldata: build_guild_actions_getGuildPoints_calldata,
			getPlayerCommit: guild_actions_getPlayerCommit,
			buildGetPlayerCommitCalldata: build_guild_actions_getPlayerCommit_calldata,
			getPlayerOwns: guild_actions_getPlayerOwns,
			buildGetPlayerOwnsCalldata: build_guild_actions_getPlayerOwns_calldata,
			isMember: guild_actions_isMember,
			buildIsMemberCalldata: build_guild_actions_isMember_calldata,
			joinGuild: guild_actions_joinGuild,
			buildJoinGuildCalldata: build_guild_actions_joinGuild_calldata,
			removeMember: guild_actions_removeMember,
			buildRemoveMemberCalldata: build_guild_actions_removeMember_calldata,
		},
		propose_actions: {
			activateProposal: propose_actions_activateProposal,
			buildActivateProposalCalldata: build_propose_actions_activateProposal_calldata,
			addNewColor: propose_actions_addNewColor,
			buildAddNewColorCalldata: build_propose_actions_addNewColor_calldata,
			createProposal: propose_actions_createProposal,
			buildCreateProposalCalldata: build_propose_actions_createProposal_calldata,
			resetToWhite: propose_actions_resetToWhite,
			buildResetToWhiteCalldata: build_propose_actions_resetToWhite_calldata,
		},
		pwar_actions: {
			createGame: pwar_actions_createGame,
			buildCreateGameCalldata: build_pwar_actions_createGame_calldata,
			createGameGuilds: pwar_actions_createGameGuilds,
			buildCreateGameGuildsCalldata: build_pwar_actions_createGameGuilds_calldata,
			endGame: pwar_actions_endGame,
			buildEndGameCalldata: build_pwar_actions_endGame_calldata,
			getGameId: pwar_actions_getGameId,
			buildGetGameIdCalldata: build_pwar_actions_getGameId_calldata,
			interact: pwar_actions_interact,
			buildInteractCalldata: build_pwar_actions_interact_calldata,
			placePixel: pwar_actions_placePixel,
			buildPlacePixelCalldata: build_pwar_actions_placePixel_calldata,
		},
		voting_actions: {
			vote: voting_actions_vote,
			buildVoteCalldata: build_voting_actions_vote_calldata,
		},
	};
}