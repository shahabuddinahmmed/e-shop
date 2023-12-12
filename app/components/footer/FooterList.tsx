import React from 'react'
interface FooterlistProps {
    children: React.ReactNode
}
const FooterList: React.FC<FooterlistProps> = ({children}) => {
  return (
    <div className='w-full sm:w/2 md:w/4 lg: w/6 md-6 flex flex-col gap-2'>{children}</div>
  )
}

export default FooterList