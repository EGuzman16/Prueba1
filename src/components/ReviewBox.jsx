import React, { useState } from 'react';
import { FaRegUserCircle, FaReply, FaEdit, FaTrash } from 'react-icons/fa';

const initialComments = [
  {
    id: 1,
    user: 'John Doe',
    date: '2023-10-01',
    content: 'Este es un comentario de ejemplo.',
    replies: [
      {
        id: 2,
        user: 'Jane Smith',
        date: '2023-10-02',
        content: 'Esta es una respuesta de ejemplo.'
      }
    ]
  }
];

const ReviewBox = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        user: 'Nuevo Usuario',
        date: new Date().toISOString().split('T')[0],
        content: newComment,
        replies: []
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Comentarios</h2>
      {comments.map(comment => (
        <div key={comment.id} className="mb-4">
          <div className="flex items-center mb-2">
            <FaRegUserCircle className="text-3xl mr-2" />
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="font-semibold mr-2">{comment.user}</p>
                <p className="text-sm text-gray-500">{comment.date}</p>
              </div>
            </div>
          </div>
          <p className="mb-2">{comment.content}</p>
          <div className="flex justify-end space-x-2 mb-2">
            <FaReply className="text-[#96C6D9] cursor-pointer" />
            <FaEdit className="text-[#96C6D9] cursor-pointer" />
            <FaTrash className="text-[#96C6D9] cursor-pointer" />
          </div>
          {comment.replies.map(reply => (
            <div key={reply.id} className="ml-6 mb-2">
              <div className="flex items-center mb-2">
                <FaRegUserCircle className="text-2xl mr-2" />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="font-semibold mr-2">{reply.user}</p>
                    <p className="text-sm text-gray-500">{reply.date}</p>
                  </div>
                </div>
              </div>
              <p className="mb-2">{reply.content}</p>
              <div className="flex justify-end space-x-2 mb-2">
                <FaReply className="text-[#96C6D9] cursor-pointer" />
                <FaEdit className="text-[#96C6D9] cursor-pointer" />
                <FaTrash className="text-[#96C6D9] cursor-pointer" />
              </div>
            </div>
          ))}
          <hr className="my-4 border-gray-300" />
        </div>
      ))}
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows="3"
          placeholder="Escribe un comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-[#FF4A5A] text-white px-4 py-2 rounded"
          onClick={handleAddComment}
        >
          Añadir Comentario
        </button>
      </div>
    </div>
  );
};

export default ReviewBox;