import { FC } from 'react'

interface layoutProps {
  
}

const Layout: FC<layoutProps> = ({childern}: any) => {
  return (
    <main>{childern}</main>
  )
}

export default Layout