import React from 'react';

function BoxButton({ icon: Icon, label }) {
  return (
    <button
      type='button'
      className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    >
      <Icon className='mx-auto h-12 w-12 text-gray-400' />
      <span className='mt-2 block text-sm font-semibold text-gray-900'>
        {label}
      </span>
    </button>
  );
}

export default BoxButton;
