import React,{useState} from 'react';
import * as PropTypes from 'prop-types';
import ArticleAPI from './ArticleAPI';

function RankingPage({articles,articleIDs}){
    const API = new ArticleAPI();
    const [rankingDone, setRankingDone] = useState(false);
    const [error, setError] = useState(null);

    const postRank = () => {
        API.postRankings(rankings).then((postPromise)=>{
            setRankings(postPromise);
            setRankingDone(true);
        }).catch(
            err=>{
                setError(err);
                return false;
            }

        );


    };

    const initialRankings = articleIDs.map((articleID,i) =>{
        return{
            id:articleID,rank:i
        }
    });

    const [rankings,setRankings] = useState(initialRankings);


    const sortRanks = (ranks)=>{
        return ranks.sort(
            (r1,r2)=> r1.rank-r2.rank
            );
    };
    const move = (event)=>{
        const {rankid,change} = event.target.dataset;
        const rank = rankings.filter(ranking => ranking.id===rankid)[0];
        const newRankings = sortRanks(rankings);
        const rankIndex = newRankings.indexOf(rank);
        newRankings[rankIndex].rank = newRankings[rankIndex].rank + parseInt(change);
        newRankings[rankIndex+parseInt(change)].rank = newRankings[rankIndex+parseInt(change)].rank +(parseInt(change)*-1);
        setRankings(Array.from(newRankings));
    };

    return <div className={"ranking-page"}>
        {rankingDone &&<h1>Returned Post results</h1>}
        {!rankingDone && <h1>Ranking Page</h1>}
        {error &&<p>{error}</p>}
        <table>
            <tbody>
            {rankings &&
                sortRanks(rankings).map(
                (rank,i)=>
                <tr>
                    <td>
                        {i + 1}
                        </td>
                    <td>
                        {articles[articleIDs.indexOf(rank.id)].title}
                        </td>
                    {!rankingDone &&<td>
                        {i > 0 &&
                        <button data-rankid={rank.id} data-change={-1} onClick={move}>&#8593;</button>}
                        {i + 1 < articles.length &&
                        <button data-rankid={rank.id} data-change={1} onClick={move}>&#8595;</button>}
                        </td>}
                </tr>)}
            </tbody>
        </table>

        {!rankingDone &&<button className={"post-button"} onClick={postRank}>Post</button>}
    </div>
}

RankingPage.propTypes= {
    articles: PropTypes.array.isRequired,
    articleIDs: PropTypes.array.isRequired
};
export default RankingPage;