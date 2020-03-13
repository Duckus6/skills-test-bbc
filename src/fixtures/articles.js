const mockArticles = ['article1.json','article2.json','article3.json','article4.json','article5.json'];
const mockArticle =
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "body": [
            {
                "type": "heading",
                "model": {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
            },
            {
                "type": "paragraph",
                "model": {
                    "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."
                }
            },
            {
                "type": "image",
                "model": {
                    "url": "https://avatars1.githubusercontent.com/u/16746643?s=460&v=4",
                    "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
                    "height": "420",
                    "width": "640"
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "unordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "ordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            }
        ]
    };
const mockInvalidArticle =
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "body": [
            {
                "type": "heading",
                "model": {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
            },
            {
                "type": "badElementType",
                "model": {
                    "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."
                }
            },
            {
                "type": "image",
                "model": {
                    "url": "https://avatars1.githubusercontent.com/u/16746643?s=460&v=4",
                    "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
                    "height": "420",
                    "width": "640"
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "unordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "ordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            }
        ]
    };
const mockError = '[Error: Request failed with status code 500]';
const mockRankingArticles = [
    {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "body": [
            {
                "type": "heading",
                "model": {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
            },
            {
                "type": "paragraph",
                "model": {
                    "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."
                }
            },
            {
                "type": "image",
                "model": {
                    "url": "https://avatars1.githubusercontent.com/u/16746643?s=460&v=4",
                    "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
                    "height": "420",
                    "width": "640"
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "unordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "ordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            }
        ]
    },
    {
        "title": "Ipsum",
        "body": [
            {
                "type": "heading",
                "model": {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
            },
            {
                "type": "paragraph",
                "model": {
                    "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."
                }
            },
            {
                "type": "image",
                "model": {
                    "url": "https://avatars1.githubusercontent.com/u/16746643?s=460&v=4",
                    "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
                    "height": "420",
                    "width": "640"
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "unordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "ordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            }
        ]
    },
    {
        "title": "Lorem",
        "body": [
            {
                "type": "heading",
                "model": {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
            },
            {
                "type": "paragraph",
                "model": {
                    "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."
                }
            },
            {
                "type": "image",
                "model": {
                    "url": "https://avatars1.githubusercontent.com/u/16746643?s=460&v=4",
                    "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
                    "height": "420",
                    "width": "640"
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "unordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "ordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            }
        ]
    },
    {
        "title": "sit",
        "body": [
            {
                "type": "heading",
                "model": {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
            },
            {
                "type": "paragraph",
                "model": {
                    "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."
                }
            },
            {
                "type": "image",
                "model": {
                    "url": "https://avatars1.githubusercontent.com/u/16746643?s=460&v=4",
                    "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
                    "height": "420",
                    "width": "640"
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "unordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "ordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            }
        ]
    },
    {
        "title": "Dolor ",
        "body": [
            {
                "type": "heading",
                "model": {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
            },
            {
                "type": "paragraph",
                "model": {
                    "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."
                }
            },
            {
                "type": "image",
                "model": {
                    "url": "https://avatars1.githubusercontent.com/u/16746643?s=460&v=4",
                    "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
                    "height": "420",
                    "width": "640"
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "unordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            },
            {
                "type": "list",
                "model": {
                    "type": "ordered",
                    "items": [
                        "Vestibulum viverra viverra ullamcorper",
                        "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
                    ]
                }
            }
        ]
    }];
export {mockArticles, mockArticle,mockInvalidArticle,mockError, mockRankingArticles};