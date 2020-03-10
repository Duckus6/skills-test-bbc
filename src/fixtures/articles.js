const mockArticles = ['article1.json','article2.json','article3.json','article4.json','article5.json'];
const mockArticle = {
    "title": "Test Article",
    "body": [
        {
            "type": "heading",
            "model": {
                "text": "Test Heading"
            }
        },
        {
            "type": "paragraph",
            "model": {
                "text": "Test Paragraph"
            }
        }
    ]
};
export {mockArticles, mockArticle};