import axios from 'axios';

export type leaderboardItem = {
    puuid: string,
    actid: string,
    gameName: string,
    leaderboardRank: number,
    rankedRating: number,
    numberOfWins: number
    tagLine: string
}

export type LeaderboardResponse = {
    leaderboard: leaderboardItem[]
}

export const getLeaderboard = async (
): Promise<leaderboardItem[]> => {
    const response  = await axios.post("https://qxd4h6ru0l.execute-api.us-west-1.amazonaws.com/beta/leaderboard")

    return response.data
};