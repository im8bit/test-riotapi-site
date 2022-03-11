import { makeStyles } from '@material-ui/core/styles';
import {leaderboardItem} from "../../lib/api/Leaderboards";
import LeaderboardItem from "../LeaderboardItem";

export type LeaderboardListProps = {
    list: leaderboardItem[]
}

const useStyles = makeStyles(theme => ({
    leaderboard: {
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    tableHeader: {
        backgroundColor: 'white',
        display: 'flex',
    },
    headerRank: {
        width: '100px',
        flexGrow: 0
    },
    headerName: {
        flexGrow: 2
    },
    headerWins: {
        width: '100px',
        flexGrow: 0
    }
}));

const LeaderboardList = ({list} : LeaderboardListProps) : JSX.Element => {
    const classes = useStyles();

    let listItems
    if (list) {
        listItems = list.map((item: leaderboardItem) =>
            <LeaderboardItem rank={item.leaderboardRank} name={item.gameName} wins={item.numberOfWins}/>
        );
    }

    return (
        <>
            <div className={classes.tableHeader}>
                <div className={classes.headerRank}>Rank</div>
                <div className={classes.headerName}>Player Name</div>
                <div className={classes.headerWins}>Wins</div>
            </div>
            <ul className={classes.leaderboard}>{listItems}</ul>
        </>
    );
}

export default LeaderboardList