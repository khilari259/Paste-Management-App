import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { updatePaste, addToPastes } from '../Slices/PasteSlice';


function View() {

  const { id } = useParams();

  const allPaste = useSelector((state) => state.paste.pastes);

  const paste = allPaste.filter((p) => p._id === id)[0];
  console.log("Final Paste: ", paste)


  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input className='p-2 rounded-2xl mt-2 w-[66% pl-4' type="text" value={paste.title} placeholder='enter title here' onChange={(e) => setTitle(e.target.value)} disabled />

        {/* <button onClick={createPaste} className='p-2 rounded-2xl mt-2'>
          {
            pasteId ? "Update paste" : "Create My Paste"
          }
        </button> */}
      </div>
      <div>
        <textarea className='rounded-2xl mt-4 min-w-[500px] p-4' value={paste.content}
          placeholder='enter Content here'
          onChange={(e) => setValue(e.target.value)}
          rows={20} disabled>

        </textarea>
      </div>
    </div>
  )
}

export default View