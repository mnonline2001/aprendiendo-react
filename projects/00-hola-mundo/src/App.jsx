import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard";

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H',
        isFollowing: false
    },
    {
        userName: 'fjmn2001',
        name: 'Francisco Marcano',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user

                    return (
                        <TwitterFollowCard
                        userName={userName}
                        key={userName}
                        initialIsFollowing={isFollowing}
                        name={name}>
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
