import React from 'react'

const Profile = () => {
  return (
    <div className='w-full bg-red-500'>
        <div className='bg-white h-[100px] w-full'></div>
<div className='w-full h-[50vh]'>
    <img className='w-full h-full object-center object-cover' src="https://images.unsplash.com/photo-1726137570707-0c03e2867b16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
 
<div >
<section class="bg-white p-1 xs:p-8 w-full">
  <div class=" max-w-96 sm:max-w-4xl mx-auto border border-[#4D7C0F] rounded-lg p-8">
  <div className='w-full h-[80px]'>
  <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1664304423623-4f9d5ed90b4f?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

  </div>
    <h2 class="sm:text-xl text-[12px] font-bold mb-6">My Profile</h2>
    <form>
      <div class="space-y-6">
        <div>
          <label for="title" class="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Title 
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" color="#9CA3AF" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert inline-block"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg> </label><input type="text" id="title" class="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="title" value=""/>
        </div>
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <label for="category" class="text-xs xs:text-sm font-medium text-gray-700 mb-1">Category</label><select name="category" id="category" class="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"><option value="" selected="">Select</option><option value="HR">HR</option><option value="programming">Programming</option></select>
          </div>
          <div>
            <label for="subcategory" class="text-xs xs:text-sm font-medium text-gray-700 mb-1">Subcategory</label><select name="subcategory" id="subcategory" class="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"><option value="" selected="">Select</option><option value="HR-1">HR-1</option><option value="programming-1">Programming-1</option></select>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <label for="country" class="text-xs xs:text-sm font-medium text-gray-700 mb-1">Country <span class="font-light">(Optional)</span></label><select name="country" id="country" class="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2"><option value="" selected="">Select</option><option value="syria">Syria</option><option value="turkey">Turkey</option></select>
          </div>
          <div><label for="language" class="text-xs xs:text-sm font-medium text-gray-700 mb-1">Language</label>
            <div class="flex flex-wrap items-center border rounded-md xs:p-2 bg-white">
              <span class="bg-[#D9F99D] text-[#4D7C0F] px-1 py-0 xs:px-2 xs:py-1 rounded m-1 text-xs xs:text-sm flex items-center">Arabic<button class="ml-1 text-[#4D7C0F] focus:outline-none" type="button">×</button></span><input type="text" placeholder="Add language" class="flex-grow outline-none py-2 w-2/3 text-sm xs:ml-2" value=""/>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-6 border-t border-gray-200 flex justify-end">
        <button type="submit" class=" sm:w-[86px] w-full h-[50px] text-xs sm:text-base bg-[#4D7C0F] rounded-[5px] p-[13px_25px] gap-[10px] text-white">Next</button>
      </div>
    </form>
  </div>
</section>
</div>
    </div>
  )
}

export default Profile