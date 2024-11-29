import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../Slices/PasteSlice';

function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const fillterData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleDelete = (pasteId) => {
    dispatch(removeFromPaste(pasteId))
  }
  const handleCopy = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => alert("content copied to clipboard!"))
      .catch((err) =>
        console.log("Failed to copy: ", err))
  }
  return (
    <div>
      <input className='p-2 rounded-2xl min-w-[600px] mt-5'
        type="search"
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
      <div className='flex flex-col gap-5 mt-5'>
        {
          fillterData.length > 0 &&
          fillterData.map(
            (paste) => {
              return <div className='border' key={paste._id}>
                <div>
                  {paste.title}
                </div>
                <div>
                  {paste.content}
                </div>
                <div className='flex flex-row gap-4 place-content-evenly'>
                  <button>
                    <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                  </button>
                  <button>
                    <a href={`/pastes/${paste?._id}`}>
                      View
                    </a>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button onClick={() => handleCopy(paste?.content)}>Copy</button>
                  <button>
                    Share
                  </button>
                </div>
                <div>
                  {paste.createAt}
                </div>
              </div>

            }
          )
        }
      </div>
    </div>
  )
}

export default Paste