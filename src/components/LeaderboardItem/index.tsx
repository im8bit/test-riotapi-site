import {makeStyles} from "@material-ui/core/styles";

export type LeaderboardEntryProperties = {
    rank: number;
    name: string;
    wins: number;
}

const useStyles = makeStyles(theme => ({
    leaderboardItem: {
        backgroundColor: '#CCDCCD',
        display: 'flex',
        border: '5px solid #CCCCCC',
        margin: '0',
        padding: '0',
    },
    rank: {
        width: '100px',
        backgroundColor: '#999999',
        flexGrow: 0,
        textAlign: 'left',
    },
    name: {
        flexGrow: 2,
    },
    wins: {
        width: '100px',
        backgroundColor: '#999999',
        flexGrow: 0
    }
}));

const LeaderboardItem = ({rank, name, wins} : LeaderboardEntryProperties) : JSX.Element => {
    const classes = useStyles();

    return (
        <li className={classes.leaderboardItem}>
            <div className={classes.rank}>{rank}</div><div className={classes.name}>{name}</div><div className={classes.wins}>{wins}</div>
        </li>
    )
}

export default LeaderboardItem;