import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
const ElaborateCauseDetails = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <>
    <div className="w-full h-screen ">
<nav className="bg-white mb-5 flex items-center gap-5 text-xl font-bold px-10 w-full border h-[80px]">
<img className="w-[50px] sm:w-[70px]" src="/images/logo.png" alt="" />
<h2>Setup fundraiser</h2>
</nav>
   
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow">
        <h1 className="text-center font-bold text-2xl">Elaborate Cause Details</h1>
      <div className="max-w-2xl mx-auto mt-8 space-y-6">
        {/* Upload Cover Photo */}
        <div class="grid gap-2">
            <img className="w-[200px] h-[200px] m-auto object-center object-cover" src="https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg" alt="Upload Cover Photo" />
<h4 class="text-center text-gray-900 text-sm font-medium leading-snug">Upload Cover Photo</h4>
<div class="flex items-center justify-center">
<label>
  <input type="file" hidden />
  <div class="flex w-28 h-9 px-2 flex-col bg-[#E7000B] rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">Choose File</div>
</label>
</div>
</div>

        {/* Name Your Fundraiser */}
        <div className="space-y-2">
          <label className="font-medium text-gray-700">Name your fundraiser</label>
          <input
            type="text"
            placeholder="Eg.: Help Hari fight cancer"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        </div>
<br />
      <JoditEditor
        ref={editor}
        value={content}
        config={{
          readonly: false,
          placeholder:
            "Write your story. Keep it simple, personal, and about the specific use of funds.\n\nWrite about: Who is this fundraiser for? When do you need funds? How do you plan to use the funds?",
          height: 300,
        }}
        onBlur={(newContent) => setContent(newContent)}
      />
    <div className="flex justify-end gap-x-5 mt-6">
            <Link onClick={() => navigate(-1)} className="bg-[#E7000B] text-white px-6 py-2 rounded-full hover:bg-red-700">
              Back
            </Link>
            <Link to={'/user-edit-details'} className="bg-[#E7000B] text-white px-6 py-2 rounded-full hover:bg-red-700">
              Continue
            </Link>
          </div>
    </div>
    </div>
    </>
  );
};

export default ElaborateCauseDetails;
