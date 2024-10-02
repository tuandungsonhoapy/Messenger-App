import { ModeToggle } from '@/components/toggle-theme'
import { NextPage } from 'next'

const Header: NextPage = () => {
  return (
    <header>
      <div className="px-2 py-2">
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
