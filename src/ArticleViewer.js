import React, {useState} from 'react';
import ArticleAPI from './ArticleAPI';
import Article from './Article';
import ControlBar from './ControlBar';
import RankingPage from "./RankingPage";
import styles from "./ArticleViewer.module.css"

function ArticleViewer() {
    const API = new ArticleAPI();

    const [articleIndex,setArticleIndex] = useState(null);
    const [articles,setArticles] = useState([]);
    const [article,getArticle] = useState(null);
    const [read,setRead] = useState([]);
    const [ranking,setRanking] = useState(false);

    React.useEffect(()=>{
        API.getArticles().then(
            articles=>{
                setArticles(articles);
                if (articles.length > 0){
                    setArticleIndex(0);
                }
                console.debug(`${articles.length} articles saved to state`)
            }
        ).catch(
            err=>console.log(err)
        );
    },[]);

    React.useEffect(()=>{
        if (articleIndex!=null){
            API.getArticle(articles[articleIndex]).then(
                article=>{
                getArticle(article);
                const newRead = read;
                newRead[articleIndex]= article;
                setRead(newRead);
            }).catch(
            err=>console.log(err));
        }
    },[articleIndex]);



    return (
        <div className={styles.container}>

            {(article&& !ranking) && <div>
                {(read.length===articles.length) &&<button className={styles.rankingButton} onClick={()=>setRanking(true)}>Rate these Articles</button>}
                <h3>Article Viewer</h3>
                <div className={styles.content}>
                    <Article article={article}/>
                </div>
                <div className={styles.footer}><ControlBar updateIndex={setArticleIndex} index={articleIndex} total={articles.length}/></div>
            </div>}


            {ranking && <div><RankingPage articles={read} articleIDs={articles}/>
                <button onClick={()=>setRanking(false)}>Go Back</button>
            </div>}


        </div>
    );
}

export default ArticleViewer;
