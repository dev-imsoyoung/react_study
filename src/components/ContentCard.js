import React from 'react'

// props.content === { content }
// props.content2
// props.content3
function ContentCard({ contents, content, setContents }) {
    const handleClick = () => {
        let copyContents = [...contents];
        const foundIndex = copyContents.findIndex((copyContent) => {
            return copyContent.id === content.id
        });
        copyContents[foundIndex] = {
            ...content,
            favorite: content.favorite + 1
        };
        setContents(copyContents);
    };
    return (
        <div className='blogList'>
            <div>{content.title}</div>
            <p>{content.description}</p>
            <p>{content.favorite}</p>
            <button type='button' onClick={handleClick}>BUTTON</button>
            <p>발행일자:{content.createdDate}</p>
        </div>
    )
}

export default ContentCard