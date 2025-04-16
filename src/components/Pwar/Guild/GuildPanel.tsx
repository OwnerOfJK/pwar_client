import { FC, useState, useEffect } from 'react'
import styles from './GuildPanel.module.css'
import { usePwarProvider } from '@/provider/PwarContext'

interface GuildPanelProps {
    gameId: number | null
    selectedGuildId: number | null
    onJoinGuild: (guildId: number) => void
    onCreateGuild: (guildName: string) => void
}

export const GuildPanel: FC<GuildPanelProps> = ({ 
    gameId, 
    selectedGuildId,
    onJoinGuild,
    onCreateGuild 
}) => {
    const [guilds, setGuilds] = useState<Array<{ id: number, name: string }>>([])
    const [guildName, setGuildName] = useState('')
    const { account, world } = usePwarProvider()
    
    // Fetch guilds when gameId changes
    useEffect(() => {
        const fetchGuilds = async () => {
            if (!gameId) return
            
            try {
                // This is a placeholder - you'll need to implement this method
                // according to your contract structure
                const fetchedGame = await world.p_war_game.get_game(gameId)
                if (fetchedGame && fetchedGame.guild_ids) {
                    const guildPromises = fetchedGame.guild_ids.map(async (guildId: number) => {
                        const guildData = await world.guild_actions.get_guild(gameId, guildId)
                        return {
                            id: guildId,
                            name: guildData.guild_name
                        }
                    })
                    
                    const guildResults = await Promise.all(guildPromises)
                    setGuilds(guildResults)
                }
            } catch (error) {
                console.error("Failed to fetch guilds:", error)
            }
        }
        
        fetchGuilds()
    }, [gameId, world])
    
    const handleCreateGuild = () => {
        if (guildName.trim()) {
            onCreateGuild(guildName.trim())
            setGuildName('')
        }
    }

    if (!gameId) {
        return <div className={styles.guildPanel}>
            <h3>Guild Panel</h3>
            <p>Start a game to manage guilds</p>
        </div>
    }

    return (
        <div className={styles.guildPanel}>
            <h3>Guild Panel</h3>
            
            <div className={styles.createGuild}>
                <input
                    type="text"
                    placeholder="New Guild Name"
                    value={guildName}
                    onChange={(e) => setGuildName(e.target.value)}
                    className={styles.guildNameInput}
                />
                <button 
                    className={styles.createButton}
                    onClick={handleCreateGuild}
                >
                    Create Guild
                </button>
            </div>
            
            <div className={styles.guildList}>
                <h4>Available Guilds</h4>
                {guilds.length === 0 ? (
                    <p>No guilds available yet</p>
                ) : (
                    <ul>
                        {guilds.map(guild => (
                            <li 
                                key={guild.id} 
                                className={`${styles.guildItem} ${selectedGuildId === guild.id ? styles.selected : ''}`}
                            >
                                <span>{guild.name}</span>
                                <button 
                                    onClick={() => onJoinGuild(guild.id)}
                                    disabled={selectedGuildId === guild.id}
                                >
                                    {selectedGuildId === guild.id ? 'Joined' : 'Join'}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}