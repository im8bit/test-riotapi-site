import React, {useEffect, useState} from 'react';
import LeaderboardList from "../components/LeaderboardList";
import {getLeaderboard, leaderboardItem} from "../lib/api/Leaderboards";

const CurrentLeaderboard = () : JSX.Element => {
    const [leaderboardData, setLeaderboardData] = useState<leaderboardItem[]>([]);

    useEffect(() => {
        getLeaderboard()
            .then(response => {
                response.sort((a,b) => { return a.leaderboardRank - b.leaderboardRank } );

                setLeaderboardData(response)
            })
            .catch(response => {
                console.log(response)
            });
    }, [])

    return (
        <LeaderboardList list={leaderboardData} />
    )
}

export default CurrentLeaderboard