import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom'

export default function Modal({ref, buttonCaption, children}) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

    return createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/70 p-4 rounded-md shadow-md text-center">
        {children}
        <form method="dialog" className='mt-4 text-center'>
            <button className="px-4 py-1 rounded-md text-stone-200 bg-rose-700 hover:text-stone-50 hover:bg-rose-600">{buttonCaption}</button>
        </form>
    </dialog>, document.getElementById('modal-root'));
}