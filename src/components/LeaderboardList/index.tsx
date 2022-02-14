import { makeStyles } from '@material-ui/core/styles';
import {leaderboardItem} from "../../lib/api/Leaderboards";

export type LeaderboardListProps = {
    list: leaderboardItem[]
}

const useStyles = makeStyles(theme => ({
    leaderboard: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        '& li': {
            color: '#637484',
            width: '350px',
            border: '1px solid white',
            padding: '5px 25px',
            margin: '5px',
            textAlign: 'left',
            '& span': {
                width: '50px',
                display: 'inline-block',
                background: 'gray',
                margin: '5px 15px 5px 5px',
                textAlign: 'right',
                color: 'white'
            }
        }
    },
}));

const LeaderboardList = ({list} : LeaderboardListProps) => {
    const classes = useStyles();

    let listItems
    if (list) {
        listItems = list.map((item: leaderboardItem) =>
            <li key={item.leaderboardRank}><span>{item.leaderboardRank}</span>{item.gameName}</li>
        );
    }

    return (
        <ul className={classes.leaderboard}>{listItems}</ul>
    );
}

export default LeaderboardList