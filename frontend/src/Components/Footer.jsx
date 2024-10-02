import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-white  shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800 antialiased">
  <p class="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
      &copy; {new Date().getFullYear()} <a  class="hover:underline" target="_blank">FocusLearn</a>. All rights reserved.
  </p>
</footer>
  )
}

export default Footer