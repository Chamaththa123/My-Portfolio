import React from 'react'

const ContactForm = () => {
  return (
    <div>
      

<form className='m-8'>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Name</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>
  

  <div class="mb-5">
    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Subject</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Message</label>
    <textarea type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>
  
  <div className="flex justify-end">
  <button className="btn mb-10 mt-5 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-[#040426]">
    Send Message
  </button>
</div>



  {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
</form>

    </div>
  )
}

export default ContactForm
