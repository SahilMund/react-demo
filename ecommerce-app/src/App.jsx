
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalleryContainer from './components/GalleryContainer';
import PageLayout from './components/PageLayout';
import { reviewLists } from "./data/reviews";
import Review from './components/Review';
import FormHandler from './components/FormHandler';
import Timer from './components/Timer';
import DataFetcher from './components/DataFetcher';

const postInfo = [{
  id: 1,
  title: "shutterstock 1",
  desc: 'lorem ipsum abcde',
  url: ""
},
{
  id: 2,
  title: "shutterstock 2",
  desc: 'lorem ipsum abcde',
  url: "https://imgs.search.brave.com/Ce-oNGlucFUmvnSYAFMnxSuYPf1T6f8HvFQzgvWzOxg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3RvY2twaG90b3Nl/Y3JldHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEx/L2hvdy10by1wdXJj/aGFzZS1zaHV0dGVy/c3RvY2staW1hZ2Vz/LmpwZw"
},
{
  id: 3,
  title: "shutterstock 3",
  desc: 'lorem ipsum abcde',
  url: "https://imgs.search.brave.com/Ce-oNGlucFUmvnSYAFMnxSuYPf1T6f8HvFQzgvWzOxg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3RvY2twaG90b3Nl/Y3JldHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEx/L2hvdy10by1wdXJj/aGFzZS1zaHV0dGVy/c3RvY2staW1hZ2Vz/LmpwZw"
},
{
  id: 4,
  title: "shutterstock 4",
  desc: 'lorem ipsum abcde',
  url: "https://imgs.search.brave.com/Ce-oNGlucFUmvnSYAFMnxSuYPf1T6f8HvFQzgvWzOxg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3RvY2twaG90b3Nl/Y3JldHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEx/L2hvdy10by1wdXJj/aGFzZS1zaHV0dGVy/c3RvY2staW1hZ2Vz/LmpwZw"
}]

function App() {
  const [count, setCount] = useState(2);
  const [width, setWidth] = useState(0);
  const [posts, setPosts] = useState(postInfo);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [user, setUser] = useState({
    name: "John",
    age: 25,


    /// 20 diff fields 
  });


  useEffect(() => {
    document.title = `ecommerce-app (${count})`
  }, [count])

  useEffect(() => {
    const handleResize = () => {
      // console.log(window.innerWidth, window.innerHeight);
      setWidth(window.innerWidth)
    }

    //my app is not supproted for mboile



    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })


  const handleDelete = (postId) => {
    const filteredPosts = postInfo.filter(p => p.id !== postId)
    setPosts(filteredPosts)
  }

  const handleUpdateUser = () => {
    const name = prompt("Enter user name");
    console.log(name);

    if (!name) return;

    // user.name = name;
    // console.log('updated user', user)
    // setUser({
    //   ...user,
    //   name: name,
    // })

    setUser((prev) => {
      return {
        ...prev,
        name
      }
    })

    // 1. it will check for the referetial equality
    // 2. then it will update the state
    // 3. it will re-redner your component
  }

  //flushSync
  const handleCounter = () => {
    // // setCount(count + 1) // 3+1
    // // setCount(count + 1) // 3+1
    // // setCount(count + 1)//3+1

    setCount(prev => prev + 1) // 1
    setUser((prev) => {
      return {
        ...prev,
        name: "ABCDS"
      }
    }) //1
    // setCount(prev => prev + 1)
    // setCount(prev => prev + 1)

  }



  return (
    <>
      <FormHandler />
      {/* {isTimerActive ? <Timer /> : <p>timer is not active</p>
      } */}

      {/* <DataFetcher /> */}
      {/* <button onClick={() => setIsTimerActive((prev) => !prev)}>toggle</button> */}

      {/* <div className="card">
        <button onClick={() => setCount(prev => prev - 1)}
          disabled={count <= 0}
        >
          -
        </button>
        <span className='counter-span'>count is {count}</span>
        <button onClick={() => setCount(prev => prev + 1)}>
          +
        </button>
      </div> */}
      {/* <FormHandler />
      <PageLayout header={"header"} footer="footer">
        <div>
          <button>xab</button>
          <p>CHildren element</p>
        </div>
      </PageLayout>
      <Navbar links={["Home", "Contact Us"]} variant="secondary" />

      <Review reviewLists={reviewLists} />
      <pre>{JSON.stringify(user)}</pre>

      <button onClick={handleUpdateUser}>
        Update User
      </button>

      <br></br>

      {count}
      <br></br>

      <button onClick={handleCounter}>
        Update Count
      </button> */}
      {/* <Hero
        heading="Testimonial Section"
        left={{
          heading: "Left side heading",
          desc: "pp.jsx: JSX attributes must only be assigned a non-empty expression. (33:12)"
        }}
        right={{
          heading: "Right side heading",
          desc: "pp.jsx: JSX attributes must only be assigned a non-empty expression. (33:12)"
        }}
      />
      <GalleryContainer posts={posts} onDelete={handleDelete} /> */}

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleDecrement}
          disabled={count <= 0}
        >
          -
        </button>
        <span className='counter-span'>count is {count}</span>
        <button onClick={handleIncrement}>
          +
        </button>
      </div>

      <div>
        {count > 5 && <p>Count is greater than 5</p>}
        {count > 10 && <p>Count is greater than 10</p>}
      </div> */}


    </>
  )
}

export default App
