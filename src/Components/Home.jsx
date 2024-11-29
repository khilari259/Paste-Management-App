import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { updatePaste, addToPastes } from '../Slices/PasteSlice';



function Home() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParamas, setSearchParams] = useSearchParams();
    const pasteId = searchParamas.get("pasteId");
    const dispatch = useDispatch()
    const allPastes = useSelector((state) => state.paste.pastes)

    useEffect(() => {

        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
            setTitle(paste.title)
            setValue(paste.content)
        }
    }, [pasteId])

    const createPaste = () => {
        const paste = {
            title: title,
            content: value,
            _id: pasteId ||
                Date.now().toString(36),
            createAt: new Date().toDateString(),
        }

        if (pasteId) {
            //update
            dispatch(updatePaste(paste))
        } else {
            //create
            dispatch(addToPastes(paste))
        }

        //after creation or updation
        setTitle('');
        setValue('');
        setSearchParams({})
    }
    return (
        <div>
            <div className='flex flex-row gap-7 place-content-between'>
                <input className='p-2 rounded-2xl mt-2 w-[66% pl-4' type="text" value={title} placeholder='enter title here' onChange={(e) => setTitle(e.target.value)} />

                <button onClick={createPaste} className='p-2 rounded-2xl mt-2'>
                    {
                        pasteId ? "Update paste" : "Create My Paste"
                    }
                </button>
            </div>
            <div>
                <textarea className='rounded-2xl mt-4 min-w-[500px] p-4' value={value}
                    placeholder='enter Content here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}>

                </textarea>
            </div>
        </div>
    )
}

export default Home