import React from 'react';
import * as PropTypes from 'prop-types';
import ArticleElements from './ArticleElements';
import styles from "./Article.module.css"

const Article = ({article}) => {

    const formatArticleElement = (articleElement)=>{
        const{type,model}=articleElement;
        const Component =ArticleElements[type];
        if (!Component){
            return (<p className={'error'}>An error has occurred</p>)
        }
        return <Component className={styles.component} {...model}/>
    };

    return(<div>
        {!!article && <div> {article.body.map(articleElement=>formatArticleElement(articleElement))}</div>}
    </div>)
};




Article.propTypes = {
    article: PropTypes.object.isRequired
};
export default Article;