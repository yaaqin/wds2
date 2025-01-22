import React, { useState } from 'react';

type BlogContent =
  | { type: 'header'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'quote'; content: string; author: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'list'; items: string[] };

const CreateBlog: React.FC = () => {
    const [title, setTitle] = useState('');
    const [contentBlocks, setContentBlocks] = useState<BlogContent[]>([{ type: 'paragraph', content: '' }]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newContentBlocks = [...contentBlocks];

        if (
            newContentBlocks[index].type === 'paragraph' ||
            newContentBlocks[index].type === 'header' ||
            newContentBlocks[index].type === 'quote'
        ) {
            newContentBlocks[index] = {
                ...newContentBlocks[index],
                content: e.target.value,
            } as BlogContent;
        }

        setContentBlocks(newContentBlocks);
    };

    const handleKeyPress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const currentBlock = contentBlocks[index];

            if (
                (currentBlock.type === 'paragraph' || currentBlock.type === 'header' || currentBlock.type === 'quote') &&
                currentBlock.content !== ''
            ) {
                setContentBlocks([...contentBlocks, { type: 'paragraph', content: '' }]);
            }
        }
    };

    const changeBlockType = (index: number, newType: BlogContent['type']) => {
        const newContentBlocks = [...contentBlocks];
        if (newType === 'paragraph' || newType === 'header') {
            newContentBlocks[index] = { type: newType, content: '' };
        } else if (newType === 'quote') {
            newContentBlocks[index] = { type: 'quote', content: '', author: '' }; // Tambahkan properti author
        } else if (newType === 'image') {
            newContentBlocks[index] = { type: 'image', src: '', alt: '' };
        } else if (newType === 'list') {
            newContentBlocks[index] = { type: 'list', items: [] };
        }
        setContentBlocks(newContentBlocks);
    };
    

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-5xl mb-4">Create New Blog</h1>
            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={handleTitleChange}
                className="w-full p-2 mb-4 border rounded"
            />
            <div className="mb-6">
                {contentBlocks.map((item, index) => (
                    <div key={index} className="relative mb-2">
                        <input
                            type="text"
                            placeholder="Type your content and press Enter..."
                            value={item.type === 'paragraph' || item.type === 'header' || item.type === 'quote' ? item.content : ''}
                            onChange={(e) => handleContentChange(index, e)}
                            onKeyPress={(e) => handleKeyPress(index, e)}
                            className="w-full p-2 border rounded"
                        />
                        {(item.type === 'paragraph' || item.type === 'header' || item.type === 'quote') && item.content === '' && (
                            <button
                                onClick={() => changeBlockType(index, 'header')}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-gray-200 rounded"
                            >
                                +
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateBlog;
