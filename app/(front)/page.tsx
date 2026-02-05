import Image from 'next/image'
import Navbar from '@/components/Navbar'

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

export default async function App() {

  const users = await getUsers()
  console.log(users)

  return (
    <div className="p-8">
      {/* <img src="/mypic.png" width="400" height="400" className="rounded-lg shadow-lg"/> */}
      <Image src="/mypic.png" width={400} height={400} alt="My Picture" style={{ width: "30%", height: "auto" }} />
      <h1 className="text-3xl text-pink-300 font-bold">รายชื่อผู้ใช้งาน</h1>
      <ul className="list-disc pl-5">
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}