import React,{useState,useEffect} from 'react';
import * as PropTypes from 'prop-types';
import ArticleAPI from './ArticleAPI';
import ArticleElements from './ArticleElements';


const Article = ({articleID}) => {
    const API= new ArticleAPI();
    const [articleData,setArticleData] = useState(null);
    useEffect(()=>{
        API.getArticle(articleID).then(
            articleData =>{
                setArticleData(articleData);
            }
        ).catch(
            err=>console.log(err));
    },[articleID]);

    const formatArticleElement = (articleElement)=>{
        const{type,model}=articleElement;
        const Component =ArticleElements[type];
        if (!Component){
            return (<p className={'error'}>An error has occurred</p>)
        }
        return <Component {...model}/>
    };

    return(<div>
        {!!articleData && <div> {articleData.body.map(articleElement=>formatArticleElement(articleElement))}</div>}
    </div>)
};




Article.propTypes = {
    articleID: PropTypes.string.isRequired
};
export default Article;