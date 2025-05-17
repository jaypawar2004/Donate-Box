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
<Link to={'/'}>
<img className="w-[50px] sm:w-[70px]" src="/images/logo.png" alt="" />
</Link>
<h2>Setup fundraiser</h2>
</nav>
   
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow">
        <h1 className="text-center font-bold text-2xl">Elaborate Cause Details</h1>
      <div className="max-w-2xl mx-auto mt-8 space-y-6">
        {/* Upload Cover Photo */}
        {/* <div className="flex items-center gap-2">
          <label className="cursor-pointer">
            <img
              className="w-[50px] h-[50px] object-center object-cover"
              src="https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"
              alt="Upload Cover Photo"
            />
            <input type="file" hidden />
          </label>
          <h4 className="text-gray-900 text-sm font-medium leading-snug">
            Upload Cover Photo
          </h4>
        </div> */}

        <div className="space-y-6 w-full">
          {/* Document Uploads */}
          <div className="space-y-3 w-full">
            <label className="text-lg text-gray-700 font-bold">Upload Documents</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Supporting Document 1</label>
                <label className="cursor-pointer">
                  <input type="file" accept=".pdf" hidden />
                  <div className="w-full px-4 py-2 border border-red-400 rounded-md hover:bg-red-50 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-sm">Upload PDF</span>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Supporting Document 2</label>
                <label className="cursor-pointer">
                  <input type="file" accept=".pdf" hidden />
                  <div className="w-full px-4 py-2 border border-red-400 rounded-md hover:bg-red-50 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-sm">Upload PDF</span>
                    </div>
                  </div>
                </label>
              </div>
              {/* <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Medical Reports</label>
                <label className="cursor-pointer">
                  <input type="file" accept=".pdf" hidden />
                  <div className="w-full px-4 py-2 border border-red-400 rounded-md hover:bg-red-50 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-sm">Upload PDF</span>
                    </div>
                  </div>
                </label>
              </div> */}
            </div>
          </div>

          {/* Media Uploads */}
          <div className="space-y-3 w-full">
            <label className="font-bold text-lg text-gray-700">Upload Media</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Images</label>
                <label className="cursor-pointer">
                  <input type="file" accept="image/*" multiple hidden />
                  <div className="w-full px-4 py-2 border border-red-400 rounded-md hover:bg-red-50 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Upload Images</span>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Video (Optional)</label>
                <label className="cursor-pointer">
                  <input type="file" accept="video/*" hidden />
                  <div className="w-full px-4 py-2 border border-red-400 rounded-md hover:bg-red-50 transition-colors">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Upload Video</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>



        {/* Name Your Fundraiser */}
        <div className="space-y-2">
          <label className="font-bold text-lg text-gray-700">Campaign Title</label>
          <input
            type="text"
            placeholder="Eg.: Help Hari fight cancer"
            className="w-full px-4 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        </div>
<br />
        <h1 className="font-bold text-xl">Description</h1>
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
