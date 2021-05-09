import React, { FC } from 'react'

const DefaultLayout: FC = ({ children }) => {
  return (
    <div className={'flex justify-center min-h-screen py-12 bg-gray-50'}>
      <div className="w-full max-w-2xl p-8 m-12 overflow-hidden bg-white rounded-lg shadow">
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout
