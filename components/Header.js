import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly mt-5 max-w-2xl">
                <HeaderIcon title={"Home"} Icon={HomeIcon}/>
                <HeaderIcon title={"Trending"} Icon={LightningBoltIcon}/>
                <HeaderIcon title={"Verified"} Icon={BadgeCheckIcon}/>
                <HeaderIcon title={"Collection"} Icon={CollectionIcon}/>
                <HeaderIcon title={"Search"} Icon={SearchIcon}/>
                <HeaderIcon title={"User"} Icon={UserIcon}/>
            </div>
         <h1 className="font-bold text-4xl sm:text-6xl">Imovies</h1>
        </header>
    )
}

export default Header
