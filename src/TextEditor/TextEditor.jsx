import React, { useRef, useState } from 'react'
import JoditEditor from "jodit-react";

const TextEditor = () => {
    const editor = useRef(null);
      const [content, setContent] = useState("");
     
  return (
    <>
<div className='w-[50vw]'>
<JoditEditor

        ref={editor}
        value={content}
        config={{
          readonly: false,
          placeholder:
            "Write your story. Keep it simple, personal, and about the specific use of funds.\n\nWrite about: Who is this fundraiser for? When do you need funds? How do you plan to use the funds?",
          height: 300,
          margin:0,
        }}
        onBlur={(newContent) => setContent(newContent)}
      />
</div>
    </>
  )
}

export default TextEditor